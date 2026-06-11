"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { LogoIcon } from "../logo";
import { cn } from "@/lib/utils";

const problemCards = [
  {
    title: "Patient Reach",
    description:
      "The right patients are often out there, but traditional recruitment approaches make them difficult to find and engage, leaving sites without a consistent way to generate patient interest.",
    visual: <CaptureVisual />,
  },
  {
    title: "Patient Quality",
    description:
      "Patient volume alone doesn't guarantee enrollment. Without a clear pre-qualification process, teams spend valuable time filtering patients who may never match study requirements.",
    visual: <ConvertVisual />,
  },
  {
    title: "Manual Overload",
    description:
      "Coordinators handle repetitive calls, follow-ups, reminders, and patient communication manually, increasing workload and making it harder to keep participants engaged throughout the study.",
    visual: <RecoverVisual />,
  },
  {
    title: "Fragmented Systems",
    description:
      "Many sites still rely on traditional outreach, spreadsheets, and disconnected tools that make recruitment harder to track, optimize, and scale.",
    visual: <FragmentedSystemsVisual />,
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

      <div className="grid lg:grid-cols-4">
        {problemCards.map((card) => (
          <article
            key={card.title}
            className="border-b border-brand-border last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="flex min-h-[320px] items-center justify-center overflow-hidden border-b border-brand-border px-6 py-12 md:min-h-[364px]">
              {card.visual}
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

function BrandTile({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex size-[118px] items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,#fffdf9_0%,#fff3e6_100%)] text-brand-cocoa shadow-[0_0_38px_rgba(255,79,0,0.2),0_18px_45px_rgba(32,21,21,0.08)] ${className}`}
    >
      <LogoIcon className="size-16" />
    </div>
  );
}

function FragmentedSystemsVisual() {
  return (
    <div className="relative h-[246px] w-[420px] max-w-none origin-center scale-[0.82] sm:scale-100">
      <div className="absolute left-2 top-6 w-[118px] rounded-lg bg-white p-3 shadow-[0_12px_24px_rgba(32,21,21,0.08)]">
        <div className="mb-3 h-2 w-10 rounded-full bg-[#ded9cc]" />
        <div className="space-y-2">
          {[72, 88, 64].map((width) => (
            <div
              key={width}
              className="h-1.5 rounded-full bg-[#ddd8cb]"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-4 top-10 w-[132px] rounded-lg bg-white p-3 shadow-[0_12px_24px_rgba(32,21,21,0.08)]">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }, (_, index) => (
            <div
              key={index}
              className="size-5 rounded-[2px] bg-[#bfe8da]"
            />
          ))}
        </div>
      </div>
      <div className="absolute left-[118px] top-[92px] w-[88px] border-t-4 border-dotted border-[#a79f92]" />
      <div className="absolute right-[118px] top-[118px] w-[72px] border-t-4 border-dotted border-[#a79f92] opacity-60" />
      <BrandTile className="absolute left-1/2 top-[88px] -translate-x-1/2 size-[92px] rounded-[18px] [&_svg]:size-12" />
      <div className="absolute bottom-2 left-1/2 flex w-[280px] -translate-x-1/2 items-center justify-between gap-3">
        <div className="rounded-md border border-brand-border bg-brand-peach/70 px-3 py-2 font-clarion-body text-[10px] font-semibold text-brand-muted">
          Outreach
        </div>
        <div className="rounded-md border border-brand-border bg-brand-peach/70 px-3 py-2 font-clarion-body text-[10px] font-semibold text-brand-muted">
          Spreadsheet
        </div>
        <div className="rounded-md border border-brand-border bg-brand-peach/70 px-3 py-2 font-clarion-body text-[10px] font-semibold text-brand-muted">
          CRM
        </div>
      </div>
    </div>
  );
}

function CaptureVisual() {
  return (
    <div className="relative h-[246px] w-[420px] max-w-none origin-center scale-[0.82] sm:scale-100">
      <div className="absolute left-2 top-[62px] flex size-11 items-center justify-center rounded-full bg-[#3194aa] text-white shadow-[0_10px_22px_rgba(49,148,170,0.18)]">
        <Phone className="size-5" />
      </div>
      <div className="absolute left-[74px] right-[70px] top-[82px] border-t-4 border-dotted border-[#a79f92]" />
      <BrandTile className="absolute left-1/2 top-0 -translate-x-1/2" />
      <div className="absolute right-4 top-[62px] flex size-11 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_10px_22px_rgba(255,79,0,0.2)]">
        <Check className="size-6" />
      </div>
      <div className="absolute left-1/2 top-[120px] h-10 -translate-x-1/2 border-l-4 border-dotted border-[#70c7d7]" />
      <div className="absolute bottom-0 left-1/2 flex w-[320px] -translate-x-1/2 items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-[0_12px_30px_rgba(32,21,21,0.08)]">
        <div className="flex size-14 items-center justify-center rounded-full bg-[#e3ded4] text-brand-cocoa">
          <UserRound className="size-8" />
        </div>
        <div>
          <p className="font-clarion-body text-lg font-semibold text-brand-cocoa">
            Dr. Marcus Breyer
          </p>
          <p className="mt-1 font-clarion-body text-base text-brand-muted">
            Mon 24, 9:40 AM
          </p>
        </div>
      </div>
    </div>
  );
}

function ConvertVisual() {
  return (
    <div className="relative h-[268px] w-[430px] max-w-none origin-center scale-[0.78] sm:scale-100">
      <DocumentPreview className="absolute left-4 top-4 rotate-0" />
      <DocumentPreview className="absolute left-[176px] top-4 opacity-80" compact />
      <div className="absolute left-[248px] top-0 h-[268px] w-1 bg-[#74d6e0] shadow-[0_0_20px_rgba(116,214,224,0.8)]" />
      <BrandTile className="absolute left-[228px] top-[116px] size-13 rounded-xl shadow-[0_0_24px_rgba(255,79,0,0.2),0_10px_20px_rgba(32,21,21,0.08)] [&_svg]:size-8" />
      <div className="absolute right-2 top-52 h-10 w-[122px] rounded-b-md bg-[#c6f8ee] opacity-80 blur-[1px]" />
      <div className="absolute right-8 top-[52px] flex w-[164px] items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-[0_12px_24px_rgba(32,21,21,0.1)]">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#e3ded4] text-brand-cocoa">
          <UserRound className="size-6" />
        </div>
        <div>
          <p className="font-clarion-body text-[11px] font-semibold">
            Dr. Mira Solano
          </p>
          <p className="mt-0.5 font-clarion-body text-[10px] text-brand-muted">
            Thu 13, 11:00 AM
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-[116px] w-[164px] rounded-lg bg-white p-3 shadow-[0_12px_24px_rgba(32,21,21,0.1)]">
        <p className="font-clarion-body text-[11px] text-brand-muted">
          EHR Notes:
        </p>
        <div className="mt-3 space-y-2">
          {[88, 96, 80, 92, 50].map((width) => (
            <div
              key={width}
              className="h-2 rounded-full bg-[#ddd8cb]"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-11 flex size-5 items-center justify-center rounded-full bg-brand-orange text-white">
        <Check className="size-3.5" />
      </div>
    </div>
  );
}

function RecoverVisual() {
  const cells = Array.from({ length: 35 }, (_, index) => index);

  return (
    <div className="relative h-[246px] w-[430px] max-w-none origin-center scale-[0.78] sm:scale-100">
      <div className="absolute left-4 top-3 rounded-lg bg-white p-3 shadow-[0_13px_30px_rgba(32,21,21,0.08)]">
        <div className="mb-4 h-2.5 w-14 rounded-full bg-[#ded9cc]" />
        <div className="grid grid-cols-5 gap-1">
          {cells.map((cell) => (
            <div
              key={cell}
              className={`size-6 rounded-[2px] ${
                cell === 17 || cell === 23
                  ? "bg-[#e0d9cf]"
                  : "bg-[#bfe8da]"
              }`}
            />
          ))}
        </div>
        <div className="absolute left-[62px] top-[62px] flex size-16 items-center justify-center rounded-full border-2 border-white/90 bg-white/20">
          <div className="flex h-10 w-12 items-center justify-center rounded-md bg-[#ffd9cf] font-clarion-body text-sm font-semibold text-brand-orange">
            x
          </div>
        </div>
      </div>
      <div className="absolute left-[150px] top-[96px] w-[204px] border-t-4 border-dotted border-[#71c7d4]" />
      <BrandTile className="absolute left-[166px] top-[82px] size-12 rounded-xl shadow-[0_0_24px_rgba(255,79,0,0.2),0_10px_20px_rgba(32,21,21,0.08)] [&_svg]:size-7" />
      <div className="absolute right-8 top-[78px] flex w-[164px] items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-[0_12px_24px_rgba(32,21,21,0.1)]">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#e3ded4] text-brand-cocoa">
          <UserRound className="size-6" />
        </div>
        <div>
          <p className="font-clarion-body text-[11px] font-semibold">
            Dr. Sophia Kellen
          </p>
          <p className="mt-0.5 font-clarion-body text-[10px] text-brand-muted">
            Fri 21, 8:50 AM
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-[90px] flex size-11 items-center justify-center rounded-full bg-[#9bdcbc] text-brand-cocoa shadow-[0_10px_22px_rgba(155,220,188,0.18)]">
        <CircleDollarSign className="size-6" />
      </div>
    </div>
  );
}

function DocumentPreview({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`h-[210px] bg-white p-3 shadow-[0_8px_18px_rgba(32,21,21,0.08)] ring-1 ring-brand-border ${
        compact ? "w-[84px]" : "w-[154px]"
      } ${className}`}
    >
      <div className="mb-5 flex items-center gap-2">
        <FileText className="size-4 text-brand-muted" />
        <div className="h-2 w-8 border border-[#cfc7b8]" />
      </div>
      <div className="mb-6 flex justify-between">
        <div className="h-1.5 w-8 rounded-full bg-[#cfc7b8]" />
        <CalendarDays className="size-4 text-brand-muted" />
      </div>
      <div className="space-y-2">
        {Array.from({ length: compact ? 8 : 10 }, (_, index) => (
          <div
            key={index}
            className="h-1 rounded-full bg-[#b9ad9c]"
            style={{ width: `${compact ? 42 + (index % 2) * 20 : 52 + (index % 4) * 12}%` }}
          />
        ))}
      </div>
      <div className="mt-12 flex items-center justify-between">
        <div className="h-1.5 w-4 rounded-full bg-[#b9ad9c]" />
        <div className="h-1.5 w-8 rounded-full bg-[#b9ad9c]" />
      </div>
    </div>
  );
}
