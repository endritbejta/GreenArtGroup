import { useInView } from "../../hooks/useInView";
import { cn } from "../../utils/cn";

/**
 * Fades and slides children up once they scroll into view.
 * `delay` (ms) staggers items inside grids.
 */
export default function AnimateIn({ delay = 0, className, children }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
