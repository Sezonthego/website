import { ContactSection } from "@/components/contact-section";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { GetStartedSection } from "@/components/get-started-section";
import { Hero3DStage } from "@/components/hero-3d-stage";
import { InsightsPreview } from "@/components/insights-preview";
import { PracticeSection } from "@/components/practice-section";
import { SystemIntegrations } from "@/components/system-integrations";
import { TransformCommunicationCta } from "@/components/transform-communication-cta";
import { WhyChooseSection } from "@/components/why-choose-section";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero3DStage />
      <Features />
      <SystemIntegrations />
      <PracticeSection />
      <WhyChooseSection />
      <GetStartedSection />
      <TransformCommunicationCta />
      <InsightsPreview />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}
