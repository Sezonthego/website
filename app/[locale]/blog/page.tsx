"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { blogPosts } from "@/lib/blog-posts";
import { useLocale } from "next-intl";

import { BorderPlus } from "@/components/border-plus";
import { ArrowRight, Search } from "lucide-react";

const categories = [
  "recruitment",
  "operations",
  "infrastructure",
] as const;


export default function BlogPage() {
  const t = useTranslations("Blog");
  const locale = useLocale();
  const articles =
  
    blogPosts[locale as keyof typeof blogPosts];
    const [visibleCount, setVisibleCount] = useState(6);
    const [search, setSearch] = useState("");

    const filteredArticles = articles.filter((article) =>
      `${article.title} ${article.category} ${article.content}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    
    const visibleArticles = filteredArticles.slice(
      0,
      visibleCount
    );

    const hasMore = visibleCount < filteredArticles.length;
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
            <div className="relative mt-10 max-w-[520px]">

<Search
  className="
    pointer-events-none
    absolute
    left-5
    top-1/2
    size-4
    -translate-y-1/2
    stroke-[1.8]
    text-brand-muted
  "
/>

<input
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder={t("searchPlaceholder")}
  className="
    h-14
    w-full

    border
    border-brand-border
    bg-brand-ivory

    pl-12
    pr-5

    font-body
    text-[15px]
    font-light
    text-brand-cocoa

    outline-none

    placeholder:text-brand-muted

    transition-colors

    focus:border-brand-orange
  "
/>

</div>
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


         

          {/* ARTICLES */}
          <div className="border-brand-border">
            <div className="grid divide-y divide-brand-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">

            {visibleArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/${locale}/blog/${article.slug}`}
                  className="
                  group
                  flex
                  min-h-[280px]
                  flex-col
                  px-6
                  pb-10
                  transition-colors
                  hover:bg-[#FFFAF6]
                  md:px-12
                  md:pb-12
                "
                >

                  <p className="
                    pt-12
                    font-body
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-brand-orange
                  ">
                    {article.category}
                  </p>


                  <h3 className="
                    mt-4
                    max-w-md
                    font-body
                    text-[23px]
                    font-[500]
                    leading-[1.4]
                    tracking-[-0.03em]
                    text-brand-cocoa
                  ">
                    {article.title}
                  </h3>


                  <span className="
                    mt-auto
                    inline-flex
                    items-center
                    gap-2
                    pt-8
                    text-sm
                    font-medium
                    text-brand-cocoa
                    group-hover:text-brand-orange
                  ">
                    {t("articleCta")}
                    <ArrowRight className="size-4" />
                  </span>

                </Link>
              ))}

            </div>
          </div>
          {hasMore && (
  <div className="relative border-t border-brand-border py-12 text-center">

    {/* fade */}
    <div
      className="
        pointer-events-none
        absolute
        -top-24
        left-0
        h-24
        w-full
        bg-gradient-to-t
        from-brand-ivory
        to-transparent
      "
    />

    <button
      onClick={() =>
        setVisibleCount((prev) => prev + 6)
      }
      className="
        relative
        inline-flex
        h-11
        items-center
        bg-brand-cocoa
        rounded-full
        px-6

        font-body
        text-[13px]
        font-medium

        text-brand-ivory

        transition-colors
        hover:bg-brand-orange
      "
    >
      Load more articles
    </button>

  </div>
)}
          {/* CTA */}
          <div className="border-t border-brand-border p-8 md:p-10">

            <Link
              href="#newsletter"
              className="
                inline-flex
                h-11
                items-center
                gap-3
                bg-brand-cocoa
                rounded-full
                px-6

                font-body
                text-[13px]
                font-medium

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
