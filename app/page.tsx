import { ContactSection } from "@/components/sections/contact-section";
import { FAQ } from "@/components/sections/faq-section";

import { HeroSection } from "@/components/sections/hero-section";

import { RecruitmentChallengesSection } from "@/components/sections/recruitment-challenges-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { SolutionSection } from "@/components/sections/solution-section";

import { PracticeSection } from "@/components/sections/therapeutic-areas-section";
import { TransformCommunicationCta } from "@/components/sections/final-cta-section";
import { GetStartedSection } from "@/components/sections/how-it-works-section";
import { InsightsPreview } from "@/components/sections/insights-preview-section";
import { WhyChooseSection } from "@/components/sections/why-choose-us-section";


export default function Home() {
  return (
    <div className="min-h-screen">

      <HeroSection />

      <RecruitmentChallengesSection />

      <ImpactSection />

      <SolutionSection />

      <PracticeSection />

      <WhyChooseSection />

      <GetStartedSection />

      <InsightsPreview />

      <TransformCommunicationCta />

      {/* <FAQ /> */}

      {/* <ContactSection /> */}

    </div>
  );
}