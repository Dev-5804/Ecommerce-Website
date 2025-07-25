export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  phone?: string
  created_at: string
  updated_at: string
}

export interface AuthUser extends User {
  email_confirmed_at?: string
  last_sign_in_at?: string
}

export interface UserProfile extends User {
  first_name?: string
  last_name?: string
  date_of_birth?: string
  gender?: 'male' | 'female' | 'other'
  newsletter_subscribed: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  full_name: string
  confirm_password: string
}

export interface AuthError {
  message: string
  status?: number
}

export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}
