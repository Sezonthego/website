import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

type LegalSection = {
  title: string;
  body: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  description,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-brand-ivory text-brand-cocoa">
      <section className="border-b border-brand-border bg-brand-ivory px-4 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-brand-cocoa md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-cocoa/70 md:text-lg">
              {description}
            </p>
          </div>
        </Container>
      </section>

      <main className="bg-brand-peach/45 px-4 py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-2xl border border-brand-border bg-brand-ivory p-6 shadow-[0_18px_50px_rgba(32,21,21,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-cocoa/45">
                Last updated
              </p>
              <p className="mt-2 text-sm font-medium text-brand-cocoa">
                {updated}
              </p>
              <div className="mt-6 h-px bg-brand-border" />
              <p className="mt-6 text-sm leading-6 text-brand-cocoa/65">
                Questions about this page can be sent to our team.
              </p>
              <Button asChild className="mt-5 w-full">
                <Link href="/contact">Contact WeForge</Link>
              </Button>
            </div>
          </aside>

          <article className="rounded-3xl border border-brand-border bg-brand-ivory p-6 shadow-[0_24px_70px_rgba(32,21,21,0.08)] md:p-10">
            <div className="space-y-10">
              {sections.map((section) => (
                <section
                  className="border-b border-brand-border pb-10 last:border-b-0 last:pb-0"
                  key={section.title}
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-brand-cocoa">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-brand-cocoa/70 md:text-base">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.items ? (
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-brand-cocoa/70 md:text-base">
                      {section.items.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </Container>
      </main>

     
    </div>
  );
}
