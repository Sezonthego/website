import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import {
  hasScopeAccess,
  SCOPE_ACCESS_COOKIE,
} from "@/lib/scope-access";

type Locale = "en" | "pl";

type Study = {
  protocolIdentifier: string;
  therapeuticAreaIndication: string;
  estimatedRecruitmentWindow: string;
  estimatedRecruitmentEnd: string;
  currentStatus: string;
};

type ScopeSubmission = {
  locale: Locale;
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  role: string;
  studies: Study[];
  recruitmentTools: string[];
  recruitmentSystemsDetails: string;
  usesPaidAdvertising: "yes" | "no";
  advertisingManagement: string;
  advertisingPlatforms: string;
  researchLocationCount: string;
  additionalContext: string;
};

const copy = {
  en: {
    status: {
      preparing: "Preparing to begin recruitment",
      recruiting: "Currently recruiting",
    } as Record<string, string>,
    tools: {
      "ehr-emr": "Electronic health record (EHR / EMR)",
      ctms: "Trial management system or study portal",
      "recruitment-crm": "Recruitment or referral tracking tool",
      prescreener: "Online pre-screening form or study page",
      "scheduling-follow-up": "Scheduling or participant communication tools",
      manual: "Spreadsheets, documents, or paper",
      none: "No dedicated tools",
      "prefer-not-to-share": "Prefer not to share",
      other: "Another general tool type",
    } as Record<string, string>,
    yesNo: { yes: "Yes", no: "No" } as Record<string, string>,
    validation: {
      contact: "Organization, contact name, and work email are required.",
      email: "Please enter a valid email address.",
      setup: "Please complete the recruitment setup questions.",
      disclosure:
        "Please select either a non-disclosure option or the general tool categories.",
      otherTool: "Please describe the other general tool type.",
      advertising:
        "Please provide the advertising management and platform details.",
      locations: "Please enter a valid number of research locations.",
      noStudies: "Please add at least one study.",
      tooManyStudies: "A maximum of 20 studies can be submitted at once.",
      invalidStudy: "One or more study entries are invalid.",
      studyFields: "Please complete all required fields for every study.",
      studyTiming:
        "Please provide the relevant recruitment timing for each study.",
    },
    email: {
      subject: "New project scope",
      heading: "New Weforge project scope submission",
      organization: "Organization",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      role: "Role / title",
      studyCount: "Number of studies",
      studies: "Studies",
      study: "Study",
      protocol: "Protocol / identifier",
      therapeutic: "Therapeutic area / indication",
      status: "Current status",
      window: "Estimated recruitment window",
      end: "Estimated recruitment end",
      setup: "Current setup",
      tools: "Recruitment tools",
      otherTool: "Other tool type",
      paid: "Uses paid advertising",
      managedBy: "Advertising managed by",
      platforms: "Advertising platforms",
      locations: "Research locations",
      additional: "Additional context",
      notProvided: "Not provided",
      notApplicable: "Not applicable",
      footer: "Sent from the private Weforge project scope form.",
    },
  },
  pl: {
    status: {
      preparing: "Przygotowanie do rozpoczęcia rekrutacji",
      recruiting: "Rekrutacja w toku",
    } as Record<string, string>,
    tools: {
      "ehr-emr": "Elektroniczna dokumentacja medyczna (EHR / EMR)",
      ctms: "System zarządzania badaniami lub portal badania",
      "recruitment-crm": "Narzędzie do obsługi rekrutacji lub skierowań",
      prescreener: "Formularz wstępnej kwalifikacji lub strona badania",
      "scheduling-follow-up":
        "Narzędzia do umawiania wizyt lub komunikacji z uczestnikami",
      manual: "Arkusze, dokumenty lub formularze papierowe",
      none: "Brak dedykowanych narzędzi",
      "prefer-not-to-share": "Wolę nie podawać",
      other: "Inny ogólny typ narzędzia",
    } as Record<string, string>,
    yesNo: { yes: "Tak", no: "Nie" } as Record<string, string>,
    validation: {
      contact:
        "Organizacja, osoba kontaktowa i służbowy adres e-mail są wymagane.",
      email: "Wpisz prawidłowy adres e-mail.",
      setup: "Uzupełnij pytania dotyczące obecnego procesu rekrutacji.",
      disclosure:
        "Wybierz opcję nieujawniania informacji albo ogólne kategorie narzędzi.",
      otherTool: "Opisz inny ogólny typ narzędzia.",
      advertising:
        "Podaj, kto zarządza reklamami i z jakich platform korzystacie.",
      locations: "Wpisz prawidłową liczbę ośrodków badawczych.",
      noStudies: "Dodaj co najmniej jedno badanie.",
      tooManyStudies: "Jednorazowo można przesłać maksymalnie 20 badań.",
      invalidStudy: "Co najmniej jeden wpis dotyczący badania jest nieprawidłowy.",
      studyFields: "Uzupełnij wszystkie wymagane pola dla każdego badania.",
      studyTiming: "Podaj odpowiedni termin rekrutacji dla każdego badania.",
    },
    email: {
      subject: "Nowy zakres projektu",
      heading: "Nowe zgłoszenie zakresu projektu Weforge",
      organization: "Organizacja",
      contact: "Osoba kontaktowa",
      email: "E-mail",
      phone: "Telefon",
      role: "Stanowisko / rola",
      studyCount: "Liczba badań",
      studies: "Badania",
      study: "Badanie",
      protocol: "Numer protokołu / identyfikator",
      therapeutic: "Obszar terapeutyczny / wskazanie",
      status: "Aktualny status",
      window: "Planowany okres rekrutacji",
      end: "Planowane zakończenie rekrutacji",
      setup: "Obecny proces",
      tools: "Narzędzia rekrutacyjne",
      otherTool: "Inny typ narzędzia",
      paid: "Płatne reklamy",
      managedBy: "Zarządzanie reklamami",
      platforms: "Platformy reklamowe",
      locations: "Liczba ośrodków",
      additional: "Dodatkowe informacje",
      notProvided: "Nie podano",
      notApplicable: "Nie dotyczy",
      footer: "Wysłano z prywatnego formularza zakresu projektu Weforge.",
    },
  },
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const monthPattern = /^\d{4}-(0[1-9]|1[0-2])$/;

export async function POST(request: Request) {
  let rawBody: unknown;

  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!isRecord(rawBody)) {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const locale: Locale = rawBody.locale === "pl" ? "pl" : "en";
  const cookieStore = await cookies();

  if (!hasScopeAccess(cookieStore.get(SCOPE_ACCESS_COOKIE)?.value)) {
    return NextResponse.json(
      {
        error:
          locale === "pl"
            ? "Dostęp wygasł. Odśwież stronę i ponownie wprowadź hasło."
            : "Access has expired. Refresh the page and enter the password again.",
      },
      { status: 401 }
    );
  }

  const deliveryErrors =
    locale === "pl"
      ? {
          email: "Nie udało się wysłać wiadomości e-mail.",
          webhook: "Nie udało się wysłać danych do webhooka.",
          notConfigured: "Usługa wysyłania formularza nie jest skonfigurowana.",
        }
      : {
          email: "Email delivery failed.",
          webhook: "Webhook delivery failed.",
          notConfigured: "Submission service is not configured.",
        };

  if (cleanString(rawBody.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const parsed = parseSubmission(rawBody, locale);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const submission = parsed.data;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "contact@weforgeclinical.pl";
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "WeForge Website <onboarding@resend.dev>";
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const subject = `${copy[locale].email.subject} — ${submission.organization}`;
  const text = buildText(submission);
  const html = buildHtml(submission);
  const errors: string[] = [];

  if (resendKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: submission.email,
          subject,
          text,
          html,
        }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        errors.push(
          isRecord(error) && typeof error.message === "string"
            ? error.message
            : deliveryErrors.email
        );
      }
    } catch {
      errors.push(deliveryErrors.email);
    }
  }

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "scope_form_submission",
          from: fromEmail,
          to: [toEmail],
          reply_to: submission.email,
          subject,
          text,
          html,
          submission,
        }),
      });

      if (!response.ok) {
        errors.push(deliveryErrors.webhook);
      }
    } catch {
      errors.push(deliveryErrors.webhook);
    }
  }

  if (!resendKey && !webhookUrl) {
    return NextResponse.json(
      { error: deliveryErrors.notConfigured },
      { status: 500 }
    );
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function parseSubmission(
  body: Record<string, unknown>,
  locale: Locale
): { data: ScopeSubmission } | { error: string } {
  const validation = copy[locale].validation;
  const organization = cleanString(body.organization, 200);
  const contactName = cleanString(body.contactName, 160);
  const email = cleanString(body.email, 254).toLowerCase();
  const phone = cleanString(body.phone, 80);
  const role = cleanString(body.role, 120);
  const recruitmentTools = cleanStringArray(
    body.recruitmentTools,
    Object.keys(copy.en.tools)
  );
  const recruitmentSystemsDetails = cleanString(
    body.recruitmentSystemsDetails,
    2000
  );
  const usesPaidAdvertising = cleanYesNo(body.usesPaidAdvertising);
  const advertisingManagement = cleanString(body.advertisingManagement, 1000);
  const advertisingPlatforms = cleanString(body.advertisingPlatforms, 1000);
  const researchLocationCount = cleanString(body.researchLocationCount, 10);
  const additionalContext = cleanString(body.additionalContext, 4000);

  if (!organization || !contactName || !email) {
    return {
      error: validation.contact,
    };
  }

  if (!emailPattern.test(email)) {
    return { error: validation.email };
  }

  if (recruitmentTools.length === 0 || !usesPaidAdvertising) {
    return { error: validation.setup };
  }

  if (
    (recruitmentTools.includes("none") ||
      recruitmentTools.includes("prefer-not-to-share")) &&
    recruitmentTools.length > 1
  ) {
    return {
      error: validation.disclosure,
    };
  }

  if (recruitmentTools.includes("other") && !recruitmentSystemsDetails) {
    return { error: validation.otherTool };
  }

  if (
    usesPaidAdvertising === "yes" &&
    (!advertisingManagement || !advertisingPlatforms)
  ) {
    return {
      error: validation.advertising,
    };
  }

  if (
    researchLocationCount &&
    (!/^\d+$/.test(researchLocationCount) ||
      Number(researchLocationCount) < 1 ||
      Number(researchLocationCount) > 10000)
  ) {
    return { error: validation.locations };
  }

  if (!Array.isArray(body.studies) || body.studies.length < 1) {
    return { error: validation.noStudies };
  }

  if (body.studies.length > 20) {
    return { error: validation.tooManyStudies };
  }

  const studies: Study[] = [];

  for (const rawStudy of body.studies) {
    if (!isRecord(rawStudy)) {
      return { error: validation.invalidStudy };
    }

    const study: Study = {
      protocolIdentifier: cleanString(rawStudy.protocolIdentifier, 200),
      therapeuticAreaIndication: cleanString(
        rawStudy.therapeuticAreaIndication,
        300
      ),
      estimatedRecruitmentWindow: cleanString(
        rawStudy.estimatedRecruitmentWindow,
        160
      ),
      estimatedRecruitmentEnd: cleanString(
        rawStudy.estimatedRecruitmentEnd,
        7
      ),
      currentStatus: cleanString(rawStudy.currentStatus, 40),
    };

    if (
      !study.therapeuticAreaIndication ||
      !copy[locale].status[study.currentStatus]
    ) {
      return { error: validation.studyFields };
    }

    if (
      (study.currentStatus === "preparing" &&
        !study.estimatedRecruitmentWindow) ||
      (study.currentStatus === "recruiting" &&
        !monthPattern.test(study.estimatedRecruitmentEnd))
    ) {
      return {
        error: validation.studyTiming,
      };
    }

    study.estimatedRecruitmentWindow =
      study.currentStatus === "preparing"
        ? study.estimatedRecruitmentWindow
        : "";
    study.estimatedRecruitmentEnd =
      study.currentStatus === "recruiting"
        ? study.estimatedRecruitmentEnd
        : "";

    studies.push(study);
  }

  return {
    data: {
      locale,
      organization,
      contactName,
      email,
      phone,
      role,
      studies,
      recruitmentTools,
      recruitmentSystemsDetails:
        recruitmentTools.includes("other") ? recruitmentSystemsDetails : "",
      usesPaidAdvertising,
      advertisingManagement:
        usesPaidAdvertising === "yes" ? advertisingManagement : "",
      advertisingPlatforms:
        usesPaidAdvertising === "yes" ? advertisingPlatforms : "",
      researchLocationCount,
      additionalContext,
    },
  };
}

function buildText(submission: ScopeSubmission) {
  const localized = copy[submission.locale];
  const labels = localized.email;
  const studies = submission.studies.flatMap((study, index) => [
    `${labels.study} ${index + 1}`,
    `${labels.protocol}: ${study.protocolIdentifier || labels.notProvided}`,
    `${labels.therapeutic}: ${study.therapeuticAreaIndication}`,
    `${labels.status}: ${localized.status[study.currentStatus]}`,
    study.currentStatus === "preparing"
      ? `${labels.window}: ${study.estimatedRecruitmentWindow}`
      : `${labels.end}: ${study.estimatedRecruitmentEnd}`,
    "",
  ]);

  return [
    labels.heading,
    "",
    `${labels.organization}: ${submission.organization}`,
    `${labels.contact}: ${submission.contactName}`,
    `${labels.email}: ${submission.email}`,
    `${labels.phone}: ${submission.phone || labels.notProvided}`,
    `${labels.role}: ${submission.role || labels.notProvided}`,
    `${labels.studyCount}: ${submission.studies.length}`,
    "",
    ...studies,
    `${labels.tools}: ${submission.recruitmentTools
      .map((tool) => localized.tools[tool])
      .join(", ")}`,
    `${labels.otherTool}: ${submission.recruitmentSystemsDetails || labels.notProvided}`,
    `${labels.paid}: ${localized.yesNo[submission.usesPaidAdvertising]}`,
    `${labels.managedBy}: ${submission.advertisingManagement || labels.notApplicable}`,
    `${labels.platforms}: ${submission.advertisingPlatforms || labels.notApplicable}`,
    `${labels.locations}: ${submission.researchLocationCount || labels.notProvided}`,
    "",
    `${labels.additional}:`,
    submission.additionalContext || labels.notProvided,
  ].join("\n");
}

function buildHtml(submission: ScopeSubmission) {
  const localized = copy[submission.locale];
  const labels = localized.email;
  const studyCards = submission.studies
    .map(
      (study, index) => `
        <div style="border:1px solid #eadfd8;padding:18px;margin:0 0 14px;">
          <div style="color:#ff4f00;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">${labels.study} ${index + 1}</div>
          ${htmlRow(labels.protocol, study.protocolIdentifier || labels.notProvided)}
          ${htmlRow(labels.therapeutic, study.therapeuticAreaIndication)}
          ${htmlRow(labels.status, localized.status[study.currentStatus])}
          ${
            study.currentStatus === "preparing"
              ? htmlRow(labels.window, study.estimatedRecruitmentWindow)
              : htmlRow(labels.end, study.estimatedRecruitmentEnd)
          }
        </div>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0a0300;max-width:680px;line-height:1.55;">
      <h2 style="font-size:24px;margin:0 0 24px;">${labels.heading}</h2>
      ${htmlRow(labels.organization, submission.organization)}
      ${htmlRow(labels.contact, submission.contactName)}
      ${htmlRow(labels.email, submission.email)}
      ${htmlRow(labels.phone, submission.phone || labels.notProvided)}
      ${htmlRow(labels.role, submission.role || labels.notProvided)}
      ${htmlRow(labels.studyCount, String(submission.studies.length))}
      <h3 style="font-size:18px;margin:30px 0 14px;">${labels.studies}</h3>
      ${studyCards}
      <h3 style="font-size:18px;margin:30px 0 14px;">${labels.setup}</h3>
      ${htmlRow(
        labels.tools,
        submission.recruitmentTools
          .map((tool) => localized.tools[tool])
          .join(", ")
      )}
      ${htmlRow(labels.otherTool, submission.recruitmentSystemsDetails || labels.notProvided)}
      ${htmlRow(labels.paid, localized.yesNo[submission.usesPaidAdvertising])}
      ${htmlRow(labels.managedBy, submission.advertisingManagement || labels.notApplicable)}
      ${htmlRow(labels.platforms, submission.advertisingPlatforms || labels.notApplicable)}
      ${htmlRow(labels.locations, submission.researchLocationCount || labels.notProvided)}
      <h3 style="font-size:18px;margin:30px 0 8px;">${labels.additional}</h3>
      <div style="border:1px solid #eadfd8;background:#fffefa;padding:16px;white-space:pre-wrap;">${escapeHtml(
        submission.additionalContext || labels.notProvided
      )}</div>
      <p style="color:#6f6662;font-size:12px;margin-top:30px;">${labels.footer}</p>
    </div>`;
}

function htmlRow(label: string, value: string) {
  return `<div style="margin:0 0 12px;"><strong>${escapeHtml(
    label
  )}:</strong> ${escapeHtml(value)}</div>`;
}

function cleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function cleanStringArray(value: unknown, allowedValues: string[]) {
  if (!Array.isArray(value)) {
    return [];
  }

  return [
    ...new Set(
      value.filter(
        (item): item is string =>
          typeof item === "string" && allowedValues.includes(item)
      )
    ),
  ];
}

function cleanYesNo(value: unknown): "yes" | "no" | null {
  return value === "yes" || value === "no" ? value : null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
      })[character] ?? character
  );
}
