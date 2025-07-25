'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { ShoppingBag, Star, Truck, Shield, CreditCard, Users, Menu, X } from 'lucide-react'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-slate-900">ModernStore</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium">Home</a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium">Products</a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium">Categories</a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium">About</a>
              <Button variant="outline" size="sm" className="px-3 sm:px-4">Sign In</Button>
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 px-3 sm:px-4">Sign Up</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-700 hover:text-indigo-600 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium px-4 py-2">Home</a>
                <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium px-4 py-2">Products</a>
                <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium px-4 py-2">Categories</a>
                <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium px-4 py-2">About</a>
                <div className="px-4 pt-2 space-y-2">
                  <Button variant="outline" size="sm" className="w-full">Sign In</Button>
                  <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">Sign Up</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-800">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Discover Amazing Products
              </h1>
              <p className="mt-6 text-xl text-indigo-100">
                Shop the latest trends with unbeatable prices and fast shipping. Your perfect shopping experience starts here.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
                  Shop Now
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-900">
                  View Collections
                </Button>
              </div>
              <div className="mt-10 flex items-center space-x-8 text-indigo-100">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>50K+ Customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Flash Sale!</h3>
                <p className="text-indigo-100 mb-6">Up to 70% off on selected items. Limited time offer!</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">24</div>
                    <div className="text-indigo-100 text-sm">Hours</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white">15</div>
                    <div className="text-indigo-100 text-sm">Minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Shop by Category</h2>
            <p className="mt-4 text-lg text-slate-600">Find exactly what you&apos;re looking for</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Electronics', icon: '📱', color: 'bg-blue-500' },
              { name: 'Fashion', icon: '👕', color: 'bg-pink-500' },
              { name: 'Home & Garden', icon: '🏠', color: 'bg-green-500' },
              { name: 'Sports', icon: '⚽', color: 'bg-orange-500' },
              { name: 'Books', icon: '📚', color: 'bg-purple-500' },
              { name: 'Beauty', icon: '💄', color: 'bg-rose-500' },
            ].map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
            <p className="mt-4 text-lg text-slate-600">Handpicked items just for you</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Wireless Headphones', price: 24999, originalPrice: 32999, image: '🎧' },
              { name: 'Smart Watch', price: 15999, originalPrice: 19999, image: '⌚' },
              { name: 'Premium Backpack', price: 7199, originalPrice: 10299, image: '🎒' },
              { name: 'Coffee Machine', price: 11999, originalPrice: 15999, image: '☕' },
            ].map((product) => (
              <Card key={product.name} className="hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-48 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {product.image}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl font-bold text-indigo-600">₹{product.price.toLocaleString()}</span>
                      <span className="text-slate-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-slate-500 ml-2">(124)</span>
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Truck className="h-12 w-12 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900">Free Shipping</h3>
                <p className="text-slate-600">On orders over ₹2,000</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="h-12 w-12 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900">Secure Payment</h3>
                <p className="text-slate-600">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CreditCard className="h-12 w-12 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900">Easy Returns</h3>
                <p className="text-slate-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
            <p className="mt-4 text-xl text-indigo-100">
              Get the latest deals and exclusive offers delivered to your inbox
            </p>
            <div className="mt-8 flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              />
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 sm:px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <ShoppingBag className="h-8 w-8 text-indigo-400" />
                <h3 className="text-xl font-bold">ModernStore</h3>
              </div>
              <p className="text-slate-400">
                Your trusted online shopping destination for quality products at unbeatable prices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">All Products</a></li>
                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white">Sale Items</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2025 ModernStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
