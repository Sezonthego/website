import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogPlaceholderImage } from "@/components/blog-placeholder-image";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const articles = [
  {
    category: "Recruitment challenges",
    title: "Why qualified participants stall before screening",
    description:
      "A practical look at the friction points that keep interested patients from becoming ready-to-review candidates.",
  },
  {
    category: "Study delivery",
    title: "What clinical sites need before enrollment pressure rises",
    description:
      "How clearer workflows, structured follow-up, and better visibility help teams protect study timelines.",
  },
  {
    category: "Recruitment strategy",
    title: "Designing study pages that move patients to action",
    description:
      "The questions, confidence signals, and next steps that participant-facing pages need to answer fast.",
  },
] as const;

export const InsightsPreview = () => {
  return (
    <section
      id="blog-preview"
      className="border-y border-brand-border bg-brand-ivory px-4 my-8 md:my-28"
    >
      <Container className="px-0">
        <div className="overflow-hidden border-x border-brand-border">
          <div className=" border-b border-brand-border  text-center">
            <div className="px-6 py-14 md:px-12 md:py-20">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
                Blog preview
              </p>
              <h2 className="mt-5  font-clarion-display text-4xl font-light leading-tight tracking-normal text-brand-cocoa md:text-5xl">
                Ideas shaping the future.
              </h2>
              <p className="mt-6  font-clarion-body text-lg leading-8 text-brand-muted md:text-xl">
                Explore insights on recruitment challenges, and strategies
                helping clinical sites improve study delivery.
              </p>
              <Button asChild className="mt-8 bg-brand-cocoa hover:bg-brand-orange">
                <Link href="/blog">
                  Read latest
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid divide-y divide-brand-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {articles.map((article, index) => (
              <Link
                key={article.title}
                href="/blog"
                className="group flex min-h-[315px] flex-col px-6 pb-8 transition-colors hover:bg-brand-peach/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-inset md:px-8 md:pb-10"
              >
                <div className="-mx-6 mb-8 overflow-hidden md:-mx-8">
                  <BlogPlaceholderImage variant={index} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                  {article.category}
                </p>
                <h3 className="mt-4 max-w-md text-2xl font-medium leading-tight tracking-normal text-brand-cocoa">
                  {article.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-brand-muted">
                  {article.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand-cocoa transition-colors group-hover:text-brand-orange">
                  Read preview
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
