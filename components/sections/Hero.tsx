"use client";

import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { heroStats, siteConfig } from "@/data/portfolio";
import { useHeroAnimation } from "@/components/animations/useHeroAnimation";

export default function Hero() {
  const ref = useHeroAnimation();

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const techTags = ["React.js", "TypeScript", "Node.js", "AWS"];

  const codeLines = [
    {
      indent: 0,
      parts: [
        { text: "const", color: "text-violet-400" },
        { text: " engineer ", color: "text-zinc-500" },
        { text: "= {", color: "text-zinc-300" },
      ],
    },
    {
      indent: 1,
      parts: [
        { text: "name", color: "text-cyan-400" },
        { text: ': "', color: "text-zinc-500" },
        { text: siteConfig.name, color: "text-emerald-400" },
        { text: '",', color: "text-zinc-500" },
      ],
    },
    {
      indent: 1,
      parts: [
        { text: "role", color: "text-cyan-400" },
        { text: ': "', color: "text-zinc-500" },
        { text: siteConfig.title, color: "text-emerald-400" },
        { text: '",', color: "text-zinc-500" },
      ],
    },
    {
      indent: 1,
      parts: [
        { text: "experience", color: "text-cyan-400" },
        { text: ': "', color: "text-zinc-500" },
        { text: siteConfig.experienceYears, color: "text-emerald-400" },
        { text: '",', color: "text-zinc-500" },
      ],
    },
    {
      indent: 1,
      parts: [
        { text: "availability", color: "text-cyan-400" },
        { text: ': "', color: "text-zinc-500" },
        { text: "Open to Opportunities", color: "text-emerald-400" },
        { text: '",', color: "text-zinc-500" },
      ],
    },
    {
      indent: 1,
      parts: [
        { text: "location", color: "text-cyan-400" },
        { text: ': "', color: "text-zinc-500" },
        { text: "India", color: "text-emerald-400" },
        { text: '",', color: "text-zinc-500" },
      ],
    },
    {
      indent: 1,
      parts: [
        { text: "frontend", color: "text-cyan-400" },
        { text: ": [", color: "text-zinc-500" },
        { text: '"React"', color: "text-amber-300" },
        { text: ", ", color: "text-zinc-500" },
        { text: '"Next.js"', color: "text-amber-300" },
        { text: ", ", color: "text-zinc-500" },
        { text: '"JavaScript"', color: "text-amber-300" },
        { text: ", ", color: "text-zinc-500" },
        { text: '"TypeScript"', color: "text-amber-300" },
        { text: "],", color: "text-zinc-500" },
      ],
    },
    {
      indent: 1,
      parts: [
        { text: "backend", color: "text-cyan-400" },
        { text: ": [", color: "text-zinc-500" },
        { text: '"Node.js"', color: "text-amber-300" },
        { text: ", ", color: "text-zinc-500" },
        { text: '"Express.js"', color: "text-amber-300" },
        { text: "],", color: "text-zinc-500" },
      ],
    },
    {
      indent: 1,
      parts: [
        { text: "cloud", color: "text-cyan-400" },
        { text: ": [", color: "text-zinc-500" },
        { text: '"AWS"', color: "text-amber-300" },
        { text: "],", color: "text-zinc-500" },
      ],
    },
    {
      indent: 0,
      parts: [{ text: "};", color: "text-zinc-300" }],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-x-clip px-4 pt-24 pb-16 sm:px-6 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 h-[300px] w-[300px] rounded-full bg-cyan-500/8 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
        <div className="absolute -right-20 bottom-1/4 h-[250px] w-[250px] rounded-full bg-violet-500/8 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div className="hero-left order-1 min-w-0 text-center lg:text-left">
          <div className="mb-4 flex items-center justify-center gap-2 text-sm text-zinc-400 lg:justify-start">
            <MapPin size={14} className="shrink-0 text-accent" />
            {siteConfig.location}
          </div>

          <h1 className="font-display text-[1.75rem] leading-[1.15] font-bold tracking-tight break-words text-white min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-3 font-display text-lg font-semibold text-white/90 sm:text-xl md:text-2xl">
            {siteConfig.title}
          </p>

          <p className="mt-2 font-display text-sm break-words text-zinc-500 sm:text-base">
            {siteConfig.degree}
          </p>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg lg:mx-0">
            {siteConfig.tagline}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mobile / tablet CTAs */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:hidden">
            <a
              href="./projects/Niranjan-Jathar-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:w-auto sm:px-8"
            >
              <Download size={16} />
              View Resume
            </a>
            <button
              onClick={scrollToProjects}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-accent/50 hover:text-white sm:w-auto sm:px-8"
            >
              Explore My Work
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right — developer panel */}
        <div className="hero-right order-2 flex w-full min-w-0 justify-center lg:justify-end">
          <div className="hero-panel relative w-full max-w-md">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 blur-2xl" />

            <div className="glass-card relative overflow-hidden rounded-2xl border-white/10">
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-medium text-zinc-400">
                    Available for immediate joining
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 p-1.5 text-zinc-500 transition-all hover:border-accent/40 hover:text-accent"
                    aria-label="GitHub"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 p-1.5 text-zinc-500 transition-all hover:border-accent/40 hover:text-accent"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>

              {/* Terminal */}
              <div className="p-5">
                <div className="hero-terminal rounded-xl border border-white/5 bg-black/50 p-4">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 font-mono text-[10px] text-zinc-600">
                      profile.ts
                    </span>
                  </div>
                  <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed sm:text-xs">
                    {codeLines.map((line, i) => (
                      <div
                        key={i}
                        className="hero-terminal-line whitespace-pre"
                      >
                        <span className="text-zinc-700 select-none">
                          {String(i + 1).padStart(2, " ")}
                        </span>
                        <span
                          style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                        >
                          {line.parts.map((part, j) => (
                            <span key={j} className={part.color}>
                              {part.text}
                            </span>
                          ))}
                          {i === codeLines.length - 1 && (
                            <span className="hero-cursor ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-accent/80" />
                          )}
                        </span>
                      </div>
                    ))}
                  </pre>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-white/5 border-t border-white/5">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="hero-stat px-3 py-4 text-center transition-colors hover:bg-white/[0.02]"
                  >
                    <p className="font-display text-lg font-bold text-accent sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] leading-tight text-zinc-500 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Desktop CTAs */}
              <div className="hidden flex-col gap-3 border-t border-white/5 p-5 lg:flex">
                <a
                  href="./projects/Niranjan-Jathar-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:w-auto sm:px-8"
                >
                  <Download size={16} />
                  View Resume
                </a>
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-accent/40 hover:bg-white/[0.04] hover:text-white"
                >
                  Explore My Work
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
