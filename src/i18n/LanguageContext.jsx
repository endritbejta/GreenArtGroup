import { createContext, useContext, useMemo } from "react";
import { localize } from "../utils/localize";

export const LanguageContext = createContext(null);

export const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "sq", label: "SQ", name: "Shqip" },
];

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

/** Resolves L() pairs in a data structure to the active language. */
export function useLocalized(data) {
  const { lang } = useLanguage();
  return useMemo(() => localize(data, lang), [data, lang]);
}
