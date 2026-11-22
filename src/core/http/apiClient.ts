import axios, { type InternalAxiosRequestConfig, type AxiosResponse, type AxiosError } from 'axios';
import { env } from '../config/env';
import { logger } from '../telemetry/logger';

// Augmented internal Axios request config to store performance metrics
interface TimedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _requestStartTime?: number;
}

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request Interceptor: Attach Auth, Tenant, and Dev Timers
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const timedConfig = config as TimedAxiosRequestConfig;
    timedConfig._requestStartTime = performance.now();

    // Attach Token if stored
    const token = typeof window !== 'undefined' ? localStorage.getItem('ledgerai_token') : null;
    if (token) {
      timedConfig.headers.Authorization = `Bearer ${token}`;
    }

    // Attach Active Tenant ID
    const tenantId =
      (typeof window !== 'undefined' ? localStorage.getItem('ledgerai_tenant_id') : null) || env.defaultTenantId;
    if (tenantId) {
      timedConfig.headers['X-Tenant-Id'] = tenantId;
    }

    // Dev-only request logging
    if (import.meta.env.DEV && env.enableHttpLogger) {
      logger.logHttpRequest(timedConfig.method || 'GET', timedConfig.url || '', timedConfig.data || timedConfig.params);
    }

    return timedConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Calculate Duration and Log in Dev Mode
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const config = response.config as TimedAxiosRequestConfig;
    const startTime = config._requestStartTime || performance.now();
    const durationMs = performance.now() - startTime;

    if (import.meta.env.DEV && env.enableHttpLogger) {
      logger.logHttpResponse({
        method: config.method || 'GET',
        url: config.url || '',
        status: response.status,
        durationMs,
      });
    }

    return response;
  },
  (error: AxiosError) => {
    const config = (error.config || {}) as TimedAxiosRequestConfig;
    const startTime = config._requestStartTime || performance.now();
    const durationMs = performance.now() - startTime;

    if (import.meta.env.DEV && env.enableHttpLogger) {
      logger.logHttpError({
        method: config.method || 'UNKNOWN',
        url: config.url || '',
        status: error.response?.status || 500,
        durationMs,
        error: error.response?.data || error.message,
      });
    }

    return Promise.reject(error);
  }
);
