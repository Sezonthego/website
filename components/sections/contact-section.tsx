"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";

const roleOptions = [
  "site",
  "cro",
  "sponsor",
  "other",
] as const;

type FormState = {
  name: string;
  email: string;
  role: (typeof roleOptions)[number];
  message: string;
  website: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  role: "site",
  message: "",
  website: "",
};

export const ContactSection = () => {
  const t = useTranslations("ContactForm");
  const [roleOpen, setRoleOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  return (

    <div

      id="contact"

      className="grid lg:grid-cols-[0.9fr_1.1fr]"

    >
      <div className="border-b border-brand-border px-6 py-14 md:px-12 lg:border-b-0 lg:border-r">

        <div className="relative max-w-xl">
          <h2

            className="

  font-heading

  text-[clamp(2.2rem,4vw,3.2rem)]

  font-[600]

  leading-[1.15]

  tracking-[-0.04em]

  text-brand-cocoa

"

          >



          </h2>


          <ul className=" divide-y divide-brand-border border-b border-brand-border">
            <ContactDetail
              icon={<Mail className="size-5" />}
              label={t("email")}
              value="contact@weforgeclinical.pl"
              href="mailto:contact@weforgeclinical.pl"
            />
            <ContactDetail
              icon={<Phone className="size-5" />}
              label={t("phone")}
              value="+48 792 586 357"
              href="tel:+48792586357"
            />
            <ContactDetail
              icon={<MapPin className="size-5" />}
              label={t("location")}
              value="Warsaw, Poland"
            />
          </ul>
        </div>
      </div>

      <div className="px-6 py-14 md:px-12">


        <div className="relative">
          {status === "success" ? (
            <div className="flex min-h-[460px] flex-col items-center justify-center py-8 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-brand-orange text-brand-ivory">
                <CheckCircle2 className="size-7" strokeWidth={1.8} />
              </div>
              <h3 className="mt-6 font-heading text-3xl font-light text-brand-cocoa md:text-4xl">
                Thank you for reaching out.
              </h3>
              <p className="mt-4 max-w-md text-brand-muted">
                Our team has received your message and will get back to
                you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="
    mt-8
    inline-flex
    h-12
    items-center
    justify-center
    bg-brand-cocoa
    px-6
    font-body
    text-[13px]
    font-medium
    uppercase
    text-brand-ivory
    transition-colors
    hover:bg-brand-orange
  "
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">

              {/* Bot protection honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    website: e.target.value,
                  }))
                }
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <Field label={t("name")} required>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className={inputClass}
                  placeholder={t("namePlaceholder")}
                />
              </Field>

              <Field label="Email" required>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className={inputClass}
                  placeholder={t("emailPlaceholder")}
                />
              </Field>
              <Field label={t("roleQuestion")}>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setRoleOpen((open) => !open)}
                    className="
        flex
        w-full
        items-center
        justify-between
        border
        border-brand-border
        bg-brand-ivory
        px-4
        py-3
        text-left
        text-sm
        text-brand-cocoa
      "
                  >
                    {
                      t(`roles.${form.role}`)
                    }

                    <span className="text-brand-orange">
                      ↓
                    </span>
                  </button>
                  <AnimatePresence>
                    {roleOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -8,
                          scale: 0.98,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: -8,
                          scale: 0.98,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
        absolute
        z-50
        mt-2
        w-full
        overflow-hidden
        border
        border-brand-border
        bg-brand-ivory
      "
                      >
                        {roleOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setForm((f) => ({
                                ...f,
                                role: option,
                              }));
                              setRoleOpen(false);
                            }}
                            className="
      block
      w-full
      px-4
      py-3
      text-left
      text-sm
      transition-colors
      hover:bg-[#FFF0E8]
      hover:text-brand-orange
    "
                          >
                            {t(`roles.${option}`)}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Field>

              <Field label={t("message")} required>

                <textarea

                  name="message"

                  required

                  rows={4}

                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className={cn(inputClass, "min-h-[132px] resize-y")}
                  placeholder={t("messagePlaceholder")}
                />
              </Field>

              {status === "error" && errorMessage && (
                <p className="text-sm text-destructive" role="alert">
                  {errorMessage}
                </p>
              )}

              <p className="text-xs leading-5 text-brand-muted">

                {t("consentStart")}{" "}

                <Link
                  href="/privacy"
                  className="
    underline
    underline-offset-4
    transition-colors
    hover:text-brand-orange
  "
                >
                  {t("privacy")}
                </Link>{" "}

                {t("and")}{" "}

                <Link
                  href="/terms"
                  className="
    underline
    underline-offset-4
    transition-colors
    hover:text-brand-orange
  "
                >
                  {t("terms")}
                </Link>

                .

              </p>
              <button

                type="submit"

                disabled={status === "submitting"}

                className="

    inline-flex

    h-12

    items-center

    justify-center

    gap-3

    bg-brand-cocoa

    px-6

    font-body

    text-[13px]

    font-medium

    uppercase

    text-brand-ivory

    transition-colors

    hover:bg-brand-orange

    disabled:opacity-60

  "

              >

                {status === "submitting" ? t("sending") : t("send")}

                <ArrowRight className="size-4" />

              </button>
            </form>
          )}
        </div>
      </div>
    </div>


  );
};

const inputClass =
  "w-full border border-brand-border bg-brand-ivory px-4 py-3 text-sm text-brand-cocoa placeholder:text-brand-muted/60 outline-none transition-colors focus:border-brand-orange focus-visible:ring-2 focus-visible:ring-brand-orange/25";

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center bg-[#FFF0E8] text-brand-orange">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
          {label}
        </span>
        <span className="mt-1 block font-normal text-brand-cocoa">

          {value}

        </span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 py-5 transition-colors hover:text-brand-orange"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4 py-5">{content}</div>
      )}
    </li>
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
    <label className="flex flex-col gap-2">
      <span className="text-[16px] font-normal text-brand-cocoa">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </span>
      {children}
    </label>
  );
}
