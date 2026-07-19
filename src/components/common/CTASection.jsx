import { useLanguage } from "../../i18n/LanguageContext";
import Container from "../ui/Container";
import Button from "../ui/Button";
import AnimateIn from "./AnimateIn";

export default function CTASection({ title, subtitle }) {
  const { t } = useLanguage();

  return (
    <section className="section pt-0">
      <Container>
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl bg-primary-900 px-6 py-14 text-center sm:px-12 md:py-20">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-500/20"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-primary-500/10"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                {title ?? t("cta.title")}
              </h2>
              <p className="mt-4 text-primary-100">
                {subtitle ?? t("cta.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button to="/contact" variant="primary" icon="arrow-up-right">
                  {t("common.getFreeQuote")}
                </Button>
                <Button to="/services" variant="outline-white" icon="arrow-up-right">
                  {t("common.exploreServices")}
                </Button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
