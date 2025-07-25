export interface Product {
  id: string
  name: string
  slug: string
  description?: string
  short_description?: string
  price: number
  compare_price?: number
  sku?: string
  stock_quantity: number
  category_id?: string
  images: ProductImage[]
  variants: ProductVariant[]
  is_active: boolean
  featured: boolean
  created_at: string
  updated_at: string
  // Relations
  category?: Category
  reviews?: Review[]
  average_rating?: number
  review_count?: number
}

export interface ProductImage {
  id: string
  url: string
  alt?: string
  order: number
}

export interface ProductVariant {
  id: string
  name: string
  value: string
  price_modifier?: number
  stock_quantity?: number
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image_url?: string
  created_at: string
  updated_at: string
  // Relations
  products?: Product[]
  product_count?: number
}

export interface Review {
  id: string
  product_id: string
  user_id: string
  rating: number
  title?: string
  comment?: string
  verified_purchase: boolean
  created_at: string
  // Relations
  user?: {
    id: string
    email: string
    full_name?: string
  }
  product?: Product
}

export interface Address {
  id?: string
  type: 'shipping' | 'billing'
  first_name: string
  last_name: string
  company?: string
  address_line_1: string
  address_line_2?: string
  city: string
  state: string
  postal_code: string
  country: string
  phone?: string
}
