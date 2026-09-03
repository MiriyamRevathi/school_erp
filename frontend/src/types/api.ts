export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  statusCode?: number;
  success?: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
