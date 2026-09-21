"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

type Testimonial = (typeof TESTIMONIALS)[number];

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <article className="card-lux group relative w-[19.5rem] shrink-0 rounded-sm p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 sm:w-[22rem]">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} size={13} className="fill-gold text-gold" />
          ))}
        </span>
        <Quote size={24} strokeWidth={1.2} className="text-gold/40 transition-colors group-hover:text-gold" />
      </div>
      <p className="mt-4 line-clamp-4 min-h-[5.5rem] text-[0.88rem] leading-relaxed text-slate">
        “{t.quote}”
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-gold/15 pt-4">
        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-gold/50">
          <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
        </span>
        <span>
          <span className="block text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-emerald">
            {t.name}
          </span>
          <span className="block text-[0.7rem] text-slate">{t.role}</span>
        </span>
      </div>
    </article>
  );
}

/** Infinite auto-scrolling "railing" slide of client reviews — two rows, opposite directions. */
export default function ReviewsRail() {
  const rowA = TESTIMONIALS;
  const rowB = [...TESTIMONIALS.slice(4), ...TESTIMONIALS.slice(0, 4)];

  return (
    <div className="marquee-pause relative space-y-6">
      {/* Row A — glides left */}
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee-slow flex w-max gap-6">
          {[...rowA, ...rowA].map((t, i) => (
            <ReviewCard key={`a-${i}`} t={t} />
          ))}
        </div>
      </div>
      {/* Row B — glides right */}
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee-reverse flex w-max gap-6">
          {[...rowB, ...rowB].map((t, i) => (
            <ReviewCard key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>
      <p className="pt-2 text-center text-[0.62rem] font-extrabold uppercase tracking-[0.3em] text-slate/60">
        Hover a card to pause — {TESTIMONIALS.length} verified client reviews
      </p>
    </div>
  );
}
