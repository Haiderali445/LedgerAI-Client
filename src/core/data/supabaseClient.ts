import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { env } from '../config/env';

let clientInstance: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (clientInstance) return clientInstance;

  if (!env.supabaseUrl || env.supabaseUrl.includes('placeholder')) {
    return null;
  }

  try {
    clientInstance = createClient(env.supabaseUrl, env.supabaseAnonKey);
    return clientInstance;
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn('[SupabaseClient] Initialization failed, falling back to mock data source', err);
    }
    return null;
  }
}
