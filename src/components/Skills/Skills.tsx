import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiMui,
  SiBootstrap, SiFramer, SiRedux, SiReacthookform, SiFormik, SiReactquery,
  SiAxios, SiVite, SiGithub, SiFontawesome
} from "react-icons/si";
import { MdCookie } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";
import type { ReactNode } from "react";

type Props = {
  /** optional; if omitted we use the default list below */
  skills?: string[];
};

const DEFAULT_SKILLS = [
  "html","html5","css","javascript","es6","typescript",
  "react","framer motion","tailwindcss","mui","bootstrap",
  "redux toolkit","context","react-hook-form","formik","yup","tanstackquery","react-hot-toast",
  "axios","cookies","vite","githup","font awesome","react icons"
];

// ----- motion helpers -----
const fadeContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.06 } }
};
const fadeItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, delay } }
});

type GroupKey =
  | "Foundations"
  | "UI & Styling"
  | "React Ecosystem"
  | "State & Forms"
  | "Data & Networking"
  | "Tooling & Versioning";

type SkillDef = {
  name: string;
  icon: ReactNode;
  blurb?: string;
};

const GROUPS: Record<GroupKey, SkillDef[]> = {
  Foundations: [
    { name: "HTML5", icon: <SiHtml5 className="h-5 w-5 text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 className="h-5 w-5 text-[#1572B6]" /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="h-5 w-5 text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-5 w-5 text-[#3178C6]" /> },
  ],
  "UI & Styling": [
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-5 w-5 text-[#06B6D4]" /> },
    { name: "MUI", icon: <SiMui className="h-5 w-5 text-[#007FFF]" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="h-5 w-5 text-[#7952B3]" /> },
    { name: "Font Awesome", icon: <SiFontawesome className="h-5 w-5 text-[#538DD7]" /> },
    { name: "React Icons", icon: <HiOutlineSparkles className="h-5 w-5" /> },
        { name: "Framer Motion", icon: <SiFramer className="h-5 w-5" /> },

  ],
  "React Ecosystem": [
    { name: "React", icon: <SiReact className="h-5 w-5 text-[#61DAFB]" /> },
  ],
  /** New group with your forms/state libs */
  "State & Forms": [
    { name: "Redux Toolkit", icon: <SiRedux className="h-5 w-5 text-[#764ABC]" /> },
    { name: "Context API", icon: <HiOutlineSparkles className="h-5 w-5" /> },
    { name: "React Hook Form", icon: <SiReacthookform className="h-5 w-5" /> },
    { name: "Formik", icon: <SiFormik className="h-5 w-5" /> },
    { name: "Yup", icon: <HiOutlineSparkles className="h-5 w-5" /> },
  ],
  "Data & Networking": [
    { name: "Axios", icon: <SiAxios className="h-5 w-5" /> },
    { name: "TanStack Query", icon: <SiReactquery className="h-5 w-5 text-[#FF4154]" /> },
    { name: "Cookies", icon: <MdCookie className="h-5 w-5" /> },
  ],
  "Tooling & Versioning": [
    { name: "Vite", icon: <SiVite className="h-5 w-5 text-[#646CFF]" /> },
    { name: "Git / GitHub", icon: <SiGithub className="h-5 w-5" /> },
  ],
};

/** optional: filter by provided skills so the UI stays truthful */
function filterToProvided(all: Record<GroupKey, SkillDef[]>, provided?: string[]) {
  if (!provided || !provided.length) return all;
  const set = new Set(
    provided.map(s => s.trim().toLowerCase().replace(/\s+/g, ""))
      .map(s => (s === "githup" ? "github" : s)) // normalize common typo
  );
  const m: Record<GroupKey, SkillDef[]> = { ...all };
  (Object.keys(m) as GroupKey[]).forEach((g) => {
    m[g] = m[g].filter(def => {
      const key = def.name.toLowerCase().replace(/\s+|[()]/g, "");
      // loose match so "react-hook-form" ~ "react hook form"
      return Array.from(set).some(s => key.includes(s) || s.includes(key));
    });
  });
  return m;
}

export default function Skills({ skills = DEFAULT_SKILLS }: Props) {
  const data = filterToProvided(GROUPS, skills);

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative scroll-mt-24">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-8 -top-16 h-48 rounded-full
                   bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-fuchsia-500/15 blur-3xl"
      />
      <header className="mb-6">
        <h2 id="skills-title" className="text-2xl sm:text-3xl font-bold tracking-tight">Skills & Stack</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Front-end focused: React + TypeScript + Tailwind, with solid forms, state, and data fetching patterns.
        </p>
      </header>

      <motion.div
        variants={fadeContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {(Object.keys(data) as GroupKey[]).map((group, gi) => {
          const list = data[group];
          if (!list.length) return null;

          return (
            <motion.article
              key={group}
              variants={fadeItem(gi * 0.03)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/70 p-5 shadow-sm ring-1 ring-black/5
                         backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-neutral-800 dark:bg-zinc-900/50"
            >
              <header className="mb-3 flex items-center gap-2">
                <h3 className="text-base font-semibold">{group}</h3>
              </header>

              <ul className="flex flex-wrap gap-2">
                {list.map((s, i) => (
                  <motion.li
                    key={s.name}
                    variants={fadeItem(i * 0.02)}
                    className="group/skill relative flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50
                               px-3 py-1.5 text-xs text-neutral-900 shadow-sm transition
                               hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50
                               dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100
                               dark:hover:border-amber-500/40 dark:hover:bg-neutral-800/80"
                  >
                    {s.icon}
                    <span>{s.name}</span>
                  </motion.li>
                ))}
              </ul>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 opacity-0 transition-opacity
                           group-hover:opacity-100 bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-500"
              />
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
