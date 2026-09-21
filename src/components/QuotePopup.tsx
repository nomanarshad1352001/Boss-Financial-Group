"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("boss-popup-dismissed")) return;

    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("boss-popup-dismissed")) setOpen(true);
    }, 14000);

    const onExit = (e: MouseEvent) => {
      if (e.clientY <= 8 && !sessionStorage.getItem("boss-popup-dismissed")) {
        setOpen(true);
      }
    };
    document.addEventListener("mouseout", onExit);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", onExit);
    };
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("boss-popup-dismissed", "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-emerald-deep/60 p-4 backdrop-blur-sm"
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, y: 46, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto bg-ivory shadow-[0_40px_120px_-30px_rgba(0,0,0,0.55)]"
          >
            {/* gold hairline frame */}
            <div className="pointer-events-none absolute inset-3 z-10 border border-gold/30" />

            <button
              onClick={dismiss}
              aria-label="Close popup"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-white/80 text-emerald transition-all hover:rotate-90 hover:bg-emerald hover:text-gold-light"
            >
              <X size={17} />
            </button>

            <div className="px-8 pb-10 pt-12 sm:px-12">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-pale/40 px-4 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.3em] text-gold-deep">
                  <Sparkles size={12} /> Wait!
                </span>
                <h3 className="mt-5 font-serif-display text-4xl font-medium leading-[1.05] text-emerald sm:text-[2.9rem]">
                  Don&apos;t Forget To Get Your{" "}
                  <em className="text-gold-gradient">FREE</em> Quote/Estimate/Special Offer!
                </h3>
                <div className="gold-hairline mx-auto mt-6 w-40" />
              </div>

              <div className="mt-8">
                <QuoteForm compact />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
