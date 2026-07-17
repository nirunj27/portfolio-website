export interface PersonalProject {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  highlights?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  images?: string[];
  accent: string;
}

export const personalProjects: PersonalProject[] = [
  {
    slug: "docmind-ai",
    title: "DocuMind AI",
    subtitle: "Document Intelligence Platform",
    description:
      "Multi-tenant platform that turns unstructured files into searchable, AI-enriched insights with RBAC, semantic search, and 13 specialized AI workflows.",
    longDescription:
      "DocuMind AI is a production-style document intelligence SaaS built for legal, finance, HR, and operations teams. Users upload PDFs, DOCX, images, and CSVs; the system extracts text, generates summaries, and runs structured AI workflows—invoices, contracts, resumes, compliance checks, and more.\n\nInstead of treating files as static uploads, the platform enriches documents through a dedicated AI Studio and exposes structured fields, detections, and recommended actions. A real multi-tenant model gives platform SuperAdmins oversight of all projects, while project admins manage workspaces and invite team members with roles (Admin, Manager, Member, Viewer). Documents can be private or workspace-shared, with permissions enforced end-to-end.\n\nThe product spans the full stack: landing page, auth, dashboard, upload pipeline with OCR, 13 AI workflows, semantic search via pgvector embeddings, admin console with audit logs and feature flags, and a SuperAdmin dashboard for platform-wide metrics—all backed by Express API, Supabase Auth/PostgreSQL/Storage, and secure server-side Gemini/Groq integration.",
    highlights: [
      "End-to-end product: landing page, auth, dashboard, upload pipeline, AI workflows, semantic search, and admin console.",
      "Multi-tenant architecture — SuperAdmin → Project → Workspaces → Team members with full RBAC.",
      "13 AI Studio workflows: invoice extraction, contract analysis, resume parsing, compliance checks, and more.",
      "Semantic search with pgvector embeddings, filters, and saved searches.",
      "Document lifecycle with OCR (Tesseract), PDF/DOCX/CSV parsing, preview, folders, and JSON/CSV/PDF export.",
      "Admin governance: team invites, permission matrix, feature flags, and audit logs.",
      "Secure AI integration — Gemini/Groq keys server-side with provider switching from the UI.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Gemini",
      "Groq",
      "TanStack Query",
      "RBAC",
      "vercel",
      "Railway api"
    ],
    githubUrl: "https://github.com/nirunj27/Doc-ai",
    liveUrl:"https://doc-ai-gamma-silk.vercel.app/",
    image: "/projects/Doc-screenshot.png",
    accent: "from-violet-500 to-purple-600",
    
  },
  {
    slug: "snippetshelf",
    title: "SnippetShelf",
    subtitle: "Personal Code Library",
    description:
      "Personal code library built with React 19 — save snippets with language, tags, syntax highlighting, favorites, and copy analytics.",
    longDescription:
      "SnippetShelf is a personal code library for developers who want to save, search, and reuse snippets without friction. Add snippets with language, tags, and syntax highlighting; favorite what you use most; and track copy analytics to see which patterns actually stick.\n\nBuilt with React 19 and a Midnight Sapphire design system, it features deferred search for smooth filtering, grid/list layouts, CodeMirror editing, shareable deep links, undo delete, and JSON import/export — all with light/dark theme persistence.",
    highlights: [
      "Instant search with useDeferredValue for smooth filtering (/ keyboard shortcut).",
      "Sort by recent, oldest, most copied, or A → Z; language filters with per-language counts.",
      "Tag filters, favorites toggle, and click-to-filter tags on snippet cards.",
      "Compound SnippetCard actions — copy, favorite, duplicate, edit, delete with undo toast.",
      "Copy analytics — top copied snippets, total copies, and most-used language.",
      "Quick access panel for favorites & recently updated with one-click copy.",
      "Export / Import JSON (merge or replace), shareable #snippet/{id} links, and full-screen view.",
      "CodeMirror editor, light/dark Midnight Sapphire themes, and grid/list preference persistence.",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "CodeMirror",
      "react-syntax-highlighter",
      "Lucide React",
    ],
    githubUrl: "https://github.com/nirunj27/snippetshelf",
    liveUrl: "https://snippetshelf.netlify.app/",
    image: "/projects/snippetshelf.png",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    slug: "popmarket",
    title: "PopMarket OS",
    subtitle: "Food Truck Market Organizer",
    description:
      "Full-stack operations platform for food truck markets and pop-up festivals: vendor applications, stall maps, visitor RSVPs, Razorpay payments, AI menu extraction, and organizer dashboards.",
    longDescription:
      "PopMarket OS is a full-stack operations platform for food truck markets and pop-up festivals. Built with Next.js 16, TypeScript, Tailwind CSS v4, Supabase, Razorpay, React Hook Form, and Zod, it covers the full market lifecycle—from vendor applications and stall maps to visitor RSVPs, payments, and AI menu extraction.\n\nA Superadmin layer at /admin/login manages commission %, Razorpay keys, and organizer roles, with cross-organizer event and revenue overview. Organizers run dashboards for event stats, application review (approve / waitlist / reject), interactive bay assignment, payment tracking, per-event payout & tax CSV (gross, platform fee, organizer net, Razorpay IDs), vendor terms, and AI menu extraction with dish names, prices, and photos.\n\nVendors and RSVP guests use public pages with no account required: event pages with featured trucks and floor plans, apply forms, capacity-limited RSVPs with waitlists, token-based status pages, and QR-ready confirmation passes. Platform engineering includes Supabase Auth + RLS, security headers (CSP, HSTS, X-Frame-Options), Zod validation, and a responsive food-market design system — deployed on Vercel + Supabase Cloud.",
    highlights: [
      "Superadmin platform — /admin/login for commission %, Razorpay keys, organizer roles, and cross-organizer revenue overview.",
      "Organizer dashboard — create/publish events, application review, stall maps, payment tracking, and vendor terms.",
      "Per-event payout & tax CSV — gross, platform fee, organizer net, and Razorpay IDs.",
      "AI menu extraction — dish names, prices, and photos from uploaded menus via Gemini / Groq.",
      "Public vendor apply & RSVP flows — capacity, waitlist, token status pages, and QR confirmation passes.",
      "Razorpay stall fees & RSVP tickets with full payment tracking.",
      "Supabase Auth + RLS, security headers, Zod + React Hook Form, and Vercel deployment.",
    ],
    techStack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase",
      "Razorpay",
      "Zod",
      "React Hook Form",
      "Gemini",
      "Groq",
      "Vercel",
    ],
    githubUrl: "https://github.com/nirunj27/PopMarket",
    liveUrl: "https://popmarket-os.vercel.app/",
    image: "/projects/popmarket.png",
    accent: "from-orange-500 to-amber-600",
  },
  {
    slug: "ts-showcase",
    title: "TypeScript Showcase",
    subtitle: "Monorepo — TypeBoard & JsonForge",
    description:
      "TypeScript monorepo showcasing branded types, Result patterns, and Zod schemas across a shared domain layer, TypeBoard Kanban, and JsonForge validator — vanilla TypeScript, no React.",
    longDescription:
      "TypeScript Showcase is a pnpm + Turborepo monorepo built with strict vanilla TypeScript — no React or Next.js. A shared @ts-showcase/domain package holds pure types, Zod schemas, and business logic with no UI dependencies—branded IDs, a Result<T,E> type, board operations, and JsonForge presets—consumed by storage, TypeBoard, and JsonForge packages.\n\nTypeBoard is a Kanban board with drag-and-drop cards, columns, search, priority filters, export/reset, and board integrity repair after load. JsonForge validates JSON against preset schemas (Note, Contact, Task) with discriminated unions and runtime Zod validation. The domain layer keeps UI concerns out of core logic so types, validation, and board mutations stay testable and reusable.",
    highlights: [
      "Shared domain package — branded IDs, Result<T,E>, Zod schemas, and pure board/JSON business logic.",
      "TypeBoard Kanban — add/move/duplicate cards, columns, search, priority filters, export, and repairBoard for orphan refs.",
      "JsonForge — preset schemas (Note, Contact, Task) with runtime Zod validation and form error mapping.",
      "Type-safe patterns — Brand<string, \"CardId\">, inferred Zod types, discriminated unions, and Result error handling.",
      "Strict tsconfig (no any) — monorepo with pnpm + Turborepo, localStorage persistence.",
    ],
    techStack: [
      "TypeScript",
      "Zod",
      "Tailwind CSS",
      "pnpm",
      "Turborepo",
      "Vite",
    ],
    githubUrl: "https://github.com/nirunj27/Ts-project",
    liveUrl: "https://ts-project-portfolio.vercel.app/",
    image: "/projects/ts-showcase-landing.png",
    images: [
      "/projects/ts-showcase-landing.png",
      "/projects/ts-showcase.png",
      "/projects/ts-showcase-jsonforge.png",
    ],
    accent: "from-amber-500 to-orange-500",
  },
];

export function getPersonalProject(slug: string): PersonalProject | undefined {
  return personalProjects.find((p) => p.slug === slug);
}
