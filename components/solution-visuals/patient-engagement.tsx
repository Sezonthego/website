"use client";

import { motion } from "motion/react";
import {
  Bell,
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
  User,
} from "lucide-react";


const steps = [
    {
      label: "Welcome sent",
      icon: MessageCircle,
    },
    {
      label: "Reminder scheduled",
      icon: Bell,
    },
    {
      label: "Visit confirmed",
      icon: CalendarCheck,
    },
  ];


export function PatientEngagementVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-visible">

      {/* PATIENT CARD */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-8
          z-20
          flex items-center gap-3
          border border-brand-border
          bg-white/90
          px-5 py-4
          shadow-[0_18px_60px_rgba(10,3,0,0.10)]
          backdrop-blur-xl
        "
      >
        <div
          className="
            flex size-10
            items-center justify-center
            bg-brand-orange/10
          "
        >
          <User className="size-5 text-brand-orange" />
        </div>

        <div>
          <p className="font-body text-sm font-medium text-brand-cocoa">
            Patient
          </p>

          <p className="mt-1 font-body text-xs text-brand-muted">
            Enrolled
          </p>
        </div>
      </motion.div>


      {/* CENTER TIMELINE */}
      <div
        className="
          relative z-10
          flex flex-col gap-5
        "
      >
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.label}
              animate={{
                opacity: [0.35, 1, 1, 0.35],
                x: [-8, 0, 0, -8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: index * 0.8,
              }}
              className="
                flex
                min-w-[190px]
                items-center gap-4
                border border-brand-border
                bg-white/85
                px-5 py-4
                backdrop-blur-xl
              "
            >

              <Icon
                className="
                  size-5
                  text-brand-orange
                  stroke-[1.4]
                "
              />

              <span
                className="
                  font-body
                  text-sm
                  text-brand-cocoa
                "
              >
                {step.label}
              </span>

              <CheckCircle2
                className="
                  ml-auto
                  size-4
                  text-brand-orange/70
                "
              />

            </motion.div>
          );
        })}
      </div>

{/* ENGAGEMENT STATUS */}
<motion.div
className="

absolute right-12

z-20

w-[190px]

min-h-[190px]

border border-brand-border

bg-white/90

pl-8 pr-5 py-7

shadow-[0_18px_60px_rgba(10,3,0,0.10)]

backdrop-blur-xl

"

  animate={{
    opacity:[0,0,1,1,0],
    x:[20,20,0,0,20],
  }}

  transition={{
    duration:7,
    repeat:Infinity,
    times:[0,0.55,0.65,0.9,1],
  }}
>

  <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-orange">
    Engagement status
  </p>

  <h3 className="mt-3 font-heading text-xl font-[500] tracking-[-0.04em] text-brand-cocoa">
  Completed
  </h3>


  <div className="mt-5 space-y-3">

    <div className="flex items-center gap-2">
      <CheckCircle2 className="size-4 text-brand-orange" />

      <span className="text-xs text-brand-muted">
        SMS sent
      </span>
    </div>


    <div className="flex items-center gap-2">
      <CheckCircle2 className="size-4 text-brand-orange" />

      <span className="text-xs text-brand-muted">
        Email sent
      </span>
    </div>


    <div className="flex items-center gap-2">
      <CheckCircle2 className="size-4 text-brand-orange" />

      <span className="text-xs text-brand-muted">
        Visit confirmed
      </span>
    </div>

  </div>

</motion.div>


      {/* FLOW LINE */}
      <motion.div
        animate={{
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          h-px
          w-[75%]
          bg-linear-to-r
          from-transparent
          via-brand-orange/40
          to-transparent
        "
      />

    </div>
  );
}