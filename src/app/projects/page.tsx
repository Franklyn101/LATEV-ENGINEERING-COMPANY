import ProjectPageContainer from '@/components/containers/ProjectPageContainer'
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Explore the portfolio of Latev Engineering Services Ltd, showcasing our engineering, oilfield, and construction projects across Nigeria. Discover our expertise in coiled tubing solutions, well interventions, and industrial engineering projects.",
  keywords: [
    "Latev Engineering projects",
    "engineering project portfolio",
    "oilfield project solutions",
    "coiled tubing projects",
    "construction project showcase",
    "industrial engineering Nigeria",
    "well intervention projects",
    "engineering service portfolio",
    "project consultations",
    "Latev Engineering services"
  ],
  url: "https://latev-engineering.com/projects",
  image: "/images/projects-og.png",
});

export default function ProjectsPage() {
  return <ProjectPageContainer />;
}
