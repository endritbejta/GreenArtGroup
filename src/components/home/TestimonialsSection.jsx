import { useRef } from "react";
import { useLanguage, useLocalized } from "../../i18n/LanguageContext";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import TestimonialCard from "../common/TestimonialCard";
import AnimateIn from "../common/AnimateIn";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const localizedTestimonials = useLocalized(testimonials);
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const step = card ? card.offsetWidth + 24 : 360;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="section">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t("testimonialsSection.eyebrow")}
            title={t("testimonialsSection.title")}
          />
          <AnimateIn delay={150} className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label={t("common.previous")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-primary-500 hover:bg-primary-500 hover:text-white"
            >
              <Icon name="chevron-left" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label={t("common.next")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-primary-500 hover:bg-primary-500 hover:text-white"
            >
              <Icon name="chevron-right" className="h-5 w-5" />
            </button>
          </AnimateIn>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {localizedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[31.5%]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
