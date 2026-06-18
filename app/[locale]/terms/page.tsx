"use client";

import { useLocale } from "next-intl";

import { LegalPage } from "@/components/legal-page";

import { termsPolicyEn } from "@/content/policies/terms.en";
import { termsPolicyPl } from "@/content/policies/terms.pl";

export default function TermsPage() {
  const locale = useLocale();

  const sections =
    locale === "pl" ? termsPolicyPl : termsPolicyEn;

  return (
    <LegalPage
      description={
        locale === "pl"
          ? "Niniejszy regulamin wyjaśnia zasady korzystania ze strony internetowej Weforge Clinical oraz publicznie dostępnych materiałów."
          : "These terms explain the rules for using the Weforge Clinical website and public materials."
      }
      eyebrow={
        locale === "pl"
          ? "Regulamin"
          : "Terms"
      }
      sections={sections}
      title={
        locale === "pl"
          ? "Regulamin"
          : "Terms & Conditions"
      }
      updated={
        locale === "pl"
          ? "14 czerwca 2026"
          : "June 14, 2026"
      }
    />
  );
}