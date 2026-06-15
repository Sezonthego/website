import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BorderPlus } from "@/components/border-plus";
import Image from "next/image";

const articles = [
  {
    category: "Recruitment strategy",
    title: "Clinical recruitment is not an awareness problem alone.",
    description:
      "Clinical research has advanced significantly over the last decade, with studies becoming more...",
    image: "/article/art1.svg",
  },
  {
    category: "Patient enrollment",
    title: "Why recruitment fails after patients show interest?",
    description:
      "Patient interest is an important milestone in every clinical trial recruitment journey. It means...",
    image: "/article/art2.svg",
  },
  {
    category: "Digital infrastructure",
    title: "Why more technology does not always reduce complexity?",
    description:
      "A new technology is usually introduced with a simple goal: to make work easier. Whether it improves...",
    image: "/article/img1.svg",
  },
] as const;

export const InsightsPreview = () => {
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

              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-[clamp(2.5rem,5vw,3.2rem)] font-[600] leading-[1.2] tracking-[-0.04em] text-brand-cocoa">

              Ideas shaping the{" "}
<span className="text-brand-orange">

  future.

</span>

              </h2>

              <p className="mx-auto mt-6 max-w-[620px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">

              Explore insights on recruitment, patient engagement, and the operational systems helping clinical sites deliver studies more effectively.

              </p>
              <Link
                href="/blog"
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
                Read latest

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
                key={article.title}
                href="/blog"
                className="group flex min-h-[315px] flex-col px-6 pb-8 transition-colors hover:bg-[#FFFAF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-inset md:px-8 md:pb-10"
              >
                <div className="-mx-6 mb-8 overflow-hidden md:-mx-8">
                  <div className="-mx-6 mb-8 flex aspect-video items-center justify-center overflow-hidden bg-brand-cocoa md:-mx-8">

                    <img

                      src={article.image}

                      alt={article.title}

                      className="

    h-full

    w-full

    object-contain

    transition-transform

    duration-500

    group-hover:scale-105

  "

                    />

                  </div>
                </div>
                <p className="font-body text-xs font-medium uppercase tracking-[0.14em] text-brand-orange">
                  {article.category}
                </p>
                <h3 className="mt-4 max-w-md font-body text-[23px] font-[500] leading-[1.4] tracking-[-0.03em] text-brand-cocoa">
                  {article.title}
                </h3>

                <p className="mt-3 max-w-md pb-5 font-body text-[15px] font-light leading-[1.7] text-brand-muted">
                  {article.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-brand-cocoa transition-colors group-hover:text-brand-orange">
                  Explore article
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
