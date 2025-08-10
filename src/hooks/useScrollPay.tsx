/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export function useScrollSpy(ids: string[], rootMargin = '-45% 0px -50% 0px') {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const options: IntersectionObserverInit = { root: null, rootMargin, threshold: 0.1 }

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveId(id)
      }, options)
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids.join(','), rootMargin,ids])

  return activeId
}