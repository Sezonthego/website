"use client";

import { useEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react";

import { BorderPlus } from "@/components/border-plus";
import { cn } from "@/lib/utils";


const metrics = [
  { value: "80%", label: "Trials miss enrollment timelines" },
  { value: "48%", label: "Sites miss the expectations" },
  { value: "85%", label: "Patients unaware of clinical trials" },
  { value: "$40K+", label: "Sponsor cost per delay trial day" },
] as const;


const testimonials = [
  {
    role: "Therapeutic Innovation & Regulatory Science",
    name: "Dombernowsky et al.",
    quote:
      "Recruitment-related factors are pivotal when assessing trial sites during site selection.",
  },
  {
    role: "Perspectives in Clinical Research",
    name: "Chaudhari et al.",
    quote:
      "Participant recruitment and retention are two major bottlenecks in conducting clinical trials.",
  },
  {
    role: "Tufts CSDD",
    name: "Mary Jo Lamberti",
    quote:
      "It takes more patients to be screened in order to get the same number of completed patients.",
  },
] as const;


const evidenceSources = [
  "NIH",
  "Tufts CSDD",
  "TIRS",
  "Perspectives Clin. Research",
  "JCM",
] as const;


function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const target = Number(value.replace(/[^0-9]/g, ""));

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 70,
    damping: 20,
  });

  const [current, setCurrent] = useState(0);


  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);


  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCurrent(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue]);


  const prefix = value.startsWith("$") ? "$" : "";

  const suffix =
    value.includes("K")
      ? "K+"
      : value.includes("%")
        ? "%"
        : "";


  return (
    <span ref={ref}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}


function ProviderImpact() {
  return (
    <>
      <div className="border-b border-brand-border px-6 py-14 text-center md:py-15">

        <h2 className="mx-auto mt-5 max-w-5xl font-heading text-[clamp(2.5rem,5vw,3.2rem)] font-[600] leading-[1.2] tracking-[-0.04em] text-brand-cocoa">
          Performance shapes your{" "}
          <span className="text-brand-orange"> site's future.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[600px] font-body text-base font-light leading-[1.7] text-brand-muted md:text-[16px]">
          Enrollment performance influences sponsor trust, study opportunities,
          and your ability to deliver research consistently.
        </p>

      </div>


      <div className="grid grid-cols-2 border-b border-brand-border lg:grid-cols-4">

        {metrics.map((metric, index) => (

          <div
            key={metric.label}
            className={cn(
              "border-b border-brand-border px-5 py-8 md:px-12 lg:pl-12 lg:pr-5 lg:border-b-0",

              index !== metrics.length - 1 && "lg:border-r",

              index % 2 === 0 &&
              index < metrics.length - 1 &&
              "sm:border-r max-lg:border-r"
            )}
          >

            <p className="font-heading text-4xl font-[250] leading-none tracking-[-0.04em] text-brand-cocoa md:text-6xl">
              <AnimatedMetric value={metric.value} />
            </p>

            <p className="mt-3 font-body text-base font-light leading-[1.7] text-brand-muted lg:max-w-[260px]">
              {metric.label}
            </p>

          </div>

        ))}

      </div>


      <TestimonialBand />

    </>
  );
}


