import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-zinc-400">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
