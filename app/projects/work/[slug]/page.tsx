import { notFound } from "next/navigation";
import WorkProjectDetail from "@/components/projects/WorkProjectDetail";
import { getWorkProject, workProjects } from "@/data/workProjects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return workProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.overview,
  };
}

export default async function WorkProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) notFound();

  return <WorkProjectDetail project={project} />;
}
