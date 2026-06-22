"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { BorderPlus } from "@/components/border-plus";
import { blogPosts } from "@/lib/blog-posts";


export const InsightsPreview = () => {
  
  const t = useTranslations("InsightsPreview");
  const locale = useLocale();
  const articles = blogPosts[locale as keyof typeof blogPosts];
  return (
    <section

      id="insights-preview"

      className="my-28 border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8"

    >
      <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">

        <BorderPlus className="-left-[11px] -top-[11px] bg-brand-ivory" />
        <BorderPlus className="-right-[11px] -top-[11px] bg-brand-ivory" />

        <BorderPlus className="-bottom-[11px] -left-[11px] bg-brand-ivory" />
        <BorderPlus className="-bottom-[11px] -right-[11px] bg-brand-ivory" />

        <div className="overflow-hidden">
          <div className="border-b border-brand-border text-center">
            <div className="px-6 py-20 text-center md:py-24">

            <h2
  className={`
    mx-auto
    mt-5
    ${locale === "pl" ? "max-w-3xl" : "max-w-3xl"}
    font-heading
    text-[clamp(2.5rem,5vw,3.2rem)]
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

              <p className="mx-auto mt-6 max-w-[620px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">

              {t("description")}

              </p>
              <Link
   href={`/${locale}/blog`}
  className="
    group mt-14 inline-flex min-h-12 items-center gap-2
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
                  aria-hidden="true"
                />
              </Link>

            </div>
          </div>

          <div className="grid divide-y divide-brand-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {articles.map((article, index) => (
         <Link
         key={article.id}
       
         href={`/${locale}/blog/${article.slug}`}
                className="group flex min-h-[270px] flex-col px-6 pb-8 transition-colors hover:bg-[#FFFAF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-inset md:px-8 md:pb-10"
              >
      
                <p className="font-body text-xs font-medium uppercase tracking-[0.14em] pt-12 text-brand-orange">
                {article.category}
                </p>
                <h3 className="mt-4 max-w-md font-body text-[23px] font-[500] leading-[1.4] tracking-[-0.03em] text-brand-cocoa">
                {article.title}
                </h3>

                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-brand-cocoa transition-colors group-hover:text-brand-orange">
                {t("articleCta")}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
