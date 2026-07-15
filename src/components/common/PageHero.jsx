import Container from "../ui/Container";
import Breadcrumb from "./Breadcrumb";

/** Shared header band for inner pages. */
export default function PageHero({ title, subtitle, breadcrumbs }) {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-16 md:py-20">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary-500/20"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-primary-500/10"
      />
      <Container className="relative">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-100">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
