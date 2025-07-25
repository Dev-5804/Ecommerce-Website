import { Product, ProductVariant, Address } from './product'

export interface Order {
  id: string
  user_id?: string
  email: string
  status: OrderStatus
  total_amount: number
  shipping_address: Address
  billing_address: Address
  payment_status: PaymentStatus
  payment_method?: string
  stripe_payment_intent_id?: string
  created_at: string
  updated_at: string
  // Relations
  items?: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id?: string
  quantity: number
  price: number
  variant?: ProductVariant
  created_at: string
  // Relations
  product?: Product
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export type PaymentStatus = 
  | 'pending'
  | 'processing'
  | 'succeeded'
  | 'failed'
  | 'cancelled'
  | 'refunded'

export interface OrderSummary {
  subtotal: number
  tax: number
  shipping: number
  discount: number
  total: number
}
