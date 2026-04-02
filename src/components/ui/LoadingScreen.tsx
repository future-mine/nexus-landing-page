"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="page-x fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-gradient mb-10 tracking-widest"
          >
            NEXUS
          </motion.h2>

          <div className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>

          <p className="mt-4 text-xs text-foreground/40 font-mono tracking-wider">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
