"use client";

import { useEffect, useState } from "react";
import {

  Plug,

  Settings2,

  ShieldCheck,

  Lock,

  ArrowRight,

} from "lucide-react";
import Link from "next/link";
import { BorderPlus } from "@/components/border-plus";
import { Container } from "@/components/container";

const reasons = [
  {
    title: "GDPR compliant",
    body: "Designed with privacy in mind, supporting responsible collection, processing, and management of patient data.",
    icon: ShieldCheck,
  },
  {
    title: "Client-controlled systems",
    body: "Connected systems built to keep your team in control of the infrastructure, access, and patient information.",
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

function ReasonCell({
  reason,
  featured = false,
}: {
  reason: (typeof reasons)[number];
  featured?: boolean;
}) {
  const Icon = reason.icon;

  return (
    <div
      className={`
    group
    relative
    min-h-[275px]
    overflow-hidden
    border-brand-border
    p-8 md:p-10
    transition-colors
    duration-500
    hover:bg-brand-cocoa
    ${featured ? "bg-brand-cocoa" : ""}
  `}
    >

      {/* Orange glow on hover */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20 -top-20
          h-[180px] w-[180px]
          rounded-full
          bg-brand-orange/0
          blur-[70px]
          transition-colors
          duration-500
          group-hover:bg-brand-orange/20
        "
      />

      <div className="relative flex items-start justify-between gap-6">

        <span
          className={`
    flex size-16 shrink-0 items-center justify-center
    transition-all
    duration-500
    group-hover:-translate-y-1
    group-hover:bg-brand-orange
    group-hover:text-brand-ivory

    ${featured
              ? "bg-brand-orange text-brand-ivory"
              : "bg-[#FFF0E8] text-brand-orange"
            }
  `}
        >
          <Icon className="size-7 stroke-[1.35]" aria-hidden="true" />
        </span>

      </div>

      <div className="relative mt-8 max-w-xl">

        <h3
          className={`
    font-body
    text-[23px]
    font-[500]
    leading-[1.15]
    tracking-[-0.03em]
    transition-colors
    duration-500
    group-hover:text-brand-ivory
    ${featured ? "text-brand-ivory" : "text-brand-cocoa"}
  `}
        >
          {reason.title}
        </h3>

        <p
          className={`
    mt-3
    max-w-[520px]
    font-body
    text-[15px]
    font-light
    leading-[1.7]
    transition-colors
    duration-500
    group-hover:text-brand-ivory/60
    ${featured ? "text-brand-ivory/60" : "text-brand-muted"}
  `}
        >
          {reason.body}
        </p>

      </div>
    </div>
  );
}

export function WhyChooseSection() {
  const [particles, setParticles] = useState<

  {

    x: number;

    y: number;

    delay: number;

    duration: number;

  }[]

>([]);

useEffect(() => {

  setParticles(

    Array.from({ length: 20 }).map(() => ({

      x: Math.random() * 100,

      y: Math.random() * 100,

      delay: Math.random() * 3,

      duration: 2 + Math.random() * 2,

    }))

  );

}, []);

  return (
    <section className="my-28 border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8">
      <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">




        <BorderPlus className="-bottom-[11px] -left-[11px]" />

        <div className="grid overflow-hidden lg:grid-cols-3">
          <div className="relative min-h-[420px] overflow-hidden px-8 py-20 md:p-12 lg:row-span-2 lg:min-h-[550px] lg:border-r">
            <div

              className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(255,79,0,0.20),transparent_30%),radial-gradient(circle_at_90%_5%,rgba(255,176,114,0.18),transparent_35%),linear-gradient(135deg,rgba(255,254,250,1),rgba(255,253,249,0.95)_55%,rgba(255,250,247,1))]"

              aria-hidden="true"

            />
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(32,21,21,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,21,21,0.04)_1px,transparent_1px)] bg-size-[72px_72px] opacity-70"
              aria-hidden="true"
            />
            {/* Floating particles */}
            <div className="pointer-events-none absolute bottom-32 right-40">
              {particles.map((particle, i) => (
                <span
                  key={i}
                  className="
        absolute
        size-0.5
        rounded-full
        bg-brand-orange/80
        blur-[0.5px]
        animate-float-particle
      "
                  style={{
                    left: `${particle.x}px`,
                    top: `${particle.y}px`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: `${particle.duration}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative flex h-full min-h-[320px] flex-col">
              <div>
                <h2 className="font-heading text-[clamp(2.5rem,5vw,3rem)] font-[600] leading-[1.2] tracking-[-0.04em] text-brand-cocoa">
                  The foundation behind{" "}
                  <span className="text-brand-orange">
                    reliable recruitment.
                  </span>
                </h2>
                <p className="mt-6 max-w-[600px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">
                  Committed to maintaining the security, control, and compliance standards required in clinical research.
                </p>
              </div>
              <Link

                href="/contact"

                className="

  group mt-14 md:mt-auto inline-flex min-h-12 w-fit items-center gap-2
    rounded-none
    bg-brand-orange
    px-5 py-3
    text-[13px]
    font-medium
    uppercase
    text-brand-ivory
    shadow-[0_14px_30px_rgba(255,79,0,0.20)]
    transition-colors
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

    border-brand-border

    ${index !== reasons.length - 1 ? "border-b" : ""}

    ${index % 2 === 0 ? "lg:border-r" : ""}

    ${index < 2 ? "lg:border-b" : ""}

    ${index === reasons.length - 1 ? "lg:border-b-0" : ""}

  `}

            >
              <ReasonCell
                reason={reason}
                featured={
                  reason.title === "Secure infrastructure" ||
                  reason.title === "GDPR compliant"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
