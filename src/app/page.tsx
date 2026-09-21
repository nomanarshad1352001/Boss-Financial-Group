import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Calculator,
  Gem,
  Handshake,
  HeartHandshake,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  BadgePercent,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ConsultSection from "@/components/ConsultSection";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Counter from "@/components/Counter";
import { IMAGES, MARQUEE_ITEMS, SERVICES, SITE, STATS, WHY_CHOOSE } from "@/lib/data";

const serviceIcons = {
  calculator: Calculator,
  "badge-percent": BadgePercent,
  "book-open": BookOpen,
  handshake: Handshake,
};

const whyIcons = {
  "shield-check": ShieldCheck,
  gem: Gem,
  scale: Scale,
  "heart-handshake": HeartHandshake,
};

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero-glow noise-bg relative overflow-hidden pt-36 md:pt-44">
        <div className="dotted-map absolute right-[6%] top-32 hidden h-64 w-64 opacity-50 lg:block" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
            {/* copy */}
            <div>
              <Reveal>
                <span className="eyebrow">Welcome to BOSS Financial Group</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 font-serif-display text-[3.4rem] font-medium leading-[0.98] text-emerald sm:text-7xl xl:text-[5.6rem]">
                  Wealth, guided
                  <br />
                  with <em className="text-gold-gradient">quiet</em> precision.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-slate">
                  At BOSS Financial Group, we are dedicated to providing comprehensive financial
                  services tailored to your unique needs. Our experienced professionals specialize
                  in tax consulting, bookkeeping, and business sale brokerage — offering the
                  expertise and support required to achieve your financial goals.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="#consultation" className="btn-gold">
                  Request a Free Consultation! <ArrowRight size={15} />
                </Link>
                <Link href="/services" className="btn-ghost">
                  Explore Services
                </Link>
              </Reveal>
              <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center gap-7 text-sm">
                <div className="flex items-center gap-2.5 text-emerald">
                  <BadgeCheck size={18} className="text-gold-deep" />
                  <span className="font-bold">Trusted in 16+ Countries</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald">
                  <ShieldCheck size={18} className="text-gold-deep" />
                  <span className="font-bold">White-Glove Confidentiality</span>
                </div>
              </Reveal>
            </div>

            {/* image composition */}
            <Reveal delay={0.2} className="relative mt-6 lg:mt-0">
              <div className="gold-frame relative ml-auto aspect-[4/5] w-[86%] overflow-hidden rounded-t-[12rem] border-[6px] border-white shadow-[0_50px_110px_-40px_rgba(18,60,49,0.5)]">
                <Image
                  src={IMAGES.heroMain}
                  alt="BOSS Financial Group advisor reviewing documents with a client"
                  fill
                  priority
                  sizes="(max-width: 1024px) 0px, 40vw"
                  className="object-cover"
                />
              </div>

              {/* secondary polaroid */}
              <div className="animate-float absolute -left-6 bottom-10 w-56 overflow-hidden rounded-sm border-[5px] border-white shadow-[0_30px_60px_-25px_rgba(18,60,49,0.45)]">
                <Image
                  src={IMAGES.heroSecondary}
                  alt="The BOSS advisory team at work"
                  width={560}
                  height={420}
                  className="object-cover"
                />
              </div>

              {/* floating stat card */}
              <div className="card-lux absolute -right-3 top-8 rounded-sm px-6 py-5">
                <p className="font-serif-display text-4xl font-semibold text-emerald">
                  <Counter value={4.8} decimals={1} prefix="$" suffix="M" />
                </p>
                <p className="mt-1 text-[0.62rem] font-extrabold uppercase tracking-[0.24em] text-gold-deep">
                  Tax Credits Recovered
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-y border-gold/25 bg-white/60 py-5 backdrop-blur-sm">
          <div className="marquee-mask overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-10">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-emerald/70"
                >
                  {item}
                  <Sparkles size={13} className="text-gold" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME / ABOUT PREVIEW ================= */}
      <section className="noise-bg relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* collage */}
            <Reveal className="relative">
              <div className="img-zoom img-duotone relative aspect-[5/4] overflow-hidden rounded-sm">
                <Image
                  src={IMAGES.aboutTeam}
                  alt="BOSS Financial Group advisors collaborating with clients"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="gold-frame absolute -bottom-10 right-4 hidden w-64 overflow-hidden rounded-sm border-[5px] border-white shadow-[0_30px_70px_-30px_rgba(18,60,49,0.5)] sm:block">
                <Image
                  src={IMAGES.signingDocs}
                  alt="Clients signing documents with their advisor"
                  width={640}
                  height={480}
                  className="object-cover"
                />
              </div>
              <div className="absolute -left-5 -top-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-emerald text-center text-ivory shadow-[0_20px_50px_-20px_rgba(12,43,35,0.7)]">
                <span className="font-serif-display text-3xl font-semibold text-gold-light">16+</span>
                <span className="px-2 text-[0.55rem] font-extrabold uppercase tracking-[0.22em]">
                  Countries Served
                </span>
              </div>
            </Reveal>

            {/* copy */}
            <div className="pt-10 lg:pt-0">
              <SectionHeading
                eyebrow="About BOSS Financial Group"
                title={
                  <>
                    A partner invested in <em className="text-gold-gradient">your</em> success.
                  </>
                }
              />
              <Reveal delay={0.15}>
                <p className="mt-6 leading-relaxed text-slate">
                  We are committed to providing our clients with the highest quality bookkeeping
                  services. We are also committed to building long-term relationships with our
                  clients, so we can get to know their businesses inside and out and provide them
                  with the best possible support.
                </p>
                <p className="mt-4 leading-relaxed text-slate">
                  From the first consultation to your tenth tax season, you will always work with a
                  dedicated specialist who knows your story — never a call center.
                </p>
              </Reveal>
              <Reveal delay={0.25} className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { icon: BadgeCheck, text: "Seasoned, credentialed specialists" },
                  { icon: Gem, text: "Bespoke strategies, never templates" },
                  { icon: Scale, text: "Radical transparency in every fee" },
                  { icon: HeartHandshake, text: "Relationships measured in decades" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold-pale/40 text-gold-deep">
                      <item.icon size={16} />
                    </span>
                    <span className="text-[0.85rem] font-bold leading-snug text-emerald">
                      {item.text}
                    </span>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.35} className="mt-10 flex flex-wrap items-center gap-6">
                <Link href="/about" className="btn-gold">
                  Discover Our Story <ArrowRight size={15} />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="group flex items-center gap-3 text-emerald"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-all group-hover:bg-emerald group-hover:text-gold-light">
                    <Phone size={16} />
                  </span>
                  <span>
                    <span className="block text-[0.6rem] font-extrabold uppercase tracking-[0.24em] text-slate">
                      Call anytime
                    </span>
                    <span className="text-sm font-extrabold">{SITE.phone}</span>
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONSULTATION FORM ================= */}
      <ConsultSection />

      {/* ================= SERVICES ================= */}
      <section className="noise-bg relative overflow-hidden py-24 md:py-32">
        <div className="dotted-map absolute -right-20 -top-10 h-80 w-80 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Services"
            title={
              <>
                What Service <em className="text-gold-gradient">We Offer</em>
              </>
            }
            text="Four disciplines, one uncompromising standard — meticulous care for every number that shapes your life and business."
            className="mb-16"
          />

          <div className="grid gap-7 md:grid-cols-2">
            {SERVICES.map((service, i) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Reveal key={service.slug} delay={(i % 2) * 0.12}>
                  <article className="card-lux group relative flex h-full flex-col overflow-hidden rounded-sm">
                    <div className="img-zoom relative h-60 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 via-emerald-deep/10 to-transparent" />
                      <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-emerald/85 text-gold-light backdrop-blur-sm">
                        <Icon size={19} />
                      </span>
                      <span className="absolute bottom-4 right-5 font-serif-display text-5xl font-semibold italic text-white/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-8">
                      <h3 className="font-serif-display text-[1.75rem] font-medium leading-tight text-emerald">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-slate">
                        {service.short}
                      </p>
                      <div className="mt-6 flex items-center justify-between border-t border-gold/15 pt-5">
                        <Link
                          href={`/services#${service.slug}`}
                          className="group/link inline-flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.26em] text-gold-deep transition-colors hover:text-emerald"
                        >
                          Read More
                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </Link>
                        <span className="h-1.5 w-1.5 rounded-full bg-gold/50 transition-all duration-500 group-hover:w-10 group-hover:bg-gold" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE + STATS ================= */}
      <section className="relative overflow-hidden bg-emerald py-24 text-ivory md:py-32">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.officeLounge}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.09]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald via-emerald/60 to-emerald-deep" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Why Choose BOSS Financial Group?"
            title={
              <>
                The <em className="text-gold-gradient">gold standard</em> of financial counsel
              </>
            }
            className="mb-16 [&_h2]:!text-ivory [&_p]:!text-ivory/70"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = whyIcons[item.icon as keyof typeof whyIcons];
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="group relative h-full rounded-sm border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:bg-white/[0.07]">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold-light transition-all duration-500 group-hover:bg-gold group-hover:text-white">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-6 font-serif-display text-2xl font-medium text-ivory">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.88rem] leading-relaxed text-ivory/60">{item.text}</p>
                    <span className="absolute right-6 top-6 font-serif-display text-4xl font-semibold italic text-white/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* stats */}
          <div className="mt-20 grid gap-10 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1} className="text-center">
                <p className="font-serif-display text-5xl font-semibold text-gold-light md:text-6xl">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={"prefix" in stat ? (stat as { prefix?: string }).prefix ?? "" : ""}
                    decimals={"decimals" in stat ? (stat.decimals as number) : 0}
                  />
                </p>
                <p className="mt-2 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-ivory/70">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="noise-bg relative overflow-hidden py-24 md:py-32">
        <div className="dotted-map absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Testimonials"
            title={
              <>
                We Are Trusted Over <em className="text-gold-gradient">16+ Countries</em> Worldwide
              </>
            }
            className="mb-16"
          />
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <div className="dotted-map absolute -left-16 bottom-10 h-72 w-72 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="FAQS"
            title={
              <>
                Questions, <em className="text-gold-gradient">answered</em> with care
              </>
            }
            className="mb-14"
          />
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="card-lux relative overflow-hidden rounded-sm">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[22rem]">
                <Image
                  src={IMAGES.handshakeWarm}
                  alt="Handshake between a BOSS advisor and a client"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/40 to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-sm border border-white/20 bg-emerald-deep/80 px-5 py-4 text-ivory backdrop-blur-md">
                  <p className="flex items-center gap-2 text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-gold-light">
                    <MapPin size={12} /> Visit Our Office
                  </p>
                  <p className="mt-1.5 max-w-[16rem] text-sm font-semibold leading-relaxed">
                    {SITE.address}
                  </p>
                </div>
              </div>
              <div className="relative bg-white p-10 md:p-14">
                <span className="eyebrow">Contact Us</span>
                <h2 className="mt-4 font-serif-display text-4xl font-medium leading-[1.06] text-emerald md:text-[3rem]">
                  Ready to take control of your <em className="text-gold-gradient">financial</em>{" "}
                  future?
                </h2>
                <p className="mt-5 leading-relaxed text-slate">
                  Contact BOSS Financial Group today to schedule a consultation. Let us partner with
                  you to navigate the complexities of finance and achieve your goals.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-gold">
                    Request a Free Consultation! <ArrowRight size={15} />
                  </Link>
                  <a href={SITE.phoneHref} className="btn-ghost">
                    <Phone size={15} /> {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
