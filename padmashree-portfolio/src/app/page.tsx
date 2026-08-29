import { Hero } from "@/components/site/Hero";
import { ThroughLine } from "@/components/site/ThroughLine";
import { SelectedWork } from "@/components/site/SelectedWork";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { SkillsSection } from "@/components/site/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ThroughLine />
      <SelectedWork />
      <ExperienceTimeline />
      <SkillsSection />
    </>
  );
}
