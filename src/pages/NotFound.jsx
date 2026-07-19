import { useLanguage } from "../i18n/LanguageContext";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <Container className="flex flex-col items-center py-16 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-primary-600">
          <Icon name="leaf" className="h-10 w-10" />
        </span>
        <p className="mt-8 text-7xl font-extrabold text-primary-500 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          {t("notFound.title")}
        </h1>
        <p className="mt-3 max-w-md text-gray-600">{t("notFound.text")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/" icon="arrow-up-right">
            {t("notFound.home")}
          </Button>
          <Button to="/services" variant="outline" icon="arrow-up-right">
            {t("notFound.browse")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
