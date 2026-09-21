import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  after?: string;
  image: string;
  crumb: string;
}

export default function PageHero({ eyebrow, title, accent, after, image, crumb }: PageHeroProps) {
  return (
    <section className="hero-glow noise-bg relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-52">
      {/* soft backdrop image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/80 to-ivory" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="eyebrow centered justify-center">{eyebrow}</span>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif-display text-5xl font-medium leading-[1.03] text-emerald md:text-7xl">
            {title} {accent && <em className="text-gold-gradient">{accent}</em>}
            {after && ` ${after}`}
          </h1>
          <nav className="mt-7 flex items-center justify-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.26em] text-slate">
            <Link href="/" className="transition-colors hover:text-gold-deep">
              Home
            </Link>
            <span className="h-px w-6 bg-gold/60" />
            <span className="text-gold-deep">{crumb}</span>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
