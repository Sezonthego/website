"use client";
import {
  Activity,
  Bone,
  Brain,
  CircleDot,
  Dna,
  Ear,
  Eye,
  HeartPulse,
  Microscope,
  Pill,
  Ribbon,
  ShieldPlus,
  Stethoscope,
  Syringe,
  Weight,
} from "lucide-react";
import Link from "next/link";
import { BorderPlus } from "@/components/border-plus";
import { MessagesSquare } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import {
  IconLungs,
  IconDroplet,
} from "@tabler/icons-react";

const practiceAreasTop = [
  { translationKey: "oncology", icon: Ribbon },
  { translationKey: "hematology", icon: CircleDot },
  { translationKey: "cardiology", icon: HeartPulse },
  { translationKey: "cardiovascular", icon: Activity },
  { translationKey: "neurology", icon: Brain },
  { translationKey: "psychiatry", icon: Brain },
  { translationKey: "cns", icon: Brain },
  { translationKey: "endocrinology", icon: ShieldPlus },
  { translationKey: "metabolism", icon: Activity },
  { translationKey: "gastroenterology", icon: Stethoscope },
  { translationKey: "hepatology", icon: Stethoscope },
  { translationKey: "nephrology", icon: Stethoscope },
] as const;

const practiceAreasBottom = [
  { translationKey: "urology", icon: Stethoscope },
  { translationKey: "nephrology", icon: IconDroplet },
  { translationKey: "pulmonology", icon: IconLungs },
  { translationKey: "infectious", icon: Syringe },
  { translationKey: "immunology", icon: ShieldPlus },
  { translationKey: "rheumatology", icon: Bone },
  { translationKey: "dermatology", icon: Microscope },
  { translationKey: "ophthalmology", icon: Eye },
  { translationKey: "otolaryngology", icon: Ear },
  { translationKey: "rare", icon: Dna },
  { translationKey: "diabetology", icon: Pill },
  { translationKey: "obesity", icon: Weight },
] as const;



function PracticeAreaItem({
  label,
  icon: Icon,
}: {
  label: string;
  icon: React.ElementType;
}) {
  return (
    <span className="inline-flex shrink-0 items-center gap-3 text-brand-cocoa">
      <span className="flex size-12 shrink-0 items-center justify-center bg-[#FFF0E8] text-brand-orange md:size-14">
        <Icon className="size-5 stroke-[1.8]" aria-hidden="true" />
      </span>

      <span className="whitespace-nowrap text-base leading-tight md:text-lg">
        {label}
      </span>
    </span>
  );
}

export function PracticeSection() {

  const t = useTranslations("TherapeuticAreas");
  const locale = useLocale();
  return (
    <section id="therapeutic-areas" className="mt-28 mb-28 border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8">
      <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">

        <BorderPlus className="-left-[11px] -top-[11px]" />
        <BorderPlus className="-right-[11px] -top-[11px]" />

        <BorderPlus className="-bottom-[11px] -left-[11px]" />
        <BorderPlus className="-bottom-[11px] -right-[11px]" />

        <div className="px-5 py-20 text-center md:px-6 md:py-24">
        <h2
  className={`
    mx-auto
    ${locale === "pl" ? "max-w-2xl" : "max-w-3xl"}
    font-heading
    text-[2.24rem]
    md:text-[clamp(2rem,4vw,3.2rem)]
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

          <p className="mx-auto mt-6 max-w-[600px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">
          {t("description")}
          </p>

          <div className="relative mt-16 overflow-hidden">

            {/* Left fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-brand-ivory to-transparent" />

            {/* Right fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-brand-ivory to-transparent" />

            {/* ROW 1 */}
            <div className="flex min-w-max animate-practice-scroll-left gap-18">

            {[...practiceAreasTop, ...practiceAreasTop].map((area, index) => (
  <PracticeAreaItem
  key={`${area.translationKey}-${index}`}
  label={t(`items.${area.translationKey}`)}
  icon={area.icon}
/>
))}

</div>

            {/* ROW 2 */}
            <div className="mt-10 mb-5 flex min-w-max animate-practice-scroll-right gap-18">

            {[...practiceAreasBottom, ...practiceAreasBottom].map((area, index) => (
 <PracticeAreaItem
 key={`${area.translationKey}-${index}`}
 label={t(`items.${area.translationKey}`)}
 icon={area.icon}
/>
))}

</div>

          </div>

          <Link

href={`/${locale}/contact`}

className="
    mt-12
    inline-flex
    min-h-11
    items-center
    gap-4
    rounded-full
    bg-brand-orange
    px-5
    py-2.5
    text-[13px]
    font-medium
    text-brand-ivory
    shadow-[0_14px_30px_rgba(255,79,0,0.20)]
    transition-colors
    hover:bg-brand-orange/90
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-brand-orange
    focus-visible:ring-offset-2
    focus-visible:ring-offset-brand-ivory
    md:mt-16
  "
          >
            <MessagesSquare
              className="size-4 stroke-[1.7]"
              aria-hidden="true"
            />

{t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
