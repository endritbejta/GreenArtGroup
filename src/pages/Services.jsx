import Container from "../components/ui/Container";
import PageHero from "../components/common/PageHero";
import ServiceCard from "../components/common/ServiceCard";
import AnimateIn from "../components/common/AnimateIn";
import CTASection from "../components/common/CTASection";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Green Services"
        subtitle="Every kind of garden work — from a single lawn cut to complete landscape transformations, indoors and out."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
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
        title="Not Sure Which Service You Need?"
        subtitle="Describe your garden and we'll recommend the right service — the site visit and quote are always free."
      />
    </>
  );
}
