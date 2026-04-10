'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export function PromotionalBanner() {
  return (
    <section className="py-16 md:py-24 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-green-700 to-green-600 animate-scale-in shadow-xl">
          {/* Background Image / Decoration */}
          <div className="absolute inset-0 bg-[url('/store-image.jpeg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          
          {/* Content */}
          <div className="relative p-10 md:p-16 flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-sm font-bold text-white shadow-sm mb-6 animate-fade-in-up">
              <Mail className="h-4 w-4" />
              <span>Newsletter Exclusive</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 max-w-2xl animate-fade-in-up animation-delay-100">
              Get $15 Off Your First Online Grocery Order
            </h2>
            <p className="text-lg md:text-xl text-green-50 mb-10 max-w-xl animate-fade-in-up animation-delay-200 font-medium">
              Sign up for our weekly flyer to receive exclusive fresh produce discounts, digital coupons, and new arrival alerts.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full max-w-md gap-3 animate-fade-in-up animation-delay-300">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 w-full rounded-full px-6 py-4 text-base bg-white text-foreground shadow-inner focus:outline-none focus:ring-4 focus:ring-primary/40 transition-shadow"
              />
              <Button className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-full px-8 py-6 sm:h-auto shadow-lg hover:-translate-y-1 transition-transform w-full sm:w-auto">
                Sign Up
              </Button>
            </div>
            <p className="text-green-200/80 text-xs mt-4 animate-fade-in-up animation-delay-300">By signing up, you agree to our terms and conditions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
