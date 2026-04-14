import { cn } from "@/lib/cn";

export function IconTile({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-24 w-24",
  };
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent text-gold",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
