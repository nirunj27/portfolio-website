"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/components/animations/useScrollReveal";
import { siteConfig } from "@/data/portfolio";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>({ scale: 0.95, y: 25 });

  return (
    <section id="contact" ref={ref} className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="06 — Contact"
          title="Get In Touch"
          subtitle="Open to new opportunities and collaborations. Let's connect."
        />

        <div className="glass-card rounded-2xl p-8 text-center md:p-12">
          <p className="mx-auto mb-8 max-w-xl text-base text-zinc-400 md:text-lg">
            Whether you have a project in mind or a role to discuss — I&apos;d love to hear from you.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mb-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Send size={16} />
            {siteConfig.email}
          </a>

          <div className="flex items-center justify-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={22} />
              <span className="hidden text-sm sm:inline">GitHub</span>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
              <span className="hidden text-sm sm:inline">LinkedIn</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail size={22} />
              <span className="hidden text-sm sm:inline">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
