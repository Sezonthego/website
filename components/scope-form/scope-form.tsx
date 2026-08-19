"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { cn } from "@/lib/utils";

type YesNo = "" | "yes" | "no";

type Study = {
  protocolIdentifier: string;
  therapeuticAreaIndication: string;
  estimatedRecruitmentWindow: string;
  estimatedRecruitmentEnd: string;
  currentStatus: string;
};

type ScopeFormState = {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  role: string;
  studies: Study[];
  recruitmentTools: string[];
  recruitmentSystemsDetails: string;
  usesPaidAdvertising: YesNo;
  advertisingManagement: string;
  advertisingPlatforms: string;
  researchLocationCount: string;
  additionalContext: string;
  website: string;
};

const emptyStudy = (): Study => ({
  protocolIdentifier: "",
  therapeuticAreaIndication: "",
  estimatedRecruitmentWindow: "",
  estimatedRecruitmentEnd: "",
  currentStatus: "preparing",
});

const initialForm = (): ScopeFormState => ({
  organization: "",
  contactName: "",
  email: "",
  phone: "",
  role: "",
  studies: [emptyStudy()],
  recruitmentTools: [],
  recruitmentSystemsDetails: "",
  usesPaidAdvertising: "",
  advertisingManagement: "",
  advertisingPlatforms: "",
  researchLocationCount: "",
  additionalContext: "",
  website: "",
});

const statusOptions = ["preparing", "recruiting"] as const;

const recruitmentToolOptions = [
  "ehr-emr",
  "ctms",
  "recruitment-crm",
  "prescreener",
  "scheduling-follow-up",
  "manual",
  "none",
  "prefer-not-to-share",
  "other",
] as const;

