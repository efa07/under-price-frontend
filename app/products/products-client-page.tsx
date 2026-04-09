'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, ShoppingBag, ShoppingCart } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { categories, products } from '@/lib/products'

export function ProductsClientPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') ?? 'all'
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState<Record<string, number>>({})

  const normalizedSearch = search.trim().toLowerCase()

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatches = activeCategory === 'all' || product.category === activeCategory
      const textMatches =
        normalizedSearch.length === 0 ||
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch)

      return categoryMatches && textMatches
    })
  }, [activeCategory, normalizedSearch])

  const categoryNames = useMemo(
    () =>
      categories.reduce<Record<string, string>>((acc, category) => {
        acc[category.slug] = category.name
        return acc
      }, {}),
    []
  )

  const cartSummary = useMemo(() => {
    const entries = Object.entries(cart)
    const totalItems = entries.reduce((sum, [, qty]) => sum + qty, 0)
    const subtotal = entries.reduce((sum, [id, qty]) => {
      const product = products.find((item) => item.id === id)
      return sum + (product ? product.price * qty : 0)
    }, 0)

    return { totalItems, subtotal }
  }, [cart])

  useEffect(() => {
    setActiveCategory(initialCategory)
  }, [initialCategory])

  const onCategoryChange = (category: string) => {
    setActiveCategory(category)
    const params = new URLSearchParams(searchParams.toString())

    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category)
    }

    router.replace(params.toString() ? `/products?${params.toString()}` : '/products')
  }

  const addToCart = (productId: string) => {
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1,
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/8 via-background to-secondary/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Badge className="mb-4 rounded-full border-none bg-primary/15 px-3 py-1 text-primary">
            Curated daily essentials
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Shop Products
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Browse premium picks, filter by category, and quickly add everything you need to your cart.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-full px-6">
              <Link href="/#categories">Back to Categories</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div>
          <Card className="mb-8 rounded-2xl border-border/70 bg-card/75 p-5 shadow-sm backdrop-blur">
            <div className="mb-5 flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm font-semibold text-foreground">Search & Filter</p>
            </div>

            <div className="mb-5">
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products..."
                className="h-11 rounded-xl border-border/70 bg-background"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={activeCategory === 'all' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => onCategoryChange('all')}
              >
                All Products
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  size="sm"
                  variant={activeCategory === category.slug ? 'default' : 'outline'}
                  className="rounded-full"
                  onClick={() => onCategoryChange(category.slug)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </Card>

          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
            </p>
            <Badge variant="outline" className="rounded-full">
              {activeCategory === 'all' ? 'All categories' : categoryNames[activeCategory]}
            </Badge>
          </div>

          {filteredProducts.length === 0 ? (
            <Card className="rounded-2xl border-dashed p-10 text-center">
              <p className="text-lg font-semibold text-foreground">No products found</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try another search term or pick a different category.
              </p>
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.07}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <ProductCard
                    id={product.id}
                    category={categoryNames[product.category] ?? product.category}
                    title={product.title}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    badge={product.badge}
                    onAddToCart={() => addToCart(product.id)}
                    addButtonLabel="Add to cart"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Card className="rounded-2xl border-border/70 bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-lg font-semibold text-foreground">Cart</p>
              <ShoppingCart className="h-5 w-5 text-primary" />
            </div>

            <div className="mb-5 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Items</span>
                <span className="font-semibold text-foreground">{cartSummary.totalItems}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-foreground">${cartSummary.subtotal.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full gap-2 rounded-xl">
              <ShoppingBag className="h-4 w-4" />
              Checkout
            </Button>

            <p className="mt-4 text-xs text-muted-foreground">
              Demo cart: refresh clears the cart state.
            </p>
          </Card>
        </aside>
      </section>

      <Footer />
    </main>
  )
}
