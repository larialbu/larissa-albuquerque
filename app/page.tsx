import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LinksSection } from "@/components/links-section"
import { NewsSection } from "@/components/news-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <LinksSection />
      <SocialMediaSection />
      <NewsSection />
      <CommunitySection />
      <Footer />
    </div>
  )
}
