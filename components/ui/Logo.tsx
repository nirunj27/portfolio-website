import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 transition-all group-hover:border-accent/60 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
        <span className="font-display text-2xl font-extrabold text-white transition-colors group-hover:text-accent">
          N
        </span>
        <div className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full bg-accent" />
      </div>
      <div className="hidden flex-col sm:flex">
        <span className="font-display text-sm leading-tight font-bold text-white transition-colors group-hover:text-accent">
          {siteConfig.name.split(" ")[0]}
        </span>
        <span className="text-[11px] tracking-wide text-zinc-500 uppercase">
          {siteConfig.title}
        </span>
      </div>
    </Link>
  );
}
