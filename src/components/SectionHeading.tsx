import Reveal from "@/components/Reveal";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={`${centered ? "text-center" : ""} ${className}`}>
      <span className={`eyebrow ${centered ? "centered justify-center" : ""}`}>{eyebrow}</span>
      <h2 className="mt-4 font-serif-display text-4xl font-medium leading-[1.06] text-emerald md:text-5xl xl:text-[3.4rem]">
        {title}
      </h2>
      {text && (
        <p className={`mt-5 max-w-2xl leading-relaxed text-slate ${centered ? "mx-auto" : ""}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
