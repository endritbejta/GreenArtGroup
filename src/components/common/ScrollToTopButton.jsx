import { useScrolledPast } from "../../hooks/useScrollPosition";
import { cn } from "../../utils/cn";
import Icon from "../ui/Icon";

export default function ScrollToTopButton() {
  const visible = useScrolledPast(400);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-white shadow-lift transition-all duration-300 hover:bg-primary-600",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <Icon name="arrow-up" className="h-5 w-5" />
    </button>
  );
}
