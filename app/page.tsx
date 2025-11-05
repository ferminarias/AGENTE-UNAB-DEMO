import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/sections/hero"
import { UniversitySection } from "@/components/sections/university"
import { ProgramsSection } from "@/components/sections/programs"
import { BenefitsSection } from "@/components/sections/benefits"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { AdmissionsProcessSection } from "@/components/sections/admissions-process"
import { FAQSection } from "@/components/sections/faq"
import { ContactFormSection } from "@/components/sections/contact-form"
import { SiteFooter } from "@/components/site-footer"
import { organizationJsonLd, faqJsonLd } from "@/lib/seo"
import { ClientVoiceWidget } from "@/components/client-voice-widget"

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen gpu-boost">
        <SiteHeader />
        <main>
          <HeroSection />
          <UniversitySection />
          <ProgramsSection />
          <BenefitsSection />
          <TestimonialsSection />
          <AdmissionsProcessSection />
          <FAQSection />
          <ContactFormSection />
        </main>
        <SiteFooter id="footer" />
        <ClientVoiceWidget />
      </div>
    </>
  )
}
