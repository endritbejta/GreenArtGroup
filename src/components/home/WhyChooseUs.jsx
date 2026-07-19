import { useLanguage, useLocalized } from "../../i18n/LanguageContext";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../common/FeatureCard";
import AnimateIn from "../common/AnimateIn";
import { whyChooseUs } from "../../data/company";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const features = useLocalized(whyChooseUs);

  return (
    <section className="section bg-gray-50">
      <Container>
        <SectionHeading
          eyebrow={t("why.eyebrow")}
          title={t("why.title")}
          subtitle={t("why.subtitle")}
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimateIn key={feature.id} delay={index * 100} className="h-full">
              <FeatureCard {...feature} />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
