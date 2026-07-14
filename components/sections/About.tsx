"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/components/animations/useScrollReveal";
import { aboutText, siteConfig } from "@/data/portfolio";
import { MapPin } from "lucide-react";

export default function About() {
  const ref = useScrollReveal<HTMLElement>({ scale: 0.97, y: 25 });

  return (
    <section id="about" ref={ref} className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="01 — About" title="About Me" />

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-zinc-400">
            <MapPin size={16} className="text-accent" />
            {siteConfig.location}
          </div>

          <div className="space-y-5 text-base leading-relaxed text-zinc-300 md:text-lg">
            {aboutText.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
