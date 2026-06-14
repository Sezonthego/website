"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Container } from "../container";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Who is WeForge built for?",
    answer:
      "WeForge is designed for clinical research sites looking to improve recruitment operations, reduce manual workload, streamline patient qualification, and build more scalable and efficient recruitment systems.",
  },
  {
    question: "Is WeForge a software platform or a service?",
    answer:
      "WeForge currently operates as a service-led infrastructure partner, helping research sites design and operate tailored recruitment environments while continuously improving operational workflows and recruitment performance.",
  },
  {
    question: "How does WeForge help reduce recruitment drop-off?",
    answer:
      "Recruitment drop-off often happens because of friction across the patient journey, including unclear study information, delayed or inconsistent communication, lack of engagement tools, and fragmented manual workflows. WeForge helps structure the entire recruitment process into one unified infrastructure designed to guide participants through a more coherent, engaging, and easy-to-navigate recruitment experience.",
  },
  {
    question: "How does WeForge help improve patient targeting?",
    answer:
      "WeForge conducts detailed patient and audience research based on your study criteria to build structured targeting profiles for potential participants. Using this data, we deploy targeted recruitment campaigns across relevant digital channels designed to reach, engage, and guide more suitable participants into the recruitment process. Combined with structured qualification workflows and AI-assisted pre-screening, this helps reduce unqualified inquiries and improve recruitment efficiency overall.",
  },
  {
    question: "How do we get started with WeForge?",
    answer:
      "We start with a conversation focused on understanding your current recruitment challenges, operational pain points, and workflow inefficiencies. From there, we analyze your existing processes, identify areas creating friction, and design a structured recruitment infrastructure tailored to your operational needs and study requirements.",
  },
] as const;

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-brand-ivory border-y border-brand-border px-4 my-8 md:my-28"
    >
      <Container>
        <div className="grid gap-10 border-x border-brand-border lg:grid-cols-[0.9fr_1.35fr] lg:gap-0">
          <div className="relative overflow-hidden border-brand-border py-10 lg:border-r lg:px-10 lg:py-14">
            <div
              aria-hidden="true"
              className="absolute -left-28 top-16 size-72 rounded-full bg-brand-orange/12 blur-3xl"
            />
            <div className="relative max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
                FAQ
              </p>
              <h2 className="mt-5 font-heading text-4xl font-light leading-tight text-brand-cocoa md:text-6xl">
                Clarity above everything.
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-muted">
                Clear answers on how WeForge designs, launches, and operates
                clinical recruitment workflows with less friction.
              </p>
            </div>
          </div>

          <div className="divide-y divide-brand-border lg:py-6">
            {faqItems.map((item, index) => (
              <Question
                key={item.question}
                index={index + 1}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const Question = ({
  index,
  question,
  answer,
}: {
  index: number;
  question?: string;
  answer?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="group w-full overflow-hidden px-0 py-6 text-left transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory md:px-8 md:py-7"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4 md:gap-6">
          <span className="mt-1 font-heading text-2xl font-light leading-none text-brand-orange md:text-3xl">
            {String(index).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold leading-snug text-brand-cocoa md:text-2xl">
            {question}
          </h3>
        </div>
        <div className="relative flex size-9 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-ivory text-brand-cocoa transition-colors group-hover:border-brand-orange group-hover:text-brand-orange">
          <Plus
            className={cn(
              "absolute size-4 transition-all duration-200",
              open && "scale-0 rotate-90"
            )}
            strokeWidth={2}
          />
          <Minus
            className={cn(
              "absolute size-4 scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0"
            )}
            strokeWidth={2}
          />
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          height: open ? "auto" : 0,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <motion.p
          key={String(open)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="mt-5 max-w-3xl pl-12 text-left text-base leading-7 text-brand-muted md:pl-[4.5rem] md:text-lg"
        >
          {answer}
        </motion.p>
      </motion.div>
    </button>
  );
};
