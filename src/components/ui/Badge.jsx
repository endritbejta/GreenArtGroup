import { cn } from "../../utils/cn";

const VARIANTS = {
  primary: "bg-primary-100 text-primary-800",
  solid: "bg-primary-500 text-white",
  white: "bg-white/90 text-primary-900 backdrop-blur-sm",
};

export default function Badge({ variant = "primary", className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        VARIANTS[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
