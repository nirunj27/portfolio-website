"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/components/animations/useScrollReveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>({ childSelector: ".skill-group", stagger: 0.06, scale: 0.92, y: 20 });

  return (
    <section id="skills" ref={ref} className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="02 — Skills"
          title="Skills & Technologies"
          subtitle="Technologies and tools I work with across the full development stack."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="skill-group glass-card group rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-accent/30"
            >
              <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-accent uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-300 transition-colors group-hover:bg-white/10 md:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
