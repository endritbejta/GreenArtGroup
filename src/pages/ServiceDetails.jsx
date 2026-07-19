import { useParams, Navigate } from "react-router-dom";
import { useLanguage, useLocalized } from "../i18n/LanguageContext";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import PageHero from "../components/common/PageHero";
import AnimateIn from "../components/common/AnimateIn";
import ImageGrid from "../components/common/ImageGrid";
import ServiceCard from "../components/common/ServiceCard";
import CTASection from "../components/common/CTASection";
import { services, getServiceBySlug } from "../data/services";

export default function ServiceDetails() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const service = useLocalized(getServiceBySlug(slug) ?? null);
  const localizedServices = useLocalized(services);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const related = localizedServices
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.services"), to: "/services" },
          { label: service.title },
        ]}
      />

      {/* Overview */}
      <section className="section">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <AnimateIn>
            <img
              src={service.image}
              alt={service.title}
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </AnimateIn>
          <div>
            <SectionHeading
              eyebrow={t("serviceDetails.overviewEyebrow")}
              title={t("serviceDetails.overviewTitle", { title: service.title })}
              subtitle={service.description}
            />
            <AnimateIn delay={150}>
              <Button to="/contact" icon="arrow-up-right" className="mt-8">
                {t("serviceDetails.request")}
              </Button>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="section bg-gray-50">
        <Container>
          <SectionHeading
            eyebrow={t("serviceDetails.benefitsEyebrow")}
            title={t("serviceDetails.benefitsTitle")}
            align="center"
          />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <AnimateIn key={benefit} delay={index * 75}>
                <li className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-gray-800">{benefit}</span>
                </li>
              </AnimateIn>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gallery */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow={t("serviceDetails.galleryEyebrow")}
            title={t("serviceDetails.galleryTitle")}
            align="center"
          />
          <div className="mt-12">
            <ImageGrid images={service.gallery} altPrefix={service.title} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-50">
        <Container className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow={t("serviceDetails.faqEyebrow")}
              title={t("serviceDetails.faqTitle")}
              subtitle={t("serviceDetails.faqSubtitle")}
            />
          </div>
          <AnimateIn delay={150} className="lg:col-span-3">
            <Accordion items={service.faq} />
          </AnimateIn>
        </Container>
      </section>

      {/* Related services */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow={t("serviceDetails.relatedEyebrow")}
            title={t("serviceDetails.relatedTitle")}
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <AnimateIn key={item.id} delay={index * 100} className="h-full">
                <ServiceCard service={item} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={t("serviceDetails.ctaTitle", { title: service.title })}
        subtitle={t("serviceDetails.ctaSubtitle")}
      />
    </>
  );
}
