'use client'

import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-144px)] md:min-h-[calc(100vh-156px)] w-full overflow-hidden border-b border-border/20">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-144px)] md:min-h-[calc(100vh-156px)]">

        {/* LEFT CONTENT */}
        <div className="flex items-center px-6 sm:px-10 lg:px-20 py-20">
          <div className="max-w-2xl space-y-10  animate-fade-in-left">

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-foreground">
                Fresh Food.
                <br />
                Delivered
                <span className="text-primary"> Beautifully.</span>
              </h1>

              <p className="max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Farm-fresh groceries, premium quality essentials, and same-day
                delivery designed for modern living.
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="flex gap-10 pt-4">
              <div>
                <h3 className="text-2xl font-semibold">30min</h3>
                <p className="text-sm text-muted-foreground">Avg Delivery</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">10k+</h3>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">100%</h3>
                <p className="text-sm text-muted-foreground">Fresh Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[500px] overflow-hidden">
          <Image
            src="/store-image-2.png"
            alt="Premium fresh groceries"
            fill
            loading="eager"
            className="object-cover transition-transform duration-[2500ms]"
          />

          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />

          {/* Floating Blur Accent */}
          <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
        </div>
      </div>
    </section>
  )
}