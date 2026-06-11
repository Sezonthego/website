"use client";

import { Container } from "./container";
import { Logo } from "./logo";
import { SubHeading } from "./subheading";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

export const Footer = () => {
  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Solutions", href: "/#features" },
    { title: "Insights", href: "/blog" },
    { title: "Partnership", href: "/#contact" },
  ];

  const policyItems = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
  ];

  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="bg-brand-cocoa py-10 md:py-20 lg:pt-32 px-4 overflow-hidden text-brand-ivory">
      <footer className="border-t border-brand-ivory/10 pt-10 md:pt-20 lg:pt-32 lg:pb-10 relative perspective-distant">
        <Container className="grid grid-cols-1 md:grid-cols-5 gap-10 px-4 relative z-20">
          <div className="md:col-span-2 flex flex-col gap-4 items-start">
            <div className="flex gap-1 items-center">
              <Logo tone="light" />
            </div>
            <SubHeading className="text-brand-peach/70">
              Patient recruitment infrastructure for clinical research sites.
            </SubHeading>
            <Button asChild className="">
              <Link href="/#contact">Book an intro call</Link>
            </Button>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div className="text-base font-medium text-brand-peach">
              Navigation
            </div>
            <ul className="flex flex-col gap-2 list-none">
              {navigationItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-peach/70 hover:text-brand-orange transition-all duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div className="text-base font-medium text-brand-peach">
              Policies
            </div>
            <ul className="flex flex-col gap-2 list-none">
              {policyItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-peach/70 hover:text-brand-orange transition-all duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div className="text-base font-medium text-brand-peach">
              Newsletter
            </div>
            <div className="border p-px border-brand-ivory/15 bg-brand-peach rounded-md relative items-center justify-between flex shrink-0">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-4 py-2 placeholder:text-brand-cocoa/45 text-brand-cocoa text-sm outline-none"
              />
              <button className="bg-brand-orange text-brand-ivory absolute inset-y-0 text-center px-4 py-2 rounded-none right-0">
                <Send className="size-4" />
              </button>
            </div>
            <p className="text-brand-peach/65 font-clarion-body text-sm max-w-xl">
              Stay informed on the latest in clinical recruitment.
            </p>
          </div>
        </Container>

        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between mt-10 relative z-20 px-4">
          <p className="text-sm text-brand-peach/60">
            &copy; {new Date().getFullYear()} WeForge. All rights reserved.
          </p>

          <div className="flex flex-col items-start sm:items-end gap-4 *:text-sm *:text-brand-peach/60">
            <div className="flex items-center gap-4">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>

            <div className="flex items-center gap-4">
              {theme === "dark" ? (
                <IconMoon
                  className="text-brand-peach size-4 cursor-pointer"
                  onClick={handleThemeChange}
                />
              ) : (
                <IconSun
                  className="text-brand-peach size-4 cursor-pointer"
                  onClick={handleThemeChange}
                />
              )}
              <IconBrandInstagram className="text-brand-peach hover:text-brand-orange size-4 cursor-pointer" />
              <IconBrandTwitter className="text-brand-peach hover:text-brand-orange size-4 cursor-pointer" />
              <IconBrandLinkedin className="text-brand-peach hover:text-brand-orange size-4 cursor-pointer" />
            </div>
          </div>
        </Container>

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
    </section>
  );
};
