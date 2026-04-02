"use client";

import { useSyncExternalStore } from "react";

/**
 * SSR-safe: server + first hydrated frame use `false` so markup matches.
 * After hydration, subscribes to matchMedia (no useEffect timing skew).
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
