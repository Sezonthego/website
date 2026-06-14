"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../logo";
import { BorderPlus } from "@/components/border-plus";
import { SolutionBackground } from "@/components/solution-background";
import { PatientAcquisitionVisual,  } from "@/components/solution-visuals/patient-acquisition";
import { SmartQualificationVisual } from "@/components/solution-visuals/smart-qualification";
import { PatientEngagementVisual } from "@/components/solution-visuals/patient-engagement";
import { RecruitmentOperationsVisual } from "@/components/solution-visuals/operations";


import {
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  MessagesSquare,
  UserSearch,
  Workflow,
} from "lucide-react";
import {

  AnimatePresence,

  motion,

  useInView,

  useMotionValue,

  useSpring,

} from "motion/react";

import { cn } from "@/lib/utils";
function CardParticles() {

  const [particles, setParticles] = useState<

    {

      x: number;

      y: number;

      delay: number;

      duration: number;

      size: number;

    }[]

  >([]);

  useEffect(() => {

    setParticles(

      Array.from({ length: 40 }).map(() => ({

        x: Math.random() * 100,

        y: Math.random() * 100,

        delay: Math.random() * 4,

        duration: 3 + Math.random() * 3,

        size: Math.random() * 2 + 2,

      }))

    );

  }, []);

  return (

    <div className="pointer-events-none absolute inset-0">

      {particles.map((particle, i) => (

        <span

          key={i}

          className="

            absolute

            rounded-full

            bg-brand-orange/20

            blur-[0.5px]

            animate-float-particle

          "

          style={{

            left: `${particle.x}%`,

            top: `${particle.y}%`,

            width: `${particle.size}px`,

            height: `${particle.size}px`,

            animationDelay: `${particle.delay}s`,

            animationDuration: `${particle.duration}s`,

          }}

        />

      ))}

    </div>

  );

}
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

const metrics = [
  { value: "80%", label: "Trials miss enrollment timelines" },
  { value: "48%", label: "Sites miss the expectations" },
  { value: "85%", label: "Patients unaware of clinical trials" },
  { value: "$40K+", label: "Sponsor cost per delay trial day" },
] as const;


const testimonials = [
  {
    role: "Therapeutic Innovation & Regulatory Science",
    name: "Dombernowsky et al.",
    quote:
      "Recruitment-related factors are pivotal when assessing trial sites during site selection.",
  },
  {
    role: "Perspectives in Clinical Research",
    name: "Chaudhari et al.",
    quote:
      "Participant recruitment and retention are two major bottlenecks in conducting clinical trials.",
  },
  {
    role: "Tufts CSDD",
    name: "Mary Jo Lamberti",
    quote:
      "It takes more patients to be screened in order to get the same number of completed patients.",
  },
] as const;

const evidenceSources = [
  "NIH",
  "Tufts CSDD",
  "TIRS",
  "Perspectives Clin. Research",
  "JCM",
] as const;


const SOLUTION_ROTATE_MS = 8_000;


