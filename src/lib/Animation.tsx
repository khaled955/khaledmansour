export const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { delay: d, duration: 0.5 } },
})
