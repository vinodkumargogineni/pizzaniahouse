import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember";

const styles: Record<Variant, string> = {
  primary:
    "bg-ember text-ink hover:bg-ember-bright hover:shadow-[0_18px_40px_-12px_rgba(242,103,34,0.6)] hover:-translate-y-0.5",
  outline:
    "border border-cream/25 text-cream hover:border-ember hover:text-ember hover:-translate-y-0.5",
  ghost: "text-cream/80 hover:text-ember",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href">) {
  const isHttp = href.startsWith("http");
  const isAnchor = href.startsWith("#");
  if (isHttp || isAnchor) {
    return (
      <a
        href={href}
        className={cn(base, styles[variant], className)}
        {...(isHttp ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, styles[variant], className)} {...props}>
      {children}
    </Link>
  );
}
