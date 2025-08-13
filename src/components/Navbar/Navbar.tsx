
import { motion } from 'framer-motion'
import LogoLight from '../../assets/khaledLogos/khaled-wordmark-light-transparent.svg'
import LogoDark  from '../../assets/khaledLogos/khaled-wordmark-dark-transparent.svg'
import MarkLight from '../../assets/khaledLogos/khaled-monogram-light-transparent.svg'
import MarkDark  from '../../assets/khaledLogos/khaled-monogram-dark-transparent.svg'
import { useEffect, useState } from 'react'
import { useDarkMode } from '../../hooks/useDarkMode'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ activeId }: { activeId?: string }) {
  const [open, setOpen] = useState(false)
  const { dark, setDark } = useDarkMode()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between" aria-label="Main">
        <a
          href="#home"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
          aria-label="Go to home"
        >
          {/* xs: monogram */}
          <span className="flex sm:hidden">
            <img src={MarkLight} alt="Khaled logo" className="h-8 dark:hidden" />
            <img src={MarkDark}  alt="" className="h-8 hidden dark:block" />
          </span>
          {/* sm and up: wordmark */}
          <span className="hidden sm:flex">
            <img src={LogoLight} alt="Khaled dev logo" className="h-7 md:h-8 dark:hidden" />
            <img src={LogoDark}  alt="" className="h-7 md:h-8 hidden dark:block" />
          </span>
          <span className="sr-only">Khaled — Front-End Developer</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-2 text-sm text-neutral-700 dark:text-neutral-200">
          {links.map(l => {
            const id = l.href.replace('#','')
            const active = activeId ? activeId === id : l.href === '#home'
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className="relative group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl font-medium transition-colors hover:text-neutral-900 dark:hover:text-white"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-xl bg-neutral-900/5 dark:bg-white/10"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            aria-pressed={dark}
            aria-label="Toggle dark mode"
            className="hidden sm:inline text-sm px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >{dark ? 'Light' : 'Dark'}</button>

          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div id="mobile-menu" className={open ? 'md:hidden block' : 'hidden'}>
        <ul role="menu" className="px-4 pb-4 space-y-2 text-neutral-900 dark:text-neutral-100">
          {links.map(l => {
            const id = l.href.replace('#','')
            const active = activeId ? activeId === id : l.href === '#home'
            return (
              <li key={l.href}>
                <a
                  role="menuitem"
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-active={active}
                  className="block w-full rounded-lg px-3 py-2 border border-transparent data-[active=true]:border-neutral-200 data-[active=true]:bg-neutral-100 dark:data-[active=true]:border-neutral-700 dark:data-[active=true]:bg-neutral-800"
                >{l.label}</a>
              </li>
            )
          })}
          <li>
            <button onClick={() => setDark(!dark)} className="w-full text-left rounded-lg px-3 py-2 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {dark ? 'Switch to Light' : 'Switch to Dark'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}