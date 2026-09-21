"use client";

import { motion, useReducedMotion } from "framer-motion";

interface WordsRevealProps {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
}

/** Animates each word of a heading sliding up from a masked line. */
export default function WordsReveal({
  text,
  delay = 0,
  stagger = 0.09,
  className = "",
}: WordsRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text} role="text">
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="-mb-2 inline-block overflow-hidden pb-2 align-bottom"
          aria-hidden
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: reduce ? 0 : "115%", rotate: reduce ? 0 : 4 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
