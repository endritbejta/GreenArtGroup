import { useLanguage, useLocalized } from "../../i18n/LanguageContext";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import AnimateIn from "../common/AnimateIn";
import { companyStory } from "../../data/company";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80";

export default function AboutSection() {
  const { t } = useLanguage();
  const story = useLocalized(companyStory);
  const highlights = t("homeAbout.highlights");

  return (
    <section className="section">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <AnimateIn>
          <div className="relative">
            <img
              src={ABOUT_IMAGE}
              alt={t("homeAbout.imageAlt")}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary-500 px-6 py-4 text-white shadow-lift sm:-right-6">
              <p className="text-3xl font-extrabold">18+</p>
              <p className="text-xs font-medium text-primary-100">
                {t("homeAbout.yearsBadge")}
              </p>
            </div>
          </div>
        </AnimateIn>

        <div>
          <SectionHeading
            eyebrow={t("homeAbout.eyebrow")}
            title={t("homeAbout.title")}
            subtitle={story}
          />
          <AnimateIn delay={150}>
            <ul className="mt-6 space-y-3">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <Button to="/about" icon="arrow-up-right" className="mt-8">
              {t("common.learnMore")}
            </Button>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
