export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuditableEntity extends BaseEntity {
  tenantId: string;
  createdBy?: string;
  updatedBy?: string;
  isDeleted?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
  meta?: {
    page?: number;
    pageSize?: number;
    totalCount?: number;
    dataSource: 'mock' | 'api' | 'supabase';
    durationMs?: number;
  };
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface KeyValuePair<K = string, V = unknown> {
  key: K;
  value: V;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface FilterParams {
  search?: string;
  status?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}
