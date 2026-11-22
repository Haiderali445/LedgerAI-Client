export interface AppEnvConfig {
  dataSource: 'mock' | 'api' | 'supabase';
  fallbackToMock: boolean;
  apiBaseUrl: string;
  signalRHubUrl: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
  enableHttpLogger: boolean;
  defaultTenantId: string;
  appName: string;
  isDev: boolean;
}

export const env: AppEnvConfig = {
  dataSource: (import.meta.env.VITE_DATA_SOURCE as 'mock' | 'api' | 'supabase') || 'mock',
  fallbackToMock: import.meta.env.VITE_FALLBACK_TO_MOCK !== 'false',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
  signalRHubUrl: import.meta.env.VITE_SIGNALR_HUB_URL || 'http://localhost:5000/hubs/ledger',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'anon-key-placeholder',
  enableHttpLogger:
    import.meta.env.DEV &&
    (import.meta.env.VITE_ENABLE_HTTP_LOGGER === 'true' || import.meta.env.VITE_ENABLE_HTTP_LOGGER === undefined),
  defaultTenantId: import.meta.env.VITE_DEFAULT_TENANT_ID || 'tenant-pk-wholesale-001',
  appName: import.meta.env.VITE_APP_NAME || 'LedgerAI Enterprise ERP',
  isDev: import.meta.env.DEV,
};
