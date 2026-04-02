"use client";

import { useEffect, useState } from "react";

/** True only after the first client commit — use to avoid SSR/client HTML drift. */
export function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
