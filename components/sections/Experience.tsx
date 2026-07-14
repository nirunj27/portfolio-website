"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/components/animations/useScrollReveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>({ childSelector: ".exp-item", stagger: 0.12, x: -30, scale: 0.97 });

  return (
    <section id="experience" ref={ref} className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="04 — Experience"
          title="Work Experience"
          subtitle="Professional roles and key contributions across my career."
        />

        <div className="relative space-y-8">
          <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:left-6 md:block" />

          {experiences.map((exp, index) => (
            <div key={index} className="exp-item relative md:pl-16">
              <div className="absolute left-2.5 hidden h-3 w-3 rounded-full border-2 border-accent bg-background md:left-5 md:block" />

              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-accent">
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-sm text-zinc-500">{exp.period}</span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
