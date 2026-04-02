"use client";

import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    title: "Real-Time Rendering",
    description:
      "Harness the power of WebGL 2.0 for stunning real-time 3D graphics directly in your browser, with physically-based materials and dynamic lighting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Interactive Animations",
    description:
      "Create fluid, physics-based animations that respond to user input with zero perceived latency and buttery-smooth 60 FPS performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
  {
    title: "Cross-Platform",
    description:
      "Deploy once and run everywhere. Mobile, desktop, VR headsets — all from a single codebase with adaptive quality scaling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 px-6 py-32 sm:px-8 sm:py-40 lg:px-12">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Why Choose <span className="text-gradient">Nexus</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/45 sm:text-lg">
            Everything you need to build world-class 3D web experiences,
            from prototype to production.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.15}>
              <div className="glass h-full rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {f.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{f.title}</h3>
                <p className="leading-relaxed text-foreground/45">
                  {f.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
