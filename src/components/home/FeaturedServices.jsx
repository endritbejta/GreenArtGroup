import { useLanguage, useLocalized } from "../../i18n/LanguageContext";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import AnimateIn from "../common/AnimateIn";
import { getFeaturedServices } from "../../data/services";

const featured = getFeaturedServices();

export default function FeaturedServices() {
  const { t } = useLanguage();
  const localizedFeatured = useLocalized(featured);

  return (
    <section className="section">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t("servicesSection.eyebrow")}
            title={t("servicesSection.title")}
            subtitle={t("servicesSection.subtitle")}
          />
          <AnimateIn delay={150} className="shrink-0">
            <Button to="/services" icon="arrow-up-right">
              {t("common.viewAllServices")}
            </Button>
          </AnimateIn>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {localizedFeatured.map((service, index) => (
            <AnimateIn key={service.id} delay={index * 100} className="h-full">
              <ServiceCard service={service} />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
