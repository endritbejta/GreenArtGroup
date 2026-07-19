import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import Icon from "../ui/Icon";

/** Expects an already-localized service object. */
export default function ServiceCard({ service }) {
  const { t } = useLanguage();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary-600 backdrop-blur-sm">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {service.shortDescription}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-800"
          aria-label={t("common.learnMoreAbout", { title: service.title })}
        >
          {t("common.learnMore")}
          <Icon
            name="arrow-up-right"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
