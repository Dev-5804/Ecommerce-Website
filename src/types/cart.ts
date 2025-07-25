import { Product, ProductVariant, Address } from './product'

export interface CartItem {
  id: string
  user_id?: string
  session_id?: string
  product_id: string
  quantity: number
  variant?: ProductVariant
  created_at: string
  updated_at: string
  // Relations
  product?: Product
}

export interface Cart {
  items: CartItem[]
  total_items: number
  subtotal: number
  tax: number
  shipping: number
  total: number
}

export interface CartAction {
  type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_QUANTITY' | 'CLEAR_CART' | 'LOAD_CART'
  payload?: {
    product?: Product
    variant?: ProductVariant
    quantity?: number
    productId?: string
    items?: CartItem[]
  }
}

export interface ShippingOption {
  id: string
  name: string
  description: string
  price: number
  estimated_days: number
}

export interface CheckoutData {
  email: string
  shipping_address: Address
  billing_address: Address
  same_as_shipping: boolean
  shipping_option: ShippingOption
  payment_method: 'card' | 'paypal'
}
