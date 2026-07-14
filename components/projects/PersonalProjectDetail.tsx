"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import TechChips from "@/components/ui/TechChips";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import type { PersonalProject } from "@/data/personalProjects";

function getProjectImages(project: PersonalProject): string[] {
  if (project.images && project.images.length > 0) return project.images;
  if (project.image && !project.image.includes("placeholder")) return [project.image];
  return [];
}

export default function PersonalProjectDetail({ project }: { project: PersonalProject }) {
  const ref = useRef<HTMLDivElement>(null);
  const screenshots = getProjectImages(project);
  const [activeImage, setActiveImage] = useState(screenshots[0] ?? "");

  useEffect(() => {
    setActiveImage(screenshots[0] ?? "");
  }, [project.slug]);

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

        <div className="detail-animate relative mb-4 h-56 overflow-hidden rounded-2xl border border-white/10 md:h-80">
          {activeImage ? (
            <Image
              src={activeImage}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          ) : (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-30`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-8xl font-bold text-white/10">
                  {project.title.charAt(0)}
                </span>
              </div>
            </>
          )}
        </div>

        {screenshots.length > 1 && (
          <div className="detail-animate mb-10 grid grid-cols-3 gap-3">
            {screenshots.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(src)}
                className={`relative h-20 overflow-hidden rounded-xl border transition-all md:h-24 ${
                  activeImage === src
                    ? "border-accent ring-2 ring-accent/40"
                    : "border-white/10 hover:border-white/25"
                }`}
                aria-label={`View screenshot ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="200px"
                />
              </button>
            ))}
          </div>
        )}

        <h1 className="detail-animate font-display text-4xl font-bold text-white md:text-5xl">
          {project.title}
        </h1>
        {project.subtitle && (
          <p className="detail-animate mt-2 text-xl text-accent">{project.subtitle}</p>
        )}
        <p className="detail-animate mt-4 text-lg leading-relaxed whitespace-pre-line text-zinc-300">
          {project.longDescription}
        </p>

        <div className="detail-animate mt-8 flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-accent/50 hover:text-white"
            >
              <Github size={16} />
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="detail-animate glass-card mt-10 rounded-2xl p-8 md:p-10">
            <h2 className="mb-6 font-display text-xl font-semibold text-white">Key Highlights</h2>
            <ul className="space-y-4">
              {project.highlights.map((item, i) => (
                <li key={i} className="flex gap-3 text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="detail-animate glass-card mt-6 rounded-2xl p-8 md:p-10">
          <h2 className="mb-4 font-display text-xl font-semibold text-white">Tech Stack</h2>
          <TechChips items={project.techStack} />
        </div>
      </div>
    </div>
  );
}
