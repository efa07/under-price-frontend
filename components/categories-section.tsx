'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Snacks', image: '/category-snacks.jpg', color: 'from-orange-500' },
  { name: 'Drinks', image: '/category-drinks.jpg', color: 'from-blue-500' },
  { name: 'Household Essentials', image: '/category-household.jpg', color: 'from-green-500' },
  { name: 'Beer & Wine', image: '/category-beer-wine.jpg', color: 'from-purple-500' },
  { name: 'Organic Goods', image: '/category-organic.jpg', color: 'from-emerald-500' },
  { name: 'Coffee / Breakfast', image: '/category-coffee.jpg', color: 'from-amber-500' },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our wide range of products carefully curated for your daily needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative h-48 overflow-hidden bg-card border-border rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover opacity-100 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Content */}
              <div className="absolute inset-0 flex items-end justify-between p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="transform transition-transform duration-300 group-hover:translate-x-[-10px]">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                </div>
                
                {/* Animated View More Button */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  {/* Arrow - visible by default, fades out on hover */}
                  <ArrowRight className="absolute w-5 h-5 text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-0" />
                  
                  {/* Circular Button - appears on hover */}
                  <div className="absolute w-0 h-0 bg-white rounded-full opacity-0 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center overflow-hidden">
                    <span className="text-foreground font-semibold text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      View More
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
