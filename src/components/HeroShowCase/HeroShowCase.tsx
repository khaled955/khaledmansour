import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function HeroShowCase({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div
      className="relative aspect-[4/3] w-full rounded-2xl border border-neutral-200 dark:border-neutral-800
                 bg-gradient-to-br from-amber-200 via-amber-100 to-white dark:from-neutral-800 dark:via-neutral-900 dark:to-black shadow-sm"
      aria-hidden="true"
    >
      {/* “screen” */}
      <div className="absolute inset-3 rounded-xl bg-neutral-900/90 dark:bg-black overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx]}
            alt=""
            className="h-full w-full object-cover"
            initial={reduce ? {} : { opacity: 0, scale: 1.02 }}
            animate={reduce ? {} : { opacity: 1, scale: 1 }}
            exit={reduce ? {} : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      {/* “base”/shadow to suggest a laptop */}
      <div className="absolute -bottom-2 left-1/2 h-2 w-40 -translate-x-1/2 rounded-b-2xl bg-neutral-300/80 dark:bg-neutral-700/80" />
    </div>
  );
}
