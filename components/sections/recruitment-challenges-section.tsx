import Image from "next/image";

import { BorderPlus } from "@/components/border-plus";
import { cn } from "@/lib/utils";

const problemCards = [
  {
    title: "Patient Reach",
    description:
      "The right patients are out there, but traditional recruitment makes it difficult to consistently reach and engage them.",
    image: "/assets/patient-reach-blur-2.svg",
    imageAlt: "Patient reach illustration",
    width: 380,
    height: 300,
    imageSize: "max-w-[280px]",
  },
  {
    title: "Patient Quality",
    description:
      "Patient interest doesn’t guarantee enrollment. Without qualification, teams spend time on patients who may not fit.",
    image: "/assets/patient-quality-blur-2.svg",
    imageAlt: "Patient quality illustration",
    width: 450,
    height: 320,
    imageSize: "max-w-[270px]",
  },
  {
    title: "Manual Overload",
    description:
      "Manual coordination increases workload and makes it harder to keep patients engaged throughout the study.",
    image: "/assets/manual-overload-blur-2.svg",
    imageAlt: "Manual overload illustration",
    width: 410,
    height: 320,
    imageSize: "max-w-[250px]",
  },
  {
    title: "Fragmented Systems",
    description:
      "Disconnected tools make recruitment harder to track, manage, and scale across studies.",
    image: "/assets/fragmented-systems-blur-2.svg",
    imageAlt: "Fragmented systems illustration",
    width: 410,
    height: 320,
    imageSize: "max-w-[250px]",
  },
] as const;


function ScaleYourPractice() {
  return (
    <>
      <div className="border-b border-brand-border px-6 py-14 text-center md:py-15">

        <h2 className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.5rem,5vw,3.2rem)] font-[600] leading-[1.2] tracking-[-0.04em] text-brand-cocoa">
          Recruitment shouldn&apos;t be the reason your site{" "}
          <span className="text-brand-orange">falls behind.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[680px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">
          Enrollment challenges create more than delays. They increase operational
          pressure, weaken sponsor confidence, and limit your site&apos;s ability to
          deliver studies consistently.
        </p>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-4">

        {problemCards.map((card, index) => (
          <article
            key={card.title}
            className={cn(
              "border-brand-border",

              // mobile separators
              index !== problemCards.length - 1 && "border-b",

              // desktop separators
              "sm:border-b-0",

              index !== problemCards.length - 1 && "sm:border-r"
            )}
          >

            <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden border-b border-brand-border bg-[#FFFAF6]">

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-8
                  left-1/2
                  h-[160px]
                  w-[160px]
                  -translate-x-1/2
                  rounded-full
                  bg-brand-orange/10
                  blur-[70px]
                "
              />


              <Image
                src={card.image}
                alt={card.imageAlt}
                width={card.width}
                height={card.height}
                className={cn(
                  "relative z-10 h-auto w-full object-contain",
                  card.imageSize
                )}
              />

            </div>


            <div className="px-7 py-8 pb-14">

              <h3 className="font-base text-[20px] font-[500] leading-[1.15] tracking-[-0.03em] text-brand-cocoa">
                {card.title}
              </h3>

              <p className="mt-3 max-w-[520px] font-body text-[15px] font-light leading-[1.7] text-brand-muted">
                {card.description}
              </p>

            </div>

          </article>
        ))}

      </div>
    </>
  );
}


export function RecruitmentChallengesSection() {

    return (
  
      <section
  
        id="challenges"
  
        className="mt-8 border-t border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:mt-28 md:px-8"
  
      >
  
        <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">
  
          <BorderPlus className="-left-[11px] -top-[11px]" />
  
          <BorderPlus className="-right-[11px] -top-[11px]" />
  
          <ScaleYourPractice />
  
        </div>
  
      </section>
  
    );
  
  }