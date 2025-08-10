import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/Animation'

export default function About() {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp(0)}>
      <p className="text-neutral-700 dark:text-neutral-300 max-w-prose">
        I craft scalable, accessible, and performant UIs. I enjoy working with design systems, animations, and clean architectures. I speak both English and Arabic and build multilingual experiences with i18next.
      </p>
    </motion.div>
  )
}