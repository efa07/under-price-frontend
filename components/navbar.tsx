'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, ShoppingCart, User, MapPin, ChevronDown, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const partnerLinks = [
    { label: 'FreshMart', href: '#' },
    { label: 'OrganicsDirect', href: '#' },
    { label: 'DailyNeeds', href: '#' },
  ]

  const categories = [
    { label: 'Fruits & Veggies', href: '/products?category=produce' },
    { label: 'Meat & Seafood', href: '/products?category=meat' },
    { label: 'Dairy & Eggs', href: '/products?category=dairy' },
    { label: 'Bakery', href: '/products?category=bakery' },
    { label: 'Pantry', href: '/products?category=pantry' },
    { label: 'Beverages', href: '/products?category=beverages' },
    { label: 'Snacks', href: '/products?category=snacks' },
  ]

  return (
    <header className="w-full bg-background border-b border-border z-50 sticky top-0 shadow-sm">
      {/* Top Banner - Partner Links */}
      <div className="hidden md:flex bg-accent/50 text-accent-foreground py-1.5 px-4 sm:px-6 lg:px-8 text-xs font-medium justify-between items-center border-b border-accent/20">
        <div className="flex items-center gap-4 text-xs font-medium text-accent-foreground">
          <span className="flex items-center gap-1.5">
            <Store className="w-3.5 h-3.5" />
            Our Partner Stores:
          </span>
          <div className="flex items-center gap-3">
            {partnerLinks.map((link, idx) => (
              <div key={link.label} className="flex items-center gap-3">
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
                {idx < partnerLinks.length - 1 && <span className="opacity-40">|</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
            <MapPin className="w-3.5 h-3.5" />
            Find a Store
          </Link>
          <span className="opacity-40">|</span>
          <Link href="#" className="hover:text-primary transition-colors">Customer Service</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">

          {/* Mobile Menu Button & Mobile Logo */}
          <div className="flex items-center md:hidden gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 -ml-1 text-foreground transition-colors hover:text-primary rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Under Price" width={32} height={32} className="w-8 h-8 rounded-full ring-1 ring-border/70 bg-white" />
            </Link>
          </div>

          {/* Desktop Logo */}
          <div className="hidden md:flex shrink-0">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Under Price Logo"
                width={48}
                height={48}
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover ring-1 ring-border/70 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div>
                <p className="font-mono text-base md:text-lg font-bold uppercase leading-none tracking-widest text-foreground group-hover:text-primary transition-colors">
                  Under <br className="hidden lg:block text-accent" /> <span className="text-primary lg:text-foreground group-hover:text-primary">Price</span>
                </p>
              </div>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile, full width on desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl px-4 lg:px-8">
            <div className="relative w-full group">
              <Input
                type="search"
                placeholder="Search for groceries, brands, and more..."
                className="w-full pl-11 pr-24 h-11 rounded-full  border-muted-foreground/30 text-base shadow-sm transition-all"
              />
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Button size="sm" className="absolute right-1.5 top-1.5 bottom-1.5 h-auto rounded-full px-5 bg-primary hover:bg-primary/100 text-primary-foreground font-medium hidden lg:flex shadow-sm">
                Search
              </Button>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0 overflow-hidden">
            <Button variant="ghost" size="icon" className="md:hidden relative hover:bg-transparent" aria-label="Search">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full hover:bg-muted/60" aria-label="User Account">
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <div className="flex items-center">
              <Button variant="ghost" className="relative p-2 sm:p-3 h-auto rounded-full hover:bg-primary/5 hover:text-primary group transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-primary text-primary-foreground text-[10px] font-bold h-2 w-2 sm:h-5 sm:w-5 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform shadow-sm">
                    3
                  </span>
                </div>
                <span className="hidden lg:flex flex-col items-start ml-3 text-left">
                  <span className="text-[10px] text-muted-foreground leading-none font-medium mb-1 group-hover:text-primary/70 transition-colors">Total</span>
                  <span className="text-sm font-bold leading-none">$45.90</span>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative w-full group">
            <Input
              type="search"
              placeholder="Search groceries..."
              className="w-full pl-10 pr-4 h-11 rounded-xl bg-muted/40 border-muted-foreground/30 focus-visible:ring-primary text-base shadow-sm"
            />
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Categories Bar - Desktop Only */}
        <div className="hidden md:flex items-center gap-1 pb-3 overflow-x-auto no-scrollbar mask-gradient">
          <Button variant="default" size="sm" className="rounded-full gap-2 shrink-0 h-9 px-4 font-semibold shadow-sm hover:shadow-md transition-all">
            <Menu className="w-4 h-4" />
            All Departments
          </Button>
          <div className="w-px h-5 bg-border mx-2 shrink-0" />
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-full whitespace-nowrap transition-colors shrink-0"
            >
              {cat.label}
            </Link>
          ))}
          <div className="ml-auto shrink-0 pl-4 flex items-center">
            <Link href="/offers" className="text-sm font-bold text-red-500 hover:text-red-600 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-full hover:bg-red-500/10">
              Special Offers <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl z-50">
          <div className="flex flex-col max-h-[calc(100vh-140px)] overflow-y-auto">
            {/* Mobile Categories */}
            <div className="px-4 py-4 border-b border-border/50 bg-muted/10">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 px-1">Departments</p>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    className="text-sm font-medium p-2.5 rounded-xl hover:bg-muted/80 bg-background border border-border/50 transition-colors flex items-center justify-between shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Partner Links */}
            <div className="px-4 py-4 border-b border-border/50">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 px-1">Our Partners</p>
              <div className="flex flex-col gap-1.5">
                {partnerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium p-3 rounded-xl hover:bg-muted/60 transition-colors flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="bg-muted p-1.5 rounded-md">
                      <Store className="w-4 h-4 text-foreground/70" />
                    </div>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer Actions */}
            <div className="p-4 flex flex-col gap-2 bg-muted/5">
              <Link
                href="#"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="bg-muted p-1.5 rounded-md">
                  <User className="w-5 h-5 text-foreground/70" />
                </div>
                My Account
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="bg-muted p-1.5 rounded-md">
                  <MapPin className="w-5 h-5 text-foreground/70" />
                </div>
                Find a Store
              </Link>
              <Button
                asChild
                className="w-full mt-4 font-bold h-12 rounded-xl shadow-md bg-red-500 hover:bg-red-600 text-white"
                size="lg"
              >
                <Link href="/offers" onClick={() => setIsOpen(false)}>
                  View Special Offers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
