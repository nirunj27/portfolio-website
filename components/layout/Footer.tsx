"use client";

import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
        <p>
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <span className="text-accent">Next.js</span> &{" "}
          <span className="text-accent">GSAP</span>
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-zinc-400 transition-colors hover:text-accent"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
