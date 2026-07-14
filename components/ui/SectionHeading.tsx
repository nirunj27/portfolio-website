"use client";

import { useHeadingReveal } from "@/components/animations/useHeadingReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  const ref = useHeadingReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mb-8 ${centered ? "mx-auto max-w-2xl text-center" : ""}`}
    >
      <span className="section-label mb-2 inline-block font-mono text-sm tracking-widest text-accent uppercase">
        {label}
      </span>
      <h2 className="section-title font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle mt-3 text-base text-zinc-400 md:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={`section-line mt-4 h-px w-20 origin-left bg-gradient-to-r from-accent to-transparent ${
          centered ? "mx-auto origin-center" : ""
        }`}
      />
    </div>
  );
}
