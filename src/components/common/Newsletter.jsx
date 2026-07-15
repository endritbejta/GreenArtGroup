import { useState } from "react";
import Icon from "../ui/Icon";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
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
      <h3 className="text-sm font-bold uppercase tracking-wide text-white">
        Newsletter
      </h3>
      <p className="mt-3 text-sm text-primary-100/80">
        Seasonal tips and offers — one email a month, no spam.
      </p>
      <form onSubmit={handleSubmit} className="mt-4" noValidate>
        <div className="flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 focus-within:ring-primary-400">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setStatus("idle");
            }}
            placeholder="Your email"
            className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-primary-100/50 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Subscribe to newsletter"
            className="flex items-center bg-primary-500 px-4 text-white transition-colors hover:bg-primary-600"
          >
            <Icon name="send" className="h-4 w-4" />
          </button>
        </div>
        {status === "error" && (
          <p className="mt-2 text-xs text-red-300" role="alert">
            Please enter a valid email address.
          </p>
        )}
        {status === "success" && (
          <p className="mt-2 text-xs text-primary-300" role="status">
            Thanks for subscribing — see you in your inbox!
          </p>
        )}
      </form>
    </div>
  );
}
