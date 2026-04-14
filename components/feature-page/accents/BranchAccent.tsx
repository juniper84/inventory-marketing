const BRANCHES = [
  { name: "Main Store", sales: "1.2M" },
  { name: "Msasani", sales: "780K" },
  { name: "Kariakoo", sales: "2.1M" },
];

export function BranchAccent() {
  return (
    <div className="mt-4">
      <svg
        viewBox="0 0 280 120"
        className="w-full h-24"
        aria-hidden
      >
        <path
          d="M140 30 L70 95 M140 30 L210 95"
          stroke="rgba(215, 176, 91, 0.35)"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
        <circle cx="140" cy="30" r="8" fill="#d7b05b" />
        <circle cx="140" cy="30" r="14" fill="none" stroke="rgba(215, 176, 91, 0.4)" strokeWidth="1" />
        <circle cx="70" cy="95" r="6" fill="rgba(215, 176, 91, 0.4)" stroke="#d7b05b" strokeWidth="1.5" />
        <circle cx="210" cy="95" r="6" fill="rgba(215, 176, 91, 0.4)" stroke="#d7b05b" strokeWidth="1.5" />
      </svg>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {BRANCHES.map((b) => (
          <div
            key={b.name}
            className="rounded-lg border border-gold/15 bg-black/30 p-2.5 text-center"
          >
            <p className="text-[0.6rem] uppercase tracking-widest text-muted/70 mb-1 truncate">
              {b.name}
            </p>
            <p className="font-display text-[0.85rem] text-gold">TZS {b.sales}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
