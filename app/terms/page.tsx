import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions - Weforge",
  description:
    "Review the terms that govern use of the Weforge website and related public materials.",
};

const termsSections = [
  {
    title: "Introduction",
    body: [
      'These Terms and Conditions govern access to and use of Weforge websites, digital services, portals, and operational solutions provided by Noetik Sp. z o.o. ("Noetik", "Weforge", "we", "our").',
      "By accessing our website or using our services, you confirm that you understand and agree to these Terms.",
    ],
  },
  {
    title: "About Weforge",
    body: [
      "Weforge provides digital infrastructure and operational solutions supporting clinical research organizations, research sites, sponsors, and related stakeholders.",
      "Our services may include recruitment infrastructure, operational workflows, AI-assisted tools, automation systems, study management support, and related digital solutions.",
      "Weforge does not provide healthcare services, medical advice, diagnosis, treatment recommendations, or replace communication with qualified healthcare professionals.",
    ],
  },
  {
    title: "Use of services",
    body: [
      "You agree to use Weforge websites and services only for lawful purposes and in accordance with applicable laws and regulations.",
      "Unauthorized access, attempts to compromise security, disruption of services, misuse of systems, or copying of protected materials are prohibited.",
      "If you access our services on behalf of an organization, you confirm that you have authority to represent that organization.",
    ],
  },
  {
    title: "Clinical research information",
    body: [
      "Information available through Weforge systems is intended to support operational workflows, communication, and research-related processes.",
      "Weforge does not independently determine patient eligibility, enrollment decisions, medical suitability, or participation in clinical studies.",
      "Final clinical decisions remain the responsibility of qualified healthcare professionals, investigators, sponsors, or authorized research personnel.",
    ],
  },
  {
    title: "Accounts and access",
    body: [
      "Certain Weforge services may require authorized accounts or controlled access permissions.",
      "Users are responsible for maintaining the confidentiality of login credentials and notifying us of suspected unauthorized access.",
      "We may restrict or suspend access where necessary to protect our systems, users, partners, or comply with legal obligations.",
    ],
  },
  {
    title: "AI-assisted services",
    body: [
      "Weforge may provide AI-assisted features designed to support operational workflows, information processing, automation, and efficiency improvements.",
      "AI-assisted tools are supportive technologies and do not replace qualified professionals, investigators, or authorized clinical research personnel.",
      "Users remain responsible for reviewing information and making appropriate professional decisions where required.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "All Weforge materials, software interfaces, workflows, designs, website content, documentation, branding, trademarks, and related resources are owned by Noetik Sp. z o.o. or licensed partners unless otherwise stated.",
      "Users may not reproduce, modify, distribute, reverse engineer, or commercially exploit Weforge materials without prior written permission, except where permitted by applicable law.",
    ],
  },
  {
    title: "Third-party services",
    body: [
      "Our website and services may integrate with third-party platforms including hosting providers, analytics services, communication systems, AI providers, automation tools, and operational software.",
      "Third-party services are governed by their own terms, privacy policies, security practices, and availability conditions.",
    ],
  },
  {
    title: "Availability and changes",
    body: [
      "We continuously improve our services and may update, modify, suspend, or discontinue certain features or functionality when necessary.",
      "We do not guarantee that all services, systems, or website features will always be uninterrupted, error-free, or continuously available.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by applicable law, Noetik Sp. z o.o. is not responsible for indirect, incidental, consequential, or special damages resulting from website or service use.",
      "Weforge is not responsible for clinical, medical, research enrollment, or operational decisions made without appropriate professional review.",
    ],
  },
  {
    title: "Data protection",
    body: [
      "The processing of personal information is governed by our Privacy Policy and applicable data protection regulations, including the General Data Protection Regulation (GDPR) where applicable.",
      "Where Weforge processes information on behalf of clinical research organizations, such processing is governed by applicable agreements and documented instructions from the relevant data controller.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these Terms from time to time. The latest version published on our website replaces previous versions.",
      "Continued use of our website or services after updates means you accept the revised Terms.",
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

export default function TermsPage() {
  return (
    <LegalPage
      description="These terms explain the rules for using the Weforge Clinical website and public materials."
      eyebrow="Terms"
      sections={termsSections}
      title="Terms & Conditions"
      updated="June 14, 2026"
    />
  );
}
