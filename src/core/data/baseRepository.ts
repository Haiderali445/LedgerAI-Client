import { apiClient } from '../http/apiClient';
import { getSupabaseClient } from './supabaseClient';
import { env } from '../config/env';
import { logger } from '../telemetry/logger';

export interface RepositoryConfig<T> {
  endpoint: string; // e.g., '/orders'
  tableName: string; // Supabase table name e.g., 'orders'
  mockData: T[];
  readSource?: 'mock' | 'api' | 'supabase';
  fallbackToMock?: boolean;
}

export class BaseRepository<T extends { id: string }> {
  protected endpoint: string;
  protected tableName: string;
  protected mockStore: T[];
  protected readSource: 'mock' | 'api' | 'supabase';
  protected fallbackToMock: boolean;

  constructor(config: RepositoryConfig<T>) {
    this.endpoint = config.endpoint;
    this.tableName = config.tableName;
    this.mockStore = [...config.mockData];
    this.readSource = config.readSource ?? env.dataSource;
    this.fallbackToMock = config.fallbackToMock ?? env.fallbackToMock;
  }

  /**
   * Fetch all records according to active readSource
   */
  async getAll(): Promise<T[]> {
    logger.info('BaseRepository', `getAll() called on [${this.tableName}] via [${this.readSource}]`);

    if (this.readSource === 'mock') {
      return [...this.mockStore];
    }

    if (this.readSource === 'supabase') {
      try {
        const supabase = getSupabaseClient();
        if (!supabase) {
          throw new Error('Supabase client is not configured');
        }

        const { data, error } = await supabase.from(this.tableName).select('*');
        if (error) throw error;
        if (data && data.length > 0) return data as T[];

        if (this.fallbackToMock) {
          logger.warn('BaseRepository', `Supabase returned 0 rows for [${this.tableName}]. Falling back to mock.`);
          return [...this.mockStore];
        }
        return [];
      } catch (err) {
        if (this.fallbackToMock) {
          logger.warn('BaseRepository', `Supabase query failed on [${this.tableName}]. Falling back to mock.`, err);
          return [...this.mockStore];
        }
        throw err;
      }
    }

    if (this.readSource === 'api') {
      try {
        const response = await apiClient.get<T[] | { data: T[] }>(this.endpoint);
        const result = Array.isArray(response.data) ? response.data : response.data.data;
        if (result && result.length > 0) return result;

        if (this.fallbackToMock) {
          logger.warn('BaseRepository', `API returned 0 items for [${this.endpoint}]. Falling back to mock.`);
          return [...this.mockStore];
        }
        return [];
      } catch (err) {
        if (this.fallbackToMock) {
          logger.warn('BaseRepository', `API request failed on [${this.endpoint}]. Falling back to mock.`, err);
          return [...this.mockStore];
        }
        throw err;
      }
    }

    return [...this.mockStore];
  }

  /**
   * Fetch a single record by ID
   */
  async getById(id: string): Promise<T | null> {
    if (this.readSource === 'mock') {
      const found = this.mockStore.find((item) => item.id === id);
      return found ? { ...found } : null;
    }

    if (this.readSource === 'supabase') {
      try {
        const supabase = getSupabaseClient();
        if (!supabase) throw new Error('Supabase client unavailable');
        const { data, error } = await supabase.from(this.tableName).select('*').eq('id', id).single();
        if (error) throw error;
        return data as T;
      } catch (err) {
        if (this.fallbackToMock) {
          const found = this.mockStore.find((item) => item.id === id);
          return found ? { ...found } : null;
        }
        throw err;
      }
    }

    if (this.readSource === 'api') {
      try {
        const response = await apiClient.get<T | { data: T }>(`${this.endpoint}/${id}`);
        const result = (response.data as { data?: T }).data ?? (response.data as T);
        return result;
      } catch (err) {
        if (this.fallbackToMock) {
          const found = this.mockStore.find((item) => item.id === id);
          return found ? { ...found } : null;
        }
        throw err;
      }
    }

    return null;
  }

  /**
   * Create a new entity with simulation support for mock mode
   */
  async create(payload: Partial<T>): Promise<T> {
    logger.info('BaseRepository', `create() on [${this.tableName}]`, payload);

    if (this.readSource === 'mock') {
      const newEntity = {
        ...payload,
        id: payload.id || `mock-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        createdAt: (payload as { createdAt?: string }).createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as unknown as T;
      this.mockStore.unshift(newEntity);
      return newEntity;
    }

    // Direct write to API or Supabase
    try {
      const response = await apiClient.post<T | { data: T }>(this.endpoint, payload);
      const created = (response.data as { data?: T }).data ?? (response.data as T);
      return created;
    } catch (err) {
      if (this.fallbackToMock) {
        logger.warn('BaseRepository', `API write failed on [${this.endpoint}]. Mutating local mock state.`, err);
        const newEntity = {
          ...payload,
          id: payload.id || `sim-${Date.now()}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        } as unknown as T;
        this.mockStore.unshift(newEntity);
        return newEntity;
      }
      throw err;
    }
  }

  /**
   * Update an entity
   */
  async update(id: string, payload: Partial<T>): Promise<T> {
    if (this.readSource === 'mock') {
      const index = this.mockStore.findIndex((item) => item.id === id);
      if (index === -1) throw new Error(`Entity with ID ${id} not found in mock store`);
      const updated = {
        ...this.mockStore[index],
        ...payload,
        updatedAt: new Date().toISOString(),
      };
      this.mockStore[index] = updated;
      return updated;
    }

    try {
      const response = await apiClient.put<T | { data: T }>(`${this.endpoint}/${id}`, payload);
      return (response.data as { data?: T }).data ?? (response.data as T);
    } catch (err) {
      if (this.fallbackToMock) {
        const index = this.mockStore.findIndex((item) => item.id === id);
        if (index !== -1) {
          const updated = { ...this.mockStore[index], ...payload, updatedAt: new Date().toISOString() };
          this.mockStore[index] = updated;
          return updated;
        }
      }
      throw err;
    }
  }

  /**
   * Delete / archive an entity
   */
  async remove(id: string): Promise<boolean> {
    logger.info('BaseRepository', `remove() on [${this.tableName}] for ID: ${id}`);

    if (this.readSource === 'mock') {
      const index = this.mockStore.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.mockStore.splice(index, 1);
        return true;
      }
      return false;
    }

    if (this.readSource === 'supabase') {
      try {
        const supabase = getSupabaseClient();
        if (!supabase) throw new Error('Supabase client unavailable');
        const { error } = await supabase.from(this.tableName).delete().eq('id', id);
        if (error) throw error;
        return true;
      } catch (err) {
        if (this.fallbackToMock) {
          const index = this.mockStore.findIndex((item) => item.id === id);
          if (index !== -1) {
            this.mockStore.splice(index, 1);
            return true;
          }
        }
        throw err;
      }
    }

    try {
      await apiClient.delete(`${this.endpoint}/${id}`);
      return true;
    } catch (err) {
      if (this.fallbackToMock) {
        const index = this.mockStore.findIndex((item) => item.id === id);
        if (index !== -1) {
          this.mockStore.splice(index, 1);
          return true;
        }
      }
      throw err;
    }
  }
}
