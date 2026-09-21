import type { Metadata } from "next";
import Image from "next/image";
import { CalendarClock, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import { IMAGES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BOSS Financial Group for bookkeeping, tax consulting, SETC, and business sale brokerage. Call 1-888-484-2677 or email admin@bossfinancialgroup.com.",
};

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "1-888-484-2677",
    href: SITE.phoneHref,
  },
  {
    icon: MapPin,
    label: "Address",
    value: SITE.address,
    href: "https://maps.google.com/?q=1501+S+MoPac+Expy+Suite+200+Austin+TX+78746",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let&apos;s start the"
        accent="conversation."
        image={IMAGES.marbleHall}
        crumb="Contact"
      />

      {/* intro */}
      <section className="noise-bg relative py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="text-[1.05rem] leading-relaxed text-slate">
              Ready to streamline your financial records or have questions about our bookkeeping
              services? Our dedicated team of Bookkeepers is here to assist you. Feel free to reach
              out to us at{" "}
              <a
                href={SITE.phoneHref}
                className="font-bold text-emerald underline decoration-gold/60 decoration-2 underline-offset-4 hover:text-gold-deep"
              >
                1-888-484-2677
              </a>{" "}
              or email us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-bold text-emerald underline decoration-gold/60 decoration-2 underline-offset-4 hover:text-gold-deep"
              >
                {SITE.email}
              </a>{" "}
              for inquiries, consultations, or to discuss your bookkeeping needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* contact cards */}
      <section className="relative pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.1}>
                <a
                  href={card.href}
                  target={card.label === "Address" ? "_blank" : undefined}
                  rel={card.label === "Address" ? "noreferrer" : undefined}
                  className="card-lux group flex h-full flex-col items-center rounded-sm px-8 py-10 text-center transition-transform duration-500 hover:-translate-y-1.5"
                >
                  <span className="flex h-15 w-15 items-center justify-center rounded-full border border-gold/35 bg-gold-pale/40 p-4 text-gold-deep transition-all duration-500 group-hover:bg-gold-deep group-hover:text-white">
                    <card.icon size={24} strokeWidth={1.5} />
                  </span>
                  <p className="mt-5 text-[0.66rem] font-extrabold uppercase tracking-[0.3em] text-gold-deep">
                    {card.label}
                  </p>
                  <p className="mt-2 break-words font-serif-display text-xl font-medium leading-snug text-emerald">
                    {card.value}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* form + hours */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <div className="dotted-map absolute -right-20 top-12 h-80 w-80 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="card-lux overflow-hidden rounded-sm">
            <div className="grid lg:grid-cols-5">
              {/* form */}
              <div className="bg-white p-10 lg:col-span-3 lg:p-12">
                <Reveal>
                  <span className="eyebrow">Get In Touch</span>
                  <h2 className="mt-4 font-serif-display text-4xl font-medium text-emerald">
                    Request a Free Consultation!
                  </h2>
                  <div className="gold-hairline mt-4 w-28" />
                  <p className="mt-4 text-sm leading-relaxed text-slate">
                    Tell us about your needs and attach any relevant documents. Our team responds
                    within one business day with your free quote, estimate, or special offer.
                  </p>
                  <div className="mt-9">
                    <QuoteForm />
                  </div>
                </Reveal>
              </div>

              {/* hours + image panel */}
              <div className="relative flex flex-col overflow-hidden bg-emerald p-10 text-ivory lg:col-span-2 lg:p-12">
                <div className="absolute inset-0">
                  <Image
                    src={IMAGES.consult}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover opacity-[0.14]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald/40 via-emerald/80 to-emerald-deep" />
                </div>

                <div className="relative">
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-gold/40 bg-white/5 p-3.5 text-gold-light">
                    <CalendarClock size={24} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-serif-display text-3xl font-medium">Assistance Hours</h3>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-sm text-ivory/70">Monday – Friday</span>
                      <span className="text-sm font-extrabold text-gold-light">
                        11:00am – 5:00pm
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-sm text-ivory/70">Saturday</span>
                      <span className="text-sm font-extrabold text-gold-light">By Appointment</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-sm text-ivory/70">Sunday</span>
                      <span className="text-sm font-extrabold uppercase tracking-wider text-ivory/50">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-auto pt-10">
                  <div className="rounded-sm border border-gold/25 bg-white/[0.05] p-6 backdrop-blur-sm">
                    <p className="flex items-center gap-2.5 text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-gold-light">
                      <Clock size={13} /> Prefer to call?
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="mt-2 block font-serif-display text-3xl font-medium text-ivory transition-colors hover:text-gold-light"
                    >
                      {SITE.phone}
                    </a>
                    <p className="mt-2 flex items-start gap-2 text-[0.8rem] leading-relaxed text-ivory/60">
                      <MapPin size={13} className="mt-0.5 shrink-0 text-gold-light" />
                      {SITE.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="noise-bg relative overflow-hidden py-24 md:py-32">
        <div className="dotted-map absolute -left-16 bottom-10 h-72 w-72 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="FAQS"
            title={
              <>
                Good questions, <em className="text-gold-gradient">honest</em> answers
              </>
            }
            className="mb-14"
          />
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>
    </>
  );
}
