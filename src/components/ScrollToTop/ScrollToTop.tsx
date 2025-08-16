
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' as ScrollBehavior : 'smooth' })
  }

  if (!show) return null

  return (
    <motion.button
      initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed bottom-20 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white shadow-lg hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:shadow-black/30"
    >
      {/* Up arrow icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </motion.button>
  )
}
