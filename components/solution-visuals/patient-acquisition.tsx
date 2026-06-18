"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  Activity,
  MousePointerClick,
  Radar,
  Search,
  Users,
} from "lucide-react";

const LOOP = 7;

function Metric({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      className="border border-brand-border bg-brand-ivory/90 p-3 md:p-4"
      animate={{
        opacity: [0.35, 0.35, 1, 1, 0.35],
        y: [10, 10, 0, 0, 10],
      }}
      transition={{
        duration: LOOP,
        repeat: Infinity,
        times: [0, delay, delay + 0.08, 0.86, 1],
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center gap-2">
        <Icon className="size-4 text-brand-orange" />
        <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-brand-muted md:text-[11px]">

{label}

</p>
      </div>

      <motion.p

  className="mt-2 font-heading text-xl font-[500] tracking-[-0.04em] text-brand-cocoa md:mt-3 md:text-2xl"

        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: LOOP,
          repeat: Infinity,
          times: [0, delay + 0.05, delay + 0.14, 0.86, 1],
        }}
      >
        {value}
      </motion.p>
    </motion.div>
  );
}

function PatientDot({
  className,
  delay,
  fit = true,
}: {
  className: string;
  delay: number;
  fit?: boolean;
}) {
  return (
    <motion.div
      className={`
        absolute
        z-10
        flex size-8 items-center justify-center
        rounded-full
        border
        ${fit ? "border-brand-orange/70 bg-brand-orange/20" : "border-brand-ivory/20 bg-brand-ivory/10"}
        ${className}
      `}
      animate={{
        opacity: [0, 0, 1, 1, 0],
        scale: [0.6, 0.6, 1, 1, 0.75],
      }}
      transition={{
        duration: LOOP,
        repeat: Infinity,
        times: [0, delay, delay + 0.08, 0.82, 1],
      }}
    >
      <span
        className={`
          size-2 rounded-full
          ${fit ? "bg-brand-orange" : "bg-brand-ivory/50"}
        `}
      />
    </motion.div>
  );
}

