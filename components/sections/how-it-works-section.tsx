"use client";
import Link from "next/link";
import {
  BookOpen,
  Bot,
  Check,
  FileCheck2,
  Globe2,
  Headphones,
  Hospital,
  Phone,
  Route,
  SlidersHorizontal,
  MessagesSquare,
  Sparkles,
  UserRound,
  Workflow,
  Zap,
} from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";


import { BorderPlus } from "@/components/border-plus";
import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your studies, recruitment goals, and current processes to create a system that fits your site.",
    visual: <WorkflowVisual />,
  },
  {
    number: "02",
    title: "Implement",
    description:
      "We build and configure your recruitment pages, qualification flows, patient engagement, and operational systems.",
    visual: <AgentVisual />,
  },
  {
    number: "03",
    title: "Scale",
    description:
      "We continuously improve your recruitment system to help your site manage ongoing and future studies.",
    visual: <ChannelVisual />,
  },
] as const;

export function GetStartedSection() {
  return (
    <section

      id="how-it-works"

      className="my-28 border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8"

    >
      <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">

        <BorderPlus className="-left-[11px] -top-[11px] bg-brand-ivory" />
        <BorderPlus className="-right-[11px] -top-[11px] bg-brand-ivory" />

        <BorderPlus className="-bottom-[11px] -left-[11px] bg-brand-ivory" />
        <BorderPlus className="-bottom-[11px] -right-[11px] bg-brand-ivory" />

        <div className="overflow-hidden">
          <div className="px-6 py-20 text-center md:py-24">
            <p className="font-body text-sm font-light uppercase tracking-[0.12em] text-brand-muted">
              THE WEFORGE APPROACH
            </p>

            <h2 className="mx-auto mt-5 max-w-5xl font-heading text-[clamp(2.5rem,5vw,3.2rem)] font-[600] leading-[1.2] tracking-[-0.04em] text-brand-cocoa">
              Better recruitment, without {" "}
              <span className="text-brand-orange">
                disrupting your site.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[500px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">
              We build and optimize your recruitment infrastructure while your team stays focused on delivering clinical studies.
            </p>
            <Link
  href="https://cal.com/YOUR-CAL-LINK"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-14 inline-flex min-h-12 items-center
    rounded-none
    bg-brand-orange
    px-5 py-3
    text-[13px]
    font-medium
    uppercase
    text-brand-ivory
    shadow-[0_14px_30px_rgba(255,79,0,0.20)]
    transition-colors
    hover:bg-brand-orange/90
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-brand-orange
    focus-visible:ring-offset-2
    focus-visible:ring-offset-brand-ivory
  "
>
  Discuss your needs
</Link>
          </div>

          <div className="grid grid-cols-1 border-t border-brand-border lg:grid-cols-3">
            {steps.map((step, index) => (
              <article

                key={step.number}

                className={cn(

                  "min-w-0 border-brand-border",

                  index !== steps.length - 1 && "border-b lg:border-b-0 lg:border-r"

                )}

              >
                <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden border-b border-brand-border bg-[#FCF8F3] p-8 md:min-h-[390px]">

                  <span className="absolute left-0 top-0 bg-[#FFF0E8] px-4 py-3 font-heading text-4xl font-[300] leading-none text-brand-orange md:text-5xl">
                    {step.number}
                  </span>

                  {step.visual}
                </div>

                <div className="px-9 py-10 md:px-12">
                  <h3 className="font-body text-[23px] font-[500] leading-[1.15] tracking-[-0.03em] text-brand-cocoa">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[520px] font-body text-[15px] font-light leading-[1.7] text-brand-muted">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowVisual() {
  const nodes = [
    {
      label: "Studies",
      icon: Hospital,
      className: "left-1/2 top-8 -translate-x-1/2",
    },
    {
      label: "Goals",
      icon: FileCheck2,
      className: "right-4 top-1/2 -translate-y-1/2",
    },
    {
      label: "Processes",
      icon: Workflow,
      className: "bottom-8 left-1/2 -translate-x-1/2",
    },
  ] as const;

  return (
    <div className="relative flex size-72 items-center justify-center md:size-80">

      {/* BACKGROUND */}
      <div className="absolute inset-10 rounded-full bg-brand-orange/5 blur-3xl" />


      {/* MAIN CARD */}
      <div
        className="
          relative z-20
          w-[210px]
          border border-brand-border
          bg-brand-ivory
          p-5
        "
      >

        <div className="flex items-center gap-3">

          <div className="flex size-10 items-center justify-center bg-brand-orange/10">
            <Hospital className="size-5 text-brand-orange" />
          </div>


          <div>
            <p className="text-sm font-medium text-brand-cocoa">
              Site Review
            </p>

            <p className="mt-1 text-xs text-brand-muted">
              Discovery phase
            </p>
          </div>

        </div>


        <div className="mt-6 space-y-3">

          {["100%", "75%", "55%"].map((width, index) => (

            <motion.div
              key={width}
              className="h-2 bg-brand-border/70"
              initial={{
                width: 0,
              }}
              animate={{
                width,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 3,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            />

          ))}

        </div>

      </div>



      {/* FLOATING ITEMS */}
      {nodes.map(({ label, icon: Icon, className }) => (

        <div
          key={label}
          className={cn(
            `
            absolute
            z-30
            flex items-center gap-2
            border border-brand-border
            bg-white/90
            px-4 py-2
            text-sm
            text-brand-cocoa
            shadow-[0_10px_30px_rgba(255,79,0,0.1)]
            `,
            className
          )}
        >

          <Icon className="size-4 text-brand-orange" />

          {label}

        </div>

      ))}

    </div>
  );
}

function AgentVisual() {
  const rows = [
    {
      label: "Recruitment page",
      icon: Globe2,
    },
    {
      label: "Qualification flow",
      icon: FileCheck2,
    },
    {
      label: "Patient engagement",
      icon: MessagesSquare,
    },

  ] as const;


  return (
    <div
      className="
    relative
    w-full
    max-w-[250px]
    border border-brand-border
    bg-brand-ivory
    p-3
    shadow-[0_24px_80px_rgba(255,79,0,0.1)]
  "
    >

      {/* GLOW */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand-orange/15 blur-3xl" />





      {/* BUILD ITEMS */}
      <div className="space-y-3">

        {rows.map(({ label, icon: Icon }) => (

          <div
            key={label}
            className="
              flex
              items-center
              justify-between
              border border-brand-border
              bg-white/70
              px-3 py-2
            "
          >

            <div className="flex items-center gap-3">

              <Icon className="size-4 text-brand-orange" />

              <span className="text-sm text-brand-cocoa">
                {label}
              </span>

            </div>


            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 1],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                delay: rows.findIndex((r) => r.label === label) * 0.4,
              }}
            >

              <Check className="size-4 text-brand-orange" />

            </motion.div>


          </div>

        ))}

      </div>

    </div>
  );
}

function ChannelVisual() {
  const count = useMotionValue(0);

  const patients = useTransform(count, (value) =>
    `+${Math.round(value * 840)}`
  );

  const growth = useTransform(count, (value) =>
    `+${Math.round(value * 38)}%`
  );

  useEffect(() => {
    const controls = animate(count, [0, 1, 1], {
      duration: 4,
      repeat: Infinity,
      times: [0, 0.55, 1],
      ease: "easeInOut",
    });

    return controls.stop;
  }, []);
  const metrics = [

    {

      label: "Patients reached",

      value: "+840",

    },

  ] as const;


  return (
    <div className="relative flex size-64 items-center justify-center md:size-72">

      {/* BACKGROUND */}
      <div className="absolute inset-10 rounded-full blur-3xl" />


      {/* MAIN CARD */}
      <div
        className="
          relative
          z-20
          w-[220px]
          border border-brand-border
          bg-brand-ivory
          p-5
          shadow-[0_24px_80px_rgba(255,79,0,0.1)]
        "
      >


        {/* METRICS */}
        <div className="mt-0 space-y-3">

          {metrics.map((metric) => (

            <div
              key={metric.label}
              className="
                flex
                items-center
                justify-between
                border border-brand-border
                bg-white/70
                px-4 py-3
              "
            >

              <span className="text-xs text-brand-muted">
                {metric.label}
              </span>

              <motion.span className="font-heading text-sm font-medium text-brand-orange">
                {patients}
              </motion.span>

            </div>

          ))}


          {/* GRAPH INSIDE SAME CARD */}
          <div
            className="
    mt-4
    border border-brand-border
    bg-white/70
    px-4 py-2
  "
          >

            <div className="flex items-center justify-between">

              <p className="text-xs font-medium text-brand-cocoa">
                Growth
              </p>

              <motion.span className="font-heading text-sm font-medium text-brand-orange">
                {growth}
              </motion.span>

            </div>


            <svg
              viewBox="0 0 100 45"
              className="mt-3 h-14 w-full overflow-visible"
            >

              <motion.path
                d="M5 38 L20 34 L38 28 L55 31 L72 16 L95 8"
                fill="none"
                stroke="#FF4F00"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"

                initial={{
                  pathLength: 0,
                }}

                animate={{
                  pathLength: [0, 1, 1],
                }}

                transition={{
                  duration: 4,
                  repeat: Infinity,
                  times: [0, 0.55, 1],
                  ease: "easeInOut",
                }}
              />

            </svg>

          </div>

        </div>

      </div>


    </div>
  );
}