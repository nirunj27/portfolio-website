export interface WorkProject {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  company: string;
  overview: string;
  contributions: string[];
  techStack: string[];
  accent: string;
}

export const workProjects: WorkProject[] = [
  {
    slug: "barstool-social",
    title: "Barstool Social",
    subtitle: "Web-Based Business Management Portal",
    period: "Nov 2024 – July 2025",
    company: "Winjit Technologies",
    overview:
      "Developed a scalable multi-role web-based administration platform for managing restaurants, promotional campaigns, users, and business operations. The platform provides dedicated Admin and Restaurant Manager portals, enabling administrators to onboard restaurants, manage menus, approve promotional content, monitor platform activity, and generate business insights. Restaurant managers can create and manage menus, promotional offers, banners, and notifications that are published to the customer-facing mobile application after admin approval. The system also includes commission management, payment processing, analytics dashboards, and role-based access control.",
    contributions: [
      "Developed Admin and Restaurant Manager portals with secure role-based access control using JWT Authentication.",
      "Built restaurant management modules including onboarding, menu management, and restaurant lifecycle operations (create, update, disable, and delete).",
      "Implemented promotional offer management supporting Daily, Weekly, and VIP offers with an admin approval workflow before publishing to the mobile application.",
      "Developed banner management with approval and rejection workflows, integrated with Stripe for secure payment processing.",
      "Implemented commission-based business logic, allowing the platform to earn revenue from approved VIP offers and promotional campaigns.",
      "Built notification management supporting standard and geo-targeted notifications with configurable scheduling based on date and time.",
      "Developed comprehensive user management features enabling administrators to manage, disable, and delete user accounts.",
      "Created analytics dashboards for both Admin and Restaurant Managers to monitor business performance, offers, user engagement, and operational insights.",
      "Integrated React Query (TanStack Query) for efficient server-state management, API caching, background synchronization, and improved application performance.",
      "Implemented scalable and reusable form handling using React Hook Form with Yup validation for robust client-side validation.",
      "Designed and developed reusable UI components following a centralized Design System to ensure consistency across the application.",
      "Followed Component-Driven Architecture to build modular, maintainable, and scalable frontend applications.",
      "Optimized application performance using lazy loading, code splitting, memoization, efficient rendering techniques, and API caching.",
      "Maintained clean, scalable, and type-safe code by following React and TypeScript best practices.",
      "Collaborated using Git and GitHub with feature branching, pull request workflows, and code reviews.",
      "Worked with CI/CD pipelines to automate application build, testing, and deployment processes.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Query (TanStack Query)",
      "React Hook Form",
      "Yup",
      "Zustand",
      "JWT Authentication",
      "Stripe",
      "REST APIs",
      "Git",
      "GitHub",
      "Docker",
      "Nginx",
      "CI/CD Pipelines",
    ],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    slug: "predictscreen",
    title: "PredictScreen",
    subtitle: "Tenant Screening Platform with Multi-User Access",
    period: "May 2024 – Oct 2024",
    company: "Winjit Technologies",
    overview:
      "Developed a web-based Tenant Risk Assessment and Screening Platform designed to help property managers, landlords, and leasing professionals evaluate prospective tenants through comprehensive risk analysis and scoring reports. The platform aggregates tenant-related information from multiple data sources and presents actionable insights, enabling subscribers to make informed leasing decisions while minimizing financial and operational risks. The application provides an intuitive interface for searching tenants, generating detailed risk assessment reports, reviewing historical records, and analyzing key risk indicators through interactive dashboards. It emphasizes fast report generation, efficient data visualization, and seamless user experience, allowing subscribers to quickly access reliable tenant insights.Built using modern React architecture, the application focuses on scalability, maintainability, and performance through reusable components, optimized API communication, efficient server-state management, responsive UI design, and a consistent design system. The platform also follows industry best practices for code quality, modular architecture, and frontend performance optimization, making it suitable for enterprise-scale usage",
    contributions: [
      "Developed a scalable tenant risk assessment platform that generates comprehensive tenant scoring and screening reports for informed leasing decisions.",
      "Integrated React Query (TanStack Query) for efficient server-state management, API caching, background synchronization, and reduced redundant network requests.",
      "Implemented complex forms using React Hook Form with custom validation logic to improve form performance and user experience.",
      "Built responsive and reusable UI components using Material UI (MUI), ensuring design consistency and faster feature development.",
      "Developed dynamic dashboards and report views to present tenant risk scores, historical records, and assessment insights.",
      "Optimized application performance through lazy loading, code splitting, memoization, and efficient rendering techniques.",
      "Followed Component-Driven Architecture to build modular, maintainable, and scalable frontend applications.",
      "Maintained a reusable Design System for consistent UI patterns across multiple modules.",
      "Collaborated with backend teams to integrate REST APIs and ensure seamless data flow across the application.",
      "Maintained clean, scalable, and type-safe code using TypeScript, ESLint, and Prettier following industry best practices.",
      "Worked collaboratively using Git and GitHub with feature branching, pull requests, and code reviews.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Vite",
      "Material UI (MUI)",
      "React Query (TanStack Query)",
      "React Hook Form",
      "REST APIs",
      "Git",
      "GitHub",
      "ESLint",
      "Prettier",
      "CI/CD Pipelines",
    ],
    accent: "from-violet-500 to-purple-600",
  },
  {
    slug: "chrp",
    title: "CHRP",
    subtitle: "Portal to Manage Home Insurance Companies",
    period: "Feb 2023 – April 2024",
    company: "Winjit Technologies",
    overview:
      "Developed a web application for managing home insurance companies using React.js, Redux, and Material UI, enabling efficient administration, data management, and streamlined workflows.",
    contributions: [
      "Executed role-based authentication and dynamic menus based on user roles.",
      'Developed a "Custom Views" feature allowing users to configure and save column order, sorting, and filters using the AG Grid library.',
      "Addressed and fixed a critical XSS vulnerability in the file upload module, significantly improving application security.",
      "Created modular and reusable UI components to ensure code maintainability and scalability.",
      "Resolved multiple production issues, enhancing system stability and improving overall user experience.",
      "Developed and delivered several features while collaborating effectively within Agile sprint cycles.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Material UI",
      "AG Grid",
      "React Redux",
      "CI/CD Pipelines",
    ],
    accent: "from-emerald-500 to-teal-600",
  },
];

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}
