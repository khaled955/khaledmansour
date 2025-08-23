// src/lib/animation.ts
import type { Variants, Transition } from "framer-motion";

// type-safe cubic-bezier tuple
const easeOutQuint: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0, distance = 16): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutQuint, // ✅ typed correctly
      delay,
    },
  },
});

export const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.06 },
  },
};
