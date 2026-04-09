'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BadgeCheck, Clock3, Sparkles, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustBadges = ['Fast Pickup', 'Best Prices', 'Local Favorite']
const floatingCards = ['Best Deals', 'Fast Service', 'Open Daily']

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(255,119,83,0.16),transparent_42%),radial-gradient(circle_at_82%_74%,rgba(255,133,102,0.14),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.95))]" />
      <div className="pointer-events-none absolute -left-24 top-8 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 -z-10 h-72 w-72 rounded-full bg-orange-300/25 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:px-8">
        <div className="animate-fade-in-left space-y-9 lg:pr-8">
          
          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.3rem]">
              Everything You Need,
              <br />
              Right Around the <span className="text-primary">Corner.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Snacks, drinks, essentials, and daily necessities-all available at unbeatable prices in your local neighborhood.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 rounded-xl px-8 text-base font-semibold shadow-[0_16px_45px_-20px_hsl(var(--primary)/0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-18px_hsl(var(--primary)/0.85)]"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 rounded-xl border-border/70 bg-background/75 px-8 text-base font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-background hover:text-primary"
            >
              <Link href="#contact">Visit Store</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <BadgeCheck className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-105" />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in-right lg:pl-4">
          <div className="pointer-events-none absolute inset-x-6 bottom-7 top-9 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-primary/15 to-orange-300/20 blur-3xl" />

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/65 bg-white/55 p-2 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/hero-pickup.jpg"
                alt="Local convenience store products and storefront"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/5 to-transparent" />
            </div>
          </div>

          <div className="absolute -left-6 top-10 hidden animate-fade-in-up rounded-2xl border border-border/70 bg-background/85 px-4 py-3 shadow-lg backdrop-blur-sm sm:block">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Highlighted</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{floatingCards[0]}</p>
          </div>

          <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 animate-fade-in-up rounded-2xl border border-border/70 bg-background/85 px-4 py-3 shadow-lg backdrop-blur-sm sm:block animation-delay-200">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Service</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{floatingCards[1]}</p>
          </div>

          <div className="absolute -bottom-5 left-10 hidden animate-fade-in-up items-center gap-3 rounded-2xl border border-border/70 bg-background/88 px-4 py-3 shadow-lg backdrop-blur-sm sm:flex animation-delay-300">
            <Clock3 className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Availability</p>
              <p className="text-sm font-semibold text-foreground">{floatingCards[2]}</p>
            </div>
          </div>

          <div className="absolute -right-3 -top-4 rounded-full border border-border/60 bg-background/80 p-3 shadow-md backdrop-blur-sm">
            <Store className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
