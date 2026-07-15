import { useState } from "react";
import { cn } from "../../utils/cn";
import Icon from "./Icon";

/**
 * Accessible single-open accordion.
 * `items` is an array of { question, answer }.
 */
export default function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors",
              isOpen ? "border-primary-200 bg-primary-50/50" : "border-gray-200 bg-white"
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-gray-900 sm:text-base">
                {item.question}
              </span>
              <Icon
                name="chevron-down"
                className={cn(
                  "h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
