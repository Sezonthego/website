import Link from "next/link";
import { useLocale } from "next-intl";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { BorderPlus } from "@/components/border-plus";

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
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-brand-ivory text-brand-cocoa">

      {/* HERO */}
      <section className="border-y border-brand-border bg-brand-ivory px-4 md:px-8">
        <div className="relative mx-auto max-w-[1320px] border-x border-brand-border">

          <BorderPlus className="-left-[11px] -top-[11px]" />
          <BorderPlus className="-right-[11px] -top-[11px]" />

          <div className="px-6 py-20 md:px-12 md:py-28">

        

            <h1 className="

mt-6

-ml-[0.06em]

max-w-4xl
Perfect.
font-heading

text-[clamp(2.8rem,6vw,4.5rem)]

font-[600]

leading-[1.1]

tracking-[-0.04em]

text-brand-cocoa

">
              {title}
            </h1>

            <p className="
              mt-6
              max-w-[680px]
              font-body
              text-base
              font-light
              leading-[1.7]
              text-brand-muted
            ">
              {description}
            </p>

          </div>
        </div>
      </section>


      {/* CONTENT */}
      <main className="bg-brand-ivory px-4 pb-28 md:px-8 md:pb-30">
      <div className="relative mx-auto grid max-w-[1320px] border-x border-b border-brand-border lg:grid-cols-[300px_1fr]">
      <BorderPlus className="-bottom-[11px] -left-[11px]" />

<BorderPlus className="-bottom-[11px] -right-[11px]" />

          {/* SIDEBAR */}
          <aside className="border-b border-brand-border p-6 lg:border-b-0 lg:border-r lg:p-10">

            <div className="sticky top-28">

              <p className="
                font-body
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-brand-muted
              ">
                {locale === "pl" ? "Ostatnia aktualizacja" : "Last updated"}
              </p>

              <p className="mt-3 font-body text-sm font-medium text-brand-cocoa">
                {updated}
              </p>

              <div className="my-8 h-px bg-brand-border" />

              <p className="
                font-body
                text-sm
                font-light
                leading-[1.7]
                text-brand-muted
              ">
               {locale === "pl"
  ? "Pytania dotyczące tej strony możesz przesłać naszemu zespołowi."
  : "Questions about this page can be sent to our team."}
              </p>

              <Link
  href={`/${locale}/contact`}

className="

  mt-6

  inline-flex

  h-11

  w-full

  items-center

  justify-center

  rounded-full
  bg-brand-cocoa

  px-5
  font-body

 text-[13px]

font-medium

tracking-[-0.01em]

  text-brand-ivory

  transition-all

  duration-300

  hover:bg-brand-orange

"

>

{locale === "pl" ? "Skontaktuj się z nami" : "Reach out to us"}

</Link>

            </div>

          </aside>


          {/* ARTICLE */}
          <article className="px-6 py-14 md:px-14 md:py-20">

            <div className="max-w-3xl space-y-14">

              {sections.map((section) => (

                <section
                  key={section.title}
                  className="
                    border-b
                    border-brand-border
                    pb-14
                    last:border-none
                    last:pb-0
                  "
                >

                  <h2 className="
                    font-heading
                    text-[28px]
                    font-[600]
                    leading-[1.2]
                    tracking-[-0.035em]
                    text-brand-cocoa
                  ">
                    {section.title}
                  </h2>


                  <div className="
                    mt-6
                    space-y-5
                    font-body
                    text-[15px]
                    font-light
                    leading-[1.8]
                    text-brand-muted
                  ">

                    {section.body.map((paragraph) => (
                      <p key={paragraph}>
                        {paragraph}
                      </p>
                    ))}

                  </div>


                  {section.items && (

                    <ul className="
                      mt-6
                      space-y-4
                      font-body
                      text-[15px]
                      font-light
                      leading-[1.7]
                      text-brand-muted
                    ">

                      {section.items.map((item) => (

                        <li
                          key={item}
                          className="flex gap-3"
                        >

                          <span className="
                            mt-3
                            size-1.5
                            shrink-0
                            bg-brand-orange
                          " />

                          <span>
                            {item}
                          </span>

                        </li>

                      ))}

                    </ul>

                  )}

                </section>

              ))}

            </div>

          </article>

        </div>
      </main>

    </div>
  );
}
