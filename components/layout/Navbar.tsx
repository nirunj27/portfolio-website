"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/data/portfolio";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome, pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const getHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "border-b border-white/10 bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Logo />

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md lg:flex">
          {navLinks.map((link) => {
            const isActive = isHome && activeSection === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={getHref(link.href)}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-accent/15 font-medium text-accent"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          
          <Link
            href={isHome ? "#contact" : "/#contact"}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Hire Me
          </Link>
        </div>

        <button
          className="rounded-lg p-1 text-zinc-300 transition-colors hover:text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={getHref(link.href)}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full rounded-lg px-3 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-accent/10 font-medium text-accent"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-4">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Niranjan-Jathar-Resume.pdf"
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-medium text-zinc-300"
            >
              <Download size={16} />
              Download Resume
            </a>
            <Link
              href={isHome ? "#contact" : "/#contact"}
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 py-3 text-center text-sm font-semibold text-white"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
