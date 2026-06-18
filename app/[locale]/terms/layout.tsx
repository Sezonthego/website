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
        ? "Regulamin - Weforge"
        : "Terms and Conditions - Weforge",

    description:
      locale === "pl"
        ? "Zapoznaj się z zasadami korzystania ze strony internetowej Weforge oraz powiązanych materiałów publicznych."
        : "Review the terms that govern use of the Weforge website and related public materials.",
  };
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}