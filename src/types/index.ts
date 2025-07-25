// Re-export all types from their respective files
export * from './product'
export * from './cart'
export * from './order'
export * from './user'

// Common utility types
export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
  success: boolean
}

export interface PaginationParams {
  page: number
  limit: number
  offset?: number
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    total_pages: number
    has_next: boolean
    has_prev: boolean
  }
}

export interface SearchParams {
  query?: string
  category?: string
  min_price?: number
  max_price?: number
  sort_by?: 'name' | 'price' | 'created_at' | 'popularity'
  sort_order?: 'asc' | 'desc'
  page?: number
  limit?: number
}

export interface FilterOption {
  id: string
  label: string
  value: string
  count?: number
}

export interface SortOption {
  id: string
  label: string
  value: string
}
