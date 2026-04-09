'use client'

import { Button } from '@/components/ui/button'
import { ProductCard } from './product-card'

const products = [
  {
    id: 'snacks',
    title: 'Cheese & Cracker Snack Pack',
    price: 4.99,
    originalPrice: 6.99,
    image: '/product-snacks.jpg',
    badge: 'Sale',
  },
  {
    id: 'drinks',
    title: 'Premium Cold Brew Coffee',
    price: 5.49,
    image: '/product-coffee.jpg',
  },
  {
    id: 'drinks',
    title: 'Organic Juice Selection',
    price: 3.99,
    originalPrice: 5.49,
    image: '/product-juice.jpg',
    badge: 'New',
  },
  {
    id: 'household',
    title: 'Eco-Friendly Cleaning Supplies',
    price: 7.99,
    image: '/product-cleaning.jpg',
  },
  {
    id: 'snacks',
    title: 'Handcrafted Granola Bars',
    price: 6.49,
    originalPrice: 7.99,
    image: '/product-granola.jpg',
  },
  {
    id: 'organic',
    title: 'Organic Whole Grain Bread',
    price: 5.99,
    image: '/product-bread.jpg',
    badge: 'Organic',
  },

  {
    id: 'snacks',
    title: 'Mixed Nuts & Dried Fruits',
    price: 8.99,
    image: '/product-nuts.jpg',
    badge: 'Popular',
  },
  {
    id: 'vape',
    title: 'Disposable Vape - Cool Mint',
    price: 14.99,
    originalPrice: 17.99,
    image: '/product-vape.png',
    badge: 'Hot',
  },
]

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
          <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white rounded-lg px-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            View All Products
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
                id={product.id}
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
        <Button className="w-full sm:hidden bg-primary hover:bg-primary/90 text-white rounded-lg py-6">
          View All Products
        </Button>
      </div>
    </section>
  )
}
