'use client'

import { Truck, ShoppingBag, ShieldCheck, CreditCard, Accessibility } from 'lucide-react'
import { Card } from '@/components/ui/card'

const services = [
  {
    icon: Truck,
    title: 'Same-Day Delivery',
    description: 'Fresh groceries delivered straight to your door in as little as 2 hours.',
  },
  {
    icon: ShoppingBag,
    title: 'Curbside Pickup',
    description: 'Order online and we will bring your groceries directly to your car.',
  },
  {
    icon: ShieldCheck,
    title: 'Freshness Guarantee',
    description: 'If you are not satisfied with the freshness, we will refund you 100%.',
  },
  {
    icon: CreditCard,
    title: 'Digital Coupons',
    description: 'Save automatically at checkout with our weekly digital specials.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility Support',
    description: 'Our stores and website are fully accessible for all customers.',
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-4 bg-primary/90 w-full mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Shopping Made Easy
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto font-medium">
            We provide a variety of convenient services to ensure your grocery shopping is as smooth and fast as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 group bg-card border-border/60 rounded-3xl flex flex-col items-center text-center p-8 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-8 h-8 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
