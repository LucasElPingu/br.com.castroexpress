import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CoverageSection } from "@/components/sections/coverage-section"
import { DifferentialsSection } from "@/components/sections/differentials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CoverageSection />
        <DifferentialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
