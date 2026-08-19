import { LockKeyhole } from "lucide-react";

import { BorderPlus } from "@/components/border-plus";

type ScopeAccessGateProps = {
  locale: string;
  accessState?: string;
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    password: string;
    placeholder: string;
    submit: string;
    invalid: string;
    unavailable: string;
  };
};

export function ScopeAccessGate({
  locale,
  accessState,
  copy,
}: ScopeAccessGateProps) {
  const error =
    accessState === "invalid"
      ? copy.invalid
      : accessState === "unavailable"
        ? copy.unavailable
        : null;

  return (
    <main className="min-h-screen bg-brand-ivory px-4 pb-28 pt-28 text-brand-cocoa md:px-8 md:pt-36">
      <div className="relative mx-auto max-w-[720px] border border-brand-border bg-brand-ivory px-6 py-14 md:px-14 md:py-16">
        <BorderPlus className="-left-[11px] -top-[11px]" />
        <BorderPlus className="-right-[11px] -top-[11px]" />
        <BorderPlus className="-bottom-[11px] -left-[11px]" />
        <BorderPlus className="-bottom-[11px] -right-[11px]" />

        <div className="flex size-12 items-center justify-center rounded-full bg-brand-peach text-brand-orange">
          <LockKeyhole className="size-5" aria-hidden="true" />
        </div>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-brand-orange">
          {copy.eyebrow}
        </p>
        <h1 className="mt-4 max-w-xl font-heading text-[2.24rem] font-semibold leading-[1.12] tracking-[-0.03em] md:text-[clamp(2rem,4vw,3.2rem)]">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-xl font-body text-base font-light leading-7 text-brand-muted">
          {copy.description}
        </p>

        <form action="/api/scope-access" method="post" className="mt-9 max-w-lg">
          <input type="hidden" name="locale" value={locale} />
          <label className="flex flex-col gap-3 text-sm text-brand-cocoa">
            <span>{copy.password}</span>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              placeholder={copy.placeholder}
              className="min-h-12 w-full border border-brand-border bg-brand-ivory px-4 py-3 outline-none transition-colors placeholder:text-brand-muted/60 focus:border-brand-orange focus-visible:ring-2 focus-visible:ring-brand-orange/25"
            />
          </label>

          {error && (
            <p className="mt-4 text-sm leading-6 text-destructive" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-cocoa px-6 py-2.5 text-[13px] font-medium text-brand-ivory transition-colors hover:bg-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory"
          >
            {copy.submit}
          </button>
        </form>
      </div>
    </main>
  );
}
