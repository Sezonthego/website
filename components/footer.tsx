"use client";

import Image from "next/image";
import Link from "next/link";
import { externalLinks } from "@/lib/links";
import { useTranslations, useLocale } from "next-intl";
import { Send, Phone, Mail } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

import { Container } from "@/components/container";
import { SubHeading } from "@/components/subheading";
import { BorderPlus } from "@/components/border-plus";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const locale = useLocale();

const links =
  externalLinks[locale as keyof typeof externalLinks];
  const t = useTranslations("Footer");
  const navigationItems = [
    { title: t("navigation.home"), href: `/${locale}` },
    { title: t("navigation.solutions"), href: `/${locale}#features` },
    { title: t("navigation.articles"), href: `/${locale}/blog` },
    { title: t("navigation.contact"), href: `/${locale}/contact` },
  ];

  const policyItems = [

    { title: t("policies.privacy"), href: `/${locale}/privacy` },
  
    { title: t("policies.terms"), href: `/${locale}/terms` },
  
    { title: t("policies.cookies"), href: `/${locale}/cookies` },
  
  ];

  return (
    <section

      className="

  bg-brand-cocoa

  px-4

  py-15

  text-brand-ivory

  md:px-8

"

    >

      <div

        className="

    relative

    mx-auto

    max-w-[1320px]

    border-x

    border-[rgba(255,253,249,0.08)]

    bg-brand-cocoa

  "

      >

        <footer

          className="

  relative

  overflow-hidden

  pt-10

  pb-14

  md:py-16

  perspective-[900px]

"

        >
          <div
            className="
    relative
    z-20
    grid
    grid-cols-1
    gap-10
    px-8
    md:px-12
    lg:px-14
    md:grid-cols-[1.8fr_0.7fr_0.7fr_1.7fr]
    md:gap-x-20
  "
          >
            <div className="flex flex-col items-start gap-9">
              <Image
                src="/brand-logo/weforge-white-2.svg"
                alt="Weforge"
                width={150}
                height={40}
                className="h-auto w-[200px]"
              />
              <SubHeading

                className="

  max-w-[350px]

  text-[16px]

  md:text-[14px]

  leading-[1.7]

  font-light

  text-brand-peach/70

"

              >

{t("description")}

              </SubHeading>

              <Link
  href={links.introCall}
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-4
    mb-6
    md:mb-0
    inline-flex
    min-h-11
    items-center
    gap-4
    rounded-full
    bg-brand-orange
    px-5
    py-2.5
    text-[13px]
    font-medium
    text-brand-ivory
    shadow-[0_14px_30px_rgba(255,79,0,0.20)]
    transition-colors
    hover:bg-brand-orange/90
  "
>
  <MessagesSquare
    className="size-4 stroke-[1.7]"
    aria-hidden="true"
  />

{t("cta")}
</Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-base font-medium text-brand-peach">
              {t("resources")}
              </div>

              <ul className="flex list-none flex-col gap-2">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-peach/70 transition-all duration-200 hover:text-brand-orange"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              <div className="text-base font-medium text-brand-peach">
              {t("compliance")}
              </div>

              <ul className="flex list-none flex-col gap-2">
                {policyItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-peach/70 transition-all duration-200 hover:text-brand-orange"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div id="newsletter" className="text-base font-medium text-brand-peach">
                {t("newsletter.title")}
                </div>

                <p className="mt-3 text-sm leading-[1.7] text-brand-peach/65">
                {t("newsletter.description")}
                </p>
              </div>

              <div className="relative flex h-12 overflow-hidden bg-brand-ivory">
                <input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  className="
        w-full
        bg-transparent
        px-4
        pr-14
        text-sm
        text-brand-cocoa
        placeholder:text-brand-cocoa/45
        outline-none
      "
                />

                <button
                  type="button"
                  className="
        absolute
        inset-y-0
        right-0
        flex
        w-12
        items-center
        justify-center
        bg-brand-orange
        text-brand-ivory
        transition-colors
        hover:bg-brand-orange/90
      "
      aria-label={t("newsletter.subscribe")}
                >
                  <Send className="size-4" />
                </button>
              </div>

              <p className="text-xs leading-[1.6] text-brand-peach/45">
  {t("newsletter.consent")}{" "}
  <Link
  href={`/${locale}/privacy`}
  className="
    underline
    underline-offset-4
    transition-colors
    hover:text-brand-orange
  "
>
    {t("policies.privacy")}
  </Link>.
</p>
              <div className="mt-5 flex items-center gap-5">

                {/* Contact */}
                <div className="flex items-center gap-5">
                  <Link href="tel:+48792586357" aria-label="Call Weforge">
                    <Phone
                      strokeWidth={1.6}
                      className="

        size-4.5
      
        md:size-4
      
        cursor-pointer
      
        text-brand-peach
      
        transition-colors
      
        hover:text-brand-orange
      
      "
                    />
                  </Link>

                  <Link
                    href="mailto:contact@weforgeclinical.pl"
                    aria-label="Email Weforge"
                  >
                    <Mail
                      strokeWidth={1.6}
                      className="

        size-5
      
        md:size-4
      
        cursor-pointer
      
        text-brand-peach
      
        transition-colors
      
        hover:text-brand-orange
      
      "
                    />
                  </Link>
                </div>


                {/* Separator */}
                <span className="h-4 w-px bg-brand-peach/20" />


                {/* Social */}
                <div className="flex items-center gap-5">

                  <IconBrandInstagram
                    className="

size-5.5

md:size-4

cursor-pointer

text-brand-peach

transition-colors

hover:text-brand-orange

"
                  />

                  <IconBrandX
                    stroke={1.6}
                    className="

      size-5
    
      md:size-4
    
      cursor-pointer
    
      text-brand-peach
    
      transition-colors
    
      hover:text-brand-orange
    
    "
                  />

                  <Link
                    href="https://www.linkedin.com/company/weforgeclinical/"
                    target="_blank"
                    aria-label="Weforge LinkedIn"
                  >
                    <IconBrandLinkedin
                      className="

size-5

md:size-4

cursor-pointer

text-brand-peach

transition-colors

hover:text-brand-orange

"
                    />
                  </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="relative z-20 mt-[82px] mb-8 h-px w-full bg-brand-ivory/10" />
          <div
  className="
    relative
    z-20
    flex
    flex-col
    items-start
    gap-4
    px-8
    md:px-12
    lg:px-14
    sm:flex-row
    sm:justify-between
  "
>
<p className="text-sm text-brand-peach/60">
  &copy; {new Date().getFullYear()} Weforge. {t("rights")}
</p>

<div className="flex items-center gap-5 text-sm text-brand-peach/60">
<Link
  href={`/${locale}/privacy`}
  className="hover:text-brand-orange"
>
  {t("policies.privacy")}
</Link>

  <Link href={`/${locale}/terms`} className="hover:text-brand-orange">
    {t("policies.terms")}
  </Link>
</div>

            </div>

          <div
            className={cn(
              "absolute inset-0",
              "flex items-center justify-center gap-10",
              "bg-size-[40px_40px]",
              "bg-[linear-gradient(to_right,rgba(255,253,249,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,243,230,0.08)_1px,transparent_1px)]",
              "mask-radial-from-50%"
            )}
            style={{
              transform: "rotateX(60deg)",
            }}
          />
        </footer>
      </div>
    </section>
  );
};
