import { Stack } from "@phosphor-icons/react/dist/ssr";

const footerLinks = {
  Product: [
    { label: "Features", href: "#pszn" },
    { label: "Pricing", href: "#pricing" },
    { label: "Enterprise", href: "#enterprise" },
    { label: "API Docs", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Ecosystem: [
    { label: "NeuralForge.fm", href: "#" },
    { label: "RLAForge.app", href: "#" },
    { label: "PSZN.dev", href: "#" },
    { label: "Status", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/40">
      <div className="section-shell py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/80">
                <Stack size={18} weight="duotone" className="text-[var(--color-accent)]" />
              </span>
              <span className="text-base font-semibold tracking-tight text-slate-950">
                NeuralForge<span className="text-[var(--color-accent)]">.fm</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              The trust layer for AI agents. Pure Signal, Zero Noise.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-900 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-[var(--color-accent)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Island Development Crew LLC. All rights reserved.
          </p>
          <p className="text-xs text-slate-300">
            Built with conviction. Verified with consensus.
          </p>
        </div>
      </div>
    </footer>
  );
}
