'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { categories } from '@/lib/products'

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="py-20 border-b border-border/30 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">
              Browse Collections
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              What we have in Store
            </h2>
          </div>

          <Link
            href="/categories"
            className="text-primary font-semibold hover:text-primary/80 flex items-center gap-1 transition-all group"
          >
            View All
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {categories.slice(0, 6).map((category, index) => {
            // Alternate between Red and Orange like the reference image
            const bgColor = index % 2 === 0 ? 'bg-red-600' : 'bg-orange-500'
            const hoverTextColor = index % 2 === 0 ? 'group-hover:text-red-600' : 'group-hover:text-orange-500'
            
            return (
              <Link key={category.slug} href={`/products?category=${category.slug}`}>
                <Card
                  className={`group relative overflow-hidden rounded-3xl border-0 shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer aspect-square sm:aspect-[4/5] animate-scale-in ${bgColor}`}
                  style={{
                    animationDelay: `${index * 0.08}s`,
                    opacity: 0,
                    animationFillMode: 'forwards',
                  }}
                >
                  {/* Content Header (Top Left) */}
                  <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 sm:right-8 z-20">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
                      {category.name}
                    </h3>
                    <div className="w-10 h-1.5 bg-white drop-shadow-md" />
                  </div>

                  {/* Background Image filling the card */}
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient to ensure the top-left text is perfectly readable */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/20" />
                  </div>

                  {/* Hover Action Button (Bottom Right) */}
                  <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 w-14 h-14 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white border text-transparent border-white/20 shadow-lg overflow-hidden group-hover:scale-205">
                    {/* Default Icon */}
                    <ArrowRight className="w-6 h-6 absolute transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-50 group-hover:-translate-y-4 text-white" />
                    
                    {/* 'More' Link Text (Revealed on Hover) */}
                    <span className={`text-sm font-extrabold uppercase tracking-widest absolute transition-all duration-500 opacity-0 scale-50 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 text-black`}>
                      Shop
                    </span>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}