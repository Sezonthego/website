"use client";

import { motion } from "motion/react";
import {
  Activity,
  CheckCircle2,
  Clock,
  LayoutDashboard,
  Users,
} from "lucide-react";


const patients = [
  {
    name: "Pre-screened",
    value: "126",
    icon: Users,
  },
  {
    name: "Qualified",
    value: "48",
    icon: CheckCircle2,
  },
  {
    name: "Scheduled",
    value: "32",
    icon: Clock,
  },
];


export function RecruitmentOperationsVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">


{/* MAIN DASHBOARD */}
<div
  className="
    relative z-20
    w-[360px]
    border border-brand-border
    bg-white/90
    p-6
    shadow-[0_25px_80px_rgba(10,3,0,0.14)]
    backdrop-blur-xl
  "
>

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div
              className="
                flex size-10
                items-center justify-center
                bg-brand-orange/10
              "
            >
              <LayoutDashboard
                className="
                  size-5
                  text-brand-orange
                "
              />
            </div>


            <div>
              <p className="font-body text-sm font-medium text-brand-cocoa">
                Study: Atopic Dermatitis 
              </p>

              <p className="mt-1 font-body text-xs text-brand-muted">
                Active recruitment
              </p>
            </div>

          </div>


          <Activity className="size-5 text-brand-orange" />

        </div>



        {/* PROGRESS */}
        <div className="mt-8">

          <div className="mb-3 flex justify-between">
            <span className="text-xs text-brand-muted">
              Enrollment Progress
            </span>

            <span className="text-xs text-brand-orange">
              72%
            </span>
          </div>


          <div
            className="
              h-2
              overflow-hidden
              bg-brand-border
            "
          >

            <motion.div
              animate={{
                width: ["20%", "72%", "72%", "20%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-full
                bg-brand-orange
              "
            />

          </div>

        </div>



        {/* PATIENT ROWS */}
        <div className="mt-8 space-y-3">

          {patients.map((patient, index) => {
            const Icon = patient.icon;

            return (
              <motion.div
                key={patient.name}
                animate={{
                  opacity: [0.5, 1, 1, 0.5],
                  x: [-8, 0, 0, -8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: index * 0.7,
                }}
                className="
                  flex items-center gap-3
                  border border-brand-border
                  bg-brand-ivory/70
                  px-4 py-3
                "
              >

                <Icon
                  className="
                    size-4
                    text-brand-orange
                  "
                />

<div>
  <p className="
    font-body
    text-xs
    text-brand-cocoa
  ">
    {patient.name}
  </p>

  <p className="
    mt-1
    font-heading
    text-xl
    font-[500]
    tracking-[-0.04em]
    text-brand-cocoa
  ">
    {patient.value}
  </p>
</div>

              </motion.div>
            );
          })}

        </div>


      </div>


{/* OPERATION METRICS */}
{[
  {
    label: "Enrolled",
    value: "48",
    position: "left-12 top-36",
  },
  {

    label: "Weekly progress",
  
    value: "graph",
  
    position: "right-12 bottom-36",
  
  },
].map((metric, index) => (

<motion.div
  key={metric.label}

  className={`
    absolute
    ${metric.position}
    w-[140px]
    border border-brand-border
    bg-white/90
    p-4
    shadow-[0_18px_60px_rgba(10,3,0,0.10)]
    backdrop-blur-xl
  `}

  animate={{
    opacity:[0.4,1,1,0.4],
    y:[10,0,0,10],
  }}

  transition={{
    duration:6,
    repeat:Infinity,
    delay:index * 0.8,
    ease:"easeInOut",
  }}
>

<p className="text-xs text-brand-muted">
  {metric.label}
</p>

{metric.value === "graph" ? (

<div className="mt-4 flex h-16 items-end gap-2">

  {[35,55,45,70,85].map((height,index)=>(

    <motion.div
      key={index}

      className="
        flex-1
        bg-brand-orange/70
      "

      animate={{
        height:[
          "20%",
          `${height}%`,
          `${height}%`
        ],
      }}

      transition={{
        duration:6,
        repeat:Infinity,
        delay:index * 0.15,
        ease:"easeInOut",
      }}
    />

  ))}

</div>

) : (

<p className="
mt-2
font-heading
text-3xl
font-[500]
tracking-[-0.04em]
text-brand-cocoa
">
{metric.value}
</p>

)}

</motion.div>

))}



      {/* BACK GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          h-[260px]
          w-[260px]
          rounded-full
          bg-brand-orange/10
          blur-[80px]
        "
      />

    </div>
  );
}