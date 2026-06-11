import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Contact WeForge Clinical",
  description:
    "Contact WeForge Clinical to discuss patient recruitment, participant management, and clinical research operations.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-ivory text-brand-cocoa">
      <section className="border-b border-brand-border bg-brand-ivory px-4 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
              Contact
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-brand-cocoa md:text-6xl">
              Talk with WeForge Clinical.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-cocoa/70 md:text-lg">
              Share what you are building, recruiting for, or improving. Our
              team will route your message to the right clinical operations
              specialist.
            </p>
          </div>
        </Container>
      </section>

      <ContactSection />
    
    </div>
  );
}
