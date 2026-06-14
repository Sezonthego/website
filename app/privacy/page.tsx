import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy - Weforge",
  description:
    "Read how we handle website inquiries, service communications, and information related to clinical research operations.",
};

const privacySections = [
  {
    title: "Information we collect",
    body: [
      "We collect information you choose to provide through our website, including your name, work email, organization, phone number, and message details.",
      "We may also collect limited technical information such as device type, browser type, referring pages, and general usage data to keep the website reliable and improve the experience.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "We use information to respond to inquiries, provide requested materials, coordinate service conversations, operate and improve our website, and protect our systems.",
      "We may also use business contact information for appropriate follow-up about Weforge Clinical services, unless you ask us not to.",
    ],
  },
  {
    title: "Clinical and participant data",
    body: [
      "Clinical research and participant data is handled under customer agreements, study-specific instructions, and applicable privacy and research requirements.",
      "Please do not submit sensitive health information through general website contact forms unless we specifically request it through an approved workflow.",
    ],
  },
  {
    title: "How information is shared",
    body: [
      "We do not sell personal information. We may share information with trusted service providers who help us operate the website, manage communications, and deliver services.",
      "We may also disclose information when required by law, to protect rights and security, or as part of a business transaction such as a merger or acquisition.",
    ],
  },
  {
    title: "Retention and security",
    body: [
      "We retain information only as long as reasonably needed for the purposes described here, unless a longer period is required by law, contract, or legitimate business needs.",
      "We use administrative, technical, and organizational safeguards intended to protect information from unauthorized access, loss, misuse, or alteration.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You may ask us to update, delete, or stop using your business contact information, subject to legal, contractual, and operational requirements.",
      "You can contact us at any time if you have questions about how your information is handled.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      description="This privacy policy explains how Weforge Clinical handles information collected through this website and related business communications."
      eyebrow="DATA TRANSPARENCY"
      sections={privacySections}
      title="Privacy Policy"
      updated="June 14, 2026"
    />
  );
}
