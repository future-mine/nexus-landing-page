"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useMousePosition } from "@/hooks/useMousePosition";

const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-transparent" aria-hidden />
  ),
});

export function Hero() {
  useScrollProgress();
  useMousePosition();

  return (
    <section className="hero-grid relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-20 sm:px-8 lg:px-12">
      {/* 3D canvas — full bleed; keep center clear so the planet reads as a solid shape */}
      <div className="absolute inset-0 z-0 min-h-full w-full">
        <Scene />
      </div>

      {/* Vignette only at top/bottom — no full-screen wash over the 3D center */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-background sm:h-36"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-background sm:h-48"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          className="mb-6 font-mono text-sm uppercase tracking-widest text-accent md:text-base"
        >
          The Future of 3D on the Web
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Build{" "}
          <span className="text-gradient">Immersive</span>
          <br />
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/50 md:text-xl"
        >
          Create stunning 3D web experiences with real-time rendering,
          interactive animations, and next-generation visual quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-8 py-4 text-base font-medium text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          >
            <span className="relative z-10">Get Started Free</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#features"
            className="glass inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-medium text-foreground/80 transition-all hover:bg-white/10"
          >
            View Documentation
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-foreground/20">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
