"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { LogoIcon } from "../logo";
import { cn } from "@/lib/utils";

const problemCards = [
  {
    title: "Patient Reach",
    description:
      "The right patients are often out there, but traditional recruitment approaches make them difficult to find and engage, leaving sites without a consistent way to generate patient interest.",
    image: "/assets/patient-reach-blur.svg",
    imageAlt: "Patient reach illustration",
  },
  {
    title: "Patient Quality",
    description:
      "Patient volume alone doesn't guarantee enrollment. Without a clear pre-qualification process, teams spend valuable time filtering patients who may never match study requirements.",
    image: "/assets/patient-quality-blur.svg",
    imageAlt: "Patient quality illustration",
  },
  {
    title: "Manual Overload",
    description:
      "Coordinators handle repetitive calls, follow-ups, reminders, and patient communication manually, increasing workload and making it harder to keep participants engaged throughout the study.",
    image: "/assets/manual-overload-blur.svg",
    imageAlt: "Manual overload illustration",
  },
  {
    title: "Fragmented Systems",
    description:
      "Many sites still rely on traditional outreach, spreadsheets, and disconnected tools that make recruitment harder to track, optimize, and scale.",
    image: "/assets/fragmented-systems-blur.svg",
    imageAlt: "Fragmented systems illustration",
  },
] as const;

const metrics = [
  { value: "80%", label: "Trials miss enrollment timelines" },
  { value: "48%", label: "Sites miss enrollment expectations" },
  { value: "85%", label: "Patients unaware of trial opportunities" },
  { value: "$40K+", label: "Sponsor cost per trial delay day" },
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
    icon: Megaphone,
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
    icon: MessageCircle,
    image: "/image/implement.webp",
    imageAlt: "Illustration of structured patient engagement flows",
  },
  {
    title: "Recruitment Operations",
    description:
      "We centralize patient pipelines and recruitment workflows into one connected system, giving your team the clarity and capacity needed to manage recruitment as you grow.",
    icon: LayoutDashboard,
    image: "/image/operate.webp",
    imageAlt: "Illustration of centralized recruitment operations",
  },
] as const;

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
      <div className="px-6 py-14 text-center md:py-20 border-b border-brand-border">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
          The hidden cost of recruitment
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl font-clarion-display text-4xl font-light leading-none tracking-normal text-brand-cocoa md:text-5xl">
          Recruitment shouldn&apos;t be the reason your site falls behind.
        </h2>
        <p className="mx-auto mt-7 max-w-3xl font-clarion-body text-lg leading-8 text-brand-muted md:text-2xl">
          Delayed enrollment doesn&apos;t just impact timelines. It increases
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
            <div className="flex min-h-[320px] items-center justify-center overflow-hidden border-b border-brand-border bg-brand-ivory px-4 py-8 md:min-h-[364px]">
              <Image
                src={card.image}
                alt={card.imageAlt}
                width={420}
                height={300}
                unoptimized
                className="h-auto w-full max-w-[420px] object-contain"
              />
            </div>
            <div className="px-9 py-10 md:px-12">
              <h3 className="font-clarion-body text-2xl font-medium text-brand-cocoa">
                {card.title}
              </h3>
              <p className="mt-3 max-w-[520px] font-clarion-body text-lg leading-7 text-brand-muted">
                {card.description}
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
        <h2 className="mx-auto max-w-6xl font-clarion-display text-4xl font-light leading-tight tracking-normal text-brand-cocoa md:text-5xl">
          Recruitment performance shapes the future of your site.
        </h2>
        <p className="mx-auto mt-5 max-w-4xl font-clarion-body text-lg leading-8 text-brand-muted md:text-xl">
          Enrollment success impacts more than study timelines. It influences
          operational efficiency, sponsor relationships, and your ability to
          secure and deliver more research opportunities.
        </p>
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
            <p className="font-clarion-display text-5xl font-light leading-none text-brand-cocoa md:text-6xl">
              {metric.value}
            </p>
            <p className="mt-3 font-clarion-body text-lg leading-7 text-brand-muted">
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
    <div className="relative min-h-[430px] overflow-hidden px-8 py-12 md:px-12 md:py-14 lg:min-h-[492px]">
      <div
        className="pointer-events-none absolute inset-x-[-8%] bottom-0 h-64 bg-[radial-gradient(72%_95%_at_50%_116%,rgba(255,79,0,0.44)_0%,rgba(255,176,114,0.28)_36%,rgba(255,243,230,0.46)_58%,rgba(255,253,249,0)_82%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-[4%] bottom-0 h-40 bg-[radial-gradient(78%_96%_at_50%_106%,rgba(43,35,88,0.18)_0%,rgba(255,79,0,0.2)_42%,rgba(255,253,249,0)_78%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <LogoIcon className="size-12 text-brand-cocoa" />
            <div className="leading-none">
              <p className="font-clarion-body text-4xl font-bold tracking-normal text-brand-cocoa">
                weforge
              </p>
              <p className="mt-1 font-clarion-body text-xs font-medium italic text-brand-muted">
                clinical
              </p>
            </div>
          </div>
          <p className="mt-8 font-clarion-body text-lg leading-7 text-brand-muted">
            {active.name}
            <br />
            {active.role}
          </p>
        </div>

        <div>
          <blockquote className="max-w-5xl font-clarion-body text-xl leading-8 text-brand-cocoa md:text-2xl md:leading-10">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
        </div>
      </div>

      <div className="relative mt-18 flex items-center justify-between gap-6 md:mt-24">
        <div className="flex items-center gap-4 lg:ml-[326px]">
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
      <div className="flex flex-col border-b border-brand-border px-8 py-14 lg:border-b-0 lg:border-r md:px-12 lg:px-14">
        <div>
          <h2 className="font-clarion-display text-4xl font-light leading-tight tracking-normal text-brand-cocoa md:text-5xl">
            Connected recruitment systems for your site
          </h2>
          <p className="mt-4 max-w-2xl font-clarion-body text-lg leading-7 text-brand-muted">
            Four connected capabilities that help you attract, qualify, engage,
            and manage participants through every stage of the study journey.
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
                className="group grid w-full grid-cols-[56px_1fr] gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`flex size-14 items-center justify-center ${
                    isActive ? " text-brand-cocoa" : " text-brand-muted"
                  }`}
                >
                  <Icon className="size-6" />
                </span>
                <span className="block border-b border-transparent pb-4">
                  <span
                    className={`block font-clarion-body text-2xl leading-8 transition-colors ${
                      isActive
                        ? "text-brand-cocoa"
                        : "text-brand-muted group-hover:text-brand-cocoa"
                    }`}
                  >
                    {item.title}
                  </span>
                  {isActive ? (
                    <>
                      <span className="mt-3 block max-w-xl font-clarion-body text-lg leading-7 text-brand-muted">
                        {item.description}
                      </span>
                      <span className="mt-3 block h-px max-w-[505px] overflow-hidden bg-brand-border">
                        <span
                          key={progressKey}
                          className="block h-full origin-left animate-[front-office-progress_30s_linear_forwards] bg-brand-orange"
                        />
                      </span>
                    </>
                  ) : null}
                </span>
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
