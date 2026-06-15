"use client";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export function TransformCommunicationCta() {
  const [particles, setParticles] = useState<
    {
      x: number;
      y: number;
      delay: number;
      duration: number;
      orange: boolean;
    }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 80 }).map(() => ({
        x: Math.random() * 520,
        y: Math.random() * 300,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 3,
        orange: Math.random() > 0.35,
      }))
    );
  }, []);
  return (
    <section id="final-cta" className="mt-28 mb-28 border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8">
      <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-cocoa">


        <div className="relative isolate overflow-hidden px-6 py-24 text-center md:px-12 md:py-32">
          {/* Bottom left particles */}
          <div className="pointer-events-none absolute bottom-24 left-16 -z-10">
            {particles.map((particle, i) => (
              <span
                key={`left-${i}`}
                className={`
        absolute
        rounded-full
        blur-[0.5px]
        animate-float-particle
        ${particle.orange
                    ? "bg-brand-orange/50"
                    : "bg-white/80"
                  }
      `}
                style={{
                  left: `${particle.x}px`,
                  top: `${particle.y}px`,
                  width: "3px",
                  height: "3px",
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>

          {/* Bottom right particles */}
          <div className="pointer-events-none absolute bottom-24 right-16 -z-10">
            {particles.map((particle, i) => (
              <span
                key={`right-${i}`}
                className={`
        absolute
        rounded-full
        blur-[0.5px]
        animate-float-particle
        ${particle.orange
                    ? "bg-brand-orange/50"
                    : "bg-white/80"
                  }
      `}
                style={{
                  right: `${particle.x}px`,
                  top: `${particle.y}px`,
                  width: "3px",
                  height: "3px",
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>



          {/* Grid texture */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0 -z-10
              bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
              bg-size-[64px_64px]
            "
          />


          <h2 className="mx-auto max-w-2xl font-heading text-[clamp(2.5rem,5vw,3.2rem)] font-[600] leading-[1.2] tracking-[-0.04em] text-brand-ivory">
            Make recruitment a reason sponsors{" "}
            <span className="text-brand-orange">
              trust your site.
            </span>
          </h2>

          <p

            className="

  mx-auto

  mt-6

  max-w-[320px]

  font-body

  text-base

  font-light

  leading-[1.7]

  text-brand-ivory/70

  md:max-w-[620px]

  md:text-[16px]

"

          >

            Strengthen your recruitment capabilities with infrastructure designed to improve enrollment performance and support reliable study delivery.

          </p>


          <Link
  href="https://cal.com/YOUR-CAL-LINK"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-14
    inline-flex
    min-h-12
    items-center
    gap-4
    rounded-none
    bg-brand-orange
    px-5
    py-3
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
    sm:px-6
  "
>
  <Calendar
    className="size-4 stroke-[1.7]"
    aria-hidden="true"
  />

  Book an intro call
</Link>

        </div>
      </div>
    </section>
  );
}