export function ScopeForm({ locale }: { locale: string }) {
  const t = useTranslations("ScopeForm");
  const [form, setForm] = useState<ScopeFormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateStudy = (index: number, update: Partial<Study>) => {
    setForm((current) => ({
      ...current,
      studies: current.studies.map((study, studyIndex) =>
        studyIndex === index ? { ...study, ...update } : study
      ),
    }));
  };

  const addStudy = () => {
    setForm((current) =>
      current.studies.length >= 20
        ? current
        : { ...current, studies: [...current.studies, emptyStudy()] }
    );
  };

  const removeStudy = (index: number) => {
    setForm((current) => ({
      ...current,
      studies: current.studies.filter((_, studyIndex) => studyIndex !== index),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/scope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? t("errors.submit"));
      }

      setStatus("success");
      setForm(initialForm());
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : t("errors.generic")
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[540px] flex-col items-center justify-center px-6 py-20 text-center md:px-12">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand-orange text-brand-ivory">
          <CheckCircle2 className="size-7" strokeWidth={1.8} />
        </div>
        <h2 className="mt-6 max-w-2xl font-heading text-3xl font-semibold text-brand-cocoa md:text-4xl">
          {t("success.title")}
        </h2>
        <p className="mt-4 max-w-none leading-7 text-brand-muted md:whitespace-nowrap">
          {t("success.description")}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={secondaryButtonClass}
        >
          {t("actions.submitAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(event) =>
          setForm((current) => ({ ...current, website: event.target.value }))
        }
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <FormSection
        number="1"
        title={t("contact.title")}
        description={t("contact.description")}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field label={t("contact.organization")} required>
            <input
              name="organization"
              autoComplete="organization"
              required
              value={form.organization}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  organization: event.target.value,
                }))
              }
              className={inputClass}
              placeholder={t("contact.organizationPlaceholder")}
            />
          </Field>
          <Field label={t("contact.contactName")} required>
            <input
              name="contactName"
              autoComplete="name"
              required
              value={form.contactName}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  contactName: event.target.value,
                }))
              }
              className={inputClass}
              placeholder={t("contact.contactNamePlaceholder")}
            />
          </Field>
          <Field label={t("contact.email")} required>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className={inputClass}
              placeholder="name@organization.com"
            />
          </Field>
          <Field label={t("contact.phone")}>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({ ...current, phone: event.target.value }))
              }
              className={inputClass}
              placeholder={t("contact.optional")}
            />
          </Field>
          <Field label={t("contact.role")}>
            <input
              name="role"
              autoComplete="organization-title"
              value={form.role}
              onChange={(event) =>
                setForm((current) => ({ ...current, role: event.target.value }))
              }
              className={inputClass}
              placeholder={t("contact.optional")}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection
        number="2"
        title={t("studies.title")}
        description={t("studies.description")}
      >
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border border-brand-border bg-brand-peach/50 p-4">
          <div>
            <p className="text-sm font-medium text-brand-cocoa">
              {t("studies.countLabel")}
            </p>
            <p className="mt-1 text-xs text-brand-muted">
              {t("studies.countLimit")}
            </p>
          </div>
          <div className="flex items-center overflow-hidden rounded-full border border-brand-border bg-brand-ivory">
            <button
              type="button"
              onClick={() => removeStudy(form.studies.length - 1)}
              disabled={form.studies.length === 1}
              className={counterButtonClass}
              aria-label={t("studies.removeOne")}
            >
              <Minus className="size-4" />
            </button>
            <output
              className="flex h-11 min-w-14 items-center justify-center border-x border-brand-border text-sm font-medium"
              aria-label={t("studies.countOutput", {
                count: form.studies.length,
              })}
            >
              {form.studies.length}
            </output>
            <button
              type="button"
              onClick={addStudy}
              disabled={form.studies.length >= 20}
              className={counterButtonClass}
              aria-label={t("studies.add")}
            >
              <Plus className="size-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {form.studies.map((study, index) => (
            <fieldset
              key={index}
              className="border border-brand-border bg-brand-ivory"
            >
              <legend className="ml-4 bg-brand-ivory px-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">
                {t("studies.studyLabel", { number: index + 1 })}
              </legend>
              <div className="grid gap-5 p-5 md:grid-cols-2 md:p-6">
                <Field label={t("studies.protocol")}>
                  <input
                    name={`studies.${index}.protocolIdentifier`}
                    value={study.protocolIdentifier}
                    onChange={(event) =>
                      updateStudy(index, {
                        protocolIdentifier: event.target.value,
                      })
                    }
                    className={inputClass}
                    placeholder={t("studies.ifAvailable")}
                  />
                </Field>
                <Field label={t("studies.therapeuticArea")} required>
                  <input
                    name={`studies.${index}.therapeuticAreaIndication`}
                    required
                    value={study.therapeuticAreaIndication}
                    onChange={(event) =>
                      updateStudy(index, {
                        therapeuticAreaIndication: event.target.value,
                      })
                    }
                    className={inputClass}
                    placeholder={t("studies.therapeuticPlaceholder")}
                  />
                </Field>
                <div className="flex flex-col gap-3 text-sm text-brand-cocoa">
                  <span id={`study-${index}-status-label`}>
                    {t("studies.status")}{" "}
                    <span className="text-brand-orange">*</span>
                  </span>
                  <StudyStatusSelect
                    labelId={`study-${index}-status-label`}
                    value={study.currentStatus}
                    onChange={(currentStatus) =>
                      updateStudy(index, {
                        currentStatus,
                        estimatedRecruitmentWindow:
                          currentStatus === "preparing"
                            ? study.estimatedRecruitmentWindow
                            : "",
                        estimatedRecruitmentEnd:
                          currentStatus === "recruiting"
                            ? study.estimatedRecruitmentEnd
                            : "",
                      })
                    }
                  />
                </div>
                {study.currentStatus === "preparing" ? (
                  <Field label={t("studies.window")} required>
                    <input
                      name={`studies.${index}.estimatedRecruitmentWindow`}
                      required
                      value={study.estimatedRecruitmentWindow}
                      onChange={(event) =>
                        updateStudy(index, {
                          estimatedRecruitmentWindow: event.target.value,
                        })
                      }
                      className={inputClass}
                      placeholder={t("studies.windowPlaceholder")}
                    />
                  </Field>
                ) : (
                  <Field label={t("studies.end")} required>
                    <input
                      type="month"
                      name={`studies.${index}.estimatedRecruitmentEnd`}
                      required
                      value={study.estimatedRecruitmentEnd}
                      onChange={(event) =>
                        updateStudy(index, {
                          estimatedRecruitmentEnd: event.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </Field>
                )}
                {form.studies.length > 1 && (
                  <div className="flex items-end md:justify-end">
                    <button
                      type="button"
                      onClick={() => removeStudy(index)}
                      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-2 text-[12px] font-medium text-destructive transition-colors hover:border-destructive hover:bg-destructive hover:text-brand-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive/25"
                    >
                      <Trash2 className="size-3.5" aria-hidden="true" />
                      {t("studies.remove", { number: index + 1 })}
                    </button>
                  </div>
                )}
              </div>
            </fieldset>
          ))}
        </div>
      </FormSection>

      <FormSection
        number="3"
        title={t("setup.title")}
        description={t("setup.description")}
      >
        <div className="grid gap-8">
          <RecruitmentToolsQuestion
            value={form.recruitmentTools}
            onChange={(recruitmentTools) =>
              setForm((current) => ({
                ...current,
                recruitmentTools,
                recruitmentSystemsDetails: recruitmentTools.includes("other")
                  ? current.recruitmentSystemsDetails
                  : "",
              }))
            }
          />
          {form.recruitmentTools.includes("other") && (
            <Field label={t("setup.otherTool")} required>
              <textarea
                name="recruitmentSystemsDetails"
                required
                rows={3}
                value={form.recruitmentSystemsDetails}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    recruitmentSystemsDetails: event.target.value,
                  }))
                }
                className={cn(inputClass, "min-h-28 resize-y")}
                placeholder={t("setup.otherToolPlaceholder")}
              />
            </Field>
          )}

          <div className="border-t border-brand-border pt-8">
            <ChoiceGroup
              legend={t("setup.paidAdvertising")}
              name="usesPaidAdvertising"
              value={form.usesPaidAdvertising}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  usesPaidAdvertising: value,
                  advertisingManagement:
                    value === "no" ? "" : current.advertisingManagement,
                  advertisingPlatforms:
                    value === "no" ? "" : current.advertisingPlatforms,
                }))
              }
            />
          </div>
          {form.usesPaidAdvertising === "yes" && (
            <div className="grid gap-5 md:grid-cols-2">
              <Field label={t("setup.advertisingManager")} required>
                <input
                  name="advertisingManagement"
                  required
                  value={form.advertisingManagement}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      advertisingManagement: event.target.value,
                    }))
                  }
                  className={inputClass}
                  placeholder={t("setup.advertisingManagerPlaceholder")}
                />
              </Field>
              <Field label={t("setup.advertisingPlatforms")} required>
                <input
                  name="advertisingPlatforms"
                  required
                  value={form.advertisingPlatforms}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      advertisingPlatforms: event.target.value,
                    }))
                  }
                  className={inputClass}
                  placeholder={t("setup.advertisingPlatformsPlaceholder")}
                />
              </Field>
            </div>
          )}

          <div className="border-t border-brand-border pt-8">
            <Field label={t("setup.locationCount")}>
              <input
                type="number"
                min="1"
                max="10000"
                name="researchLocationCount"
                value={form.researchLocationCount}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    researchLocationCount: event.target.value,
                  }))
                }
                className={cn(inputClass, "md:max-w-xs")}
                placeholder={t("setup.locationPlaceholder")}
              />
            </Field>
            <p className="mt-3 max-w-xl text-xs leading-5 text-brand-muted">
              {t("setup.locationHelp")}
            </p>
          </div>
        </div>
      </FormSection>

      <FormSection
        number="4"
        title={t("additional.title")}
        description={t("additional.description")}
      >
        <Field label={t("additional.label")}>
          <textarea
            name="additionalContext"
            rows={5}
            maxLength={4000}
            value={form.additionalContext}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                additionalContext: event.target.value,
              }))
            }
            className={cn(inputClass, "min-h-36 resize-y")}
            placeholder={t("additional.placeholder")}
          />
        </Field>
        <p className="mt-3 text-xs leading-5 text-brand-muted">
          {t("additional.privacy")}
        </p>
      </FormSection>

      <div className="bg-brand-ivory px-6 py-10 md:px-12 md:py-12">
        {status === "error" && errorMessage && (
          <p className="mb-5 text-sm text-destructive" role="alert">
            {errorMessage}
          </p>
        )}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-xl text-xs leading-5 text-brand-muted">
            {t("consent.start")} {" "}
            <Link
              href={`/${locale}/privacy`}
              className="underline underline-offset-4 transition-colors hover:text-brand-orange"
            >
              {t("consent.privacy")}
            </Link>{" "}
            {t("consent.and")} {" "}
            <Link
              href={`/${locale}/terms`}
              className="underline underline-offset-4 transition-colors hover:text-brand-orange"
            >
              {t("consent.terms")}
            </Link>
            .
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className={primaryButtonClass}
          >
            {status === "submitting"
              ? t("actions.submitting")
              : t("actions.submit")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}

