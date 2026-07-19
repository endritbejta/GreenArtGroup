import { useLanguage, useLocalized } from "../../i18n/LanguageContext";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { stats } from "../../data/stats";
import StatCard from "../common/StatCard";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80";
const HERO_IMAGE_SECONDARY =
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80";

export default function Hero() {
  const { t } = useLanguage();
  const localizedStats = useLocalized(stats);

  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Copy panel */}
          <div className="flex animate-fade-up flex-col justify-center rounded-3xl bg-primary-500 p-8 text-white sm:p-12">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-100">
              <span aria-hidden="true" className="h-px w-8 bg-current" />
              {t("hero.eyebrow")}
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-primary-50">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" variant="white" icon="arrow-up-right">
                {t("common.getFreeQuote")}
              </Button>
              <Button to="/services" variant="outline-white" icon="arrow-up-right">
                {t("common.exploreServices")}
              </Button>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative hidden animate-fade-in lg:block">
            <img
              src={HERO_IMAGE}
              alt={t("hero.imageAlt")}
              className="h-full w-full rounded-3xl object-cover"
            />
            <img
              src={HERO_IMAGE_SECONDARY}
              alt={t("hero.imageAltSecondary")}
              loading="lazy"
              className="absolute -bottom-5 -left-5 hidden w-44 rounded-2xl border-4 border-gray-50 object-cover shadow-lift xl:block"
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-6 grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-soft md:grid-cols-4">
          {localizedStats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
