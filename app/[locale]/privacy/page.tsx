"use client";

import { useLocale } from "next-intl";

import { LegalPage } from "@/components/legal-page";

import { privacyPolicyEn } from "@/content/policies/privacy.en";
import { privacyPolicyPl } from "@/content/policies/privacy.pl";

export default function PrivacyPage() {
  const locale = useLocale();

  const sections =
    locale === "pl" ? privacyPolicyPl : privacyPolicyEn;

  return (
    <LegalPage
      description={
        locale === "pl"
          ? "Niniejsza polityka prywatności wyjaśnia, w jaki sposób Weforge Clinical przetwarza informacje zebrane poprzez stronę internetową i komunikację biznesową."
          : "This privacy policy explains how Weforge Clinical handles information collected through this website and related business communications."
      }
      eyebrow={
        locale === "pl"
          ? "PRZEJRZYSTOŚĆ DANYCH"
          : "DATA TRANSPARENCY"
      }
      sections={sections}
      title={
        locale === "pl"
          ? "Polityka Prywatności"
          : "Privacy Policy"
      }
      updated={
        locale === "pl"
          ? "14 czerwca 2026"
          : "June 14, 2026"
      }
    />
  );
}