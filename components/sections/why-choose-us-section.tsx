"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
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
    id: "gdpr",
    icon: ShieldCheck,
  },
  {
    id: "control",
    icon: Settings2,
  },
  {
    id: "integration",
    icon: Plug,
  },
  {
    id: "security",
    icon: Lock,
  },
] as const;

function ReasonCell({
  reason,
  featured = false,
  t,
}: {
  reason: (typeof reasons)[number];
  featured?: boolean;
  t: ReturnType<typeof useTranslations>;
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

    -right-40
    -top-40

    h-[320px]
    w-[320px]

    rounded-full

    bg-brand-orange/30

    opacity-0

    blur-[120px]

    transition-opacity
    duration-500

    group-hover:opacity-100
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
          {t(`reasons.${reason.id}.title`)}
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
         {t(`reasons.${reason.id}.body`)}
        </p>

      </div>
    </div>
  );
}

export function WhyChooseSection() {
  const t = useTranslations("WhyChoose");
  const locale = useLocale();
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
    <section id="why-us" className="my-28 border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8">
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
              <h2
  className={`
    ${locale === "pl" ? "max-w-2xl" : "max-w-5xl"}
    font-heading
    text-[clamp(2.5rem,5vw,3rem)]
    font-[600]
    leading-[1.2]
    tracking-[-0.04em]
    text-brand-cocoa
  `}
>
  {t("headline")}{" "}
  <span className="text-brand-orange">
    {t("headlineHighlight")}
  </span>
</h2>
                <p className="mt-6 max-w-[600px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">
                {t("description")}
                                </p>
              </div>
              <Link
  href="https://cal.com/YOUR-CAL-LINK"
  target="_blank"
  rel="noopener noreferrer"
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
{t("cta")}

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

            key={reason.id}

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

t={t}

featured={

  reason.id === "security" ||

  reason.id === "gdpr"

}

/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
