import { Link } from "react-router-dom";
import { NAV_LINKS, SITE } from "../../constants/site";
import { services } from "../../data/services";
import { useLanguage, useLocalized } from "../../i18n/LanguageContext";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Logo from "./Logo";
import Newsletter from "../common/Newsletter";

export default function Footer() {
  const { t } = useLanguage();
  const localizedServices = useLocalized(services);

  return (
    <footer className="bg-primary-900 text-primary-100/80">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">{t("footer.tagline")}</p>
          <ul className="mt-5 flex gap-2">
            {SITE.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-500"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-bold text-white">
            {t("footer.quickLinks")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-white">
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t("footer.services")}>
          <h3 className="text-sm font-bold text-white">
            {t("footer.services")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {localizedServices.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-bold text-white">
              {t("footer.contact")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                {SITE.address}
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-primary-400" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-primary-400" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
          <Newsletter />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {t("footer.rights")}
          </p>
          <p>{t("footer.since")}</p>
        </Container>
      </div>
    </footer>
  );
}
