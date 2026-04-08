'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Shop: [
      { label: 'All Products', href: '#' },
      { label: 'Featured Deals', href: '#' },
      { label: 'Categories', href: '#' },
      { label: 'New Arrivals', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    Support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
  }

  return (
    <footer className="bg-foreground text-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-full md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 rounded-full">
              <Image
                src="/logo.jpeg"
                alt="Under Price Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain rounded-3xl"
              />
              <span className="font-bold text-lg">Under Price</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your neighborhood essential for snacks, drinks, and everything in between.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-primary/20 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/20 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/20 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold text-base mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Under Price Convenience Store. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
