"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { SITE } from "@/lib/data";

export default function FloatingCall() {
  const [expanded, setExpanded] = useState(false);
  const [seen, setSeen] = useState(false);

  // Auto-expand once after a short delay to surface the offer
  useEffect(() => {
    const t = setTimeout(() => {
      if (!seen) setExpanded(true);
      setSeen(true);
    }, 4000);
    const hide = setTimeout(() => setExpanded(false), 12000);
    return () => {
      clearTimeout(t);
      clearTimeout(hide);
    };
  }, [seen]);

  return (
    <div className="fixed bottom-6 right-5 z-[80] flex items-center gap-3 sm:right-6">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 24, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-lux relative hidden max-w-xs rounded-sm px-5 py-4 sm:block"
          >
            <button
              onClick={() => setExpanded(false)}
              aria-label="Minimize"
              className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 bg-white text-slate hover:text-emerald"
            >
              <X size={11} />
            </button>
            <p className="text-sm font-extrabold text-emerald">{SITE.phone}</p>
            <p className="mt-0.5 text-[0.72rem] leading-snug text-slate">{SITE.tagline}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={SITE.phoneHref}
        aria-label="Call BOSS Financial Group"
        onMouseEnter={() => setExpanded(true)}
        className="pulse-ring relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-deep via-gold to-gold-light text-white shadow-[0_18px_40px_-12px_rgba(151,113,61,0.8)] transition-transform hover:scale-105"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
