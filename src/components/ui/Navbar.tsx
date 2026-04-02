"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      className={`page-x fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass header-y" : "header-y-relaxed"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href="#" className="text-xl font-bold text-gradient">
          NEXUS
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition-all hover:bg-primary-light hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            Get Started
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
