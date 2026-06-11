import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function TransformCommunicationCta() {
  return (
    <section className="bg-brand-ivory border-y border-brand-border px-4 my-8 md:my-28">
      <Container>
        <div className="relative isolate overflow-hidden  px-6 py-20 text-center md:py-28 lg:py-36">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_48%_42%,rgba(255,79,0,0.28)_0%,rgba(255,176,114,0.20)_27%,rgba(255,243,230,0.78)_55%,rgba(255,253,249,0.96)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,253,249,0.92)_0%,rgba(255,243,230,0.26)_17%,rgba(43,35,88,0.13)_50%,rgba(255,243,230,0.24)_83%,rgba(255,253,249,0.94)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,79,0,0.16)_0%,rgba(255,243,230,0.18)_36%,transparent_72%)]"
          />

          <h2 className="mx-auto max-w-4xl font-clarion-display text-4xl font-light leading-tight text-brand-cocoa md:text-6xl">
            Make recruitment a reason sponsors trust your site.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-clarion-body text-lg leading-8 text-brand-muted md:text-xl">
            Strengthen your recruitment capabilities with infrastructure designed
            to help your site meet enrollment expectations, deliver studies, and
            build stronger sponsor relationships.
          </p>

          <Button asChild className="mt-8 bg-brand-cocoa hover:bg-brand-orange">
            <Link href="/contact">Book an intro call</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
