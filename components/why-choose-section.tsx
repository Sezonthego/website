import {
  Plug,
  Settings2,
  ShieldCheck,
  Lock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/container";

const reasons = [
  {
    title: "GDPR compliant",
    body: "Designed with privacy in mind, supporting responsible collection, processing, and management of patient data.",
    icon: ShieldCheck,
  },
  {
    title: "Client-controlled systems",
    body: "Systems built to Keep your team in control of the infrastructure, access, and patient information.",
    icon: Settings2,
  },
  {
    title: "Seamless integration",
    body: "Recruitment infrastructure that fits into your existing operations, helping your team work with less disruption.",
    icon: Plug,
  },
  {
    title: "Secure infrastructure",
    body: "Built on trusted technologies with security-focused practices to support reliable handling of sensitive information.",
    icon: Lock,
  },
] as const;

function ReasonCell({ reason }: { reason: (typeof reasons)[number] }) {
  const Icon = reason.icon;

  return (
    <div className="relative min-h-[275px] border-brand-border p-8 md:p-10">
      <div className="flex items-start justify-between gap-6">
      <span className="flex size-16 shrink-0 items-center justify-center bg-[#FFF0E8] text-brand-orange">
  <Icon className="size-7 stroke-[1.35]" aria-hidden="true" />
</span>
      </div>

      <div className="mt-8 max-w-xl">
  <h3 className="font-body text-xl font-normal text-brand-cocoa">
    {reason.title}
  </h3>

  <p className="mt-3 max-w-[520px] font-body text-base font-light leading-[1.7] text-brand-muted">
    {reason.body}
  </p>
</div>
    </div>
  );
}

export function WhyChooseSection() {
  return (
    <section className="border-y border-brand-border bg-brand-ivory my-8 md:my-28">
      <Container className="px-0">
        <div className="grid overflow-hidden border-x  border-brand-border lg:grid-cols-3">
          <div className="relative min-h-[420px]  p-8 md:p-12 lg:row-span-2 lg:min-h-[550px] lg:border-r">
          <div

className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(255,79,0,0.20),transparent_30%),radial-gradient(circle_at_90%_5%,rgba(255,176,114,0.18),transparent_35%),linear-gradient(135deg,rgba(255,254,250,1),rgba(255,253,249,0.95)_55%,rgba(255,250,247,1))]"

aria-hidden="true"

/>
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(32,21,21,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,21,21,0.04)_1px,transparent_1px)] bg-size-[72px_72px] opacity-70"
              aria-hidden="true"
            />

            <div className="relative flex h-full min-h-[320px] flex-col">
              <div>
              <h2 className="font-heading text-[clamp(2rem,3vw,2.5rem)] font-[300] leading-[1.3] tracking-[-0.02em] text-brand-cocoa">
  The foundation behind reliable clinical recruitment.
</h2>
                <p className="mt-5 max-w-md text-lg leading-7 text-brand-muted">
                  Commited to maintaining the
                  security, control, and compliance standards required in
                  clinical research.
                </p>
              </div>

              <Link
  href="/contact"
  className="
    group mt-auto inline-flex min-h-14 w-fit items-center gap-3
    rounded-none
    bg-brand-orange
    px-6 py-3
    font-body text-base font-normal text-brand-ivory
    shadow-[0_14px_30px_rgba(255,79,0,0.20)]
    transition-all
    hover:bg-brand-orange/90
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-brand-orange
    focus-visible:ring-offset-2
    focus-visible:ring-offset-brand-ivory
  "
>
  Talk with our team

  <ArrowRight
    className="
      size-4
      stroke-[1.8]
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</Link>
            </div>
          </div>

          {reasons.map((reason, index) => (
  <div
    key={reason.title}
    className={`
      ${index % 2 === 0 ? "lg:border-r" : ""}
      ${index < 2 ? "lg:border-b" : ""}
      border-brand-border
    `}
  >
    <ReasonCell reason={reason} />
  </div>
))}
        </div>
      </Container>
    </section>
  );
}
