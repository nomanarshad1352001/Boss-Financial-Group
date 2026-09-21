"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Phone, Mail, Clock, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-gold/50 bg-gradient-to-br from-gold-deep via-gold to-gold-light shadow-[0_10px_24px_-10px_rgba(151,113,61,0.8)]">
        <span className="font-serif-display text-xl font-bold text-white">B</span>
        <span className="absolute inset-0 rounded-full border border-white/25" />
      </div>
      <div className="leading-none">
        <span
          className={`font-serif-display text-[1.55rem] font-semibold tracking-wide ${
            light ? "text-ivory" : "text-emerald"
          }`}
        >
          BOSS
        </span>
        <span
          className={`block text-[0.55rem] font-extrabold uppercase tracking-[0.42em] ${
            light ? "text-gold-light" : "text-gold-deep"
          }`}
        >
          Financial Group
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* gold scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-[3px] origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-light"
      />
      {/* top utility bar */}
      <div
        className={`hidden overflow-hidden bg-emerald text-ivory transition-all duration-500 lg:block ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-[0.72rem] tracking-wider">
          <div className="flex items-center gap-6">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-ivory/85 transition-colors hover:text-gold-light"
            >
              <Phone size={12} className="text-gold-light" /> {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 text-ivory/85 transition-colors hover:text-gold-light"
            >
              <Mail size={12} className="text-gold-light" /> {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-ivory/70">
            <Clock size={12} className="text-gold-light" />
            {SITE.hours}
          </div>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-ivory/90 shadow-[0_18px_50px_-30px_rgba(18,60,49,0.4)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Wordmark />

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-[0.72rem] font-extrabold uppercase tracking-[0.26em] transition-colors ${
                    active ? "active text-gold-deep" : "text-emerald/80 hover:text-emerald"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2.5 text-emerald transition-transform hover:scale-[1.03]"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald text-gold-light">
                <Phone size={14} />
              </span>
              <span className="text-sm font-extrabold tracking-wide">{SITE.phone}</span>
            </a>
            <Link href="/contact" className="btn-gold !px-6 !py-3">
              Book Now! <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-white/70 text-emerald backdrop-blur lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-gold/20 bg-ivory/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 font-serif-display text-3xl ${
                      pathname === link.href ? "text-gold-deep" : "text-emerald"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="btn-gold mt-4 w-full">
                Book Now! <ArrowUpRight size={15} />
              </Link>
              <a
                href={SITE.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 text-sm font-extrabold text-emerald"
              >
                <Phone size={14} className="text-gold-deep" /> {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
