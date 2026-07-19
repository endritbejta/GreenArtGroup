import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS, SITE } from "../../constants/site";
import { useLanguage } from "../../i18n/LanguageContext";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileMenu({ open, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        !open && "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-gray-900/50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-lift transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-5">
          <span className="text-lg font-extrabold text-gray-900">
            GreenArt<span className="text-primary-500">Group</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("common.closeMenu")}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100"
          >
            <Icon name="x" className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-5" aria-label="Mobile">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-700 hover:bg-gray-50"
                    )
                  }
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              </li>
            ))}
          </ul>
          <LanguageSwitcher className="mt-5 w-fit" />
        </nav>

        <div className="space-y-4 border-t border-gray-100 p-5">
          <Button to="/contact" onClick={onClose} icon="arrow-up-right" className="w-full">
            {t("common.getInTouch")}
          </Button>
          <a
            href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700"
          >
            <Icon name="phone" className="h-4 w-4 text-primary-500" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
