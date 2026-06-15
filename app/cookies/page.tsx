import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy - Weforge",
  description:
    "Read how Weforge uses cookies and similar technologies across our websites and digital services.",
};

const cookieSections = [
  {
    title: "Introduction",
    body: [
      "This Cookie Policy explains how Noetik Sp. z o.o., operating the Weforge brand, uses cookies and similar technologies on our websites, digital services, and related online platforms.",
      "Cookies help us provide secure functionality, improve user experience, understand website performance, and optimize our services.",
    ],
  },
  {
    title: "What are cookies?",
    body: [
      "Cookies are small text files stored on your device when you visit a website. Similar technologies, such as pixels, tags, and local storage, may also be used.",
      "These technologies allow websites to remember preferences, enable functionality, improve performance, and understand interactions with digital services.",
    ],
  },
  {
    title: "Types of cookies we use",
    body: [
      "Depending on the services and features enabled, Weforge may use different categories of cookies and similar technologies.",
    ],
    items: [
      "Strictly necessary cookies support website operation, security, session management, access control, routing, and reliable functionality.",
      "Analytics cookies help us understand website usage, visitor interactions, traffic patterns, and performance so we can improve our services.",
      "Preference cookies remember user choices such as settings, preferences, or consent selections to provide a smoother experience.",
      "Marketing cookies may help us measure campaign performance, understand engagement, and deliver more relevant communications.",
    ],
  },
  {
    title: "Third-party technologies",
    body: [
      "We may use trusted third-party providers for hosting, analytics, security, communication, marketing, automation, and operational purposes.",
      "These providers may use cookies or similar technologies according to their own privacy policies and applicable data protection requirements.",
    ],
  },
  {
    title: "Clinical and sensitive information",
    body: [
      "Cookies used on Weforge websites are not intended to collect sensitive health information or make clinical decisions.",
      "Any clinical research information, participant-related data, or study workflows are managed through appropriate systems, agreements, and data protection measures.",
    ],
  },
  {
    title: "Managing cookie preferences",
    body: [
      "You can control, disable, or delete cookies through your browser settings or available cookie preference tools provided on our website.",
      "Disabling certain cookies may affect website functionality, security features, preferences, or availability of some services.",
    ],
  },
  {
    title: "Personal data and GDPR",
    body: [
      "When cookies or similar technologies collect information considered personal data, processing is performed according to applicable data protection laws, including the General Data Protection Regulation (GDPR).",
      "More information about how we collect, use, and protect personal data is available in our Privacy Policy.",
    ],
  },
  {
    title: "Updates to this policy",
    body: [
      "We may update this Cookie Policy as our technologies, service providers, regulations, or services evolve.",
      "The latest version published on our website replaces previous versions.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Noetik Sp. z o.o.",
      "Operating brand: Weforge",
      "Poland",
      "Contact: contact@weforgeclinical.pl",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      description="This Cookie Policy explains how Weforge uses cookies and similar technologies across our websites and digital services."
      eyebrow="Cookies"
      sections={cookieSections}
      title="Cookie Policy"
      updated="June 14, 2026"
    />
  );
}
