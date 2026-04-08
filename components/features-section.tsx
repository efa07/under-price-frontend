'use client'

import { Zap, Truck, MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: 'Under Price Savings',
    description: 'Always getting the best deals on everyday essentials with our competitive pricing.',
  },
  {
    icon: Truck,
    title: 'Fast Pickup',
    description: 'Get your items quickly with our efficient service and minimal wait times.',
  },
  {
    icon: MapPin,
    title: 'Local Convenience',
    description: 'Right in the heart of downtown Toronto, your neighborhood store you can trust.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border rounded-2xl group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
