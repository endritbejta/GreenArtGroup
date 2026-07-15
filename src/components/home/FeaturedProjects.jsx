import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../common/ProjectCard";
import AnimateIn from "../common/AnimateIn";
import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="section bg-gray-50">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our Work"
            title="See Our Passion In Action"
            subtitle="A few recent transformations — from family gardens to commercial campuses."
          />
          <AnimateIn delay={150} className="shrink-0">
            <Button to="/projects" icon="arrow-up-right">
              View All Projects
            </Button>
          </AnimateIn>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <AnimateIn key={project.id} delay={index * 100} className="h-full">
              <ProjectCard project={project} />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
