import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE, IMAGES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-emerald-deep text-ivory">
      {/* decorative glow + image strip */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 lg:flex-row lg:px-8">
          <div className="text-center lg:text-left">
            <p className="eyebrow !text-gold-light">Free Quote / Estimate / Special Offer</p>
            <h3 className="mt-3 font-serif-display text-4xl font-medium text-ivory md:text-5xl">
              Call now & partner with the <em className="text-gold-gradient">BOSS</em> team.
            </h3>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a href={SITE.phoneHref} className="btn-gold">
              <Phone size={15} /> {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-gold-light transition-colors hover:text-ivory"
            >
              Book a consultation
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold-deep via-gold to-gold-light">
              <span className="font-serif-display text-xl font-bold text-white">B</span>
            </div>
            <div className="leading-none">
              <span className="font-serif-display text-2xl font-semibold tracking-wide text-ivory">BOSS</span>
              <span className="block text-[0.55rem] font-extrabold uppercase tracking-[0.42em] text-gold-light">
                Financial Group
              </span>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ivory/65">
            Comprehensive financial services tailored to your unique needs — tax consulting,
            bookkeeping, and business sale brokerage delivered with white-glove care.
          </p>
          <div className="relative mt-6 h-28 w-full overflow-hidden rounded-sm border border-white/10">
            <Image
              src={IMAGES.marbleHall}
              alt="BOSS Financial Group office"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover opacity-80"
            />
          </div>
        </div>

        <div>
          <h4 className="text-[0.7rem] font-extrabold uppercase tracking-[0.34em] text-gold-light">
            Quick Links
          </h4>
          <div className="mt-4 h-px w-10 bg-gold/50" />
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ivory/70 transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="text-ivory/70 transition-colors hover:text-gold-light">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-ivory/70 transition-colors hover:text-gold-light">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] font-extrabold uppercase tracking-[0.34em] text-gold-light">
            Our Services
          </h4>
          <div className="mt-4 h-px w-10 bg-gold/50" />
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-ivory/70 transition-colors hover:text-gold-light"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] font-extrabold uppercase tracking-[0.34em] text-gold-light">
            Get In Touch
          </h4>
          <div className="mt-4 h-px w-10 bg-gold/50" />
          <ul className="mt-5 space-y-4 text-sm text-ivory/70">
            <li className="flex items-start gap-3">
              <Mail size={15} className="mt-0.5 shrink-0 text-gold-light" />
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold-light">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={15} className="mt-0.5 shrink-0 text-gold-light" />
              <a href={SITE.phoneHref} className="transition-colors hover:text-gold-light">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold-light" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={15} className="mt-0.5 shrink-0 text-gold-light" />
              <span>
                Assistance Hours:
                <br />
                {SITE.hours}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-[0.72rem] tracking-wider text-ivory/50 md:flex-row lg:px-8">
          <p>
            Copyright 2026 | {SITE.legalName} | {SITE.phone}
          </p>
          <p className="flex items-center gap-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-gold-light">
              Privacy Policy
            </Link>
            <span className="text-gold/60">||</span>
            <Link href="/terms" className="transition-colors hover:text-gold-light">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
