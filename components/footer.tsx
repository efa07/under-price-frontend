'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Shop: [
      { label: 'Weekly Ad', href: '#' },
      { label: 'Fresh Produce', href: '/products?category=produce' },
      { label: 'Meat & Seafood', href: '/products?category=meat' },
      { label: 'Dairy & Eggs', href: '/products?category=dairy' },
    ],
    Company: [
      { label: 'Our Farm Partners', href: '#about' },
      { label: 'Sustainability limit', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    Support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Store Locator', href: '#contact' },
      { label: 'Delivery Info', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  }

  return (
    <footer className="bg-foreground text-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:pr-8">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Under Price Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-cover rounded-full ring-2 ring-background/20 bg-white"
              />
              <span className="font-extrabold text-2xl tracking-tight">Under Price</span>
            </Link>
            <p className="text-background/70 text-base leading-relaxed mb-8 font-medium max-w-sm">
              Your trusted neighborhood destination for farm-fresh groceries, premium produce, and daily household essentials.
            </p>
            <div className="flex gap-4 border-t border-background/10 pt-6 max-w-xs">
              <a href="#" className="p-2.5 bg-background/5 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-background/5 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-background/5 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="col-span-1">
              <h4 className="font-bold text-lg mb-6 tracking-tight">{title}</h4>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-background/60 hover:text-primary font-medium transition-colors text-sm"
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
        <div className="border-t border-background/10 pt-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/50 text-sm font-medium">
            © {currentYear} Under Price Fresh Groceries. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-background/50 hover:text-background text-sm font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/50 hover:text-background text-sm font-medium transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-background/50 hover:text-background text-sm font-medium transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
