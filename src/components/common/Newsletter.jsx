import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import Icon from "../ui/Icon";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <div>
      <h3 className="text-sm font-bold text-white">
        {t("newsletter.title")}
      </h3>
      <p className="mt-3 text-sm text-primary-100/80">{t("newsletter.text")}</p>
      <form onSubmit={handleSubmit} className="mt-4" noValidate>
        <div className="flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 focus-within:ring-primary-400">
          <label htmlFor="newsletter-email" className="sr-only">
            {t("form.email")}
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setStatus("idle");
            }}
            placeholder={t("newsletter.placeholder")}
            className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-primary-100/50 focus:outline-none"
          />
          <button
            type="submit"
            aria-label={t("newsletter.subscribe")}
            className="flex items-center bg-primary-500 px-4 text-white transition-colors hover:bg-primary-600"
          >
            <Icon name="send" className="h-4 w-4" />
          </button>
        </div>
        {status === "error" && (
          <p className="mt-2 text-xs text-red-300" role="alert">
            {t("newsletter.error")}
          </p>
        )}
        {status === "success" && (
          <p className="mt-2 text-xs text-primary-300" role="status">
            {t("newsletter.success")}
          </p>
        )}
      </form>
    </div>
  );
}
