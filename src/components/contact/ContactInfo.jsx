import { SITE } from "../../constants/site";
import { useLanguage, useLocalized } from "../../i18n/LanguageContext";
import Icon from "../ui/Icon";

export default function ContactInfo() {
  const { t } = useLanguage();
  const hours = useLocalized(SITE.hours);

  const items = [
    { icon: "map-pin", title: t("contactPage.visit"), lines: [SITE.address] },
    {
      icon: "phone",
      title: t("contactPage.call"),
      lines: [SITE.phone],
      href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      icon: "mail",
      title: t("contactPage.email"),
      lines: [SITE.email],
      href: `mailto:${SITE.email}`,
    },
  ];

  return (
    <div className="space-y-6">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
              {item.lines.map((line) =>
                item.href ? (
                  <a
                    key={line}
                    href={item.href}
                    className="mt-0.5 block text-sm text-gray-600 transition-colors hover:text-primary-600"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={line} className="mt-0.5 text-sm text-gray-600">
                    {line}
                  </p>
                )
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl bg-white p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900">
          <Icon name="clock" className="h-4 w-4 text-primary-600" />
          {t("contactPage.hoursTitle")}
        </h3>
        <dl className="mt-3 space-y-2">
          {hours.map((entry) => (
            <div key={entry.days} className="flex justify-between text-sm">
              <dt className="text-gray-600">{entry.days}</dt>
              <dd className="font-medium text-gray-900">{entry.time}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-soft">
        <h3 className="text-sm font-bold text-gray-900">
          {t("contactPage.follow")}
        </h3>
        <ul className="mt-3 flex gap-2">
          {SITE.socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-primary-500 hover:text-white"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
