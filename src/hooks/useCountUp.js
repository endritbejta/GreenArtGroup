import { useEffect, useState } from "react";

/**
 * Animates a number from 0 to `target` once `start` becomes true.
 * Uses requestAnimationFrame with an ease-out curve.
 */
export function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}
