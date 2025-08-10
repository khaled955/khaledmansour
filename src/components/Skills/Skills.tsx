import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/Animation'

interface Props { skills: string[] }
export default function Skills({ skills }: Props) {
  return (
    <motion.ul role="list" className="flex flex-wrap gap-2" initial="hidden" whileInView="show" viewport={{ once: true }}>
      {skills.map((s, i) => (
        <motion.li key={s} variants={fadeUp(i * 0.03)} className="px-3 py-1.5 rounded-full text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">
          {s}
        </motion.li>
      ))}
    </motion.ul>
  )
}