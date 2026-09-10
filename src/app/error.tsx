"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="grid min-h-dvh place-items-center py-32">
      <Container className="text-center">
        <p className="font-display text-[7rem] leading-none text-ember sm:text-[10rem]">
          Oops
        </p>
        <h1 className="font-display text-3xl">Something burned in the oven</h1>
        <p className="mx-auto mt-3 max-w-sm text-cream/60">
          An unexpected error occurred. Try again — if it keeps happening, give
          the shop a call and we&apos;ll take your order the old-fashioned way.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-ember-bright hover:-translate-y-0.5"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition-all hover:border-ember hover:text-ember"
          >
            Back home
          </Link>
        </div>
      </Container>
    </section>
  );
}
