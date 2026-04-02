"use client";

import { useEffect } from "react";
import { scrollState } from "@/lib/store";

export function useScrollProgress() {
  useEffect(() => {
    let prev = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollState.progress = max > 0 ? y / max : 0;
      scrollState.velocity = y - prev;
      prev = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
