import { Container } from "./Container";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  align = "left",
  aside,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  aside?: React.ReactNode;
}) {
  return (
    <Container as="section" className="pt-12 pb-10 md:pt-20 md:pb-16">
      <div
        className={cn(
          "grid gap-10 items-center",
          aside ? "md:grid-cols-[1.1fr_1fr]" : "",
          align === "center" && "text-center",
        )}
      >
        <div
          className={cn(
            "reveal",
            align === "center" && "mx-auto max-w-3xl",
          )}
          style={{ ["--delay" as never]: "0.1s" }}
        >
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-5">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
        {aside && (
          <div
            className="reveal"
            style={{ ["--delay" as never]: "0.2s" }}
          >
            {aside}
          </div>
        )}
      </div>
    </Container>
  );
}
