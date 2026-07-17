export interface WorkProject {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  company: string;
  businessProblem?: string;
  frontendArchitecture?: string[];
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

  {
    slug: "audit-query-disposal-management-system",

    title: "Audit Query & Disposal Management System (AQDMS)",

    subtitle: "Enterprise Audit Workflow & Compliance Management Platform",

    period: "November 2025 – March 2026",

    company: "Enterprise Client(CA firm)",

    overview:
      "Developed an enterprise-grade Audit Query & Disposal Management System (AQDMS) to digitize and streamline the complete audit lifecycle for a Chartered Accountant firm. The platform enables auditors, managers, reviewers, and client representatives to collaborate through a centralized workflow covering audit planning, audit query management, compliance tracking, document management, review, approvals, dashboards, and reporting. It replaces traditional spreadsheet- and email-driven processes with a secure, role-based application that improves transparency, accountability, operational efficiency, and audit traceability. Built using modern React architecture, the application focuses on scalability, maintainability, performance, and enterprise-grade user experience through reusable component architecture, centralized design systems, efficient API communication, optimized state management, and frontend system design best practices.",

    businessProblem:
      "Traditional audit processes often rely on Excel sheets, emails, and manually maintained documents, making it difficult to track audit observations, monitor compliance, manage supporting evidence, and generate management reports efficiently. These disconnected workflows frequently lead to delayed responses, duplicate observations, poor visibility into audit progress, inconsistent documentation, and limited accountability. AQDMS centralizes the complete audit lifecycle into a single platform, enabling secure collaboration, real-time tracking, automated workflows, and faster audit query resolution.",

    contributions: [
      "Designed and developed scalable React.js modules covering audit planning, audit query management, document management, compliance tracking, dashboards, reporting, and user administration.",
      "Built reusable UI components following Component-Driven Development (CDD), improving consistency, scalability, and long-term maintainability across the application.",
      "Created a centralized Design System consisting of reusable typography, buttons, form controls, tables, dialogs, cards, badges, loaders, empty states, and notification components.",
      "Implemented Frontend System Design using Feature-Based Architecture with clear separation between pages, layouts, components, hooks, services, utilities, and shared modules.",
      "Developed advanced enterprise data tables supporting server-side pagination, sorting, filtering, search, row selection, bulk actions, and export functionality.",
      "Integrated REST APIs using Axios and React Query, enabling efficient server-state management, caching, background synchronization, optimistic updates, and improved application responsiveness.",
      "Developed dynamic forms using React Hook Form with reusable validation components and schema-driven form architecture.",
      "Implemented secure Role-Based Access Control (RBAC), protected routes, and permission-based UI rendering for Auditors, Managers, Reviewers, Client Representatives, and Administrators.",
      "Optimized application performance using lazy loading, route-based code splitting, memoization, debouncing, virtualization, and efficient rendering strategies.",
      "Contributed to backend API development using Node.js and Express.js for audit workflows, document handling, user management, and activity logging.",
      "Collaborated with development teams and business stakeholders throughout requirement analysis, sprint planning, development, testing, and deployment using Agile methodologies.",
    ],

    techStack: [
      "React.js",
      "TypeScript",
      "Vite",
      "Material UI (MUI)",
      "Tailwind CSS",
      "React Router",
      "React Query (TanStack Query)",
      "React Hook Form",
      "Axios",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Git",
      "GitHub",
      "ESLint",
      "Prettier",
      "CI/CD Pipelines",
    ],

    frontendArchitecture: [
      "Feature-Based Folder Architecture",
      "Component-Driven Development (CDD)",
      "Reusable Component Library",
      "Centralized Design System",
      "Atomic UI Composition",
      "Shared Layout Architecture",
      "Reusable Layout Components",
      "Protected Routes",
      "Role-Based Access Control (RBAC)",
      "Permission-Based UI Rendering",
      "React Query Server-State Management",
      "Centralized Axios API Layer",
      "Reusable Custom Hooks",
      "React Hook Form Architecture",
      "Global State Management",
      "Lazy Loading",
      "Route-Based Code Splitting",
      "Global Error Handling",
      "Loading, Empty & Error States",
      "Reusable Data Table Framework",
      "Toast Notification System",
      "Responsive Mobile-First Design",
    ],

    
    

    

    

    accent: "from-cyan-500 to-blue-600",
  },
];

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}
