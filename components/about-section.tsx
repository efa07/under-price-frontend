'use client'

import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden border-y border-border/40">
      <div className="grid md:grid-cols-2 min-h-[500px]">
        {/* Left Side - Full Image */}
        <div className="relative min-h-[400px] md:min-h-full animate-fade-in-left group overflow-hidden">
          <Image
            src="/store-image-1.png"
            alt="Fresh Local Grocery Store"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 animate-fade-in-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Fresh Neighborhood <br />
            <span className="text-primary">Groceries.</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4 max-w-md">
            For over a decade, we have partnered with local farms to bring the freshest, premium quality produce right to your neighborhood.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-6 max-w-md">
            Community and quality are at our core. Experience the difference of true freshness today.
          </p>
        </div>
      </div>
    </section>
  )
}
