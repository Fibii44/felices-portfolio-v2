import ProjectDetailsPage from '../../../pages/ProjectDetailsPage';
import { projects } from '../../../lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage() {
  return <ProjectDetailsPage />;
}
