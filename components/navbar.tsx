'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, PhoneCall, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/products' },
    { label: 'Categories', href: '/#categories' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Under Price Logo"
                width={48}
                height={48}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-border/70 bg-white transition-transform duration-300 group-hover:scale-[1.03]"
                priority
               
              />
              <div className="hidden sm:block">
                <p className="font-mono text-sm font-medium uppercase leading-none tracking-[0.2em] text-foreground/90">
                  Under <span className="text-primary">Price</span>
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 justify-center md:flex">
            <div className="flex items-center gap-1 rounded-full border border-border/60 bg-muted/30 p-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium tracking-tight text-foreground/85 transition-all duration-300 hover:bg-background hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Call Button */}
          <div className="hidden flex-1 justify-end md:flex">
            <Button
              asChild
              size="sm"
              className="h-10 rounded-full px-5 font-semibold tracking-tight shadow-[0_14px_30px_-18px_hsl(var(--primary)/0.95)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="tel:+14165036121" aria-label="Call Under Price at +1 416 503 6121">
                <PhoneCall className="mr-2 h-4 w-4" />
                Call Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="ml-auto flex items-center md:hidden">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted/60 hover:text-primary md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="space-y-2 border-t border-border/60 py-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium tracking-tight text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+14165036121"
              className="mt-1 flex items-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold tracking-tight text-primary-foreground transition-all duration-300 hover:opacity-95"
              onClick={() => setIsOpen(false)}
              aria-label="Call Under Price at +1 416 503 6121"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Call Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
