"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/gsap";

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  scale?: number;
  stagger?: number;
  childSelector?: string;
  start?: string;
  rotate?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    y = 30,
    x = 0,
    scale = 0.95,
    stagger = 0.08,
    childSelector,
    start = "top 88%",
    rotate = 0,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    registerGsap();

    const targets = childSelector ? el.querySelectorAll(childSelector) : [el];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, x, scale, rotation: rotate },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotation: 0,
          duration: 0.7,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, x, scale, stagger, childSelector, start, rotate]);

  return ref;
}
