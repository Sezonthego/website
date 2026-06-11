"use client";

import Link from "next/link";
import { motion } from "motion/react";

const trustItems = [
  "Research sites",
  "Study teams",
  "Recruitment ops",
  "Participant journeys",
  "Remote follow-up",
  "Screening teams",
] as const;

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
    <section className="relative overflow-hidden bg-brand-ivory pt-30 font-clarion-body border-b border-[#d8d1bf]">
      <div className="mx-auto container border-x border-[#d8d1bf]">
        <div className="border-y border-[#d8d1bf] bg-brand-ivory">
          <div className="flex min-h-[420px] items-center justify-center px-6 py-14 text-center sm:px-8 sm:py-16 md:min-h-[480px] md:py-20 lg:min-h-[520px] lg:px-16 xl:px-[4.25rem]">
            <div className="mx-auto max-w-[860px]c">
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
                className="mx-auto mt-6 max-w-[660px] text-xl font-normal leading-[1.42] text-brand-muted md:text-2xl"
              >
                WeForge helps clinical research sites attract, qualify, and
                retain patients through connected recruitment systems helping
                teams recruit faster, meet enrollment targets, and strengthen
                sponsor relationships.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.18, ease: "easeOut" }}
                className="mt-8 flex justify-center"
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
        </div>

        <HeroTrustStrip />
      </div>
    </section>
  );
}