function StudyStatusSelect({
  labelId,
  value,
  onChange,
}: {
  labelId: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const t = useTranslations("ScopeForm");
  const [open, setOpen] = useState(false);
  const selectedOption = statusOptions.includes(
    value as (typeof statusOptions)[number]
  )
    ? (value as (typeof statusOptions)[number])
    : statusOptions[0];

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-labelledby={labelId}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-12 w-full items-center justify-between border border-brand-border bg-brand-ivory px-4 py-3 text-left text-sm text-brand-cocoa outline-none transition-colors hover:border-brand-orange focus-visible:border-brand-orange focus-visible:ring-2 focus-visible:ring-brand-orange/25"
      >
        <span>{t(`studies.statuses.${selectedOption}`)}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 text-brand-orange transition-transform duration-200",
            open && "rotate-180"
          )}
          strokeWidth={1.8}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            aria-labelledby={labelId}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-50 mt-2 w-full overflow-hidden border border-brand-border bg-brand-ivory shadow-[0_14px_36px_rgba(10,3,0,0.1)]"
          >
            {statusOptions.map((option) => {
              const selected = option === value;

              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex min-h-12 w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors hover:bg-brand-peach hover:text-brand-orange",
                    selected && "bg-brand-peach/70 text-brand-orange"
                  )}
                >
                  {t(`studies.statuses.${option}`)}
                  {selected && <Check className="size-4" aria-hidden="true" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FormSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid border-b border-brand-border lg:grid-cols-[0.28fr_0.72fr]">
      <div className="relative isolate overflow-hidden border-b border-brand-border bg-brand-peach/35 px-6 pb-12 pt-8 lg:min-h-72 lg:border-b-0 lg:border-r lg:px-8 lg:pb-14 lg:pt-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-6 top-[28px] -z-10 font-heading text-[5.5rem] font-semibold leading-none tracking-[-0.08em] text-brand-orange tabular-nums md:text-[6.5rem] lg:left-8"
        >
          {number}
        </span>
        <h2 className="relative mt-[94px] text-2xl font-semibold tracking-[-0.025em] text-brand-cocoa md:mt-[110px]">
          {title}
        </h2>
        <p className="relative mt-3 max-w-sm text-sm font-light leading-6 text-brand-muted">
          {description}
        </p>
      </div>
      <div className="px-6 py-10 md:px-12 lg:py-12">{children}</div>
    </section>
  );
}

