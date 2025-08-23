/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, containerStagger } from "../../../lib/Animation";

type SocialKeys =
  | "github" | "linkedin" | "email" | "whatsapp"
  | "twitter" | "x" | "facebook" | "instagram"
  | "youtube" | "tiktok" | "behance" | "dribbble" | "website";

type Props = {
  socials: Partial<Record<SocialKeys, string>>;
  title?: string;
  subtitle?: string;
};







export default function SocialLinks({ socials, subtitle = "Find me around the web" }: Props) {
  const items = buildItems(socials);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="connect-title" className="relative">
      <header className="mb-4">
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{subtitle}</p>
      </header>

      <motion.ul
        role="list"
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((it, i) => (
          <motion.li key={it.label} variants={fadeUp(i * 0.02)}>
            <a
              href={it.href}
              target={it.external ? "_blank" : undefined}
              rel={it.external ? "noreferrer" : undefined}
              aria-label={it.label}
              className="group flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white/70 p-4
                         shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md
                         dark:border-neutral-800 dark:bg-zinc-900/50"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-neutral-200 bg-neutral-50
                               text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                {it.icon}
              </span>
              <div className="min-w-0">
                <div className="truncate font-medium">{it.label}</div>
                <div className="truncate text-xs text-neutral-500 dark:text-neutral-400">{pretty(it.href)}</div>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

function buildItems(socials: Partial<Record<SocialKeys, string>>) {
  const push = (cond: any, label: string, href: string | undefined, icon:ReactNode, external = true) =>
    cond && href ? { label, href, icon, external } : null;

  const items = [
    push(socials.github, "GitHub", socials.github, iconGitHub()),
    push(socials.linkedin, "LinkedIn", socials.linkedin, iconLinkedIn()),
    push(socials.email, "Email", socials.email?.startsWith("mailto:") ? socials.email : `mailto:${socials.email}`, iconEmail(), false),
    push(socials.whatsapp, "WhatsApp", socials.whatsapp, iconWhatsApp()),
    push(socials.twitter || socials.x, "X (Twitter)", socials.twitter || socials.x, iconX()),
    push(socials.facebook, "Facebook", socials.facebook, iconFacebook()),
    push(socials.instagram, "Instagram", socials.instagram, iconInstagram()),
    push(socials.youtube, "YouTube", socials.youtube, iconYouTube()),
    push(socials.tiktok, "TikTok", socials.tiktok, iconTikTok()),
    push(socials.behance, "Behance", socials.behance, iconBehance()),
    push(socials.dribbble, "Dribbble", socials.dribbble, iconDribbble()),
    push(socials.website, "Website", socials.website, iconLink()),
  ].filter(Boolean) as Array<{ label: string; href: string; icon: ReactNode; external: boolean }>;

  return items;
}

function pretty(url: string) {
  try {
    const u = new URL(url.replace(/^mailto:/, "mailto://"));
    return u.protocol.startsWith("mailto") ? url.replace("mailto:", "") : u.host + u.pathname;
  } catch {
    return url;
  }
}

/* ——— Inline SVG icons (no extra deps) ——— */
function iconGitHub() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.82 1.32 3.5 1.01.11-.79.42-1.32.77-1.62-2.67-.31-5.48-1.34-5.48-5.97 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.58.12-3.3 0 0 1.01-.32 3.3 1.24A11.5 11.5 0 0 1 12 6.84c1.02.01 2.05.14 3.01.4 2.28-1.56 3.29-1.24 3.29-1.24.66 1.72.24 2.99.12 3.3.77.85 1.24 1.93 1.24 3.25 0 4.64-2.82 5.66-5.5 5.97.43.37.82 1.1.82 2.23v3.31c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/>
    </svg>
  );
}
function iconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4v14h-4V8Zm7.5 0h3.8v2.05h.05C12.38 8.89 13.68 7.83 15.62 7.83c4.03 0 4.78 2.65 4.78 6.09V22h-4v-6.65c0-1.58-.03-3.62-2.21-3.62-2.22 0-2.56 1.73-2.56 3.51V22h-4V8Z"/>
    </svg>
  );
}
function iconEmail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 6L4 6h16Zm0 12H4V8l8 6 8-6v10Z"/>
    </svg>
  );
}
function iconWhatsApp() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M19.1 17.1c-.3-.1-1-.5-1.1-.6-.1-.1-.2-.1-.3 0-.1.1-.4.6-.5.7-.1.1-.2.1-.3 0-.2-.1-.7-.3-1.3-.8-1-.9-1.6-2-1.7-2.2-.1-.2 0-.2.1-.3.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.3-.8-.5-1.2-.1-.3-.3-.2-.4-.2h-.3c-.1 0-.3.1-.4.2-.1.1-.5.5-.5 1.2s.5 1.4.6 1.5c.1.2 1.1 1.8 2.7 2.6 1.6.8 1.6.5 1.9.5.3 0 1-.4 1.1-.8.1-.4.1-.7.1-.8 0-.1-.1-.2-.3-.3z"/><path d="M27.1 4.9C24.2 2 20.3.5 16.1.5 7.7.5.9 7.3.9 15.7c0 2.7.7 5.3 2.1 7.6L2 31.5l8.4-2.2c2.2 1.2 4.7 1.9 7.3 1.9h0c8.4 0 15.2-6.8 15.2-15.2 0-4.1-1.6-8.1-4.5-11.1zm-11 24.6h0c-2.3 0-4.6-.6-6.6-1.7l-.5-.3-5 1.3 1.3-4.8-.3-.5c-1.3-2.1-2-4.6-2-7.1 0-7.4 6-13.4 13.4-13.4 3.6 0 6.9 1.4 9.4 3.9 2.5 2.5 3.9 5.9 3.9 9.4-.1 7.3-6.1 13.2-13.1 13.2z"/>
    </svg>
  );
}
function iconX() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21l-6.54 7.47L22.5 22h-6.89l-4.7-6.12L5.5 22H3l7.11-8.12L2 2h6.89l4.4 5.7L18.244 2Zm-1.204 18h1.329L7.13 4h-1.33l11.24 16Z"/>
    </svg>
  );
}
function iconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M22 12A10 10 0 1 0 10.75 21.9v-6.95H8.2V12h2.55V9.8c0-2.5 1.5-3.88 3.8-3.88 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.26 0-1.65.79-1.65 1.6V12h2.82l-.45 2.95h-2.37V21.9C19.55 20.9 22 16.8 22 12Z"/>
    </svg>
  );
}
function iconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
    </svg>
  );
}
function iconYouTube() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M23.5 7.1a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.5A3 3 0 0 0 .5 7.1 31 31 0 0 0 0 12a31 31 0 0 0 .6 4.9 3 3 0 0 0 2.1 2.1c1.9.5 9.3.5 9.3.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.4-1.6.6-3.3.6-4.9a31 31 0 0 0-.6-4.9ZM9.7 15.5v-7l6.2 3.5-6.2 3.5Z"/>
    </svg>
  );
}
function iconTikTok() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3.5c.7 1.3 1.8 2.3 3.1 3 1 .5 2 .8 3.1.8v3.3c-1.9 0-3.6-.6-5.1-1.6v6.4a6.6 6.6 0 1 1-6.6-6.6h.6v3.3h-.6a3.3 3.3 0 1 0 3.3 3.3V2.5h2.2l.1 1Z"/>
    </svg>
  );
}
function iconBehance() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M10.3 11.7c.7-.3 1.1-.9 1.1-1.7 0-1.6-1.1-2.3-3-2.3H3v8.7h5.6c1.9 0 3.1-.8 3.1-2.6a2.2 2.2 0 0 0-1.4-2.1ZM5.5 9.2h2.4c.7 0 1.1.3 1.1.9s-.4.9-1.1.9H5.5V9.2Zm2.8 6H5.5v-2.1h2.8c.9 0 1.3.4 1.3 1 0 .7-.4 1.1-1.3 1.1ZM18.9 7.7c-2.7 0-4.5 1.9-4.5 4.6s1.8 4.6 4.5 4.6c2 0 3.6-1.1 4.1-2.8h-2.1c-.3.6-1 1-2 1-1.2 0-2.1-.6-2.3-1.8h6.5c.1-.2.1-.6.1-1 0-2.4-1.6-3.6-3.8-3.6Zm-2.3 3.6c.2-1 1-1.7 2.2-1.7s2 .7 2.1 1.7h-4.3ZM14.3 6.1h4.7v1.2h-4.7z"/>
    </svg>
  );
}
function iconDribbble() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2Zm6.35 6.3a7.9 7.9 0 0 1 1.7 4.9 16 16 0 0 0-6.1-.26c-.19-.46-.38-.9-.6-1.33 2.6-1.05 4.4-2.7 5-3.31ZM12 4.1c1.6 0 3.05.51 4.24 1.38-.49.69-2 2.57-4.64 3.54-1.04-1.93-2.2-3.6-2.84-4.42A7.86 7.86 0 0 1 12 4.1Zm-3.7 1.14c.62.78 1.83 2.5 2.9 4.5-3.02.8-6.97.78-7.96.77a8 8 0 0 1 5.06-5.27ZM4.1 12c0-.08 0-.17.01-.25 1.04 0 5.71 0 9.08-1.17.17.34.33.68.48 1.04a15 15 0 0 0-6.9 5.45A7.9 7.9 0 0 1 4.1 12Zm7.9 7.9a7.87 7.87 0 0 1-4.58-1.45 12.9 12.9 0 0 1 6.62-5.17c.66 1.73 1.23 3.7 1.61 5.98a7.85 7.85 0 0 1-3.65.64Zm5.53-2.17c-.33-1.99-.84-3.73-1.43-5.25 1.8-.18 3.78-.07 5.9.36a7.9 7.9 0 0 1-4.47 4.89Z"/>
    </svg>
  );
}
function iconLink() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M10 13a5 5 0 0 1 0-7l2-2a5 5 0 1 1 7 7l-1 1-1.4-1.4 1-1a3 3 0 1 0-4.2-4.2l-2 2A3 3 0 1 0 14 12l.7-.7L16 12.6 15 13.6a5 5 0 0 1-7 0Zm4 0a5 5 0 0 0 0 7l2 2a5 5 0 1 0 7-7l-1-1-1.4 1.4 1 1a3 3 0 1 1-4.2 4.2l-2-2A3 3 0 1 1 10 14l.7.7L12 13.4 11 12.4a5 5 0 0 0 3 0Z"/>
    </svg>
  );
}
