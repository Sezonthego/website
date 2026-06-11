"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../logo";


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

const problemCards = [
  {
    title: "Patient Reach",
    description:
      "The right patients are often out there, but traditional recruitment approaches make them difficult to find and engage, leaving sites without a consistent way to generate patient interest.",
    image: "/assets/patient-reach-blur.svg",
    imageAlt: "Patient reach illustration",
    width: 500,
    height: 300,
  },
  {
    title: "Patient Quality",
    description:
      "Patient volume alone doesn't guarantee enrollment. Without a clear pre-qualification process, teams spend valuable time filtering patients who may never match study requirements.",
    image: "/assets/patient-quality-blur.svg",
    imageAlt: "Patient quality illustration",
    width: 450,
    height: 320,
  },
  {
    title: "Manual Overload",
    description:
      "Coordinators handle repetitive calls, follow-ups, and reminders manually, increasing workload and making it harder to keep participants engaged throughout the study.",
    image: "/assets/manual-overload-blur.svg",
    imageAlt: "Manual overload illustration",
    width: 410,
    height: 320,
  },
  {
    title: "Fragmented Systems",
    description:
      "Many sites still rely on traditional outreach, spreadsheets, and disconnected tools that make recruitment harder to track, optimize, and scale.",
    image: "/assets/fragmented-systems-blur.svg",
    imageAlt: "Fragmented systems illustration",
    width: 410,
    height: 320,
  },
] as const;

