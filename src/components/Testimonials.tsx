"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number, direction: number) => {
    setDir(direction);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(index + 1, 1), 6500);
    return () => clearInterval(t);
  }, [index, go]);

  const active = TESTIMONIALS[index];

  return (
    <div className="relative mx-auto max-w-4xl">
      <Quote
        size={120}
        strokeWidth={0.6}
        className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 text-gold/20"
      />

      <div className="relative min-h-[21rem] sm:min-h-[17rem]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={index}
            initial={{ opacity: 0, x: dir * 60, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: dir * -60, filter: "blur(6px)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={15} className="fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="mt-6 font-serif-display text-2xl font-medium italic leading-snug text-emerald md:text-[1.85rem]">
              “{active.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-gold/60">
                <Image
                  src={active.avatar}
                  alt={active.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <span className="text-left">
                <span className="block text-[0.78rem] font-extrabold uppercase tracking-[0.24em] text-emerald">
                  {active.name}
                </span>
                <span className="block text-xs text-slate">{active.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          onClick={() => go(index - 1, -1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-emerald transition-all hover:border-gold-deep hover:bg-gold-deep hover:text-white"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-gold-deep" : "w-1.5 bg-gold/30 hover:bg-gold/60"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(index + 1, 1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-emerald transition-all hover:border-gold-deep hover:bg-gold-deep hover:text-white"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