export function PatientAcquisitionVisual() {
  const t = useTranslations("SolutionVisuals.acquisition");

  return (
<div className="relative isolate flex min-h-[760px] w-full items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Background dashboard: hidden first, then comes forward */}
      <motion.div

className="

  absolute z-30

  w-[calc(100%-32px)]

  max-w-[430px]

  border border-brand-border

  bg-brand-ivory/90

  p-4

  md:p-5

  shadow-[0_30px_90px_rgba(10,3,0,0.20)]

  backdrop-blur-xl

"
        animate={{

            opacity: [0.06, 0.06, 0.06, 1, 1],
          
            scale: [0.86, 0.86, 1, 1, 1],
          
            y: [20, 20, 20, 0, 0],
          
          }}
          
          transition={{
          
            duration: LOOP,
          
            repeat: Infinity,
          
            times: [0, 0.26, 0.34, 1, 1],
          
            ease: [0.22, 1, 0.36, 1],
          
          }}
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-orange">
            {t("eyebrow")}
            </p>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-[500] tracking-[-0.04em] text-brand-cocoa">
            {t("title")}
            </h3>
          </div>

          <motion.div
            className="flex size-11 items-center justify-center bg-brand-orange/10 text-brand-orange"
            animate={{
              rotate: [0, 0, 180, 360, 360],
            }}
            transition={{
              duration: LOOP,
              repeat: Infinity,
              times: [0, 0.3, 0.55, 0.8, 1],
            }}
          >
            <Radar className="size-5 stroke-[1.6]" />
          </motion.div>
        </div>

        <motion.p
          className="mb-5 text-sm text-brand-muted"
          animate={{
            opacity: [0.4, 0.4, 1, 1, 0.4],
          }}
          transition={{
            duration: LOOP,
            repeat: Infinity,
            times: [0, 0.34, 0.46, 0.86, 1],
          }}
        >
          {t("description")}
        </motion.p>

        <div className="grid grid-cols-2 gap-3">
        <Metric icon={Search} label={t("metrics.search")} value="+342" delay={0.42} />

<Metric icon={Activity} label={t("metrics.engagement")} value="86%" delay={0.52} />

<Metric icon={MousePointerClick} label={t("metrics.visits")} value="+428" delay={0.62} />

<Metric icon={Users} label={t("metrics.fit")} value="18" delay={0.72} />
        </div>
      </motion.div>

      {/* Launch button: main first object */}
      <motion.div
        className="
          absolute z-40
          flex min-h-12 items-center gap-3
          border border-brand-border
          bg-brand-ivory
          px-5 py-3
          shadow-[0_20px_70px_rgba(10,3,0,0.22)]
        "
        animate={{
            y: [25, 25, 25, 25, 25],
                        opacity: [1, 0.8, 0, 0, 0],
            scale: [1, 1, 0.98, 0.95, 0.95],
            backgroundColor: [
              "#FFFEFA",
              "#FFFEFA",
              "#FF4F00",
              "#FF4F00",
              "#FF4F00",
            ],
            borderColor: [
              "rgba(10,3,0,0.14)",
              "rgba(10,3,0,0.14)",
              "#FF4F00",
              "#FF4F00",
              "#FF4F00",
            ],
          }}
        transition={{
          duration: LOOP,
          repeat: Infinity,
          times: [0, 0.18, 0.26, 0.36, 1],
                    ease: "easeInOut",
        }}
      >
        <motion.span
          animate={{
            color: ["#0A0300", "#0A0300", "#FFFEFA", "#FFFEFA", "#0A0300"],
          }}
          transition={{
            duration: LOOP,
            repeat: Infinity,
            times: [0, 0.18, 0.26, 0.36, 1],
          }}
          className="text-[13px] font-medium uppercase tracking-[0.12em]"
        >
          {t("addStudy")}
        </motion.span>
      </motion.div>

      {/* Cursor click */}
      <motion.div
        className="absolute z-50 text-brand-cocoa"
        animate={{
            x: [-120, 50, 50, 50, -120],
            y: [50, 50, 50, 50, 50],
          opacity: [0, 1, 0, 0, 0],
          scale: [1, 1, 0.86, 1, 1],
        }}
        transition={{
          duration: LOOP,
          repeat: Infinity,
          times: [0, 0.12, 0.2, 0.28, 1],
          ease: "easeInOut",
        }}
      >
<MousePointerClick className="size-7 fill-brand-ivory stroke-[1.15] drop-shadow-[0_10px_20px_rgba(10,3,0,0.25)]" />      </motion.div>

    {/* Radar glow - background layer */}
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          {[0, 1, 2].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-full border border-brand-orange/45"
            animate={{
              width: ["90px", "90px", "360px", "520px"],
              height: ["90px", "90px", "360px", "520px"],
              opacity: [0, 0, 0.18, 0],
              boxShadow: [
                "0 0 0 rgba(255,79,0,0)",
                "0 0 0 rgba(255,79,0,0)",
                "0 0 50px rgba(255,79,0,0.15)",
                "0 0 0 rgba(255,79,0,0)",
              ],
            }}
            transition={{
              duration: LOOP,
              repeat: Infinity,
              delay: ring * 0.25,
              times: [0, 0.26, 0.48, 1],
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Patients discovered */}
      <PatientDot className="left-[16%] top-[24%]" delay={0.42} />
      <PatientDot className="left-[24%] bottom-[25%]" delay={0.48} />
      <PatientDot className="right-[18%] top-[28%]" delay={0.56} />
      <PatientDot className="right-[24%] bottom-[24%]" delay={0.62} />
      <PatientDot className="left-[18%] bottom-[14%]" delay={0.68} fit={false} />
      <PatientDot className="right-[14%] top-[16%]" delay={0.74} fit={false} />

    </div>
  );
}