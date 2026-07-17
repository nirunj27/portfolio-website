"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechChips from "@/components/ui/TechChips";
import { useScrollReveal } from "@/components/animations/useScrollReveal";
import { workProjects } from "@/data/workProjects";
import { personalProjects } from "@/data/personalProjects";

function PersonalProjectCard({ project }: { project: (typeof personalProjects)[number] }) {
  const hasScreenshot = project.image && !project.image.includes("placeholder");

  return (
    <div className="project-card glass-card group overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-accent/40">
      <Link href={`/projects/personal/${project.slug}`} className="block">
        <div className="relative h-48 overflow-hidden bg-white/5">
          {hasScreenshot ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
              <div className="flex h-full items-center justify-center">
                <span className="font-display text-4xl font-bold text-white/20">
                  {project.title.charAt(0)}
                </span>
              </div>
            </>
          )}
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between gap-3">
          <Link href={`/projects/personal/${project.slug}`}>
            <h4 className="font-display text-lg font-bold text-white transition-colors group-hover:text-accent">
              {project.title}
            </h4>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-lg p-1 text-zinc-500 transition-colors hover:text-white"
                aria-label={`${project.title} GitHub`}
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-lg p-1 text-zinc-500 transition-colors hover:text-accent"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={16} />
              </a>
            )}
            <Link href={`/projects/personal/${project.slug}`} aria-label={`View ${project.title}`}>
              <ArrowUpRight
                size={16}
                className="text-zinc-500 transition-all group-hover:text-accent"
              />
            </Link>
          </div>
        </div>
        {project.subtitle && (
          <p className="mb-2 text-sm text-accent">{project.subtitle}</p>
        )}
        <Link href={`/projects/personal/${project.slug}`}>
          <p className="line-clamp-2 text-sm text-zinc-400">{project.description}</p>
        </Link>
        <div className="mt-4">
          <TechChips items={project.techStack} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>({ childSelector: ".project-card", stagger: 0.1, scale: 0.9, y: 30 });

  return (
    <section id="projects" ref={ref} className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="03 — Projects"
          title="Featured Work"
          subtitle="Production applications from professional experience and independent projects built with modern web technologies."
        />

        <div className="mb-16">
          <h3 className="mb-6 font-display text-xl font-semibold text-white md:text-2xl">
            Work Experience Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/work/${project.slug}`}
                className="project-card glass-card group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <div
                  className={`absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
                />
                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="font-mono text-xs text-zinc-500">{project.period}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">{project.title}</h4>
                  <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                    {project.overview}
                  </p>
                  <div className="mt-4">
                    <TechChips items={project.techStack} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-display text-xl font-semibold text-white md:text-2xl">
            Personal Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((project) => (
              <PersonalProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
