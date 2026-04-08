'use client'

import Image from 'next/image'
import { Accessibility } from 'lucide-react'
import { Card } from '@/components/ui/card'

const services = [
  {
    image: '/service-lottery.png',
    title: 'Lottery',
    description: 'Official lottery tickets and instant wins',
  },
  {
    image: '/service-atm.png',
    title: 'ATM',
    description: 'Fast and secure ATM services',
  },
  {
    image: '/service-beer.png',
    title: 'Beer & Wine',
    description: 'Premium selection of beverages',
  },
  {
    image: '/service-organic.png',
    title: 'Organic Products',
    description: 'Certified organic and natural options',
  },
  {
    icon: Accessibility,
    title: 'Accessibility Support',
    description: 'Fully accessible for all customers',
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            More than just a convenience store - we offer a full range of services to meet your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const isImageService = 'image' in service
            const Icon = !isImageService ? service.icon : null
            
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-500 group bg-card border-border rounded-2xl flex flex-col h-full hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                {isImageService ? (
                  <div className="relative w-full h-56 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="p-8 flex justify-center items-center bg-gradient-to-br from-primary to-primary/80 flex-shrink-0 h-56">
                    {Icon && <Icon className="w-16 h-16 text-primary-foreground" />}
                  </div>
                )}
                <div className="p-6 text-center flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
