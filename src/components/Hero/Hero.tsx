import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '../../lib/Animation'
import khaled from "../../assets/khaled.png"
interface Props {
  summary: string
  socials: { linkedin: string }
}

export default function Hero({ summary, socials }: Props){
  const reduce = useReducedMotion()
  return (
    <section id="home" className="relative isolate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={reduce ? undefined : 'hidden'} whileInView={reduce ? undefined : 'show'} viewport={{ once: true, amount: 0.6 }} variants={fadeUp(0)}>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">Building delightful web experiences.</h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-prose">{summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500">View Projects</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">Contact Me</a>
          </div>
        </motion.div>
        <motion.div initial={reduce ? undefined : { opacity: 0, scale: 0.96 }} whileInView={reduce ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true, amount: 0.4 }} aria-hidden="true" className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-amber-200 via-amber-100 to-white dark:from-neutral-800 dark:via-neutral-900 dark:to-black border border-neutral-200 dark:border-neutral-800 shadow-sm" >
         <img src={khaled} alt="khaled_mansour" />
        </motion.div>
      </div>
    </section>
  )
}
