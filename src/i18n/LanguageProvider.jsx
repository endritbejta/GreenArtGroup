import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

const STORAGE_KEY = "greenart-lang";

function readStoredLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "sq" ? "sq" : "en";
  } catch {
    return "en";
  }
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage unavailable (private mode) — language still works for the session.
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    /** Looks up a UI string by dotted path, with {var} interpolation. */
    const t = (path, vars) => {
      let node = translations[lang];
      let fallback = translations.en;
      for (const part of path.split(".")) {
        node = node?.[part];
        fallback = fallback?.[part];
      }
      let result = node ?? fallback ?? path;
      if (vars && typeof result === "string") {
        for (const [key, val] of Object.entries(vars)) {
          result = result.replace(`{${key}}`, val);
        }
      }
      return result;
    };

    return { lang, setLang, t };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
