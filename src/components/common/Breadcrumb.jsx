import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

/** `items` is an array of { label, to? } — the last item is the current page. */
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <Icon name="chevron-right" className="h-3.5 w-3.5 text-primary-200" />
              )}
              {isLast || !item.to ? (
                <span aria-current="page" className="font-medium text-white">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="text-primary-200 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
