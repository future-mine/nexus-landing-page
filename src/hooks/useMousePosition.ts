"use client";

import { useEffect } from "react";
import { mouseState } from "@/lib/store";

export function useMousePosition() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseState.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseState.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      mouseState.x = (t.clientX / window.innerWidth) * 2 - 1;
      mouseState.y = -(t.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);
}
