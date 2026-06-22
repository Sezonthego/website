"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

import { BorderPlus } from "@/components/border-plus";
import type { BlogPost } from "@/lib/blog-posts";

type BlogArticleProps = {
  article: BlogPost;
};
export default function BlogArticle({ article }: BlogArticleProps) {
  const t = useTranslations("BlogArticle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <main className="min-h-screen bg-brand-ivory text-brand-cocoa">
      {/* READING PROGRESS */}
      <div className="fixed left-0 top-0 z-[999] h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-brand-orange transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* HERO */}
      

      {/* ARTICLE */}
      <section className="border-y border-brand-border bg-brand-ivory px-4 py-14 md:px-8">
      <div className="relative mx-auto grid max-w-[1320px] border-x border-b border-brand-border lg:grid-cols-[1fr_300px]">
          <BorderPlus className="-bottom-[11px] -left-[11px]" />
          <BorderPlus className="-bottom-[11px] -right-[11px]" />


        {/* CONTENT */}
{/* CONTENT */}
<article className="px-6 py-14 md:px-14 md:py-20">

<div className="max-w-4xl">

  {/* ARTICLE HEADER */}
  <div className="mb-12">
    <p className="font-body text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
      {article.category}
    </p>

    <h1 className="-ml-[0.06em] mt-6 max-w-4xl font-heading text-[clamp(2.55rem,5.4vw,3rem)] font-[600] leading-[1.1] tracking-[-0.04em] text-brand-cocoa">
      {article.title}
    </h1>
  </div>


  {/* ARTICLE TEXT */}
  <div className="space-y-7">

{article.content.split("\n\n").map((block, index) => {
                const isHeading =
                  block.length < 80 &&
                  !block.endsWith(".") &&
                  !block.includes("—");

                if (isHeading) {
                  return (
                    <h2
                      key={index}
                      className="pt-9 font-heading text-[28px] font-[600] leading-[1.2] tracking-[-0.035em] text-brand-cocoa first:pt-0"
                    >
                      {block}
                    </h2>
                  );
                }

                return (
                  <p
                    key={index}
                    className="font-body text-[15px] font-light leading-[1.8] text-brand-cocoa"
                  >
                    {block}
                  </p>
                );
              })}
</div>

              {/* CTA */}
<div className="mt-18 border border-brand-border bg-brand-cocoa p-8 text-brand-ivory md:p-10">

<p className="font-heading text-[32px] font-[600] leading-[1.15] tracking-[-0.04em]">
  {t("cta.title")}
</p>

<p className="mt-4 max-w-[650px] font-body text-[15px] font-light leading-[1.7] text-brand-peach/70">
  {t("cta.description")}
</p>

<Link
  href="https://cal.com/YOUR-CAL-LINK"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex min-h-12 items-center gap-3 bg-brand-orange px-5 py-3 font-body text-[13px] font-medium uppercase text-brand-ivory transition-colors hover:bg-brand-orange/90"
>
  <CalendarDays className="size-4 stroke-[1.8]" />

  {t("cta.button")}

  <ArrowRight className="size-4 stroke-[1.8]" />
</Link>

</div>
            </div>
          </article>
                {/* SIDEBAR */}
                <aside className="border-b border-brand-border p-6 lg:border-b-0 lg:border-l lg:p-10">
            <div className="sticky top-28">
              <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-brand-muted">
                Written by
              </p>

              <p className="mt-3 font-body text-sm font-medium leading-[1.6] text-brand-cocoa">
                Yazid Abouhafss
              </p>

              <div className="my-8 h-px bg-brand-border" />

              <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-brand-muted">
                Published
              </p>

              <p className="mt-3 font-body text-sm font-medium text-brand-cocoa">
                18 June 2026
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}