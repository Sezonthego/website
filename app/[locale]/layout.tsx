import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const locales = ["en", "pl"] as const;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL("https://weforgeclinical.com"),

alternates: {
  canonical: locale === "pl" ? "/pl" : "/en",

  languages: {
    en: "/en",
    pl: "/pl",
  },
},
    title:
      locale === "pl"
        ? "Weforge - Infrastruktura rekrutacji pacjentów"
        : "Weforge - Patient Recruitment Infrastructure",

    description:
      locale === "pl"
        ? "Pomagamy zespołom badawczym szybciej rekrutować pacjentów, osiągać cele rekrutacyjne i wzmacniać relacje ze sponsorami dzięki połączonym systemom rekrutacji."
        : "We help clinical research teams recruit patients faster, achieve enrollment goals, and strengthen sponsor relationships through connected recruitment systems.",

    openGraph: {
      title:
        locale === "pl"
          ? "Weforge - Infrastruktura rekrutacji pacjentów"
          : "Weforge - Patient Recruitment Infrastructure",

      description:
        locale === "pl"
          ? "Pomagamy zespołom badawczym szybciej rekrutować pacjentów, osiągać cele rekrutacyjne i wzmacniać relacje ze sponsorami dzięki połączonym systemom rekrutacji."
          : "We help clinical research teams recruit patients faster, achieve enrollment goals, and strengthen sponsor relationships through connected recruitment systems.",

      siteName: "Weforge",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Weforge",
        },
      ],
    },

    twitter: {
      
      card: "summary_large_image",

      title:
        locale === "pl"
          ? "Weforge - Infrastruktura rekrutacji pacjentów"
          : "Weforge - Patient Recruitment Infrastructure",

      description:
        locale === "pl"
          ? "Pomagamy zespołom badawczym szybciej rekrutować pacjentów, osiągać cele rekrutacyjne i wzmacniać relacje ze sponsorami dzięki połączonym systemom rekrutacji."
          : "We help clinical research teams recruit patients faster, achieve enrollment goals, and strengthen sponsor relationships through connected recruitment systems.",
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as "en" | "pl")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}