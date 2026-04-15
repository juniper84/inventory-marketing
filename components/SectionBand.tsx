import { cn } from "@/lib/cn";

type Tone = "base" | "deep" | "warm" | "lift";

const toneStyles: Record<Tone, string> = {
  base: "",
  deep: "bg-[#050403]",
  warm:
    "bg-[radial-gradient(ellipse_at_top,rgba(215,176,91,0.08),transparent_60%)]",
  lift: "bg-gradient-to-b from-white/[0.015] via-transparent to-transparent",
};

export function SectionBand({
  tone = "base",
  children,
  className,
  divider,
}: {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  divider?: "top" | "bottom" | "both";
}) {
  return (
    <div
      className={cn(
        "relative",
        toneStyles[tone],
        divider === "top" && "border-t border-white/5",
        divider === "bottom" && "border-b border-white/5",
        divider === "both" && "border-y border-white/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
