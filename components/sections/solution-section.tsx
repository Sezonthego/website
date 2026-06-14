"use client";

import { useEffect, useState } from "react";

import {
  ClipboardCheck,
  MessagesSquare,
  UserSearch,
  Workflow,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import { BorderPlus } from "@/components/border-plus";
import { SolutionBackground } from "@/components/solution-background";

import { PatientAcquisitionVisual } from "@/components/solution-visuals/patient-acquisition";
import { SmartQualificationVisual } from "@/components/solution-visuals/smart-qualification";
import { PatientEngagementVisual } from "@/components/solution-visuals/patient-engagement";
import { RecruitmentOperationsVisual } from "@/components/solution-visuals/operations";


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

export function SolutionSection() {

    return (
  
      <section
  
        id="solution"
  
        className="mt-28 mb-28 border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8"
  
      >
  
        <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">
  
          <BorderPlus className="-bottom-[11px] -right-[11px]" />
  
          <FrontOfficeEngine />
  
        </div>
  
      </section>
  
    );
  
  }
