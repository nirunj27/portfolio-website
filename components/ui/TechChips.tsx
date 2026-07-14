export default function TechChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent md:text-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
