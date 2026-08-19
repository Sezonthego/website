import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";

import { BorderPlus } from "@/components/border-plus";
import { ScopeAccessGate } from "@/components/scope-form/scope-access-gate";
import { ScopeForm } from "@/components/scope-form/scope-form";
import {
  hasScopeAccess,
  isScopeAccessConfigured,
  SCOPE_ACCESS_COOKIE,
} from "@/lib/scope-access";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ScopeForm" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: `/${locale}/scope-form`,
      languages: {
        en: "/en/scope-form",
        pl: "/pl/scope-form",
      },
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

export default async function ScopeFormPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ access?: string }>;
}) {
  const { locale } = await params;
  const { access } = await searchParams;
  const t = await getTranslations({ locale, namespace: "ScopeForm" });
  const cookieStore = await cookies();
  const canAccess = hasScopeAccess(
    cookieStore.get(SCOPE_ACCESS_COOKIE)?.value
  );

  if (!canAccess) {
    return (
      <ScopeAccessGate
        locale={locale}
        accessState={isScopeAccessConfigured() ? access : "unavailable"}
        copy={{
          eyebrow: t("access.eyebrow"),
          title: t("access.title"),
          description: t("access.description"),
          password: t("access.password"),
          placeholder: t("access.placeholder"),
          submit: t("access.submit"),
          invalid: t("access.invalid"),
          unavailable: t("access.unavailable"),
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-cocoa">
      <section className="border-y border-brand-border bg-brand-ivory px-4 pb-28 md:px-8">
        <div className="relative mx-auto max-w-[1320px] border-x border-b border-brand-border">
          <BorderPlus className="-left-[11px] -top-[11px]" />
          <BorderPlus className="-right-[11px] -top-[11px]" />
          <BorderPlus className="-bottom-[11px] -left-[11px]" />
          <BorderPlus className="-bottom-[11px] -right-[11px]" />

          <header className="border-b border-brand-border px-6 pb-14 pt-32 md:px-12 md:pb-18">
            <h1 className="max-w-4xl font-heading text-[clamp(2.35rem,5vw,3.75rem)] font-[600] leading-[1.1] tracking-[-0.04em] text-brand-cocoa">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-base font-light leading-[1.7] text-brand-muted">
              {t("hero.description")}
            </p>
          </header>

          <ScopeForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
