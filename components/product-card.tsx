'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Eye } from 'lucide-react'

export interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  category?: string
  badge?: string
  onAddToCart?: () => void
  addButtonLabel?: string
}

export function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  category,
  badge,
  onAddToCart,
  addButtonLabel = 'Add',
}: ProductCardProps) {
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <Card className="group relative bg-card border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Badge */}
        {badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-foreground border-none">
            {badge}
          </Badge>
        )}

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <Badge className="absolute top-3 right-3 bg-primary text-white border-none font-bold">
            -{discountPercent}%
          </Badge>
        )}

        {/* Quick View Overlay (desktop only) */}
        <div className="absolute inset-0 hidden bg-black/40 opacity-0 transition-opacity duration-300 md:flex items-center justify-center gap-4 group-hover:opacity-100">
          <Button
            size="sm"
            className="bg-white hover:bg-white/90 text-foreground gap-2"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Quick View</span>
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white gap-2"
            onClick={onAddToCart}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">{addButtonLabel}</span>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-2 capitalize">{category ?? id}</p>
        <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-primary">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Mobile Add to Cart */}
        <Button
          size="sm"
          className="mt-4 w-full bg-primary hover:bg-primary/90 text-white gap-2 md:hidden"
          onClick={onAddToCart}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{addButtonLabel}</span>
        </Button>
      </div>
    </Card>
  )
}
