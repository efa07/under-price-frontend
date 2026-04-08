'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function PromotionalBanner() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 border border-border animate-scale-in hover:shadow-2xl transition-shadow duration-500">
          {/* Background Image */}
          <Image
            src="/placeholder.jpg"
            alt="Weekly deals"
            fill
            className="object-cover opacity-30"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />

          {/* Content */}
          <div className="relative p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-lg animate-fade-in-left">
              Weekly Deals & Fresh Arrivals
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md animate-fade-in-left animation-delay-100">
              Discover new products arriving every week with special promotional pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-left animation-delay-200">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-6 text-base font-semibold w-fit hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                View All Deals
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 rounded-lg px-8 py-6 text-base font-semibold w-fit hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
