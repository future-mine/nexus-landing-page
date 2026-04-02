"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="cta" className="page-x relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10 sm:py-16 md:p-20"
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
            <p className="mx-auto mb-10 max-w-xl text-lg text-foreground/45">
              Join thousands of developers creating the next generation of
              immersive web experiences.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="group relative overflow-hidden rounded-xl bg-primary px-8 py-4 font-medium text-white transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                <span className="relative z-10">
                  Start Building &mdash; It&apos;s Free
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              <button className="glass rounded-xl px-8 py-4 font-medium text-foreground/80 transition-all hover:bg-white/10">
                Talk to Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
