import { Link } from "react-router-dom";
import { SITE } from "../../constants/site";
import { cn } from "../../utils/cn";
import Icon from "../ui/Icon";

export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      aria-label={`${SITE.name} — home`}
      className="flex items-center gap-2"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-white">
        <Icon name="leaf" className="h-5 w-5" />
      </span>
      <span
        className={cn(
          "text-xl font-extrabold tracking-tight",
          light ? "text-white" : "text-gray-900"
        )}
      >
        GreenArt<span className="text-primary-500">Group</span>
      </span>
    </Link>
  );
}
