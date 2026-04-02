const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="page-x border-t border-white/5 py-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <span className="text-lg font-bold text-gradient">NEXUS</span>

        <nav className="flex gap-8">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-foreground/40 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-foreground/25">
          &copy; {new Date().getFullYear()} Nexus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
