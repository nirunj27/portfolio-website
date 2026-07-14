"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Calendar } from "lucide-react";
import TechChips from "@/components/ui/TechChips";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import type { WorkProject } from "@/data/workProjects";

export default function WorkProjectDetail({ project }: { project: WorkProject }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".detail-animate", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="detail-animate mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div
          className={`detail-animate mb-6 h-1 w-24 rounded-full bg-gradient-to-r ${project.accent}`}
        />

        <h1 className="detail-animate font-display text-4xl font-bold text-white md:text-5xl">
          {project.title}
        </h1>
        <p className="detail-animate mt-2 text-xl text-accent">{project.subtitle}</p>

        <div className="detail-animate mt-6 flex flex-wrap gap-4 text-sm text-zinc-400">
          <span className="flex items-center gap-2">
            <Calendar size={16} className="text-accent" />
            {project.period}
          </span>
          <span className="flex items-center gap-2">
            <Building2 size={16} className="text-accent" />
            {project.company}
          </span>
        </div>

        <div className="detail-animate glass-card mt-10 rounded-2xl p-8 md:p-10">
          <h2 className="mb-4 font-display text-xl font-semibold text-white">Overview</h2>
          <p className="leading-relaxed text-zinc-300">{project.overview}</p>
        </div>

        <div className="detail-animate glass-card mt-6 rounded-2xl p-8 md:p-10">
          <h2 className="mb-6 font-display text-xl font-semibold text-white">
            Key Contributions
          </h2>
          <ul className="space-y-4">
            {project.contributions.map((item, i) => (
              <li key={i} className="flex gap-3 text-zinc-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-animate glass-card mt-6 rounded-2xl p-8 md:p-10">
          <h2 className="mb-4 font-display text-xl font-semibold text-white">Tech Stack</h2>
          <TechChips items={project.techStack} />
        </div>
      </div>
    </div>
  );
}
