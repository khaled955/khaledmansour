import { motion } from 'framer-motion'
import type { Project } from '../../types/Types'
import { fadeUp } from '../../lib/Animation'

interface Props { projects: Project[] }
export default function Projects({ projects }: Props) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, idx) => (
        <motion.article key={idx} className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm focus-within:ring-2 focus-within:ring-amber-500" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp(idx * 0.05)}>
          <div className="overflow-hidden aspect-video">
            <img src={p.image} alt={`${p.title} cover`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{p.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => (
                <li key={t} className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">{t}</li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500">Live</a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white">Code</a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
