/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useMemo, useState } from "react";
import { DATA } from "../../data/Data";

type TagId = "javascript" | "react" | "tailwind" | "bootstrap" | "mui" | "css";

const TAGS: { id: TagId; label: string }[] = [
  { id: "javascript", label: "JavaScript" },
  { id: "react",      label: "React" },
  { id: "tailwind",   label: "Tailwind" },
  { id: "bootstrap",  label: "Bootstrap" },
  { id: "mui",        label: "MUI" },
  { id: "css",        label: "CSS" },
];

/** Normalize arbitrary tech strings to our 6 tag ids */
function mapTechToTagId(raw: string): TagId | null {
  const s = raw.toLowerCase().replace(/\s+/g, "");
  if (s.includes("typescript")) return "javascript"; // keep it under JS bucket for the filter
  if (s.includes("javascript") || s === "js") return "javascript";
  if (s.includes("react")) return "react";
  if (s.includes("tailwind")) return "tailwind";
  if (s.includes("bootstrap")) return "bootstrap";
  if (s === "mui" || s.includes("materialui") || s.includes("material-ui")) return "mui";
  if (s === "css" || s.includes("css3")) return "css";
  return null;
}

export default function Projects() {
  const [active, setActive] = useState<Set<TagId>>(new Set());

  const projects = useMemo(() => DATA.projects ?? [], []);


  // Precompute a lookup of normalized tags for each project (fast & stable)
  const items = useMemo(() => {
    return projects.map((p) => {
      const tagSet = new Set<TagId>();
      (p.tech ?? []).forEach((t: string) => {
        const m = mapTechToTagId(t);
        if (m) tagSet.add(m);
      });
      return { ...p, _tags: tagSet };
    });
  }, [projects]);

  // Optional: counts per tag (helpful to show availability)
  const counts = useMemo(() => {
    const c: Record<TagId, number> = {
      javascript: 0, react: 0, tailwind: 0, bootstrap: 0, mui: 0, css: 0,
    };
    items.forEach((it) => it._tags.forEach((t) => (c[t] += 1)));
    return c;
  }, [items]);

  // Filter logic: if no filters, show all. Otherwise, keep projects that have ANY of the selected tags.
  const filtered = useMemo(() => {
    if (active.size === 0) return items;
    return items.filter((it) => [...active].some((t) => it._tags.has(t)));
  }, [items, active]);

  const toggle = (id: TagId) =>
    setActive((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const clearAll = () => setActive(new Set());

  return (
    <section id="projects" className="scroll-mt-24">
      {/* Header */}
      <header className="mb-4 flex flex-wrap items-end justify-between gap-3">

        {/* Filter bar */}
        {/* <div className="w-full overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={clearAll}
              className={`rounded-full border px-3 py-1.5 text-sm transition
                          ${active.size === 0
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`}
            >
              All
            </button>

            {TAGS.map((t) => {
              const isOn = active.has(t.id);
              const disabled = counts[t.id] === 0;
              return (
                <button
                  key={t.id}
                  onClick={() => !disabled && toggle(t.id)}
                  disabled={disabled}
                  className={`rounded-full border px-3 py-1.5 text-sm transition
                              ${disabled ? "cursor-not-allowed opacity-40"
                                         : "hover:bg-slate-100"}
                              ${isOn
                                ? "border-slate-900 bg-slate-900 text-white"
                                : "border-slate-300 bg-white text-slate-700"}`}
                  title={disabled ? "No projects for this tag yet" : t.label}
                >
                  {t.label}
                  <span className="ml-2 inline-block rounded-full bg-slate-100 px-1.5 text-xs text-slate-600">
                    {counts[t.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div> */}


{/* Filter bar (enhanced) */}

{/* Filter bar — always wraps (no horizontal scroll) */}
<div className="w-full">
  <div className="flex flex-wrap items-center gap-2 px-1 py-2">
    {/* ALL */}
    <button
      onClick={clearAll}
      aria-pressed={active.size === 0}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium shadow-sm transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white
        dark:focus-visible:ring-amber-400/60 dark:focus-visible:ring-offset-0
        ${active.size === 0
          ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
          : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-zinc-900 dark:text-neutral-300 dark:hover:bg-zinc-800"}`}
    >
      All
      <span className={`${active.size === 0
          ? "bg-white/20 text-white dark:bg-black/10 dark:text-neutral-900"
          : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"}
          ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold`}>
        {items.length}
      </span>
    </button>

    {/* TAGS */}
    {TAGS.map((t) => {
      const isOn = active.has(t.id);
      const disabled = counts[t.id] === 0;

      return (
        <button
          key={t.id}
          onClick={() => !disabled && toggle(t.id)}
          disabled={disabled}
          aria-pressed={isOn}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition
            focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white
            dark:focus-visible:ring-amber-400/60 dark:focus-visible:ring-offset-0
            ${disabled ? "cursor-not-allowed opacity-40"
                       : isOn
                         ? "border-neutral-900 bg-neutral-900 text-white shadow-sm dark:border-white dark:bg-white dark:text-neutral-900"
                         : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-zinc-900 dark:text-neutral-300 dark:hover:bg-zinc-800"}`}
        >
          {t.label}
          <span className={`${isOn
              ? "bg-white/20 text-white dark:bg-black/10 dark:text-neutral-900"
              : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"}
              ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold`}>
            {counts[t.id]}
          </span>
        </button>
      );
    })}
  </div>
</div>



      </header>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-zinc-900 duration-300"
          >
            <div className="aspect-[3/2] overflow-hidden rounded-xl ring-1 ring-slate-200 dark:ring-slate-800">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            <div className="mt-3">
              <h3 className="line-clamp-1 text-base font-semibold">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                {p.description}
              </p>
            </div>

            {/* Tech chips */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {[...p._tags].map((t) => (
                <span
                  key={`${p.title}-${t}`}
                  className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs text-slate-700"
                >
                  {TAGS.find((x) => x.id === t)?.label}
                </span>
              ))}
            </div>

            {/* Actions */}
          
<div className="mt-3 flex items-center gap-2">
  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium shadow-sm transition
        border-sky-700 bg-sky-600 text-white hover:bg-sky-700
        focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white
        dark:border-amber-500 dark:bg-amber-400 dark:text-neutral-900 dark:hover:bg-amber-500
        dark:focus:ring-amber-400 dark:focus:ring-offset-0
      "
    >
      <i className="fa-regular fa-eye" />
      Live
    </a>
  )}

  {p.repo && (
    <a
      href={p.repo}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition
        border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400
        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white
        dark:border-slate-700 dark:bg-transparent dark:text-slate-200
        dark:hover:bg-slate-800 dark:hover:border-slate-600
        dark:focus:ring-slate-600 dark:focus:ring-offset-0
      "
    >
      <i className="fa-brands fa-github" />
      Code
    </a>
  )}
</div>



          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="mt-6 text-sm text-slate-500">
          No projects match the selected filters yet.
        </p>
      )}
    </section>
  );
}










