import { LANGUAGES, useLanguage } from "../../i18n/LanguageContext";
import { cn } from "../../utils/cn";

export default function LanguageSwitcher({ className }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        "flex items-center rounded-full bg-gray-100 p-1",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map((language) => (
        <button
          key={language.code}
          type="button"
          onClick={() => setLang(language.code)}
          aria-pressed={lang === language.code}
          aria-label={language.name}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-bold transition-colors",
            lang === language.code
              ? "bg-primary-500 text-white shadow-sm"
              : "text-gray-500 hover:text-primary-700"
          )}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
