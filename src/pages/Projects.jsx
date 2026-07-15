import { useMemo, useState } from "react";
import Container from "../components/ui/Container";
import PageHero from "../components/common/PageHero";
import ProjectCard from "../components/common/ProjectCard";
import AnimateIn from "../components/common/AnimateIn";
import CTASection from "../components/common/CTASection";
import { projects, projectCategories } from "../data/projects";
import { cn } from "../utils/cn";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <PageHero
        title="Our Passion In Action"
        subtitle="A portfolio of gardens, landscapes and green interiors we're proud to have grown."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="section">
        <Container>
          {/* Category filter */}
          <div
            className="flex flex-wrap justify-center gap-3"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                  activeCategory === category
                    ? "bg-primary-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-800"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <AnimateIn
                key={`${activeCategory}-${project.id}`}
                delay={(index % 3) * 100}
                className="h-full"
              >
                <ProjectCard project={project} />
              </AnimateIn>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <p className="mt-12 text-center text-gray-500">
              No projects in this category yet — check back soon.
            </p>
          )}
        </Container>
      </section>

      <CTASection
        title="Want A Garden Like These?"
        subtitle="Every project here started with a free site visit. Yours can too."
      />
    </>
  );
}
