type IconProps = { className?: string; size?: number };

export function StockLedgerIcon({ className, size = 44 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="6"
        y="7"
        width="32"
        height="30"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 14h20M12 20h14M12 26h17M12 32h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="34" cy="20" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function POSIcon({ className, size = 44 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M10 8h24l-2 22a3 3 0 01-3 2.7H15a3 3 0 01-3-2.7L10 8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 14v-2a6 6 0 0112 0v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="17" cy="21" r="1.4" fill="currentColor" />
      <circle cx="27" cy="21" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function OfflineIcon({ className, size = 44 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M6 18c9-8 23-8 32 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M11 24c7-5.5 15-5.5 22 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="22" cy="32" r="2.5" fill="currentColor" />
      <path
        d="M32 8l4 4M36 8l-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ReportsIcon({ className, size = 44 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M6 36h32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="10" y="24" width="5" height="10" rx="1" fill="currentColor" opacity="0.35" />
      <rect x="19" y="18" width="5" height="16" rx="1" fill="currentColor" opacity="0.55" />
      <rect x="28" y="12" width="5" height="22" rx="1" fill="currentColor" opacity="0.85" />
      <path
        d="M10 22l9-8 13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MultiBranchIcon({ className, size = 44 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M22 11v8M22 19l-8 6M22 19l8 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="22" cy="9" r="3" fill="currentColor" />
      <circle
        cx="12"
        cy="28"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <circle
        cx="32"
        cy="28"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}

export function SecurityIcon({ className, size = 44 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M22 7l13 4v10c0 8-5.5 14-13 16-7.5-2-13-8-13-16V11l13-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 22l4 4 8-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