const solutionItems = [
  {
    title: "Patient Acquisition",
    description:
      "We help you reach and attract potential participants through targeted recruitment channels built around your studies.",
    icon: UserSearch,
    image: null,

    imageAlt: null,
  },
  {
    title: "Smart Qualification",
    description:
      "We apply study-specific qualification flows before patients reach your team, helping coordinators focus on participants more likely to match study requirements.",
    icon: ClipboardCheck,
    image: null,

    imageAlt: null,
  },
  {
    title: "Patient Engagement",
    description:
      "We create structured patient engagement flows that reduce manual coordination and help keep participants informed and engaged throughout the study journey.",
    icon: MessagesSquare,
    image: null,

    imageAlt: null,
  },
  {
    title: "Recruitment Operations",
    description:
      "We centralize patient pipelines and recruitment workflows into one connected system, giving your team the clarity and capacity needed to manage recruitment as you grow.",
    icon: Workflow,
    image: null,

    imageAlt: null,
  },
] as const;
function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const target = Number(value.replace(/[^0-9]/g, ""));

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 70,
    damping: 20,
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCurrent(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue]);


  const prefix = value.startsWith("$") ? "$" : "";
  const suffix =
    value.includes("K")
      ? "K+"
      : value.includes("%")
        ? "%"
        : "";

  return (
    <span ref={ref}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
export const Features = () => {
  return (
    <>
<section

id="features"

className="mt-8 border-t border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:mt-28 md:px-8"

>
  <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">

  <BorderPlus className="-left-[11px] -top-[11px]" />
  <BorderPlus className="-right-[11px] -top-[11px]" />

    <ScaleYourPractice />

  </div>
</section>
<section className="border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8">
     <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">

    <BorderPlus className="-left-[11px] -top-[11px]" />
    <BorderPlus className="-right-[11px] -top-[11px]" />

    <BorderPlus className="-bottom-[11px] -left-[11px]" />
    <BorderPlus className="-bottom-[11px] -right-[11px]" />

    <ProviderImpact />

  </div>
</section>

<section className="mt-28 mb-28 border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8">
  <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">

  

  
    <BorderPlus className="-bottom-[11px] -right-[11px]" />

    <FrontOfficeEngine />

  </div>
</section>
    </>
  );
};

function ScaleYourPractice() {
  return (
    <>
      <div className="px-6 py-14 text-center md:py-15 border-b border-brand-border">

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

    pointer-events-none absolute

    bottom-8 left-1/2

    h-[160px] w-[160px]

    -translate-x-1/2

    rounded-full

    bg-brand-orange/10

    blur-[70px]

  "

/>
              {/* Bottom glow */}
  


              {/* SVG image */}
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

              <p className="mt-3 max-w-[520px] font-body text-[15px] font-light leading-[1.7] text-brand-muted">                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function ProviderImpact() {
  return (
    <>
<div className="border-b border-brand-border px-6 py-14 text-center md:py-15">

<h2 className="mx-auto mt-5 max-w-5xl font-heading text-[clamp(2.5rem,5vw,3.2rem)] font-[600] leading-[1.2] tracking-[-0.04em] text-brand-cocoa">
  Performance shapes your{" "}
  <span className="text-brand-orange"> site's future.</span>
</h2>
<p className="mx-auto mt-6 max-w-[600px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">

  Enrollment performance influences sponsor trust, study opportunities,

  and your ability to deliver research consistently.

</p>

</div>

<div className="grid grid-cols-2 border-b border-brand-border lg:grid-cols-4">
        {metrics.map((metric, index) => (
  <div

  key={metric.label}

  className={cn(

    "border-b border-brand-border px-5 py-8 md:px-12 lg:pl-12 lg:pr-5 lg:border-b-0",

    index !== metrics.length - 1 && "lg:border-r",

    index % 2 === 0 &&

    index < metrics.length - 1 &&

    "sm:border-r max-lg:border-r"

  )}

>
<p className="font-heading text-4xl font-[250] leading-none tracking-[-0.04em] text-brand-cocoa md:text-6xl">

<AnimatedMetric value={metric.value} />

</p>
<p className="mt-3 font-body text-base font-light leading-[1.7] text-brand-muted lg:max-w-[260px]">

  {metric.label}

</p>
          </div>
        ))}
      </div>

      <TestimonialBand />
    </>
  );
}

function TestimonialBand() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];
  const [particles, setParticles] = useState<
  {
    x: number;
    y: number;
    delay: number;
    duration: number;
  }[]
>([]);

useEffect(() => {
  setParticles(
    Array.from({ length: 18 }).map(() => ({
      x: Math.random() * 90,
      y: Math.random() * 80,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }))
  );
}, []);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
<div className="relative min-h-[300px] overflow-hidden bg-[#FFFAF6] px-8 py-10 md:px-12 md:py-12 lg:min-h-[360px]">

  {/* Premium background grid */}
  <div className="pointer-events-none absolute right-16 top-16">
  {particles.map((particle, i) => (
            <span
  key={i}
  className="
    absolute
    size-0.5
    rounded-full
    bg-brand-orange/80
    blur-[0.5px]
    animate-float-particle
  "
  style={{
    left: `${particle.x}px`,
    top: `${particle.y}px`,
    animationDelay: `${particle.delay}s`,
    animationDuration: `${particle.duration}s`,
  }}
/>
  ))}
</div>
<div
  className="
    pointer-events-none absolute inset-[1px]
    bg-[linear-gradient(to_right,#0A030005_1px,transparent_1px),linear-gradient(to_bottom,#0A030005_1px,transparent_1px)]
    bg-[size:32px_32px]
  "
/>


  {/* Large editorial quote */}

  <div

    className="

      pointer-events-none absolute 

      right-12 top-6

      font-heading

      text-[180px]

      leading-none

      text-brand-orange/10

    "

  >

    ”
    <div
  className="
    pointer-events-none absolute
    -right-24 -top-24
    h-[260px] w-[260px]
    rounded-full
    bg-brand-orange/10
    blur-[80px]
  "
/>

  </div>
  

      <div className="relative grid min-h-[120px] items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">

      <div>
      <p className="font-body text-sm pt-1.5 font-medium uppercase tracking-[0.12em] text-brand-muted/80">
        SOURCED FROM
  </p>

  <div className="relative mt-8 h-[90px] overflow-hidden">
    
   
{/* Fade top - desktop only */}
<div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-6 bg-linear-to-b from-[#FFFAF6] to-transparent md:block" />

{/* Fade bottom - desktop only */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-6 bg-linear-to-t from-[#FFFAF6] to-transparent md:block" />

    <div className="animate-source-scroll space-y-5">
      {[...evidenceSources, ...evidenceSources].map(
        (source, index) => (
          <p
            key={`${source}-${index}`}
            className="
              font-heading
              text-[20px]
              font-[400]
              tracking-[-0.03em]
              text-brand-cocoa/35
              leading-none
        
            "
          >
            {source}
          </p>
        )
      )}
    </div>
  </div>
</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <blockquote className="max-w-4xl font-body text-lg font-normal leading-[1.7] text-brand-cocoa md:text-[18px]">
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            <div className="mt-6">
              <p className="font-body text-sm font-normal text-brand-cocoa">
                {active.name}
              </p>

              <p className="mt-1 font-body text-sm font-light leading-[1.6] text-brand-muted">
                {active.role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      <div className="relative mt-6 flex items-center justify-between gap-6 md:mt-8">
        <div className="flex items-center gap-4 lg:ml-[316px]">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goToPrevious}
            className="flex size-8 items-center justify-center text-brand-cocoa transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goToNext}
            className="flex size-8 items-center justify-center text-brand-cocoa transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.name}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={
                activeIndex === index
                  ? "h-2 w-5 rounded-full bg-brand-orange transition-all"
                  : "size-2 rounded-full bg-brand-border transition-all hover:bg-brand-muted"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
function SolutionVisual({ activeIndex }: { activeIndex: number }) {
  const visuals = [
    <PatientAcquisitionVisual key="patient-acquisition" />,
    <SmartQualificationVisual key="smart-qualification" />,
    <PatientEngagementVisual key="patient-engagement" />,
    <RecruitmentOperationsVisual key="recruitment-operations" />,
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -16, scale: 0.98 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full"
      >
        {visuals[activeIndex]}
      </motion.div>
    </AnimatePresence>
  );
}
function FrontOfficeEngine() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const activeSolution = solutionItems[activeIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % solutionItems.length);
      setProgressKey((current) => current + 1);
    }, SOLUTION_ROTATE_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, progressKey]);

  const setActiveItem = (index: number) => {
    setActiveIndex(index);
    setProgressKey((current) => current + 1);
  };

  return (
    <div className="grid min-h-[760px] lg:grid-cols-[1fr_1fr]">
      <div className="order-2 flex flex-col border-b border-brand-border px-8 py-14 md:px-12 lg:order-2 lg:border-b-0 lg:border-l lg:px-14">  
            <div>
      <h2 className="max-w-3xl font-heading text-[clamp(2.5rem,5vw,3rem)] font-[600] leading-[1.2] tracking-[-0.04em] text-brand-cocoa">
  A complete recruitment{" "}
  <span className="text-brand-orange">infrastructure</span>{" "}
  built and managed around your site.
</h2>

        <p className="mt-6 max-w-[680px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">          Weforge handles patient acquisition, pre-qualification, engagement, and recruitment workflows, helping your team focus on the right participants while reducing the manual work behind enrollment.
        </p>
      </div>

      <div className="mt-auto h-[490px] space-y-6 overflow-hidden pt-16 md:h-[550px]">
              {solutionItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <button
                type="button"
                key={item.title}
                onClick={() => setActiveItem(index)}
                className="group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                aria-current={isActive ? "true" : undefined}
              >
                {/* ICON + TITLE ROW */}
                <div className="grid grid-cols-[52px_1fr] items-center gap-0
 md:grid-cols-[72px_1fr] md:gap-6">
                <span

className="

  flex size-10 md:size-16 shrink-0 items-center justify-center

  bg-[#FFF0E8]

  text-brand-orange

  transition-colors

"

>

<Icon className="size-6 md:size-7 stroke-[1.35]" />

</span>

<h3

  className={`

    font-body 

    text-[21px] md:text-[23px]

    font-[500] 

    leading-[1.15] 

    tracking-[-0.03em] 

    transition-colors

    ${

      isActive

        ? "text-brand-cocoa"

        : "text-brand-muted group-hover:text-brand-cocoa"

    }

  `}

>

  {item.title}

</h3>
                </div>

                {/* DESCRIPTION */}
               {/* DESCRIPTION */}
               <motion.div
  animate={{
    height: isActive ? "auto" : 0,
    opacity: isActive ? 1 : 0,
  }}
  transition={{
    height: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
    opacity: {
      duration: 0.25,
    },
  }}
  className="
    ml-[52px]
    mt-2
    overflow-hidden
    md:ml-[96px]
  "
>
  <p className="max-w-xl font-body text-base font-light leading-[1.7] text-brand-muted">
    {item.description}
  </p>

  {isActive && (
    <div className="mt-6 h-px max-w-[505px] overflow-hidden bg-brand-border">
      <span
        key={progressKey}
        className="block h-full origin-left animate-[front-office-progress_8s_linear_forwards] bg-brand-orange"
      />
    </div>
  )}
</motion.div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="order-1 flex h-[550px] items-center justify-center overflow-hidden lg:order-1 lg:h-auto">

<SolutionBackground className="flex h-full w-full items-center justify-center">

  <SolutionVisual activeIndex={activeIndex} />

</SolutionBackground>

</div>
    </div>
  );
}