function TestimonialBand() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  const [particles, setParticles] = useState<
    {
      x: number;
      y: number;
      delay: number;
      duration: number;
    }[]
  >([]);


  useEffect(() => {

    setParticles(

      Array.from({ length: 18 }).map(() => ({

        x: Math.random() * 90,

        y: Math.random() * 80,

        delay: Math.random() * 3,

        duration: 2 + Math.random() * 2,

      }))

    );

  }, []);


  useEffect(() => {

    const timer = window.setInterval(() => {

      setActiveIndex((current) =>

        current === testimonials.length - 1 ? 0 : current + 1

      );

    }, 5000);


    return () => window.clearInterval(timer);

  }, []);


  const goToPrevious = () => {

    setActiveIndex((current) =>

      current === 0 ? testimonials.length - 1 : current - 1

    );

  };


  const goToNext = () => {

    setActiveIndex((current) =>

      current === testimonials.length - 1 ? 0 : current + 1

    );

  };


  return (
    <div className="relative min-h-[300px] overflow-hidden bg-[#FFFAF6] px-8 py-10 md:px-12 md:py-12 lg:min-h-[360px]">
    
      {/* Premium background grid */}
      <div className="pointer-events-none absolute right-16 top-16">
      {particles.map((particle, i) => (
                <span
      key={i}
      className="
        absolute
        size-0.5
        rounded-full
        bg-brand-orange/80
        blur-[0.5px]
        animate-float-particle
      "
      style={{
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        animationDelay: `${particle.delay}s`,
        animationDuration: `${particle.duration}s`,
      }}
    />
      ))}
    </div>
    <div
      className="
        pointer-events-none absolute inset-[1px]
        bg-[linear-gradient(to_right,#0A030005_1px,transparent_1px),linear-gradient(to_bottom,#0A030005_1px,transparent_1px)]
        bg-[size:32px_32px]
      "
    />
    
    
      {/* Large editorial quote */}
    
      <div
    
        className="
    
          pointer-events-none absolute 
    
          right-12 top-6
    
          font-heading
    
          text-[180px]
    
          leading-none
    
          text-brand-orange/10
    
        "
    
      >
    
        ”
        <div
      className="
        pointer-events-none absolute
        -right-24 -top-24
        h-[260px] w-[260px]
        rounded-full
        bg-brand-orange/10
        blur-[80px]
      "
    />
    
      </div>
      
    
          <div className="relative grid min-h-[120px] items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
    
          <div>
          <p className="font-body text-sm pt-1.5 font-medium uppercase tracking-[0.12em] text-brand-muted/80">
            SOURCED FROM
      </p>
    
      <div className="relative mt-8 h-[90px] overflow-hidden">
        
       
    {/* Fade top - desktop only */}
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-6 bg-linear-to-b from-[#FFFAF6] to-transparent md:block" />
    
    {/* Fade bottom - desktop only */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-6 bg-linear-to-t from-[#FFFAF6] to-transparent md:block" />
    
        <div className="animate-source-scroll space-y-5">
          {[...evidenceSources, ...evidenceSources].map(
            (source, index) => (
              <p
                key={`${source}-${index}`}
                className="
                  font-heading
                  text-[20px]
                  font-[400]
                  tracking-[-0.03em]
                  text-brand-cocoa/35
                  leading-none
            
                "
              >
                {source}
              </p>
            )
          )}
        </div>
      </div>
    </div>
    
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <blockquote className="max-w-4xl font-body text-lg font-normal leading-[1.7] text-brand-cocoa md:text-[18px]">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
    
                <div className="mt-6">
                  <p className="font-body text-sm font-normal text-brand-cocoa">
                    {active.name}
                  </p>
    
                  <p className="mt-1 font-body text-sm font-light leading-[1.6] text-brand-muted">
                    {active.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
    
          </div>
    
          <div className="relative mt-6 flex items-center justify-between gap-6 md:mt-8">
            <div className="flex items-center gap-4 lg:ml-[316px]">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={goToPrevious}
                className="flex size-8 items-center justify-center text-brand-cocoa transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={goToNext}
                className="flex size-8 items-center justify-center text-brand-cocoa transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
    
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  type="button"
                  key={testimonial.name}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={
                    activeIndex === index
                      ? "h-2 w-5 rounded-full bg-brand-orange transition-all"
                      : "size-2 rounded-full bg-brand-border transition-all hover:bg-brand-muted"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      );
}


export function ImpactSection() {

    return (
  
      <section className="border-y border-brand-border bg-brand-ivory px-4 text-brand-cocoa md:px-8">
  
        <div className="relative mx-auto max-w-[1320px] border-x border-brand-border bg-brand-ivory">
  
          <BorderPlus className="-left-[11px] -top-[11px]" />
  
          <BorderPlus className="-right-[11px] -top-[11px]" />
  
          <BorderPlus className="-bottom-[11px] -left-[11px]" />
  
          <BorderPlus className="-bottom-[11px] -right-[11px]" />
  
          <ProviderImpact />
  
        </div>
  
      </section>
  
    );
  
  }