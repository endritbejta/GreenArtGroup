import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/site";
import { useLanguage } from "../../i18n/LanguageContext";
import { useScrolledPast } from "../../hooks/useScrollPosition";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(10);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40">
      <TopBar />
      <div
        className={cn(
          "bg-white transition-shadow duration-300",
          scrolled ? "shadow-soft" : "border-b border-gray-100"
        )}
      >
        <Container className="flex items-center justify-between py-4">
          <Logo />

          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "relative py-2 text-sm font-semibold transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full after:bg-primary-500 after:transition-all after:duration-300",
                        isActive
                          ? "text-primary-600 after:w-full"
                          : "text-gray-700 after:w-0 hover:text-primary-600 hover:after:w-full"
                      )
                    }
                  >
                    {t(`nav.${link.key}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden sm:flex" />
            <Button to="/contact" icon="arrow-up-right" className="hidden sm:inline-flex">
              {t("common.getInTouch")}
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t("common.openMenu")}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
            >
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
