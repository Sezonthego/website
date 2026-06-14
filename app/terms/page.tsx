import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions - Weforge",
  description:
    "Review the terms that govern use of the Weforge website and related public materials.",
};

const termsSections = [
  {
    title: "Use of this website",
    body: [
      "These terms govern your access to and use of the Weforge Clinical website. By using the website, you agree to use it lawfully and in accordance with these terms.",
      "If you are using the website on behalf of an organization, you represent that you have authority to do so.",
    ],
  },
  {
    title: "Website information",
    body: [
      "Website content is provided for general business and product information. It does not create a customer relationship, research agreement, or professional services engagement by itself.",
      "Any service engagement, clinical research support, or participant-management work will be governed by separate written agreements.",
    ],
  },
  {
    title: "No medical advice",
    body: [
      "Weforge Clinical does not provide medical advice through this website. Website content should not be used to diagnose, treat, prevent, or manage any medical condition.",
      "Clinical decisions should be made by qualified professionals under the applicable study protocol, clinical standards, and regulatory requirements.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "You agree not to interfere with website operations, attempt unauthorized access, submit malicious code, misuse contact forms, or use the website in a way that violates applicable law.",
      "We may restrict access if we believe website use creates risk for Weforge Clinical, our users, or our partners.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The website, branding, text, graphics, interface elements, and related materials are owned by Weforge Clinical or its licensors and are protected by applicable intellectual property laws.",
      "You may not copy, modify, distribute, or create derivative works from website materials without written permission, except where permitted by law.",
    ],
  },
  {
    title: "Third-party services",
    body: [
      "The website may link to third-party websites or rely on third-party services. We are not responsible for third-party content, policies, availability, or practices.",
      "Your use of third-party services may be governed by their own terms and privacy policies.",
    ],
  },
  {
    title: "Disclaimers and limitations",
    body: [
      "The website is provided on an as-is and as-available basis. We do not guarantee that the website will always be uninterrupted, error-free, or available.",
      "To the fullest extent permitted by law, Weforge Clinical will not be liable for indirect, incidental, special, consequential, or punitive damages arising from website use.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these terms from time to time. The updated version will be posted on this page with a revised date.",
      "Continued use of the website after updates means you accept the revised terms.",
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
