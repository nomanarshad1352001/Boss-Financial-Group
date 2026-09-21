import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Eye, Gem, Landmark, Quote, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImageReveal from "@/components/ImageReveal";
import SectionHeading from "@/components/SectionHeading";
import ConsultSection from "@/components/ConsultSection";
import Counter from "@/components/Counter";
import { IMAGES, SITE, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "BOSS Financial Group builds long-term client relationships through the highest quality bookkeeping, tax consulting, and brokerage services.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    text: "We adhere to the highest ethical standards, ensuring transparency and trust in all our dealings — every ledger, every filing, every handshake.",
  },
  {
    icon: Gem,
    title: "Bespoke Craftsmanship",
    text: "No two balance sheets are alike. We tailor every engagement to the contours of your business, your industry, and your ambitions.",
  },
  {
    icon: Landmark,
    title: "Legacy Thinking",
    text: "We plan in decades, not quarters — building financial foundations strong enough to carry your business, and your family, forward.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A legacy of"
        accent="trust,"
        after="built one ledger at a time."
        image={IMAGES.officeLounge}
        crumb="About"
      />

      {/* story */}
      <section className="noise-bg relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Our Story"
                title={
                  <>
                    Where numbers meet <em className="text-gold-gradient">white-glove</em> service.
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
                  From our offices on MoPac Expressway in Austin, BOSS Financial Group has grown
                  into an advisory partner trusted across more than sixteen countries. Our
                  specialists have guided restaurateurs through expansion, recovered six-figure
                  credits for self-employed professionals, and brokered the sale of family
                  businesses built over lifetimes.
                </p>
                <p className="mt-4 leading-relaxed text-slate">
                  What has never changed is our promise: meticulous work, honest counsel, and a
                  relationship that endures long after the engagement letter is signed.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="mt-9">
                <Link href="/services" className="btn-gold">
                  Explore Our Services <ArrowRight size={15} />
                </Link>
              </Reveal>
            </div>

            <Reveal className="order-1 lg:order-2">
              <div className="relative">
                <ImageReveal
                  className="gold-frame img-zoom relative aspect-[4/5] w-[88%] overflow-hidden rounded-sm"
                  direction="left"
                >
                  <Image
                    src={IMAGES.advisorClient}
                    alt="A BOSS advisor in consultation with a client"
                    fill
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="object-cover"
                  />
                </ImageReveal>
                <div className="card-lux absolute -bottom-8 right-0 max-w-xs rounded-sm p-6">
                  <Quote size={26} className="text-gold" />
                  <p className="mt-3 font-serif-display text-lg italic leading-snug text-emerald">
                    “Your success is our priority — today, and every year after.”
                  </p>
                  <p className="mt-3 text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-gold-deep">
                    The BOSS Promise
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* mission / vision band */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <div className="dotted-map absolute -left-20 top-10 h-80 w-80 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="card-lux h-full rounded-sm p-10 md:p-12">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-gold-pale/40 text-gold-deep">
                  <Compass size={24} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif-display text-3xl font-medium text-emerald">Our Mission</h3>
                <div className="gold-hairline mt-4 w-24" />
                <p className="mt-5 leading-relaxed text-slate">
                  To deliver comprehensive financial services — tax consulting, bookkeeping, and
                  business sale brokerage — tailored to the unique needs of every client, so they
                  can make informed decisions and achieve their financial goals with absolute
                  confidence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="card-lux h-full rounded-sm p-10 md:p-12">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-gold-pale/40 text-gold-deep">
                  <Eye size={24} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif-display text-3xl font-medium text-emerald">Our Vision</h3>
                <div className="gold-hairline mt-4 w-24" />
                <p className="mt-5 leading-relaxed text-slate">
                  To be the advisory partner businesses choose for life — renowned across 16+
                  countries for precision, discretion, and relationships that deepen with every
                  ledger we balance and every milestone we help our clients reach.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* values + image */}
      <section className="noise-bg relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal className="relative">
              <ImageReveal
                className="img-zoom img-duotone relative aspect-[5/4] overflow-hidden rounded-sm"
                direction="right"
              >
                <Image
                  src={IMAGES.teamPortrait}
                  alt="The professional team at BOSS Financial Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </ImageReveal>
              <div className="absolute -bottom-10 -right-2 hidden w-64 overflow-hidden rounded-sm border-[5px] border-white shadow-[0_30px_70px_-30px_rgba(18,60,49,0.5)] sm:block lg:-right-8">
                <Image
                  src={IMAGES.aboutMeeting}
                  alt="BOSS advisors in a strategy session"
                  width={640}
                  height={480}
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Our Values"
                title={
                  <>
                    Principles that <em className="text-gold-gradient">never</em> go out of style.
                  </>
                }
              />
              <div className="mt-9 space-y-7">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 0.1}>
                    <div className="group flex gap-6 border-b border-gold/15 pb-7">
                      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold-pale/40 p-3.5 text-gold-deep transition-all duration-500 group-hover:bg-gold-deep group-hover:text-white">
                        <v.icon size={22} strokeWidth={1.5} />
                      </span>
                      <div>
                        <h4 className="font-serif-display text-2xl font-medium text-emerald">
                          {v.title}
                        </h4>
                        <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">{v.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stats band */}
      <section className="relative overflow-hidden bg-emerald py-20 md:py-24">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.brokerageClose}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.10]"
          />
          <div className="absolute inset-0 bg-emerald/70" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
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
      </section>

      {/* testimonial feature */}
      <section className="noise-bg relative overflow-hidden py-24 md:py-32">
        <div className="dotted-map absolute right-10 top-10 h-72 w-72 opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <Quote size={56} strokeWidth={0.8} className="mx-auto text-gold/40" />
            <blockquote className="mt-8 font-serif-display text-3xl font-medium italic leading-snug text-emerald md:text-4xl">
              “I was so overwhelmed with my bookkeeping that I was falling behind on my taxes and
              other financial obligations. The team was able to get my books in order quickly and
              efficiently.”
            </blockquote>
            <p className="mt-8 text-[0.78rem] font-extrabold uppercase tracking-[0.3em] text-gold-deep">
              Jane Doe — Boutique Owner, Austin TX
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA + consultation form */}
      <section className="relative bg-cream pb-4 pt-24 text-center md:pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            centered
            eyebrow="Work With Us"
            title={
              <>
                Experience the <em className="text-gold-gradient">BOSS</em> difference.
              </>
            }
            text={`Call ${SITE.phone} or request your free consultation below — a specialist will respond with your quote, estimate, or special offer.`}
          />
        </div>
      </section>
      <ConsultSection />
    </>
  );
}
