import { SITE } from "../../constants/site";
import Container from "../ui/Container";
import Icon from "../ui/Icon";

export default function TopBar() {
  return (
    <div className="hidden border-b border-gray-100 bg-white lg:block">
      <Container className="flex items-center justify-between py-2.5 text-xs text-gray-600">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Icon name="map-pin" className="h-3.5 w-3.5 text-primary-500" />
            {SITE.address}
          </span>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-primary-600"
          >
            <Icon name="mail" className="h-3.5 w-3.5 text-primary-500" />
            {SITE.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-2">
            {SITE.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-primary-500 hover:text-white"
                >
                  <Icon name={social.icon} className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-1.5 border-l border-gray-200 pl-4 font-semibold text-gray-900 transition-colors hover:text-primary-600"
          >
            <Icon name="phone" className="h-3.5 w-3.5 text-primary-500" />
            {SITE.phone}
          </a>
        </div>
      </Container>
    </div>
  );
}
