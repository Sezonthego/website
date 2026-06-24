import { recruitmentAwareness } from "@/content/blog/en/clinical-recruitment-is-not-an-awareness-problem-alone";
import { patientInterest } from "@/content/blog/en/why-recruitment-fails-after-patients-show-interest";
import { technologyComplexity } from "@/content/blog/en/why-more-technology-does-not-always-reduce-complexity";
import { recruitmentAwarenessPL } from "@/content/blog/pl/rekrutacja-kliniczna-to-nie-tylko-problem-swiadomosci";
import { technologyComplexityPL } from "@/content/blog/pl/dlaczego-wiecej-technologii-nie-zawsze-zmniejsza-zlozonosc";
import { patientInterestPL } from "@/content/blog/pl/dlaczego-rekrutacja-nie-konczy-sie-po-zainteresowaniu-pacjenta";
export const blogPosts = {
  en: [
    {
      id: "patient-recruitment",
      slug: "clinical-recruitment-is-not-an-awareness-problem-alone",
      category: "Patient Recruitment",
      title: "Clinical recruitment is not an awareness problem alone.",
      date: "18 June 2026",
      author: "Yazid Abouhafss",
      content: recruitmentAwareness,
    },

    {
      id: "patient-journey",
      slug: "why-recruitment-fails-after-patients-show-interest",
      category: "Patient Journey",
      title: "Why recruitment fails after patients show interest?",
      date: "18 June 2026",
      author: "Yazid Abouhafss",
      content: patientInterest,
    },

    {
      id: "digital-infrastructure",
      slug: "why-more-technology-does-not-always-reduce-complexity",
      category: "Digital Infrastructure",
      title: "Why more technology does not always reduce complexity?",
      date: "18 June 2026",
      author: "Yazid Abouhafss",
      content: technologyComplexity,
    },
  ],



// TEMPORARY until Polish translations are ready
pl: [
  {
    id: "patient-recruitment",
    slug: "rekrutacja-kliniczna-to-nie-tylko-problem-swiadomosci",
    category: "Rekrutacja pacjentów",
    title: "Rekrutacja kliniczna to nie tylko problem świadomości.",
    date: "18 czerwca 2026",
    author: "Yazid Abouhafss",
    content: recruitmentAwarenessPL,
  },

  {
    id: "patient-journey",
    slug: "dlaczego-rekrutacja-nie-konczy-sie-po-zainteresowaniu-pacjenta",
    category: "Ścieżka pacjenta",
    title: "Dlaczego rekrutacja nie kończy się po zainteresowaniu pacjenta?",
    date: "18 czerwca 2026",
    author: "Yazid Abouhafss",
    content: patientInterestPL,
  },

  {
    id: "digital-infrastructure",
    slug: "dlaczego-wiecej-technologii-nie-zawsze-zmniejsza-zlozonosc",
    category: "Infrastruktura cyfrowa",
    title: "Dlaczego więcej technologii nie zawsze zmniejsza złożoność?",
    date: "18 czerwca 2026",
    author: "Yazid Abouhafss",
    content: technologyComplexityPL,
  },
],
} as const;

export type BlogPost =
  (typeof blogPosts)[keyof typeof blogPosts][number];