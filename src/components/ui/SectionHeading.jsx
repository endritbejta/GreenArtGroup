import { cn } from "../../utils/cn";
import AnimateIn from "../common/AnimateIn";

/**
 * Standard section header: dash-wrapped eyebrow, title, optional subtitle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}) {
  const centered = align === "center";

  return (
    <AnimateIn
      className={cn("max-w-2xl", centered && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]",
            centered && "justify-center",
            light ? "text-primary-200" : "text-primary-600"
          )}
        >
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          {eyebrow}
          <span aria-hidden="true" className="h-px w-8 bg-current" />
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base leading-relaxed", light ? "text-primary-100" : "text-gray-600")}>
          {subtitle}
        </p>
      )}
    </AnimateIn>
  );
}
