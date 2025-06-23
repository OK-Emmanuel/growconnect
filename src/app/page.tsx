import { HeroBanner } from "@/components/hero-banner";
import { SectionWhatWeSee } from "@/components/section-what-we-see";
import { SectionWhatWeOffer } from "@/components/section-what-we-offer";
import { SectionConference } from "@/components/section-conference";
import { SectionWhyTGN } from "@/components/section-why-tgn";
import { SectionGrowthJourney } from "@/components/section-growth-journey";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-text font-sans">
      <HeroBanner />
      <SectionWhatWeSee />
      <SectionWhatWeOffer />
      <SectionConference />
      <SectionWhyTGN />
      <SectionGrowthJourney />
      <Footer />
    </main>
  );
}
