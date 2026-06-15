"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { BorderPlus } from "@/components/border-plus";
import {

  IconBrandOpenai,

  IconBrandGoogle,

  IconBrandMeta,

  IconBrandSlack,

  IconBrandNotion,

} from "@tabler/icons-react";

const trustItems = [
  {
    name: "Supabase",
    logo: "/logos/supabase-logo.svg",
    width: 150,
    height: 28,
  },
  {
    name: "Cursor",
    logo: "/logos/cursor-logo.svg",
    width: 115,
    height: 30,
  },
  {
    name: "Attio",
    logo: "/logos/attio-logo.svg",
    width: 100,
    height: 24,
  },
  {
    name: "Make",
    logo: "/logos/make-logo.svg",
    width: 110,
    height: 26,
  },
  {
    name: "Vercel",
    logo: "/logos/vercel-logo.svg",
    width: 120,
    height: 24,
  },
  {
    name: "OpenAI",
    logo: "/logos/openai-logo.svg",
    width: 100,
    height: 28,
  },
  {
    name: "Next.js",
    logo: "/logos/nextjs-logo.svg",
    width: 100,
    height: 24,
  },

] as const;

function HeroTrustStrip() {
  const marqueeItems = [...trustItems, ...trustItems];

  return (
    <div className="  bg-brand-ivory px-6 py-8 sm:px-10 lg:px-12">
      <p className="text-center text-base uppercase font-normal text-[11px] pb-1 tracking-[0.10em] text-brand-muted">
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
        <div className="flex min-w-max animate-logo-marquee items-center gap-25 text-[clamp(1.5rem,2vw,2.375rem)] leading-none text-brand-cocoa/55 motion-reduce:animate-none">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center"
              aria-hidden={index >= trustItems.length}
            >
              <Image

                src={item.logo}

                alt={item.name}

                width={item.width}

                height={item.height}

                className="brightness-0 opacity-40"

                style={{

                  width: `${item.width}px`,

                  height: "auto",

                }}

              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="
    relative
    bg-brand-ivory
    px-5
    pt-8
    font-body
    border-b border-brand-border

    md:px-8
    md:pt-12
  "
    >
      <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">

        {/* Top crosses */}
        <BorderPlus className="-left-[11px] -top-[11px]" />
        <BorderPlus className="-right-[11px] -top-[11px]" />

        {/* Bottom crosses */}
        <BorderPlus className="-bottom-[11px] -left-[11px]" />
        <BorderPlus className="-bottom-[11px] -right-[11px]" />

        <div className="border-y border-brand-border bg-brand-ivory">
          <div className="

flex

min-h-[420px]

items-center

justify-center

px-6

pt-25

pb-18

text-center

sm:px-8

sm:pt-20

sm:pb-14

md:min-h-[480px]

md:py-20

lg:min-h-[520px]

lg:px-16

xl:px-[4.25rem]

">
            <div className="mx-auto max-w-[860px]">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, ease: "easeOut" }}
                className="text-center text-base uppercase font-normal text-[12px] tracking-[0.10em] text-brand-muted"              >
                Patient recruitment infrastructure
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.06, ease: "easeOut" }}
                className="mt-5 font-heading text-[2.8rem] md:text-[clamp(2.5rem,5vw,4rem)] font-[600] leading-[1.12] tracking-[-0.02em] text-brand-cocoa">
                Recruit faster. Retain Longer.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.12, ease: "easeOut" }}
                className="mx-auto mt-6 max-w-[680px] font-body text-base font-light leading-[1.7] text-brand md:text-[16px]"              >
                We help research teams recruit faster, meet enrollment targets, and strengthen sponsor relationships through connected recruitment systems.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.18, ease: "easeOut" }}
                className="mt-8 flex justify-center"
              >
                <Link
  href="https://cal.com/YOUR-CAL-LINK"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex min-h-14 items-center gap-3 uppercase rounded-none bg-brand-orange px-5 py-3 text-[13px] font-medium text-brand-ivory shadow-[0_14px_30px_rgba(255,79,0,0.20)] transition-colors hover:bg-brand-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory sm:px-6"
>
  <Calendar className="size-4 stroke-[1.8]" />
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
