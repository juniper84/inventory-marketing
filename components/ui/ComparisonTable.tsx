import { cn } from "@/lib/cn";

export type ComparisonRow = {
  label: string;
  values: [string | boolean, string | boolean, string | boolean];
};

export function ComparisonTable({
  tiers,
  rows,
  featuredIndex = 1,
}: {
  tiers: [string, string, string];
  rows: ComparisonRow[];
  featuredIndex?: 0 | 1 | 2;
}) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-gold/20 bg-card/60">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/5">
            <th className="text-left font-normal text-muted uppercase tracking-widest text-xs px-5 py-4"></th>
            {tiers.map((name, i) => (
              <th
                key={name}
                className={cn(
                  "text-left font-display px-5 py-4",
                  i === featuredIndex ? "text-gold" : "text-ink",
                )}
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={row.label}
              className={cn(
                "border-b border-white/5 last:border-0",
                rowIndex % 2 === 1 && "bg-white/[0.015]",
              )}
            >
              <td className="text-muted px-5 py-3.5">{row.label}</td>
              {row.values.map((v, i) => (
                <td
                  key={i}
                  className={cn(
                    "px-5 py-3.5",
                    i === featuredIndex ? "text-gold" : "text-ink/90",
                  )}
                >
                  {typeof v === "boolean" ? (
                    v ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="text-gold"
                        fill="none"
                      >
                        <path
                          d="M3.5 9.5l3.5 3.5 7.5-7.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="text-muted/40">—</span>
                    )
                  ) : (
                    v
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
