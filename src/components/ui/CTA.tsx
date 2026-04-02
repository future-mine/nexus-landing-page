"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="cta"
      className="scroll-mt-20 px-6 py-32 sm:px-8 sm:py-40 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-12 sm:py-20 md:px-16 md:py-24"
      >
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/15 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/15 blur-[80px]" />

        <div className="relative z-10">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Ready to Build the{" "}
            <span className="text-gradient">Future</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-foreground/45 sm:text-lg">
            Join thousands of developers creating the next generation of
            immersive web experiences.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-8 py-4 text-base font-medium text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
            >
              <span className="relative z-10">
                Start Building &mdash; It&apos;s Free
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <button
              type="button"
              className="glass inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-medium text-foreground/80 transition-all hover:bg-white/10"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
