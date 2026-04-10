import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { CategoriesSection } from '@/components/categories-section'
import { FeaturedProductsSection } from '@/components/featured-products-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { LocationSection } from '@/components/location-section'
import { Footer } from '@/components/footer'
import { SectionTransition } from '@/components/section-transition'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <SectionTransition delay={0.02}>
        <HeroSection />
      </SectionTransition>
      <SectionTransition delay={0.06}>
        <CategoriesSection />
      </SectionTransition>
      <SectionTransition delay={0.1}>
        <FeaturedProductsSection />
      </SectionTransition>
      <SectionTransition delay={0.18}>
        <ServicesSection />
      </SectionTransition>
      <SectionTransition delay={0.22}>
        <AboutSection />
      </SectionTransition>
      <SectionTransition delay={0.26}>
        <LocationSection />
      </SectionTransition>
      <Footer />
    </main>
  )
}
