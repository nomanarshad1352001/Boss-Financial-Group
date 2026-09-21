"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      {FAQS.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.q} className="faq-item">
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="flex items-baseline gap-5">
                <span
                  className={`font-serif-display text-xl italic transition-colors md:text-2xl ${
                    open ? "text-gold-deep" : "text-gold/50"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-serif-display text-xl font-medium transition-colors md:text-2xl ${
                    open ? "text-emerald" : "text-ink group-hover:text-emerald"
                  }`}
                >
                  {faq.q}
                </span>
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                  open
                    ? "rotate-45 border-gold-deep bg-gold-deep text-white"
                    : "border-gold/40 text-gold-deep group-hover:border-gold-deep"
                }`}
              >
                <Plus size={16} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-8 pl-12 leading-relaxed text-slate md:pl-14">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
