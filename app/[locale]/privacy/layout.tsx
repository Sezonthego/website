import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title:
      locale === "pl"
        ? "Polityka Prywatności - Weforge"
        : "Privacy Policy - Weforge",

    description:
      locale === "pl"
        ? "Przeczytaj, jak przetwarzamy zapytania ze strony internetowej, komunikację dotyczącą usług oraz informacje związane z działalnością badań klinicznych."
        : "Read how we handle website inquiries, service communications, and information related to clinical research operations.",
  };
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}