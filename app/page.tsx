import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { CategoriesSection } from '@/components/categories-section'
import { FeaturedProductsSection } from '@/components/featured-products-section'
import { PromotionalBanner } from '@/components/promotional-banner'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { LocationSection } from '@/components/location-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <PromotionalBanner />
      <ServicesSection />
      <AboutSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
