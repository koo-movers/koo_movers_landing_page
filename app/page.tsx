import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CustomerJourneySection } from "@/components/customer-journey-section"
import { RiderRegistrationSection } from "@/components/rider-registration-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header isHome={true}/>
      <main>
        <HeroSection />
        <ServicesSection />
        <CustomerJourneySection />
        <RiderRegistrationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
