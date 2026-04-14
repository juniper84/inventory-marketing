import { cn } from "@/lib/cn";

export function StepCard({
  step,
  title,
  body,
  className,
}: {
  step: number;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-gold/20 bg-card/80 p-6 shadow-elevated",
        className,
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold font-display text-lg">
          {step}
        </span>
        <h3 className="font-display text-lg text-ink">{title}</h3>
      </div>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </div>
  );
}
