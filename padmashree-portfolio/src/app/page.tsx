import { Hero } from "@/components/site/Hero";
import { ThroughLine } from "@/components/site/ThroughLine";
import { SelectedWork } from "@/components/site/SelectedWork";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { SkillsSection } from "@/components/site/SkillsSection";
import { Credentials } from "@/components/site/Credentials";
import { ContactCta } from "@/components/site/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ThroughLine />
      <SelectedWork />
      <ExperienceTimeline />
      <SkillsSection />
      <Credentials />
      <ContactCta />
    </>
  );
}
