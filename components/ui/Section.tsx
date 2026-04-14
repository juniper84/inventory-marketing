import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className,
  containerClassName,
  bleed = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-2xl reveal",
        align === "center" && "mx-auto text-center items-center",
      )}
      style={{ ["--delay" as never]: "0.1s" }}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-muted leading-relaxed">{subtitle}</p>}
    </div>
  );
}
