"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MousePointerClick, Phone, Mail } from "lucide-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { useTranslations, useLocale } from "next-intl";
import { Logo } from "@/components/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
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

const getNavItems = (
  t: (key: string) => string,
  locale: string
) => [

  { name: t("home"), link: `/${locale}` },

  { name: t("statistics"), link: `/${locale}#impact` },

  { name: t("articles"), link: `/${locale}/blog` },

  { name: t("contact"), link: `/${locale}/contact` },

];

function MobileNavActions({

  onClose,

  primaryLabel,

  secondaryLabel,

}: {

  onClose: () => void;

  primaryLabel: string;

  secondaryLabel: string;

}) {
  return (
    <div className="flex w-full flex-col gap-3">

      <NavbarButton
        href="/contact"
        variant="dark"
        as={Link}
        className="w-full"
        onClick={onClose}
      >
        <ArrowRight className="size-4" aria-hidden="true" />
        {primaryLabel}
      </NavbarButton>


      <NavbarButton
        href="/#solution"
        variant="primary"
        as={Link}
        className="w-full"
        onClick={onClose}
      >
        <MousePointerClick className="size-4" aria-hidden="true" />
        {secondaryLabel}
      </NavbarButton>

    </div>
  );
}

export function SiteNavbar({ banner }: { banner?: React.ReactNode }) {

  const t = useTranslations("Navbar");
const locale = useLocale();

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const navItems = getNavItems(t, locale);

  return (

    <Navbar banner={banner}>
      <NavBody>
        <Logo className="relative z-20 shrink-0 px-2 py-1" />
        <div className="relative z-20 flex items-center gap-8">
          <NavItems items={navItems} />
          <NavActions
  primaryHref={`/${locale}/contact`}
  secondaryHref={`/${locale}#solution`}
  primaryLabel={t("primaryCta")}
  secondaryLabel={t("secondaryCta")}
  linkedinLabel={t("linkedin")}
  phoneLabel={t("phone")}
  emailLabel={t("email")}
/>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>

          <Logo className="shrink-0" />

          <div className="flex items-center gap-5">
          <LanguageSwitcher />
            <Link

              href="https://www.linkedin.com/company/weforgeclinical/"

              target="_blank"

              aria-label="Weforge LinkedIn"

              className="text-brand-cocoa"

            >

              <IconBrandLinkedin

                stroke={1.6}

                className="size-[18px]"

              />

            </Link>

            <Link

              href="tel:+48792586357"

              aria-label="Call Weforge"

              className="text-brand-cocoa"

            >

              <Phone

                strokeWidth={1.5}

                className="size-[17px]"

              />

            </Link>

            <Link

              href="mailto:hello@weforgeclinical.com"

              aria-label="Email Weforge"

              className="text-brand-cocoa"

            >

              <Mail

                strokeWidth={1.5}

                className="size-[17px]"

              />

            </Link>

            <MobileNavToggle

              isOpen={isMobileMenuOpen}

              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

            />

          </div>

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
          <MobileNavActions

onClose={() => setIsMobileMenuOpen(false)}

primaryLabel={t("primaryCta")}

secondaryLabel={t("secondaryCta")}

/>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

// Keep existing import path working across the app.
export { SiteNavbar as Navbar };
