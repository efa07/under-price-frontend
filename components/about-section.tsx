'use client'

import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg animate-fade-in-left group">
            <Image
              src="/store-image.jpeg"
              alt="Under Price Store"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-right">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Under Price.{' '}
                <span className="text-primary">Under the Street.</span>
              </h2>
              <p className="text-lg text-primary font-semibold mb-4">
                Above and Beyond.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              For over a decade, Under Price Convenience Store has been downtown
              Toronto&apos;s hidden gem. Nestled on Spadina Avenue, we&apos;re more
              than just a store—we&apos;re your neighborhood essential.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We pride ourselves on offering competitive pricing without compromising
              on quality. From fresh coffee to household essentials, our carefully
              curated selection ensures you&apos;ll always find what you need.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Community is at the heart of everything we do. We&apos;re committed to
              serving our neighbors with respect, integrity, and unbeatable value.
            </p>

            <div className="space-y-2 pt-4">
              <p className="text-foreground font-semibold">
                Visit us today and experience the difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
