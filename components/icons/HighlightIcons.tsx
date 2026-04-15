type IconProps = { className?: string; size?: number };

export function ScanPhoneIcon({ className, size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="11"
        y="5"
        width="18"
        height="30"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15 14v12M18 14v12M21 14v12M24 14v12M27 14v12"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <path
        d="M9 20h22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BatchExpiryIcon({ className, size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="6"
        y="10"
        width="28"
        height="22"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 17h28"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13 7v5M27 7v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 22v2l1.4 1.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CreditIcon({ className, size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="5"
        y="11"
        width="30"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 17h30"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 23h6M19 23h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="29" cy="23" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function PriceListIcon({ className, size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="7"
        y="6"
        width="26"
        height="28"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 13h9M12 19h14M12 25h11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="27" cy="13" r="2.2" fill="currentColor" />
      <circle cx="29" cy="25" r="2.2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function PrintBarcodeIconUnused({ className, size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="7"
        y="13"
        width="26"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="11"
        y="6"
        width="18"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="11"
        y="24"
        width="18"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 28v4M17 28v4M20 28v4M23 28v4M26 28v4"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="29" cy="20" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function SwahiliIcon({ className, size = 40 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M8 9h18a4 4 0 014 4v9a4 4 0 01-4 4H16l-6 5v-5H8a2 2 0 01-2-2V11a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text
        x="20"
        y="21"
        textAnchor="middle"
        fontSize="9"
        fontFamily="ui-serif, Georgia, serif"
        fontWeight="600"
        fill="currentColor"
      >
        SW
      </text>
    </svg>
  );
}
