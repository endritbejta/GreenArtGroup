/** Wraps a translatable value: L("English", "Shqip") -> { en, sq }. */
export const L = (en, sq) => ({ en, sq });

/**
 * Recursively resolves L() pairs inside any data structure to the
 * given language, leaving every other value untouched.
 */
export function localize(value, lang) {
  if (Array.isArray(value)) {
    return value.map((item) => localize(item, lang));
  }
  if (value && typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 2 && "en" in value && "sq" in value) {
      return value[lang] ?? value.en;
    }
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, lang)])
    );
  }
  return value;
}
