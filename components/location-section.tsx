'use client'

import { Card } from '@/components/ui/card'
import { MapPin, Phone, Clock } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            Visit Your Local Store
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Find the freshest produce and your favorite grocery essentials right in the heart of downtown Toronto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Google Maps Embed */}
          <Card className="h-96 md:h-auto border-border/60 rounded-3xl overflow-hidden animate-fade-in-left shadow-xl transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7661234567!2d-79.39913!3d43.64782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2f8b8f8f7%3A0x1234567890abcdef!2s166A%20Spadina%20Ave%2C%20Toronto%2C%20ON%20M5V%202A6!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Under Price Local Grocery Store Location"
            />
          </Card>

          {/* Info Cards */}
          <div className="space-y-6 animate-fade-in-right flex flex-col justify-center">
            {/* Address */}
            <Card className="p-6 md:p-8 bg-card border-border/60 rounded-3xl hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
              <div className="flex gap-5">
                <div className="bg-primary/10 p-3 rounded-2xl h-fit">
                  <MapPin className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2 tracking-tight">Store Address</h3>
                  <p className="text-muted-foreground font-medium">
                    166A Spadina Ave.
                    <br />
                    Toronto, ON M5V 2A6
                  </p>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card className="p-6 md:p-8 bg-card border-border/60 rounded-3xl hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
              <div className="flex gap-5">
                <div className="bg-primary/10 p-3 rounded-2xl h-fit">
                  <Clock className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2 tracking-tight">Store Hours</h3>
                  <p className="text-muted-foreground font-medium">
                    Monday - Saturday: 8 AM – 10 PM
                    <br />
                    Sunday: 9 AM – 9 PM
                  </p>
                </div>
              </div>
            </Card>

            {/* Phone */}
            <Card className="p-6 md:p-8 bg-card border-border/60 rounded-3xl hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
              <div className="flex gap-5">
                <div className="bg-primary/10 p-3 rounded-2xl h-fit">
                  <Phone className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2 tracking-tight">Contact Us</h3>
                  <p className="text-muted-foreground font-medium">
                    Phone: <a href="tel:+14165036121" className="text-foreground hover:text-primary transition-colors font-bold">+1 416 503 6121</a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
