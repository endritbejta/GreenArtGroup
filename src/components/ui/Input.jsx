import { cn } from "../../utils/cn";

export default function Input({ label, id, error, className, ...props }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-colors",
          error
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 focus:border-primary-500"
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
