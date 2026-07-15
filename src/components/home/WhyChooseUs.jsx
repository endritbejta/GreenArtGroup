import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../common/FeatureCard";
import AnimateIn from "../common/AnimateIn";
import { whyChooseUs } from "../../data/company";

export default function WhyChooseUs() {
  return (
    <section className="section bg-gray-50">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Greener Partner You Can Rely On"
          subtitle="We combine horticultural expertise with honest service — that's why thousands of clients trust us with their gardens year after year."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((feature, index) => (
            <AnimateIn key={feature.id} delay={index * 100} className="h-full">
              <FeatureCard {...feature} />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
