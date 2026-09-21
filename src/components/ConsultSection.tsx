import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";
import { SITE, IMAGES } from "@/lib/data";

interface ConsultSectionProps {
  id?: string;
}

export default function ConsultSection({ id = "consultation" }: ConsultSectionProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-cream py-24 md:py-32">
      {/* decorative backdrop */}
      <div className="dotted-map absolute -left-24 top-16 h-72 w-72 opacity-40" />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="card-lux overflow-hidden rounded-sm">
          <div className="grid lg:grid-cols-5">
            {/* info panel */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-emerald p-10 text-ivory lg:col-span-2 lg:p-12">
              <div className="absolute inset-0">
                <Image
                  src={IMAGES.marbleHall}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-[0.14]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald/50 via-emerald/80 to-emerald-deep" />
              </div>

              <div className="relative">
                <span className="eyebrow !text-gold-light">Request a Free Consultation!</span>
                <h3 className="mt-4 font-serif-display text-4xl font-medium leading-[1.06] md:text-[2.7rem]">
                  Let&apos;s craft your <em className="text-gold-gradient">financial</em> future,
                  together.
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-ivory/70">
                  Share a few details and upload your documents — our specialists will respond with
                  your free quote, estimate, or special offer.
                </p>
              </div>

              <ul className="relative mt-10 space-y-5 text-sm">
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-gold-light">
                    <Phone size={15} />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-gold-light/80">
                      Call Us
                    </p>
                    <a href={SITE.phoneHref} className="font-semibold text-ivory hover:text-gold-light">
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-gold-light">
                    <Mail size={15} />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-gold-light/80">
                      Email
                    </p>
                    <a href={`mailto:${SITE.email}`} className="break-all font-semibold text-ivory hover:text-gold-light">
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-gold-light">
                    <MapPin size={15} />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-gold-light/80">
                      Office
                    </p>
                    <p className="font-semibold text-ivory">{SITE.address}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-gold-light">
                    <Clock size={15} />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.26em] text-gold-light/80">
                      Assistance Hours
                    </p>
                    <p className="font-semibold text-ivory">{SITE.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* form panel */}
            <div className="bg-white p-10 lg:col-span-3 lg:p-12">
              <Reveal>
                <h4 className="font-serif-display text-3xl font-medium text-emerald">
                  Get My Quote
                </h4>
                <div className="gold-hairline mt-3 w-24" />
                <p className="mt-4 text-sm text-slate">
                  Complete the form below — it takes less than a minute.
                </p>
                <div className="mt-8">
                  <QuoteForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
