import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-ivory text-brand-cocoa">
      <section className="px-4 py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-orange">
              404
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-cocoa md:text-6xl">
              Page not found.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-brand-cocoa/70 md:text-lg">
              The page may have moved, or the link may no longer be active.
              You can return to the homepage or contact the WeForge Clinical
              team.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/">Back to homepage</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
