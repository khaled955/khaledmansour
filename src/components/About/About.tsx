import { motion } from "framer-motion";
import { fadeUp } from "../../lib/Animation";
import { DATA } from "../../data/Data"; 

export default function About() {
  const { role, location, summary, socials, skills, projects } = DATA;

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp(0)}
      className="relative"
    >
  

      <p className="max-w-prose text-neutral-700 dark:text-neutral-300">
        {summary}
      </p>

      {/* quick facts */}
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-white/70 p-4 ring-1 ring-black/5 dark:border-neutral-800 dark:bg-zinc-900/40">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">Role</dt>
          <dd className="mt-1 font-medium">{role}</dd>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white/70 p-4 ring-1 ring-black/5 dark:border-neutral-800 dark:bg-zinc-900/40">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">Location</dt>
          <dd className="mt-1 font-medium">{location}</dd>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white/70 p-4 ring-1 ring-black/5 dark:border-neutral-800 dark:bg-zinc-900/40">
          <dt className="text-xs uppercase tracking-wide text-neutral-500">Highlights</dt>
          <dd className="mt-1 font-medium">
            {skills?.length ?? 0}+ skills · {projects?.length ?? 0}+ projects
          </dd>
        </div>
      </dl>

      {/* social links */}
      <div className="mt-6 flex gap-3">
        {/* GitHub */}
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="group inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm
                     transition hover:-translate-y-0.5 hover:shadow md:px-4 dark:border-neutral-800 dark:bg-zinc-900"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-70 group-hover:opacity-100" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.05 1.53 1.05.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8a9.6 9.6 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.56 1.4.21 2.44.11 2.7.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.68-4.57 4.94.36.31.67.92.67 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
          </svg>
          <span className="hidden sm:inline">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="group inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm
                     transition hover:-translate-y-0.5 hover:shadow md:px-4 dark:border-neutral-800 dark:bg-zinc-900"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-70 group-hover:opacity-100" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-.99 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09V23h-4v-6.65c0-1.58-.03-3.62-2.21-3.62-2.22 0-2.56 1.73-2.56 3.51V23h-4V8z"/>
          </svg>
          <span className="hidden sm:inline">LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${socials.email}`}
          aria-label="Email"
          className="group inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm
                     transition hover:-translate-y-0.5 hover:shadow md:px-4 dark:border-neutral-800 dark:bg-zinc-900"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-70 group-hover:opacity-100" fill="currentColor" aria-hidden="true">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2Zm0 2v.01L12 13 4 6.01V6h16Zm0 12H4V8l8 7 8-7v10Z"/>
          </svg>
          <span className="hidden sm:inline">Email</span>
        </a>
      </div>
    </motion.section>
  );
}
