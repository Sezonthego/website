"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { BorderPlus } from "@/components/border-plus";
import { ArrowRight } from "lucide-react";

const categories = [
  "recruitment",
  "operations",
  "infrastructure",
] as const;

export default function BlogPage() {
  const t = useTranslations("Blog");

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-cocoa">

      {/* HERO */}
      <section className="border-y border-brand-border bg-brand-ivory px-4 md:px-8">
        <div className="relative mx-auto max-w-[1320px] border-x border-brand-border">

          <BorderPlus className="-left-[11px] -top-[11px]" />
          <BorderPlus className="-right-[11px] -top-[11px]" />

          <div className="px-6 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28">

            <p
              className="
                font-body
                text-xs
                font-medium
                uppercase
                tracking-[0.22em]
                text-brand-orange
              "
            >
              {t("eyebrow")}
            </p>

            <h1
              className="
                mt-6
                max-w-4xl
                font-heading
                text-[clamp(2.8rem,6vw,4.5rem)]
                font-[600]
                leading-[1.1]
                tracking-[-0.04em]
                text-brand-cocoa
              "
            >
              {t("headline")}{" "}
              <span className="text-brand-orange">
                {t("headlineHighlight")}
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-[680px]
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

        </div>
      </section>


      {/* CONTENT */}
      <section className="bg-brand-ivory px-4 pb-28 md:px-8">

        <div
          className="
            relative
            mx-auto
            max-w-[1320px]
            border-x
            border-b
            border-brand-border
          "
        >

          <BorderPlus className="-bottom-[11px] -left-[11px]" />
          <BorderPlus className="-bottom-[11px] -right-[11px]" />


          <div className="grid md:grid-cols-3">

            {categories.map((category, index) => (
              <div
                key={category}
                className={`
                  min-h-[240px]
                  border-brand-border
                  p-8
                  md:p-10

                  ${
                    index !== categories.length - 1
                      ? "border-b md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >

                <p
                  className="
                    font-heading
                    text-[28px]
                    font-[600]
                    leading-[1.2]
                    tracking-[-0.035em]
                    text-brand-cocoa
                  "
                >
                  {t(`categories.${category}.title`)}
                </p>

                <p
                  className="
                    mt-4
                    font-body
                    text-[15px]
                    font-light
                    leading-[1.7]
                    text-brand-muted
                  "
                >
                  {t(`categories.${category}.description`)}
                </p>

              </div>
            ))}

          </div>


          {/* CTA */}
          <div className="border-t border-brand-border p-8 md:p-10">

            <Link
              href="#newsletter"
              className="
                inline-flex
                h-12
                items-center
                gap-3
                bg-brand-cocoa
                px-6

                font-body
                text-[13px]
                font-medium
                uppercase

                text-brand-ivory

                transition-colors
                hover:bg-brand-orange
              "
            >

              {t("cta")}

              <ArrowRight className="size-4" />

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}