import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { TourSection } from "@/components/tour-section"
import { WorkflowSection } from "@/components/workflow-section"
import { FeaturesSection } from "@/components/features-section"
import { MarketingModuleSection } from "@/components/marketing-module-section"
import { ReelsSection } from "@/components/reels-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { SocialSection } from "@/components/social-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <TourSection />
        <WorkflowSection />
        <FeaturesSection />
        <MarketingModuleSection />
        <ReelsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
        <SocialSection />
      </main>
      <SiteFooter />
      <WhatsAppFloatButton />
    </div>
  )
}
