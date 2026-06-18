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
        ? "Polityka Cookies - Weforge"
        : "Cookie Policy - Weforge",

    description:
      locale === "pl"
        ? "Dowiedz się, jak Weforge wykorzystuje pliki cookies i podobne technologie na naszych stronach internetowych oraz w usługach cyfrowych."
        : "Read how Weforge uses cookies and similar technologies across our websites and digital services.",
  };
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}