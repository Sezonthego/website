"use client";

import { useLocale } from "next-intl";

import { LegalPage } from "@/components/legal-page";

import { cookiesPolicyEn } from "@/content/policies/cookies.en";
import { cookiesPolicyPl } from "@/content/policies/cookies.pl";

export default function CookiesPage() {
  const locale = useLocale();

  const sections =
    locale === "pl" ? cookiesPolicyPl : cookiesPolicyEn;

  return (
    <LegalPage
      description={
        locale === "pl"
          ? "Niniejsza Polityka Cookies wyjaśnia, w jaki sposób Weforge wykorzystuje pliki cookies i podobne technologie na naszych stronach internetowych oraz w usługach cyfrowych."
          : "This Cookie Policy explains how Weforge uses cookies and similar technologies across our websites and digital services."
      }
      eyebrow="Cookies"
      sections={sections}
      title={
        locale === "pl"
          ? "Polityka Cookies"
          : "Cookie Policy"
      }
      updated={
        locale === "pl"
          ? "14 czerwca 2026"
          : "June 14, 2026"
      }
    />
  );
}