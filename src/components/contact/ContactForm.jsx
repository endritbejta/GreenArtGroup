import { useState } from "react";
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

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please tell us a little more (at least 10 characters).";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
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
        <h3 className="mt-4 text-xl font-bold text-gray-900">Message Sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-gray-600">
          Thanks for reaching out — one of our team will get back to you within
          one business day.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">
          Send Another Message
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
          label="Full Name *"
          placeholder="Jane Doe"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address *"
          placeholder="jane@example.com"
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
          label="Phone (optional)"
          placeholder="+1 (555) 000-0000"
          value={values.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-sm font-medium text-gray-900"
          >
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-colors focus:border-primary-500"
          >
            <option value="">Select a service…</option>
            {services.map((service) => (
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
        label="Your Message *"
        placeholder="Tell us about your space and what you'd like to achieve…"
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />
      <Button type="submit" icon="arrow-up-right" size="lg">
        Send Message
      </Button>
    </form>
  );
}
