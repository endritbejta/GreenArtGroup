import { useCountUp } from "../../hooks/useCountUp";
import { useInView } from "../../hooks/useInView";

/** Formats 4500 -> "4.5K", 1000 -> "1K", 18 -> "18". */
function formatStat(value) {
  if (value >= 1000) {
    const thousands = value / 1000;
    return Number.isInteger(thousands) ? `${thousands}K` : `${thousands.toFixed(1)}K`;
  }
  return String(value);
}

export default function StatCard({ value, suffix, label }) {
  const { ref, inView } = useInView(0.4);
  const current = useCountUp(value, inView);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {formatStat(current)}
        <span className="text-primary-500">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  );
}
