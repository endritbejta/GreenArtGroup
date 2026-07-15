import { cn } from "../../utils/cn";

export default function Spinner({ className }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary-200 border-t-primary-500",
        className
      )}
    />
  );
}
