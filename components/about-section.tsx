'use client'

import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in-left group ring-1 ring-border/50">
            <Image
              src="/store-image.jpeg"
              alt="Fresh Local Grocery Store"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-right">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                Fresh Neighborhood <br />
                <span className="text-primary">Groceries.</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              For over a decade, we have been delivering the freshest, highest quality produce and daily essentials to the heart of the community. We're more than just a grocery store—we are your partners in healthy living.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              We proudly partner with local farms and premium suppliers to bring you an unbeatable selection. From organic vegetables to artisan bakery goods, our carefully curated aisles ensure you always find exactly what you need for your family.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Community and quality are at the core of everything we do. Thank you for making us your trusted local grocer.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-bold text-lg">
                Taste the freshness today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
