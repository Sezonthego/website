"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MousePointerClick } from "lucide-react";

import { Logo } from "@/components/logo";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavActions,
  NavBody,
  Navbar,
  NavbarButton,
  NavItems,
  useNavVisible,
} from "@/components/ui/resizable-navbar";
import { motion } from "motion/react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Solutions", link: "/#features" },
  { name: "Methodology", link: "/#methodology" },
  { name: "Contact", link: "/contact" },
];

function MobileNavActions({ onClose }: { onClose: () => void }) {
  const visible = useNavVisible();

  return (
    <div className="flex w-full flex-col gap-3">
      <NavbarButton href="/contact" variant="dark" as={Link} onClick={onClose}>
        <ArrowRight className="size-4" aria-hidden="true" />
        Book an intro call
      </NavbarButton>
      <motion.div
        initial={false}
        animate={{
          height: visible ? "auto" : 0,
          opacity: visible ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <NavbarButton
          href="/#features"
          variant="primary"
          as={Link}
          className="w-full"
          onClick={onClose}
        >
          <MousePointerClick className="size-4" aria-hidden="true" />
          Try it out
        </NavbarButton>
      </motion.div>
    </div>
  );
}

export function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <Logo className="relative z-20 shrink-0 px-2 py-1" />
        <div className="relative z-20 flex items-center gap-8">
          <NavItems items={navItems} />
          <NavActions />
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Logo className="shrink-0" />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-2 py-2 text-base font-semibold text-brand-cocoa transition-colors hover:bg-brand-peach"
            >
              {item.name}
            </Link>
          ))}
          <MobileNavActions onClose={() => setIsMobileMenuOpen(false)} />
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

// Keep existing import path working across the app.
export { SiteNavbar as Navbar };
