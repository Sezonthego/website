"use client";

import Link from "next/link";
import { Mic } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const trustItems = [
  "Research sites",
  "Study teams",
  "Recruitment ops",
  "Participant journeys",
  "Remote follow-up",
  "Screening teams",
] as const;

const waveBars = [
  44, 74, 56, 80, 76, 84, 64, 52, 70, 58, 66, 72, 54, 62, 78, 50, 92, 116, 68,
  58, 88, 54, 72, 104, 66, 56, 76, 64, 84, 70, 60, 78, 96, 86, 62, 74, 68, 82,
  104, 92, 58, 72,
] as const;

function AudioWave() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex w-full items-center justify-center px-3 sm:px-8">
      <div
        className="absolute inset-x-[7%] top-1/2 h-px -translate-y-1/2 bg-brand-ivory/34"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 h-44 w-px -translate-x-1/2 -translate-y-1/2 bg-brand-ivory/16"
        aria-hidden="true"
      />
      <div
        className="flex h-44 w-full max-w-4xl items-center justify-center gap-[9px] sm:gap-3"
        aria-hidden="true"
      >
        {waveBars.map((height, index) => {
          const scale = 0.62 + ((index * 13) % 30) / 100;
          const duration = 0.82 + ((index * 7) % 34) / 100;
          const delay = (index % 9) * 0.055;

          return (
            <motion.span
              key={`${height}-${index}`}
              className="w-1.5 rounded-full bg-brand-ivory/92 shadow-[0_0_24px_rgba(255,253,249,0.24)] sm:w-2"
              style={{ height, transformOrigin: "center" }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scaleY: [scale, 1.08, 0.72, 1],
                      opacity: [0.72, 1, 0.82, 0.96],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration,
                      delay,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }
              }
            />
          );
        })}
      </div>
      <Link
        href="/#features"
        className="absolute inline-flex min-h-20 items-center gap-4 rounded-[1.15rem] border border-brand-cocoa/10 bg-brand-ivory px-7 py-4 text-2xl font-medium text-brand-cocoa shadow-[0_20px_56px_rgba(32,21,21,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory sm:min-h-24 sm:px-10 sm:text-[2rem]"
      >
        <Mic className="size-7 text-brand-cocoa sm:size-9" />
        Try it out
      </Link>
    </div>
  );
}

function HeroVisualPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      className="relative min-h-[420px] overflow-hidden border-t border-[#d8d1bf] bg-brand-indigo lg:min-h-[640px] lg:border-t-0"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(95% 82% at 0% 8%, rgba(255, 243, 230, 0.9) 0%, rgba(255, 176, 114, 0.58) 30%, rgba(255, 111, 32, 0.28) 54%, transparent 76%), radial-gradient(72% 62% at 18% 58%, rgba(255, 79, 0, 0.34) 0%, rgba(255, 138, 54, 0.22) 40%, transparent 74%), radial-gradient(78% 92% at 100% 0%, rgba(119, 43, 0, 0.78) 0%, rgba(94, 32, 0, 0.52) 45%, transparent 78%), linear-gradient(128deg, #fff3e6 0%, #ffb072 23%, #ff7a1a 43%, #b64000 64%, #2a1206 100%)",
          backgroundPosition: "0% 0%, 18% 62%, 100% 0%, center",
          backgroundSize: "135% 135%, 125% 125%, 130% 130%, 100% 100%",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                backgroundPosition: [
                  "0% 0%, 18% 62%, 100% 0%, center",
                  "8% 7%, 10% 54%, 92% 10%, center",
                  "2% 14%, 24% 68%, 100% 18%, center",
                  "0% 0%, 18% 62%, 100% 0%, center",
                ],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 18,
                ease: "easeInOut",
                repeat: Infinity,
              }
        }
      />
      <div
        className="absolute inset-0 opacity-35"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,253,249,0.48) 1px, transparent 1.25px)",
          backgroundSize: "17px 17px",
        }}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,249,0.11)_1px,transparent_1px),linear-gradient(rgba(255,253,249,0.1)_1px,transparent_1px)] bg-size-[150px_150px] opacity-45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-45 mix-blend-soft-light"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.34'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(119,43,0,0.16)_58%,rgba(42,18,6,0.36)_100%)]" />
      <div className="relative flex h-full min-h-[420px] items-center justify-center lg:min-h-[640px]">
        <AudioWave />
      </div>
    </motion.div>
  );
}

function HeroTrustStrip() {
  const marqueeItems = [...trustItems, ...trustItems];

  return (
    <div className="  bg-brand-ivory px-6 py-8 sm:px-10 lg:px-12">
      <p className="text-center text-base font-normal text-brand-muted">
      Powered by industry-leading technologies
      </p>
      <div className="relative mt-7 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-brand-ivory to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-brand-ivory to-transparent"
          aria-hidden="true"
        />
        <div className="flex min-w-max animate-logo-marquee items-center gap-16 text-[clamp(1.5rem,2vw,2.375rem)] leading-none text-brand-cocoa/55 motion-reduce:animate-none">
          {marqueeItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-clarion-body font-normal tracking-[-0.03em]"
              aria-hidden={index >= trustItems.length}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero3DStage() {
  return (
    <section className="relative overflow-hidden bg-brand-ivory pt-20 font-clarion-body  border-b border-[#d8d1bf]">
      <div className="mx-auto max-w-[100rem]x container border-x border-[#d8d1bf]">
        <div className="grid border-y border-[#d8d1bf] bg-[#d8d1bf] lg:min-h-[640px] lg:grid-cols-[1.25fr_1fr] lg:gap-px">
          <div className="flex min-h-[420px] items-center bg-brand-ivory px-6 py-14 sm:px-8 sm:py-16 md:py-20 lg:min-h-[560px] lg:px-16 xl:px-[4.25rem]">
            <div className="max-w-[860px]">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, ease: "easeOut" }}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange"
              >
                Patient recruitment infrastructure
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.06, ease: "easeOut" }}
                className="mt-5 font-clarion-display text-[clamp(2.25rem,5.4vw,4.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-brand-cocoa"
              >
                Build the recruitment infrastructure behind successful clinical
                studies.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.12, ease: "easeOut" }}
                className="mt-6 max-w-[660px] text-xl font-normal leading-[1.42] text-brand-muted md:text-2xl"
              >
                WeForge helps clinical research sites attract, qualify, and
                retain patients through connected recruitment systems — helping
                teams recruit faster, meet enrollment targets, and strengthen
                sponsor relationships.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.18, ease: "easeOut" }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center rounded-none bg-brand-cocoa px-5 py-3 text-base font-medium text-brand-ivory shadow-[0_14px_30px_rgba(10,3,0,0.16)] transition-colors hover:bg-brand-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory sm:px-6"
                >
                  Book an intro call
                </Link>
              </motion.div>
            </div>
          </div>

          <HeroVisualPanel />
        </div>

        <HeroTrustStrip />
      </div>
    </section>
  );
}
