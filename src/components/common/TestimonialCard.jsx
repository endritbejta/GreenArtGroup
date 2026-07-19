import { useLanguage } from "../../i18n/LanguageContext";
import Icon from "../ui/Icon";

function Stars({ rating }) {
  const { t } = useLanguage();

  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={t("common.rated", { rating })}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

/** Expects an already-localized testimonial object. */
export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft">
      <Stars rating={testimonial.rating} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt=""
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
