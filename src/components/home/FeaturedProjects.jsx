import { useLanguage, useLocalized } from "../../i18n/LanguageContext";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../common/ProjectCard";
import AnimateIn from "../common/AnimateIn";
import { projects, categoryLabels } from "../../data/projects";

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const localizedProjects = useLocalized(projects);
  const localizedCategoryLabels = useLocalized(categoryLabels);

  return (
    <section className="section bg-gray-50">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t("workSection.eyebrow")}
            title={t("workSection.title")}
            subtitle={t("workSection.subtitle")}
          />
          <AnimateIn delay={150} className="shrink-0">
            <Button to="/projects" icon="arrow-up-right">
              {t("common.viewAllProjects")}
            </Button>
          </AnimateIn>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {localizedProjects.slice(0, 3).map((project, index) => (
            <AnimateIn key={project.id} delay={index * 100} className="h-full">
              <ProjectCard
                project={{
                  ...project,
                  categoryLabel: localizedCategoryLabels[project.category],
                }}
              />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
