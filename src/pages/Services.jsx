import { useLanguage, useLocalized } from "../i18n/LanguageContext";
import Container from "../components/ui/Container";
import PageHero from "../components/common/PageHero";
import ServiceCard from "../components/common/ServiceCard";
import AnimateIn from "../components/common/AnimateIn";
import CTASection from "../components/common/CTASection";
import { services } from "../data/services";

export default function Services() {
  const { t } = useLanguage();
  const localizedServices = useLocalized(services);

  return (
    <>
      <PageHero
        title={t("servicesPage.heroTitle")}
        subtitle={t("servicesPage.heroSubtitle")}
        breadcrumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.services") },
        ]}
      />

      <section className="section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localizedServices.map((service, index) => (
              <AnimateIn
                key={service.id}
                delay={(index % 3) * 100}
                className="h-full"
              >
                <ServiceCard service={service} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={t("servicesPage.ctaTitle")}
        subtitle={t("servicesPage.ctaSubtitle")}
      />
    </>
  );
}
