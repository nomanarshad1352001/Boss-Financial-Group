import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  BookOpen,
  Calculator,
  CheckCircle2,
  Handshake,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImageReveal from "@/components/ImageReveal";
import SectionHeading from "@/components/SectionHeading";
import ConsultSection from "@/components/ConsultSection";
import Faq from "@/components/Faq";
import { IMAGES, SERVICES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tax consulting, Specialized Employee Tax Credits (SETC), bookkeeping, and business sale brokerage — comprehensive financial services from BOSS Financial Group.",
};

const serviceIcons = {
  calculator: Calculator,
  "badge-percent": BadgePercent,
  "book-open": BookOpen,
  handshake: Handshake,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Four disciplines."
        accent="One standard:"
        after="excellence."
        image={IMAGES.taxFlatlay}
        crumb="Services"
      />

      {/* overview strip */}
      <section className="noise-bg relative py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="font-serif-display text-2xl font-medium italic leading-relaxed text-emerald md:text-[1.9rem]">
              “Every financial decision deserves counsel that is precise, personal, and principled.
              That is the standard behind each service we offer.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* detailed services */}
      {SERVICES.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        const flip = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`relative scroll-mt-28 overflow-hidden py-20 md:py-28 ${
              flip ? "bg-cream" : "bg-ivory"
            }`}
          >
            <div
              className={`dotted-map absolute top-10 h-72 w-72 opacity-35 ${
                flip ? "-right-16" : "-left-16"
              }`}
            />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div
                className={`grid items-center gap-14 lg:grid-cols-2 ${
                  flip ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* image */}
                <Reveal className="[direction:ltr]">
                  <ImageReveal
                    className="relative"
                    direction={flip ? "left" : "right"}
                  >
                    <div
                      className={`gold-frame img-zoom relative aspect-[5/4] overflow-hidden rounded-sm ${
                        flip ? "ml-auto" : ""
                      } lg:w-[92%]`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 46vw"
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`absolute -top-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-white text-gold-deep shadow-[0_18px_40px_-18px_rgba(151,113,61,0.7)] ${
                        flip ? "-right-4 lg:-right-2" : "-left-4 lg:-left-6"
                      }`}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
                    <span
                      className={`pointer-events-none absolute -bottom-8 font-serif-display text-[7rem] font-semibold italic leading-none text-gold/15 ${
                        flip ? "left-0" : "right-0"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </ImageReveal>
                </Reveal>

                {/* copy */}
                <div className="[direction:ltr]">
                  <span className="eyebrow">Service {String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-4 font-serif-display text-4xl font-medium leading-[1.05] text-emerald md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 leading-relaxed text-slate">{service.long}</p>

                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-deep" />
                        <span className="text-[0.9rem] font-semibold leading-snug text-emerald">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap items-center gap-5">
                    <Link href="/contact" className="btn-gold">
                      Request a Free Consultation! <ArrowRight size={15} />
                    </Link>
                    <a
                      href={SITE.phoneHref}
                      className="text-sm font-extrabold tracking-wider text-emerald underline decoration-gold/60 decoration-2 underline-offset-4 transition-colors hover:text-gold-deep"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* process band */}
      <section className="relative overflow-hidden bg-emerald py-24 text-ivory md:py-28">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.officeLounge}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-emerald/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="How It Works"
            title={
              <>
                Effortless from the <em className="text-gold-gradient">first call</em>
              </>
            }
            className="mb-16 [&_h2]:!text-ivory"
          />
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Consult",
                d: "Request your free consultation and upload your documents. We listen first — your goals shape everything that follows.",
              },
              {
                n: "02",
                t: "Strategize",
                d: "Your dedicated specialist maps a bespoke plan — credits to claim, books to clean, buyers to court — with transparent pricing.",
              },
              {
                n: "03",
                t: "Prosper",
                d: "We execute with meticulous care and keep you informed at every step, so you can focus on what you do best.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 font-serif-display text-2xl italic text-gold-light">
                  {step.n}
                </span>
                <h3 className="mt-6 font-serif-display text-3xl font-medium">{step.t}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ivory/65">
                  {step.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="noise-bg relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="FAQS"
            title={
              <>
                Before you <em className="text-gold-gradient">decide</em>
              </>
            }
            className="mb-14"
          />
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>

      <ConsultSection />
    </>
  );
}
