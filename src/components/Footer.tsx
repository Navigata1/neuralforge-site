'use client';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#pszn' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Enterprise', href: '#enterprise' },
    { label: 'API Docs', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  Ecosystem: [
    { label: 'NeuralForge.fm', href: '#' },
    { label: 'RLAForge.app', href: '#' },
    { label: 'PSZN.dev', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-forge-border/30 bg-forge-black/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-forge-cyan/90 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Neural<span className="text-forge-cyan">Forge</span>
              </span>
            </div>
            <p className="text-sm text-forge-muted leading-relaxed mb-6">
              The trust layer for AI agents. Pure Signal, Zero Noise.
            </p>
            <div className="flex gap-4">
              {/* Social icons */}
              {['X', 'GH', 'DC'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-forge-card/40 border border-forge-border/30 flex items-center justify-center text-xs text-forge-muted hover:text-forge-cyan hover:border-forge-cyan/30 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-forge-muted hover:text-forge-cyan transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-forge-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-forge-muted/50">
            © {new Date().getFullYear()} Island Development Crew LLC. All rights reserved.
          </p>
          <p className="text-xs text-forge-muted/30">
            Built with conviction. Verified with consensus.
          </p>
        </div>
      </div>
    </footer>
  );
}
