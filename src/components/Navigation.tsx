"use client";

import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MagneticLink } from "@/components/MagneticButton";
import SiteLogo from "@/components/SiteLogo";

const navLinks = [
  { href: "#problem", label: "Risk" },
  { href: "#how-it-works", label: "Flow" },
  { href: "#pszn", label: "Engine" },
  { href: "#pricing", label: "Pricing" },
  { href: "#enterprise", label: "Enterprise" },
  { href: "#ecosystem", label: "Stack" },
];

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={spring}
        className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6"
      >
        <div
          className={`section-shell glass-panel flex items-center justify-between rounded-[1.75rem] px-4 py-3 md:px-6 ${
            scrolled ? "border-slate-200/70 bg-white/80" : "border-white/10 bg-white/60"
          }`}
        >
          <a href="#" className="shrink-0">
            <SiteLogo />
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <MagneticLink
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-slate-600 transition-colors hover:text-slate-950"
              >
                {link.label}
              </MagneticLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <MagneticLink
              href="#waitlist"
              className="rounded-full px-4 py-2 text-sm text-slate-700 transition-colors hover:text-slate-950"
            >
              Sign in
            </MagneticLink>
            <MagneticLink
              href="#waitlist"
              className="rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white"
            >
              Get early access
            </MagneticLink>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.98, y: 1 }}
            transition={spring}
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-900 md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <List size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={spring}
            className="fixed inset-x-4 top-24 z-40 rounded-[2rem] border border-slate-200 bg-white/92 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.4)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col divide-y divide-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-lg tracking-tight text-slate-800"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-medium text-slate-800"
              >
                Sign in
              </a>
              <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-medium text-white"
              >
                Get early access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
