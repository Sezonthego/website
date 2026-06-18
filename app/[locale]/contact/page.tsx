"use client";

import { useTranslations, useLocale } from "next-intl";

import { ContactSection } from "@/components/sections/contact-section";
import { BorderPlus } from "@/components/border-plus";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-cocoa">
      <section className="border-y border-brand-border bg-brand-ivory px-4 pb-28 md:px-8">
        <div className="relative mx-auto max-w-[1320px] border-x border-b border-brand-border">

          <BorderPlus className="-left-[11px] -top-[11px]" />
          <BorderPlus className="-right-[11px] -top-[11px]" />
          <BorderPlus className="-bottom-[11px] -left-[11px]" />
          <BorderPlus className="-bottom-[11px] -right-[11px]" />

          <div className="border-b border-brand-border px-6 pt-28 pb-14 md:px-12 md:pt-28 md:pb-18">

          <h1
  className={`
    ${locale === "pl" ? "max-w-3xl" : "max-w-4xl"}

    pt-5
    font-heading
    text-[clamp(2.8rem,6vw,4.5rem)]
    font-[600]
    leading-[1.1]
    tracking-[-0.04em]
    text-brand-cocoa
  `}
>
              {t("headline")}{" "}
              <span className="text-brand-orange">
                {t("headlineHighlight")}
              </span>{" "}
              {t("headlineEnd")}
            </h1>

            <p
              className="
                mt-6
                max-w-[600px]
                font-body
                text-base
                font-light
                leading-[1.7]
                text-brand-muted
              "
            >
              {t("description")}
            </p>

          </div>

          <ContactSection />

        </div>
      </section>
    </div>
  );
}