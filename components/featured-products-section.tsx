'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from './product-card'
import { products } from '@/lib/products'

export function FeaturedProductsSection() {
  return (
    <section id="shop" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-8 animate-fade-in-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover our best-selling items and exclusive deals available this week.
            </p>
          </div>
          <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white rounded-lg px-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
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
        <Button asChild className="w-full sm:hidden bg-primary hover:bg-primary/90 text-white rounded-lg py-6">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </section>
  )
}
