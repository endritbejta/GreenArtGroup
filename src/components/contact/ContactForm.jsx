import { useState } from "react";
import { useLanguage, useLocalized } from "../../i18n/LanguageContext";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { services } from "../../data/services";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const { t } = useLanguage();
  const localizedServices = useLocalized(services);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = t("form.errorName");
    if (!values.email.trim()) {
      nextErrors.email = t("form.errorEmail");
    } else if (!EMAIL_PATTERN.test(values.email)) {
      nextErrors.email = t("form.errorEmailInvalid");
    }
    if (values.message.trim().length < 10) {
      nextErrors.message = t("form.errorMessage");
    }
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    // No backend yet — surface success and reset.
    setSubmitted(true);
    setValues(INITIAL_VALUES);
  };

  if (submitted) {
    return (
      <div
        className="flex h-full flex-col items-center justify-center rounded-3xl bg-primary-50 p-10 text-center"
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-2xl text-white">
          ✓
        </span>
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          {t("form.successTitle")}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-gray-600">
          {t("form.successText")}
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">
          {t("form.sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="name"
          name="name"
          label={t("form.name")}
          placeholder={t("form.namePlaceholder")}
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />
        <Input
          id="email"
          name="email"
          type="email"
          label={t("form.email")}
          placeholder={t("form.emailPlaceholder")}
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="phone"
          name="phone"
          type="tel"
          label={t("form.phone")}
          placeholder={t("form.phonePlaceholder")}
          value={values.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-sm font-medium text-gray-900"
          >
            {t("form.service")}
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-primary-500"
          >
            <option value="">{t("form.servicePlaceholder")}</option>
            {localizedServices.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Textarea
        id="message"
        name="message"
        label={t("form.message")}
        placeholder={t("form.messagePlaceholder")}
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />
      <Button type="submit" icon="arrow-up-right" size="lg">
        {t("form.submit")}
      </Button>
    </form>
  );
}
