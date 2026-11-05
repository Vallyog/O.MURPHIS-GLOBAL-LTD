import type { ReactNode } from "react";

export type IconName =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "arrow-up-right"
  | "building"
  | "earth"
  | "mail"
  | "machine"
  | "message"
  | "phone"
  | "pin"
  | "rental"
  | "support"
  | "supply"
  | "whatsapp";

const iconPaths: Record<IconName, ReactNode> = {
  "arrow-down": (
    <>
      <path d="M12 5v14M5 12l7 7 7-7" />
    </>
  ),
  "arrow-left": (
    <>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </>
  ),
  "arrow-up": (
    <>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7M7 7h10v10" />
    </>
  ),
  building: (
    <>
      <path d="M4 20V5l8-2v17M12 9l8-2v13M2 20h20" />
      <path d="M7 7h2M7 11h2M7 15h2M16 11h1M16 15h1" />
    </>
  ),
  earth: (
    <>
      <path d="m3 17 5-5 4 3 6-7 3 3" />
      <path d="M3 21h18M4 7l4 4M8 11l2-5 3 3 3-6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  machine: (
    <>
      <path d="M3 17h13l3-6-3-3H9l-3 5H3zM6 17v2M17 17v2M8 8l2-3h4l2 3" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  message: (
    <>
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6a7.5 7.5 0 1 1 17-3.5Z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </>
  ),
  phone: (
    <>
      <path d="M7 3h10v18H7zM10 6h4M11 18h2" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  rental: (
    <>
      <path d="M4 7h13l3 4v7H4zM4 11h16M8 18v2M17 18v2" />
      <circle cx="8" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  support: (
    <>
      <path d="M4 19V8l8-5 8 5v11M2 19h20M9 19v-5h6v5M9 9h.01M15 9h.01" />
    </>
  ),
  supply: (
    <>
      <path d="M4 6h16v13H4zM8 6V3h8v3M4 11h16M9 15h6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.1A8.5 8.5 0 1 1 20 11.5Z" />
      <path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.2-.7 1.6-.5.4-1.1.6-1.8.5-.7-.1-1.6-.4-2.7-1-1.4-.8-2.5-2-3.1-3-.6-1-.8-1.8-.8-2.4 0-.6.3-1.2.6-1.7Z" />
    </>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      {iconPaths[name]}
    </svg>
  );
}
