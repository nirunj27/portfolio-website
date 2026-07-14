"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/gsap";

export function useHeroAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(
      ".hero-left > *, .hero-panel, .hero-terminal-line, .hero-stat"
    );

    const revealAll = () => {
      gsap.set(targets, { clearProps: "all", opacity: 1, x: 0, y: 0, scale: 1 });
    };

    if (prefersReducedMotion()) {
      revealAll();
      return;
    }

    registerGsap();

    const safety = window.setTimeout(revealAll, 1600);

    const ctx = gsap.context(() => {
      gsap.set(".hero-left > *", { opacity: 0, x: -24 });
      gsap.set(".hero-panel", { opacity: 0, y: 24, scale: 0.97 });
      gsap.set(".hero-terminal-line", { opacity: 0, x: -8 });
      gsap.set(".hero-stat", { opacity: 0, y: 12 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          window.clearTimeout(safety);
          revealAll();
        },
      });

      tl.to(".hero-left > *", {
        opacity: 1,
        x: 0,
        duration: 0.75,
        stagger: 0.1,
      })
        .to(
          ".hero-panel",
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.45"
        )
        .to(
          ".hero-terminal-line",
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.06 },
          "-=0.45"
        )
        .to(
          ".hero-stat",
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.07 },
          "-=0.2"
        );

      gsap.to(".hero-cursor", {
        opacity: 0,
        duration: 0.55,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });
    }, el);

    return () => {
      window.clearTimeout(safety);
      ctx.revert();
      revealAll();
    };
  }, []);

  return ref;
}
