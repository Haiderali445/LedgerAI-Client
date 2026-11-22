import { env } from '../config/env';

export interface HttpLogPayload {
  method: string;
  url: string;
  status?: number;
  durationMs?: number;
  params?: unknown;
  error?: unknown;
}

class TelemetryLogger {
  private isEnabled(): boolean {
    return import.meta.env.DEV && env.enableHttpLogger;
  }

  logHttpRequest(method: string, url: string, params?: unknown): void {
    if (!this.isEnabled()) return;
    console.groupCollapsed(
      `%c[HTTP Req]%c ${method.toUpperCase()} %c${url}`,
      'color: #38bdf8; font-weight: bold;',
      'color: #f59e0b; font-weight: bold;',
      'color: #94a3b8;'
    );
    if (params) console.log('Params / Body:', params);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.groupEnd();
  }

  logHttpResponse(payload: HttpLogPayload): void {
    if (!this.isEnabled()) return;
    const { method, url, status = 200, durationMs = 0 } = payload;
    const statusColor = status >= 200 && status < 300 ? '#22c55e' : '#ef4444';

    console.groupCollapsed(
      `%c[HTTP Res %c${status}%c]%c ${method.toUpperCase()} %c${url} %c(${durationMs.toFixed(1)}ms)`,
      'color: #38bdf8; font-weight: bold;',
      `color: ${statusColor}; font-weight: bold;`,
      'color: #38bdf8; font-weight: bold;',
      'color: #f59e0b; font-weight: bold;',
      'color: #94a3b8;',
      'color: #a855f7; font-weight: bold;'
    );
    console.log(`Duration: ${durationMs.toFixed(2)} ms`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.groupEnd();
  }

  logHttpError(payload: HttpLogPayload): void {
    if (!this.isEnabled()) return;
    const { method, url, status = 500, durationMs = 0, error } = payload;

    console.groupCollapsed(
      `%c[HTTP Err %c${status}%c]%c ${method.toUpperCase()} %c${url} %c(${durationMs.toFixed(1)}ms)`,
      'color: #ef4444; font-weight: bold;',
      'color: #ef4444; font-weight: bold;',
      'color: #ef4444; font-weight: bold;',
      'color: #f59e0b; font-weight: bold;',
      'color: #f87171;',
      'color: #fb923c; font-weight: bold;'
    );
    if (error) console.error('Error Details:', error);
    console.groupEnd();
  }

  info(tag: string, message: string, data?: unknown): void {
    if (!this.isEnabled()) return;
    console.log(`%c[${tag}]%c ${message}`, 'color: #10b981; font-weight: bold;', 'color: inherit;', data ?? '');
  }

  warn(tag: string, message: string, data?: unknown): void {
    if (!this.isEnabled()) return;
    console.warn(`%c[${tag}]%c ${message}`, 'color: #f59e0b; font-weight: bold;', 'color: inherit;', data ?? '');
  }
}

export const logger = new TelemetryLogger();
