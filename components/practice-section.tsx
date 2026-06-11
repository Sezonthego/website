import {
  Bone,
  Brain,
  Eye,
  HeartHandshake,
  HeartPulse,
  Stethoscope,
  Venus,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/container";

const practiceAreas = [
  { label: "Cardiology", icon: HeartPulse },
  { label: "Dermatology", icon: Brain },
  { label: "Gastroenterology", icon: Stethoscope },
  { label: "Ophthalmology", icon: Eye },
  { label: "Orthopedics", icon: Bone },
  { label: "Primary Care", icon: Stethoscope },
  { label: "Value-Based Care", icon: HeartHandshake },
  { label: "Women's Health", icon: Venus },
] as const;

function PracticeAreaItem({
  label,
  icon: Icon,
}: {
  label: string;
  icon: (typeof practiceAreas)[number]["icon"];
}) {
  return (
    <span className="inline-flex min-w-0 shrink items-center gap-3 text-brand-cocoa">
      <span className="flex size-12 shrink-0 items-center justify-center bg-[#f0eee7] md:size-14">
        <Icon className="size-5 stroke-[1.8]" aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap text-base leading-tight md:text-lg">{label}</span>
    </span>
  );
}

export function PracticeSection() {
  return (
    <section className="border-y border-brand-border bg-brand-ivory">
      <Container className="px-0">
        <div className="border-x border-brand-border px-6 py-14 text-center md:px-12 md:py-20">
          <h2 className="mx-auto max-w-4xl font-clarion-display text-4xl font-light tracking-normal text-brand-cocoa md:text-5xl">
            Built to adapt around your research needs.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-clarion-body text-lg leading-7 text-brand-muted md:text-xl">
            WeForge supports recruitment workflows across different therapeutic
            areas and study phases, helping sites create structured patient
            recruitment systems around their research.
          </p>

          <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10 md:mt-16 md:gap-x-12">
            {practiceAreas.map((area) => (
              <PracticeAreaItem
                key={area.label}
                label={area.label}
                icon={area.icon}
              />
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-12 inline-flex min-h-14 items-center rounded-none bg-brand-cocoa px-6 py-3 text-base font-medium text-brand-ivory shadow-[0_14px_30px_rgba(10,3,0,0.16)] transition-colors hover:bg-brand-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory md:mt-16"
          >
            Find out if we&apos;re a fit
          </Link>
        </div>
      </Container>
    </section>
  );
}
