import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../common/ServiceCard";
import AnimateIn from "../common/AnimateIn";
import { getFeaturedServices } from "../../data/services";

export default function FeaturedServices() {
  const featured = getFeaturedServices();

  return (
    <section className="section">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title="Green Services Helping Your Garden Thrive"
            subtitle="From a single lawn cut to a complete landscape transformation — explore what our team can do for your space."
          />
          <AnimateIn delay={150} className="shrink-0">
            <Button to="/services" icon="arrow-up-right">
              View All Services
            </Button>
          </AnimateIn>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, index) => (
            <AnimateIn key={service.id} delay={index * 100} className="h-full">
              <ServiceCard service={service} />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
