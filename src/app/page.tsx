import HomeHero from "@/components/HomeHero";
import FlagshipCards from "@/components/FlagshipCards";
import NowSection from "@/components/NowSection";
import WritingPreview from "@/components/WritingPreview";
import PeerReviewStrip from "@/components/PeerReviewStrip";
import { PersonJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <HomeHero />
      <FlagshipCards />
      <NowSection />
      <WritingPreview />
      <PeerReviewStrip />
    </>
  );
}
