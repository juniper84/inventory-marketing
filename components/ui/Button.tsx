import { cn } from "@/lib/cn";

type Variant = "primary" | "glow" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-[#1a1206] shadow-gold hover:-translate-y-0.5 hover:shadow-gold-strong",
  glow:
    "border border-gold/30 bg-gold/10 text-ink hover:bg-gold/15 hover:-translate-y-0.5",
  ghost:
    "border border-white/10 text-muted hover:text-ink hover:border-white/20 hover:-translate-y-0.5",
};

type BaseProps = {
  variant?: Variant;
  sweep?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export function ButtonLink({
  variant = "primary",
  sweep = false,
  className,
  children,
  ...props
}: AnchorProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300",
        variantClasses[variant],
        sweep && "sweep-shine",
        className,
      )}
    >
      {children}
    </a>
  );
}

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

export function Button({
  variant = "primary",
  sweep = false,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300",
        variantClasses[variant],
        sweep && "sweep-shine",
        className,
      )}
    >
      {children}
    </button>
  );
}
