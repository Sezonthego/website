import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy - Weforge",
  description:
    "Read how Weforge Clinical uses cookies and similar technologies on its public website.",
};

const cookieSections = [
  {
    title: "What cookies are",
    body: [
      "Cookies are small text files stored by your browser. Similar technologies, such as local storage or pixels, can also help websites remember settings or understand basic usage.",
      "This policy explains how the Weforge Clinical public website may use those technologies. Customer platforms, study workflows, and participant data handling may be governed by separate agreements and notices.",
    ],
  },
  {
    title: "How we use cookies",
    body: [
      "We use cookies and similar technologies to keep the website working, improve reliability, understand general website performance, and support business communications you choose to start with us.",
      "We do not intend for cookies on this public website to collect sensitive health information. Please avoid submitting health or participant details through general website forms unless we specifically request them through an approved workflow.",
    ],
  },
  {
    title: "Cookie categories",
    body: [
      "The website may use a small number of cookie categories depending on the tools and services enabled at the time you visit.",
    ],
    items: [
      "Essential cookies support basic website operation, security, routing, page delivery, and reliable form behavior.",
      "Measurement cookies help us understand aggregate website performance, traffic patterns, browser types, and content quality.",
      "Preference cookies may remember choices such as display preferences or consent settings so the website behaves consistently.",
    ],
  },
  {
    title: "Third-party services",
    body: [
      "Some website features may rely on trusted third-party service providers for hosting, analytics, forms, email, or security. These providers may process limited technical information to deliver their services.",
      "If third-party links appear on the website, those websites may have their own cookie and privacy practices.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can manage or block cookies through your browser settings. If a cookie preference tool is available on the website, you can use it to update non-essential choices.",
      "Blocking some cookies may reduce website functionality, especially for forms, preference storage, or security-related behavior.",
    ],
  },
  {
    title: "Updates to this policy",
    body: [
      "We may update this cookie policy when our website, service providers, or cookie practices change. The updated version will be posted on this page with a revised date.",
      "You can contact us at any time if you have questions about our use of cookies or similar technologies.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      description="This cookie policy explains how Weforge Clinical uses cookies and similar technologies on this website and related public pages."
      eyebrow="Cookies"
      sections={cookieSections}
      title="Cookie Policy"
      updated="June 14, 2026"
    />
  );
}
