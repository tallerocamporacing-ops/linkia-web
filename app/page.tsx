import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ReelsSection } from "@/components/reels-section"
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
        <FeaturesSection />
        <ReelsSection />
        <FinalCtaSection />
        <SocialSection />
      </main>
      <SiteFooter />
      <WhatsAppFloatButton />
    </div>
  )
}
