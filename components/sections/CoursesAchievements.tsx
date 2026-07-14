"use client";

import { Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/components/animations/useScrollReveal";
import { achievements } from "@/data/portfolio";

export default function CoursesAchievements() {
  const achievementsRef = useScrollReveal<HTMLDivElement>({
    childSelector: ".achievement-card",
    stagger: 0.12,
    y: 25,
  });

  return (
    <section id="achievements" className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="05 — Achievements"
          title="Achievements"
          subtitle="Professional recognition and certifications earned throughout my career."
          centered
        />

        <div ref={achievementsRef} className="mx-auto max-w-3xl space-y-4">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="achievement-card glass-card flex items-start gap-4 rounded-2xl p-6 transition-all hover:border-accent/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                <Award size={18} className="text-accent" />
              </div>
              <p className="text-left text-sm leading-relaxed text-zinc-300 md:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