function RecruitmentToolsQuestion({
  value,
  onChange,
}: {
  value: string[];
  onChange: (value: string[]) => void;
}) {
  const t = useTranslations("ScopeForm");
  const toggleOption = (option: string) => {
    if (option === "none" || option === "prefer-not-to-share") {
      onChange(value.includes(option) ? [] : [option]);
      return;
    }

    const shareableSelections = value.filter(
      (item) => item !== "none" && item !== "prefer-not-to-share"
    );
    onChange(
      shareableSelections.includes(option)
        ? shareableSelections.filter((item) => item !== option)
        : [...shareableSelections, option]
    );
  };

  return (
    <fieldset>
      <legend className="text-sm text-brand-cocoa">
        {t("setup.toolsQuestion")} {" "}
        <span className="text-brand-orange">*</span>
      </legend>
      <p className="mt-2 text-xs leading-5 text-brand-muted">
        {t("setup.toolsPrivacy")}
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {recruitmentToolOptions.map((option, index) => {
          const checked = value.includes(option);

          return (
            <label
              key={option}
              className={cn(
                "flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors",
                checked
                  ? "border-brand-orange bg-brand-peach/70"
                  : "border-brand-border bg-brand-ivory hover:bg-brand-peach/45"
              )}
            >
              <input
                type="checkbox"
                name="recruitmentTools"
                value={option}
                checked={checked}
                onChange={() => toggleOption(option)}
                required={value.length === 0 && index === 0}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 flex size-4 shrink-0 items-center justify-center border transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-brand-orange/30",
                  checked
                    ? "border-brand-orange bg-brand-orange text-brand-ivory"
                    : "border-brand-border bg-brand-ivory text-transparent"
                )}
              >
                <Check className="size-3" strokeWidth={2.5} />
              </span>
              <span>
                <span className="block text-sm font-medium text-brand-cocoa">
                  {t(`setup.tools.${option}`)}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-3 text-sm text-brand-cocoa">
      <span>
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ChoiceGroup({
  legend,
  name,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  value: YesNo;
  onChange: (value: YesNo) => void;
}) {
  const t = useTranslations("ScopeForm");
  return (
    <fieldset>
      <legend className="text-sm text-brand-cocoa">
        {legend} <span className="text-brand-orange">*</span>
      </legend>
      <div className="mt-5 grid max-w-sm grid-cols-2 gap-3">
        {(["yes", "no"] as const).map((option) => (
          <label
            key={option}
            className={cn(
              "flex min-h-11 cursor-pointer items-center justify-center rounded-full border px-5 text-sm font-medium transition-colors",
              value === option
                ? "border-brand-orange bg-brand-orange text-brand-ivory"
                : "border-brand-border bg-brand-ivory text-brand-cocoa hover:bg-brand-peach"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              required
              className="sr-only"
            />
            {t(`setup.${option}`)}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

const inputClass =
  "min-h-12 w-full rounded-none border border-brand-border bg-brand-ivory px-4 py-3 text-sm text-brand-cocoa outline-none transition-colors placeholder:text-brand-muted/60 focus:border-brand-orange focus-visible:ring-2 focus-visible:ring-brand-orange/25";

const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-cocoa px-6 py-2.5 text-[13px] font-medium text-brand-ivory transition-colors hover:bg-brand-orange disabled:cursor-not-allowed disabled:opacity-60";

const secondaryButtonClass =
  "mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-brand-cocoa px-6 py-2.5 text-[13px] font-medium text-brand-cocoa transition-colors hover:bg-brand-cocoa hover:text-brand-ivory";

const counterButtonClass =
  "flex size-11 items-center justify-center text-brand-cocoa transition-colors hover:bg-brand-peach hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-30";
