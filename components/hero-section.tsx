'use client'

import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border/20 bg-background">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:min-h-[calc(100vh-156px)]">

        {/* LEFT CONTENT */}
        <div className="flex items-center px-6 sm:px-10 lg:px-20 py-12 lg:py-20 bg-background">
          <div className="max-w-2xl space-y-8 lg:space-y-10 animate-fade-in-left w-full">

            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1] lg:leading-[0.95] text-foreground">
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
            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 pt-4">
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
        <div className="relative h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[500px] bg-muted/20 overflow-hidden">
          <Image
            src="/store-image-2.png"
            alt="Premium fresh groceries"
            fill
            loading="eager"
            className="object-cover transition-transform duration-[2500ms]"
          />
        </div>
      </div>
    </section>
  )
}