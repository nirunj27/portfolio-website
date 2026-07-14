import { notFound } from "next/navigation";
import PersonalProjectDetail from "@/components/projects/PersonalProjectDetail";
import { getPersonalProject, personalProjects } from "@/data/personalProjects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return personalProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getPersonalProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Personal Project`,
    description: project.description,
  };
}

export default async function PersonalProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getPersonalProject(slug);
  if (!project) notFound();

  return <PersonalProjectDetail project={project} />;
}
