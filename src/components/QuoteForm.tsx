"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, CheckCircle2, FileCheck2, Send } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/data";

interface QuoteFormProps {
  compact?: boolean;
}

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[24rem] flex-col items-center justify-center text-center"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald/10 text-emerald">
              <CheckCircle2 size={38} strokeWidth={1.6} />
            </span>
            <h4 className="mt-6 font-serif-display text-4xl font-medium text-emerald">
              Thank You!
            </h4>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate">
              Your request has been received. A BOSS Financial Group specialist will contact you
              shortly with your free quote, estimate, or special offer.
            </p>
            <a href={SITE.phoneHref} className="btn-ghost mt-8">
              Call {SITE.phone}
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`grid gap-x-8 ${compact ? "gap-y-5" : "gap-y-6 md:grid-cols-2"}`}
          >
            <div className="field">
              <input id="q-name" name="name" type="text" required placeholder=" " autoComplete="name" />
              <label htmlFor="q-name">Full Name</label>
            </div>
            <div className="field">
              <input id="q-email" name="email" type="email" required placeholder=" " autoComplete="email" />
              <label htmlFor="q-email">Email *</label>
            </div>
            <div className="field">
              <input id="q-phone" name="phone" type="tel" required placeholder=" " autoComplete="tel" />
              <label htmlFor="q-phone">Phone *</label>
            </div>
            <div className="field">
              <input id="q-address" name="address" type="text" required placeholder=" " autoComplete="street-address" />
              <label htmlFor="q-address">Address *</label>
            </div>

            {/* file upload */}
            <div className={compact ? "" : "md:col-span-2"}>
              <p className="mb-2 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-gold-deep">
                Upload your Document/File *
              </p>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className={`group flex w-full items-center justify-center gap-3 border border-dashed border-gold/45 bg-gold-pale/30 px-5 text-sm text-slate transition-all hover:border-gold hover:bg-gold-pale/50 ${
                  compact ? "py-4" : "py-5"
                }`}
              >
                {fileName ? (
                  <>
                    <FileCheck2 size={18} className="text-emerald" />
                    <span className="font-semibold text-emerald">{fileName}</span>
                  </>
                ) : (
                  <>
                    <UploadCloud size={18} className="text-gold-deep transition-transform group-hover:-translate-y-0.5" />
                    <span>Drag or click to attach — PDF, DOC, PNG, JPG</span>
                  </>
                )}
              </button>
              <input
                ref={fileRef}
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                required
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </div>

            {/* SMS consent */}
            <label
              className={`flex cursor-pointer items-start gap-3 text-[0.72rem] leading-relaxed text-slate ${
                compact ? "" : "md:col-span-2"
              }`}
            >
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-[3px] border border-gold/50 bg-white transition-all checked:border-gold-deep checked:bg-gold-deep"
              />
              <span>{SITE.smsConsent}</span>
            </label>

            <div className={compact ? "" : "md:col-span-2"}>
              <button type="submit" className="btn-gold w-full">
                Get My Quote <Send size={14} />
              </button>
              <p className="mt-4 text-center text-[0.7rem] tracking-wider text-slate">
                <Link href="/privacy-policy" className="underline decoration-gold/50 underline-offset-2 hover:text-gold-deep">
                  Privacy Policy
                </Link>
                <span className="mx-1.5 text-gold">||</span>
                <Link href="/terms" className="underline decoration-gold/50 underline-offset-2 hover:text-gold-deep">
                  Terms of Service
                </Link>
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
