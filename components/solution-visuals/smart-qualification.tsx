"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import {
    CheckCircle2,
    ClipboardCheck,
    User,
    AlertCircle,
    MousePointerClick,
  } from "lucide-react";

  const patients = [
    {
      key: "patient01",
      icon: CheckCircle2,
    },
    {
      key: "patient02",
      icon: AlertCircle,
    },
  ];

  export function SmartQualificationVisual() {
    const t = useTranslations("SolutionVisuals.qualification");
      
    return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

{/* STUDY / QUALIFICATION CARD */}
<motion.div
  className="
    relative z-20
    w-[360px]
    border border-brand-border
    bg-brand-ivory/90
    p-5
    shadow-[0_30px_90px_rgba(10,3,0,0.16)]
    backdrop-blur-xl
  "
>
  {/* Study state */}
  <motion.div
  animate={{

    opacity: [1, 1, 1, 0, 0, 1],
  
  }}
    transition={{
      duration: 7,
      repeat: Infinity,
      times: [0, 0.25, 0.35, 0.45, 0.9, 1],
    }}
  >
    <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-orange">
    {t("studyPage")}
    </p>

    <h3 className="mt-2 font-heading text-3xl font-[500] tracking-[-0.04em] text-brand-cocoa">
    {t("study")}
</h3>

    <div className="mt-6 space-y-3">
      <div className="h-3 w-full bg-brand-border/50" />
      <div className="h-3 w-[70%] bg-brand-border/50" />
      <div className="h-3 w-[85%] bg-brand-border/50" />
    </div>

    <div className="relative mt-6">

    <motion.div
  className="
    flex h-10 items-center justify-center py-6
    border border-brand-orange
    bg-brand-orange
    text-xs font-medium
    uppercase tracking-[0.12em]
    text-brand-ivory
  "
  animate={{
    scale: [1, 1, 0.97, 1],
    backgroundColor: [
      "#FF4F00",
      "#FF4F00",
      "#0A0300",
      "#FF4F00",
    ],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    times: [0, 0.25, 0.3, 0.36],
    ease: "easeInOut",
  }}
>
{t("button")}
</motion.div>


{/* Cursor click */}
<motion.div
  className="absolute -bottom-5 right-12 text-brand-cocoa"
  animate={{
    opacity: [0, 1, 1, 1, 0],
    x: [70, 70, 0, 0, 0],
    y: [25, 25, 0, 0, 0],
    scale: [1, 1, 1, 0.82, 1],
  }}
  
  transition={{
    duration: 7,
    repeat: Infinity,
    times: [0, 0.08, 0.22, 0.30, 0.38],
    ease: "easeInOut",
  }}
>
  <MousePointerClick
    className="
      size-6
      fill-brand-ivory
      stroke-[1.15]
      drop-shadow-[0_8px_18px_rgba(10,3,0,0.25)]
    "
  />
</motion.div>

</div>
    
  </motion.div>
{/* Patients being processed inside */}
<div className="absolute bottom-5 left-5 right-5 flex gap-2">

{[0,1,2].map((item)=>(
  <motion.div
    key={item}
    className="
      flex flex-1 items-center justify-center
      border border-brand-orange/30
      bg-brand-orange/10
      py-2
    "

    animate={{
      opacity:[0,0,1,1,0],
      y:[10,10,0,0,-10],
    }}

    transition={{
        duration:7,
        repeat:Infinity,
        delay:item*0.25,
        times:[0,0.52,0.60,0.78,0.9],
      }}
  >

    <User className="size-4 text-brand-orange"/>

  </motion.div>

))}

</div>

  {/* Processing state */}
  <motion.div
    className="absolute inset-5"
    animate={{
        opacity: [0, 0, 0, 1, 1, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      times: [0, 0.3, 0.38, 0.48, 0.85, 1],
    }}
  >
    <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-orange">
    {t("flowTitle")}
    </p>

    <div className="mt-6 space-y-4">

    {[
  "criteria",
  "responses",
  "matching",
].map((step, index) => (

  <motion.p
    key={step}
    className="text-sm text-brand-cocoa"
    animate={{
      opacity: [0, 0, 1, 1, 0],
      x: [-8, -8, 0, 0, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      delay: index * 0.45,
      times: [0, 0.38, 0.55, 0.75, 0.9],
      ease: "easeInOut",
    }}
  >
    ✓ {t(`steps.${step}`)}
  </motion.p>

))}

</div>
  </motion.div>

</motion.div>

{/* PATIENTS ENTERING STUDY */}
<div className="absolute top-[80px] z-10 flex gap-3">

  {[0, 1, 2].map((item) => (
    <motion.div
      key={item}
      className="
        flex items-center gap-2
        border border-brand-border
        bg-brand-ivory
        px-3 py-2
        shadow-[0_12px_35px_rgba(10,3,0,0.12)]
      "
      animate={{
        y: [-180, -40, 170],
        opacity: [0, 1, 1, 0],
        scale: [0.9, 1, 1, 0.75],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        delay: item * 0.55,
        times: [0, 0.22, 0.42, 0.52],
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <User className="size-4 text-brand-orange" />

      <span className="text-xs text-brand-cocoa">
      {t("patient")}
      </span>

    </motion.div>
  ))}

</div>



      {/* OUTPUT CARDS */}
      <div className="absolute left-5 right-5 top-1/2 z-30 grid -translate-y-1/2 grid-cols-2 gap-3">
        {patients.map((patient, index) => {
          const Icon = patient.icon;

          return (
            <motion.div
            key={patient.key}
              initial={{
                opacity: 0,
              
              }}
              animate={{

                opacity: [0,0,1,1,0],
              
                y: [20,20,0,0,-10],
              
              }}
              transition={{

                duration:9,
              
                repeat:Infinity,
              
                delay:4 + index * 0.35,
              
                times:[0,0.15,0.25,0.55,0.65],
              
              }}
              className="

              w-full
            
              border border-brand-border
                bg-white/90
                p-4
                shadow-[0_16px_50px_rgba(10,3,0,0.08)]
                backdrop-blur-xl
              "
            >

              <div className="flex items-center gap-3">
                <Icon
                  className="
                    size-5
                    text-brand-orange
                  "
                />

                <div>
                <p

className="

  font-body

  text-[clamp(10px,3vw,14px)]

  font-medium

  text-brand-cocoa

"

>
{t(`results.${patient.key}.name`)}

</p>

<p
  className="
    mt-1
    font-body
    text-[clamp(9px,2.5vw,12px)]
    text-brand-muted
  "
>
{t(`results.${patient.key}.status`)}
</p>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>


      {/* CONNECTION LINE */}
      <motion.div
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          h-px
          w-[70%]
          bg-linear-to-r
          from-transparent
          via-brand-orange/40
          to-transparent
        "
      />

    </div>
  );
}