const metrics = [
  { value: "80%", label: "Trials miss timelines" },
  { value: "48%", label: "Sites miss expectations" },
  { value: "85%", label: "Patients unaware of trials" },
  { value: "$40K+", label: "Sponsor cost per delay day" },
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


const SOLUTION_ROTATE_MS = 30_000;


const solutionItems = [
  {
    title: "Patient Acquisition",
    description:
      "We help you reach and attract potential participants through targeted recruitment channels built around your studies.",
    icon: UserSearch,
    image: "/image/acquisition-paths-glass.webp",
    imageAlt: "Illustration of targeted patient acquisition channels",
  },
  {
    title: "Smart Qualification",
    description:
      "We apply study-specific qualification flows before patients reach your team, helping coordinators focus on participants more likely to match study requirements.",
    icon: ClipboardCheck,
    image: "/image/recruitment-pages-glass.webp",
    imageAlt: "Illustration of study-specific qualification flows",
  },
  {
    title: "Patient Engagement",
    description:
      "We create structured patient engagement flows that reduce manual coordination and help keep participants informed and engaged throughout the study journey.",
    icon: MessagesSquare,
    image: "/image/implement.webp",
    imageAlt: "Illustration of structured patient engagement flows",
  },
  {
    title: "Recruitment Operations",
    description:
      "We centralize patient pipelines and recruitment workflows into one connected system, giving your team the clarity and capacity needed to manage recruitment as you grow.",
    icon: Workflow,
    image: "/image/operate.webp",
    imageAlt: "Illustration of centralized recruitment operations",
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
        className="mt-8 border-t border-[#d8d1bf] bg-brand-ivory px-4 text-brand-cocoa md:mt-28 md:pb-24d"
      >
        <div className="container mx-auto  border-x border-brand-border bg-brand-ivory">
          <ScaleYourPractice />
        </div>
      </section>

      <section className="border-y border-[#d8d1bf] bg-brand-ivory px-4 text-brand-cocoa">
        <div className="container mx-auto  border-x border-brand-border bg-brand-ivory">
          <ProviderImpact />
        </div>
      </section>

      <section className="mt-16 border-y border-[#d8d1bf] bg-brand-ivory px-4 text-brand-cocoa">
        <div className="container mx-auto border-x border-brand-border bg-brand-ivory">
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

        <h2 className="mx-auto mt-5 max-w-4xl font-heading text-[clamp(2rem,4vw,3rem)] font-[300] leading-[1.3] tracking-[-0.02em] text-brand-cocoa">          Recruitment shouldn&apos;t be the reason your site falls behind.
        </h2>
        <p className="mx-auto mt-6 max-w-[680px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[17px]">          Delayed enrollment doesn&apos;t just impact timelines. It increases
          operational pressure, affects sponsor relationships, and can limit
          your ability to secure and deliver more studies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {problemCards.map((card, index) => (
          <article
            key={card.title}
            className={cn(
              "border-brand-border",
              index < problemCards.length - 1 && "border-b",
              index >= 2 && "sm:border-b-0",
              index % 2 === 0 && index < problemCards.length - 1 && "sm:border-r"
            )}
          >

           <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-b border-brand-border bg-[#FCF8F3] px-0 py-0 md:min-h-[364px]">
           <div className="absolute inset-0 overflow-hidden">
  {Array.from({ length: 18 }).map((_, i) => (
    <span
      key={i}
      className="particle"
      style={{
        "--x": `${Math.random() * 100}%`,
        "--y": `${Math.random() * 100}%`,
        "--delay": `${Math.random() * -10}s`,
        "--size": `${Math.random() * 3 + 3}px`,
      } as React.CSSProperties}
    />
  ))}
</div>

{/* Bottom glow */}
<div
  className="
    absolute
    bottom-[-350px]
    left-1/2
    z-0
    h-[260px]
    w-[520px]
    -translate-x-1/2
    rounded-full
    bg-[#FF4F00]/25
    blur-[100px]
  "
/>

{/* SVG image */}
<Image
  src={card.image}
  alt={card.imageAlt}
  width={card.width}
  height={card.height}
  className="relative z-10"
/>

</div>
            <div className="px-9 py-10 md:px-12">
              <h3 className="font-body text-xl font-normal text-brand-cocoa">                {card.title}
              </h3>

              <p className="mt-3 max-w-[520px] font-body text-base font-light leading-[1.7] text-brand-muted">                {card.description}
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
      <div className="border-b border-brand-border px-6 py-8 text-center md:py-10">
        <h2 className="mx-auto mt-5 max-w-4xl font-heading text-[clamp(2rem,4vw,3rem)] pb-5 font-[300] leading-[1.3] tracking-[-0.02em] text-brand-cocoa">          Performance shapes your future.
        </h2>

      </div>

      <div className="grid border-b border-brand-border sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={cn(
              "border-b border-brand-border px-9 py-10 md:px-12 lg:border-b-0",
              index !== metrics.length - 1 && "lg:border-r",
              index % 2 === 0 &&
              index < metrics.length - 1 &&
              "sm:border-r max-lg:border-r"
            )}
          >
        <p className="font-heading text-5xl font-[300] leading-none text-brand-cocoa md:text-6xl">
  <AnimatedMetric value={metric.value} />
</p>
            <p className="mt-3 font-body text-base font-light leading-[1.7] text-brand-muted">              {metric.label}
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
    <div className="relative min-h-[300px] overflow-hidden px-8 py-10 md:px-12 md:py-12 lg:min-h-[360px]">
      <div
        className="pointer-events-none absolute inset-x-[-8%] bottom-0 h-64 bg-[radial-gradient(72%_95%_at_50%_116%,rgba(255,79,0,0.44)_0%,rgba(255,176,114,0.28)_36%,rgba(255,243,230,0.46)_58%,rgba(255,253,249,0)_82%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-[4%] bottom-0 h-40 bg-[radial-gradient(78%_96%_at_50%_106%,rgba(43,35,88,0.18)_0%,rgba(255,79,0,0.2)_42%,rgba(255,253,249,0)_78%)] blur-2xl"
        aria-hidden="true"
      />

<div className="relative grid min-h-[120px] items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">

<div>
  <p className="translate-y-1.75 font-body text-sm font-light uppercase tracking-[0.12em] text-brand-muted">
    Industry evidence
  </p>
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
    <blockquote className="max-w-4xl font-body text-lg font-light leading-[1.7] text-brand-cocoa md:text-[18px]">
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
<div className="order-2 flex flex-col border-b border-brand-border px-8 py-14 md:px-12 lg:order-2 lg:border-b-0 lg:border-l lg:px-14">      <div>
  <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-[300] leading-[1.3] tracking-[-0.02em] text-brand-cocoa">
  A complete recruitment system built and managed around your site.
  </h2>

  <p className="mt-6 max-w-[680px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[17px]">
  WeForge handles patient acquisition, pre-qualification, engagement, and recruitment workflows, helping your team focus on the right participants while reducing the manual work behind enrollment.
  </p>
</div>

        <div className="mt-auto space-y-6 pt-16">
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
              <div className="grid grid-cols-[72px_1fr] items-center gap-6">
                <span
                  className={`
                    flex size-16 shrink-0 items-center justify-center
                    bg-[#F7F3EC]
                    transition-colors
                    ${
                      isActive
                        ? "text-brand-cocoa"
                        : "text-brand-muted"
                    }
                  `}
                >
                  <Icon className="size-5" />
                </span>
            
                <h3
                  className={`
                    font-body text-[22px] font-normal leading-none transition-colors
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
              {isActive && (
                <div className="ml-[96px] mt-3">
                  <p className="max-w-xl font-body text-base font-light leading-[1.7] text-brand-muted">
                    {item.description}
                  </p>
            
                  <div className="mt-4 h-px max-w-[505px] overflow-hidden bg-brand-border">
                    <span
                      key={progressKey}
                      className="block h-full origin-left animate-[front-office-progress_30s_linear_forwards] bg-brand-orange"
                    />
                  </div>
                </div>
              )}
            </button>
            );
          })}
        </div>
      </div>

      <div className="relative min-h-[420px] overflow-hidden bg-brand-peach/25 lg:min-h-[620px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeSolution.image}
              alt={activeSolution.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={activeIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
