import { useMemo, useState } from "react";
import { useLanguage, useLocalized } from "../i18n/LanguageContext";
import Container from "../components/ui/Container";
import PageHero from "../components/common/PageHero";
import ProjectCard from "../components/common/ProjectCard";
import AnimateIn from "../components/common/AnimateIn";
import CTASection from "../components/common/CTASection";
import {
  projects,
  categoryLabels,
  projectCategoryKeys,
} from "../data/projects";
import { cn } from "../utils/cn";

const ALL = "all";

export default function Projects() {
  const { t } = useLanguage();
  const localizedProjects = useLocalized(projects);
  const localizedCategoryLabels = useLocalized(categoryLabels);
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filters = [
    { key: ALL, label: t("projectsPage.all") },
    ...projectCategoryKeys.map((key) => ({
      key,
      label: localizedCategoryLabels[key],
    })),
  ];

  const visibleProjects = useMemo(
    () =>
      activeCategory === ALL
        ? localizedProjects
        : localizedProjects.filter(
            (project) => project.category === activeCategory
          ),
    [activeCategory, localizedProjects]
  );

  return (
    <>
      <PageHero
        title={t("projectsPage.heroTitle")}
        subtitle={t("projectsPage.heroSubtitle")}
        breadcrumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.projects") },
        ]}
      />

      <section className="section">
        <Container>
          {/* Category filter */}
          <div
            className="flex flex-wrap justify-center gap-3"
            role="group"
            aria-label={t("projectsPage.filterLabel")}
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveCategory(filter.key)}
                aria-pressed={activeCategory === filter.key}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                  activeCategory === filter.key
                    ? "bg-primary-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-800"
                )}
              >
                {filter.label}
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
                <ProjectCard
                  project={{
                    ...project,
                    categoryLabel: localizedCategoryLabels[project.category],
                  }}
                />
              </AnimateIn>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <p className="mt-12 text-center text-gray-500">
              {t("projectsPage.empty")}
            </p>
          )}
        </Container>
      </section>

      <CTASection
        title={t("projectsPage.ctaTitle")}
        subtitle={t("projectsPage.ctaSubtitle")}
      />
    </>
  );
}
