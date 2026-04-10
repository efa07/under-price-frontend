'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from './product-card'
import { products } from '@/lib/products'

export function FeaturedProductsSection() {
  return (
    <section id="shop" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-8 animate-fade-in-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
              Weekly Specials & Fresh Finds
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl font-medium">
              Stock up on pantry staples, fresh fruits, and exclusive local grocery deals available this week.
            </p>
          </div>
          <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-11">
            <Link href="/products">Shop All Specials</Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {products.slice(0, 8).map((product, index) => (
            <div
              key={index}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 0.05}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <ProductCard
                id={product.category}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                badge={product.badge}
              />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <Button asChild className="w-full sm:hidden bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl h-12 shadow-sm">
          <Link href="/products">Shop All Specials</Link>
        </Button>
      </div>
    </section>
  )
}
