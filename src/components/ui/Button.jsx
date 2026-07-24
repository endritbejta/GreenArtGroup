import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import Icon from "./Icon";

const VARIANTS = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-sm hover:shadow-lift",
  secondary: "bg-primary-900 text-white hover:bg-primary-800",
  outline:
    "border-2 border-primary-500 text-primary-700 hover:bg-primary-50 bg-transparent",
  white: "bg-white text-primary-900 hover:bg-primary-50 shadow-sm",
  "outline-white":
    "border-2 border-white text-white hover:bg-white hover:text-primary-900 bg-transparent",
  ghost: "text-primary-700 hover:bg-primary-50",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Polymorphic button: renders a router Link when `to` is set,
 * an anchor when `href` is set, otherwise a native button.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  ...props
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  const content = (
    <>
      {children}
      {icon && (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
