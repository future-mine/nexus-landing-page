"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHasMounted } from "@/hooks/useHasMounted";

export function LoadingScreen() {
  const mounted = useHasMounted();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!mounted) return;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 12 + 4;
        if (next >= 100) {
          clearInterval(id);
          setTimeout(() => setVisible(false), 600);
          return 100;
        }
        return next;
      });
    }, 80);
    return () => clearInterval(id);
  }, [mounted]);

  if (!mounted) {
    return (
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        aria-busy="true"
      >
        <h2 className="mb-10 text-3xl font-bold tracking-widest text-gradient">
          NEXUS
        </h2>
        <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            style={{ width: "0%" }}
          />
        </div>
        <p className="mt-4 font-mono text-xs tracking-wider text-foreground/40">
          0%
        </p>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          aria-busy="true"
          initial={{ opacity: 1 }}
        >
          <h2 className="mb-10 text-3xl font-bold tracking-widest text-gradient">
            NEXUS
          </h2>

          <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>

          <p className="mt-4 font-mono text-xs tracking-wider text-foreground/40">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
