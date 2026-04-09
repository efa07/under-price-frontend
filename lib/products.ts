export type Category = {
  slug: string
  name: string
  image: string
  color: string
}

export type Product = {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  category: string
  badge?: string
}

export const categories: Category[] = [
  { slug: 'snacks', name: 'Snacks', image: '/category-snacks.jpg', color: 'from-orange-500' },
  { slug: 'drinks', name: 'Drinks', image: '/category-drinks.jpg', color: 'from-blue-500' },
  { slug: 'household', name: 'Household Essentials', image: '/category-household.jpg', color: 'from-green-500' },
  { slug: 'beer-wine', name: 'Beer & Wine', image: '/category-beer-wine.jpg', color: 'from-purple-500' },
  { slug: 'organic', name: 'Organic Goods', image: '/category-organic.jpg', color: 'from-emerald-500' },
  { slug: 'coffee-breakfast', name: 'Coffee / Breakfast', image: '/category-coffee.jpg', color: 'from-amber-500' },
  { slug: 'vape', name: 'Vape', image: '/product-vape.png', color: 'from-cyan-500' },
]

export const products: Product[] = [
  {
    id: 'snacks-1',
    category: 'snacks',
    title: 'Cheese & Cracker Snack Pack',
    price: 4.99,
    originalPrice: 6.99,
    image: '/product-snacks.jpg',
    badge: 'Sale',
  },
  {
    id: 'drinks-1',
    category: 'drinks',
    title: 'Premium Cold Brew Coffee',
    price: 5.49,
    image: '/product-coffee.jpg',
  },
  {
    id: 'drinks-2',
    category: 'drinks',
    title: 'Organic Juice Selection',
    price: 3.99,
    originalPrice: 5.49,
    image: '/product-juice.jpg',
    badge: 'New',
  },
  {
    id: 'household-1',
    category: 'household',
    title: 'Eco-Friendly Cleaning Supplies',
    price: 7.99,
    image: '/product-cleaning.jpg',
  },
  {
    id: 'snacks-2',
    category: 'snacks',
    title: 'Handcrafted Granola Bars',
    price: 6.49,
    originalPrice: 7.99,
    image: '/product-granola.jpg',
  },
  {
    id: 'organic-1',
    category: 'organic',
    title: 'Organic Whole Grain Bread',
    price: 5.99,
    image: '/product-bread.jpg',
    badge: 'Organic',
  },
  {
    id: 'snacks-3',
    category: 'snacks',
    title: 'Mixed Nuts & Dried Fruits',
    price: 8.99,
    image: '/product-nuts.jpg',
    badge: 'Popular',
  },
  {
    id: 'vape-1',
    category: 'vape',
    title: 'Disposable Vape - Cool Mint',
    price: 14.99,
    originalPrice: 17.99,
    image: '/product-vape.png',
    badge: 'Hot',
  },
]
