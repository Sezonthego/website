"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "pl" : "en";

  const cleanPath = pathname.replace(/^\/(en|pl)/, "");

  return (
    <Link
      href={`/${nextLocale}${cleanPath}`}
      aria-label={`Switch to ${nextLocale}`}
      className="
        group
        flex
        items-center

        font-body
        text-[12px]
        font-medium
        uppercase

        text-brand-cocoa
      "
    >

      {/* MOBILE */}
      <div
        className="
          relative

          flex
          size-[30px]
          items-center
          justify-center

          overflow-hidden
          rounded-full

          border
          border-brand-border

          bg-brand-ivory

          shadow-[inset_0_2px_8px_rgba(10,3,0,0.08)]

          transition-all
          duration-300

          group-hover:border-brand-orange

          md:hidden
        "
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={locale}
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.9,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              text-[11px]
              font-semibold
              tracking-[-0.03em]
              text-brand-orange
            "
          >
            {locale.toUpperCase()}
          </motion.span>
        </AnimatePresence>
      </div>


      {/* DESKTOP */}
      <div className="hidden items-center gap-2 md:flex">

        <span
          className={`
            transition-all
            duration-300

            ${
              locale === "en"
                ? "opacity-100"
                : "opacity-35"
            }
          `}
        >
          EN
        </span>

        <div
          className="
            relative

            h-[26px]
            w-[52px]

            overflow-hidden
            rounded-full

            border
            border-brand-border

            bg-brand-ivory

            shadow-[inset_0_2px_8px_rgba(10,3,0,0.08)]

            transition-all
            duration-300

            group-hover:border-brand-orange
          "
        >
          <motion.div
            animate={{
              x: locale === "en" ? 2 : 26,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 28,
            }}
            className="
              absolute
              top-[2px]

              size-[20px]

              rounded-full

              bg-brand-orange

              shadow-[0_5px_15px_rgba(255,79,0,0.35)]
            "
          />
        </div>

        <span
          className={`
            transition-all
            duration-300

            ${
              locale === "pl"
                ? "opacity-100"
                : "opacity-35"
            }
          `}
        >
          PL
        </span>

      </div>
    </Link>
  );
}