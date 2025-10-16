import { HeroSection } from "@/components/HeroSection"
import { BeforeAfterSection } from "@/components/BeforeAfterSection"
import { ArtistSection } from "@/components/artist-section"
import { ChallengeSection } from "@/components/challange-section"
import { FaqSection } from "@/components/faq-section"
import { FinalFaqSection } from "@/components/final-faq-section"
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <BeforeAfterSection />
      <ArtistSection />
      <ChallengeSection />
      <FaqSection />
      <FinalFaqSection />
      <Footer />
    </main>
  )
}
