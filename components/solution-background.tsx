import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const SolutionBackground = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
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
    Array.from({ length: 55 }).map(() => ({
      x: Math.random() * 100,
      y: 55 + Math.random() * 40,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
      orange: Math.random() > 0.45,
    }))
  );
}, []);

  return (

    <div
  
      className={cn(
  
        `
  
        relative
  
        flex
  
        h-full
  
        min-h-[760px]
  
        items-center
  
        justify-center
  
        overflow-hidden
  
        bg-brand-cocoa
  
        `,
  
        className
  
      )}
  
    >
  
      {/* grid */}
  
    {/* precision grid */}
<div
  aria-hidden="true"
  className="
    absolute
    inset-0
    bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)]
    bg-size-[28px_28px]
  "
/>
  
      {/* orange atmosphere */}
  
      <div
  
        aria-hidden="true"
  
        className="
  
          absolute
  
          bottom-0
  
          left-1/2
  
          h-[350px]
  
          w-[500px]
  
          -translate-x-1/2
  
          rounded-full
  
          bg-brand-orange/15
  
          blur-[120px]
  
        "
  
      />
  
   {/* Animated noise texture */}
<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    -inset-[20%]
    opacity-[0.2]
    mix-blend-overlay
    animate-noise
  "
  style={{
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.15' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
  }}
/>
  
      {/* fade top */}
  
      <div
  
        aria-hidden="true"
  
        className="
  
          absolute
  
          inset-x-0
  
          top-0
  
          h-40
  
          bg-gradient-to-b
  
          from-brand-cocoa
  
          to-transparent
  
        "
  
      />

      {/* particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle, index) => (
          <span
            key={index}
            className={`
              absolute
              size-[3px]
              rounded-full
              blur-[0.5px]
              animate-float-particle
              ${
                particle.orange
                  ? "bg-brand-orange/60"
                  : "bg-brand-ivory/70"
              }
            `}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>


      {/* content */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          items-center
          justify-center
          p-10
        "
      >
        {children}
      </div>

    </div>
  );
};