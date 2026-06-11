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
  Sparkles,
  UserRound,
  Workflow,
  Zap,
} from "lucide-react";

import { Container } from "@/components/container";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
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
      "We continuously support and improve your recruitment system to help your site manage ongoing studies and future growth.",
    visual: <ChannelVisual />,
  },
] as const;

export function GetStartedSection() {
  return (
    <section
      id="get-started"
      className="bg-brand-ivory px-4  border-y border-brand-border"
    >
      <Container>
        <div className="overflow-hidden border-x border-brand-border">
          <div className="px-4 py-8 text-center md:px-8 md:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              How it works
            </p>
            <h2 className="mx-auto mt-5 max-w-6xl font-clarion-display text-4xl font-light leading-tight tracking-normal text-brand-cocoa md:text-5xl">
              Better recruitment, without disrupting your site.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl font-clarion-body text-lg leading-8 text-brand-muted md:text-xl">
              We handle the setup, implementation, and optimization of your
              recruitment infrastructure, so your team can stay focused on
              running studies.
            </p>

            <Button asChild className="mt-8 shadow-brand">
              <Link href="/contact">Take the first step today</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 divide-y divide-brand-border border-t border-brand-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {steps.map((step) => (
              <article key={step.number} className="min-w-0">
                <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-brand-peach/30 p-8 md:min-h-[390px]">
                  <span className="absolute left-0 top-0 bg-brand-peach px-4 py-3 font-clarion-display text-5xl font-light leading-none text-brand-cocoa md:text-6xl">
                    {step.number}
                  </span>
                  {step.visual}
                </div>

                <div className="border-t border-brand-border p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-brand-cocoa md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-brand-muted">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function WorkflowVisual() {
  const nodes = [
    {
      label: "Study",
      icon: Hospital,
      className: "left-1/2 top-8 -translate-x-1/2",
    },
    {
      label: "Screening",
      icon: FileCheck2,
      className: "right-4 top-1/2 -translate-y-1/2 md:right-8",
    },
    {
      label: "Routing",
      icon: Route,
      className: "bottom-8 left-1/2 -translate-x-1/2",
    },
    {
      label: "Calls",
      icon: Headphones,
      className: "left-4 top-1/2 -translate-y-1/2 md:left-8",
    },
  ] as const;

  return (
    <div className="relative flex size-72 items-center justify-center rounded-full bg-radial from-brand-orange/24 via-brand-orange/10 to-transparent md:size-80">
      <div className="absolute inset-10 rounded-full border border-dashed border-brand-cocoa/18" />
      <div className="absolute h-px w-[82%] border-t border-dashed border-brand-cocoa/18" />
      <div className="absolute h-[82%] w-px border-l border-dashed border-brand-cocoa/18" />
      <div className="absolute inset-8 rounded-full bg-brand-orange/10 blur-3xl" />

      <div className="relative z-10 flex size-24 items-center justify-center rounded-[2rem] bg-brand-ivory text-brand-cocoa shadow-[0_18px_55px_rgb(255_79_0_/_22%)] ring-1 ring-brand-border">
        <LogoIcon className="size-14" />
      </div>

      {nodes.map(({ label, icon: Icon, className }) => (
        <div
          key={label}
          className={cn(
            "absolute z-20 inline-flex items-center gap-2 rounded-full bg-brand-ivory px-4 py-2 text-sm font-medium text-brand-cocoa shadow-[0_10px_25px_rgb(32_21_21_/_8%)] ring-1 ring-brand-border",
            className
          )}
        >
          <Icon className="size-4 text-brand-orange" strokeWidth={1.8} />
          {label}
        </div>
      ))}
    </div>
  );
}

function AgentVisual() {
  const rows = [
    { label: "Personality", icon: UserRound },
    { label: "Behavior", icon: SlidersHorizontal },
    { label: "Knowledge base", icon: BookOpen },
    { label: "Actions", icon: Zap },
  ] as const;

  return (
    <div className="relative w-full max-w-[300px] rounded-2xl bg-brand-ivory p-3 shadow-[0_24px_80px_rgb(255_79_0_/_18%)] ring-1 ring-brand-border ">
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand-orange/15 blur-3xl " />
      <div className="flex items-center gap-3 px-3 py-4 ">
        <span className="flex size-9 items-center justify-center rounded-full bg-brand-orange/12 text-brand-orange">
          <Bot className="size-5" strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-cocoa">
            Recruitment Assistant
          </p>
          <p className="text-xs text-brand-muted">Ready for launch</p>
        </div>
      </div>

      <div className="space-y-2">
        {rows.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl bg-brand-peach/55 px-4 py-3 text-brand-cocoa"
          >
            <span className="inline-flex min-w-0 items-center gap-3 text-sm font-medium md:text-base">
              <Icon className="size-5 shrink-0 text-brand-muted" strokeWidth={1.8} />
              <span className="truncate">{label}</span>
            </span>
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-orange text-brand-ivory">
              <Check className="size-4" strokeWidth={2.4} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChannelVisual() {
  const channels = [
    {
      label: "Phone",
      icon: Phone,
      className: "right-2 top-8 md:right-6",
    },
    {
      label: "Web",
      icon: Globe2,
      className: "left-2 top-1/2 -translate-y-1/2 md:left-6",
    },
    {
      label: "Workflow",
      icon: Workflow,
      className: "bottom-6 right-10 md:right-12",
    },
  ] as const;

  return (
    <div className="relative flex size-72 items-center justify-center md:size-80">
      <div className="absolute inset-8 rounded-full border-[18px] border-brand-orange/20 blur-[1px]" />
      <div className="absolute inset-12 rounded-full border border-brand-orange/20" />
      <div className="absolute inset-4 rounded-full bg-radial from-transparent via-brand-orange/10 to-transparent" />

      <div className="relative z-10 flex size-28 items-center justify-center rounded-full bg-brand-ivory shadow-[0_16px_45px_rgb(32_21_21_/_10%)] ring-1 ring-brand-border">
        <div className="flex size-20 items-center justify-center rounded-full bg-brand-peach text-brand-cocoa">
          <Sparkles className="size-9 text-brand-orange" strokeWidth={1.5} />
        </div>
      </div>

      {channels.map(({ label, icon: Icon, className }) => (
        <div
          key={label}
          aria-label={label}
          className={cn(
            "absolute z-20 flex size-16 items-center justify-center rounded-full bg-brand-ivory text-brand-cocoa shadow-[0_14px_32px_rgb(32_21_21_/_10%)] ring-1 ring-brand-border",
            className
          )}
        >
          <Icon className="size-7" strokeWidth={1.8} />
        </div>
      ))}
    </div>
  );
}
