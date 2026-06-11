import {
  Plug,
  Settings2,
  ShieldCheck,
  Lock,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/container";

const reasons = [
  {
    title: "GDPR Compliant",
    body: "Recruitment systems designed with privacy principles in mind, supporting responsible collection, processing, and management of patient information.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Controlled Systems",
    body: "We create recruitment systems around your site while keeping your team in control of the infrastructure, access, and patient data.",
    icon: Settings2,
  },
  {
    title: "Seamless Integration",
    body: "Recruitment infrastructure that fits into your existing operations, helping your team work with less disruption.",
    icon: Plug,
  },
  {
    title: "Secure Infrastructure",
    body: "Built on trusted technologies with security-focused practices to support reliable handling of sensitive recruitment information.",
    icon: Lock,
  },
] as const;

function ReasonCell({ reason }: { reason: (typeof reasons)[number] }) {
  const Icon = reason.icon;

  return (
    <div className="relative min-h-[275px] border-brand-border p-8 md:p-10">
      <div className="flex items-start justify-between gap-6">
        <span className="flex size-16 shrink-0 items-center justify-center bg-[#f0eee7] text-brand-cocoa">
          <Icon className="size-8 stroke-[1.7]" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-8 max-w-xl">
        <h3 className="text-2xl font-medium tracking-normal text-brand-cocoa">
          {reason.title}
        </h3>
        <p className="mt-3 text-lg leading-7 text-brand-muted">
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
              className="absolute inset-0 bg-[radial-gradient(circle_at_10%_86%,rgba(255,79,0,0.22),transparent_28%),radial-gradient(circle_at_10%_74%,rgba(62,199,184,0.38),transparent_30%),linear-gradient(120deg,rgba(255,243,230,0.95),rgba(255,253,249,0.78)_56%,rgba(255,253,249,0.98))]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(32,21,21,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,21,21,0.04)_1px,transparent_1px)] bg-size-[72px_72px] opacity-70"
              aria-hidden="true"
            />

            <div className="relative flex h-full min-h-[320px] flex-col">
              <div>
                <h2 className="font-clarion-display text-4xl font-light leading-tight tracking-normal text-brand-cocoa md:text-5xl">
                  The foundation behind reliable clinical recruitment.
                </h2>
                <p className="mt-5 max-w-md text-lg leading-7 text-brand-muted">
                  WeForge helps sites improve recruitment while maintaining the
                  security, control, and compliance standards required in
                  clinical research.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-auto inline-flex w-fit items-center rounded-none bg-brand-cocoa px-5 py-3 text-base font-semibold text-brand-ivory transition-colors hover:bg-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ivory"
              >
                Talk with our team
              </Link>
            </div>
          </div>

          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={` ${
                index % 2 === 0 ? "lg:border-r" : ""
              }`}
            >
              <ReasonCell reason={reason} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
