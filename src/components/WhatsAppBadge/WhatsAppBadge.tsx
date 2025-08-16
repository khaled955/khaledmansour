import { useMemo } from "react";

type Props = {
  phone: string;                  // e.g. "00966509784124" or "+966509784124"
  message?: string;               // optional prefilled text
  variant?: "fab" | "chip";       // floating action button or inline badge
  className?: string;
};

function normalize(phone: string) {
  let digits = phone.replace(/\D/g, ""); // keep numbers only
  if (digits.startsWith("00")) digits = digits.slice(2); // handle 00 prefix
  return digits; // wa.me expects international number without '+' or spaces
}

export default function WhatsAppBadge({
  phone,
  message = "Hi Khaled! I came from your portfolio.",
  variant = "fab",
  className = "",
}: Props) {
  const href = useMemo(() => {
    const digits = normalize(phone);
    const q = new URLSearchParams({ text: message }).toString();
    return `https://wa.me/${digits}?${q}`;
  }, [phone, message]);

  const common =
    "inline-flex items-center gap-2 select-none ring-1 ring-black/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600";

  if (variant === "fab") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg hover:shadow-xl ${common} ${className}`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    );
  }

  // "chip" inline badge (use inside your Contact section or footer)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700 hover:bg-green-500/15 dark:text-green-300 ${common} ${className}`}
      aria-label="Contact me on WhatsApp"
      title="Contact me on WhatsApp"
    >
      <WhatsAppIcon className="h-4 w-4" />
      <span>Contact on WhatsApp</span>
    </a>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M16 2.67A13.33 13.33 0 0 0 5.2 24.7L4 29.33l4.7-1.2A13.33 13.33 0 1 0 16 2.67Zm0 2.66a10.67 10.67 0 0 1 9.17 16.17l-.35.55a10.67 10.67 0 0 1-13.2 3.8l-.6-.27-2.7.7.7-2.7-.27-.6A10.67 10.67 0 0 1 16 5.33Zm-5.03 5.9c.2-.4.45-.47.74-.47h.55c.17 0 .4-.03.62.47s.78 1.9.85 2.03c.07.13.1.27.02.44-.1.2-.15.32-.3.5-.15.18-.32.4-.45.54-.15.15-.3.32-.13.6.17.27.77 1.27 1.66 2.06 1.14 1.02 2.1 1.34 2.4 1.5.3.17.47.15.64-.1.17-.25.74-.87.94-1.18.2-.3.4-.25.66-.15.27.1 1.7.8 1.98.95.28.15.47.22.54.35.07.13.07.75-.17 1.46-.25.7-1.45 1.39-2 1.42-.54.03-1.06.27-3.57-.73-3.03-1.21-4.98-4.2-5.13-4.4-.15-.2-1.23-1.64-1.23-3.14 0-1.5.78-2.23.98-2.43Z"
      />
    </svg>
  );
}
