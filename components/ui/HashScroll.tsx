"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scroll = () => {
      const element = document.querySelector(hash);

      if (element) {
        const offset = 100; // Adjust for fixed navbar
        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      } else {
        setTimeout(scroll, 200);
      }
    };

    setTimeout(scroll, 300);

    // Handle back/forward navigation with hashes
    window.addEventListener("hashchange", scroll);

    return () => {
      window.removeEventListener("hashchange", scroll);
    };
  }, []);

  return null;
}