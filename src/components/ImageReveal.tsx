"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const clipIn = {
  up: "inset(100% 0 0 0)",
  down: "inset(0 0 100% 0)",
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
};

/** Cinematic clip-path wipe reveal for images on scroll. */
export default function ImageReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ImageRevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ clipPath: reduce ? "inset(0 0 0 0)" : clipIn[direction], opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1.15, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
