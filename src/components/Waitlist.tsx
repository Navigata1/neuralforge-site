"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "@phosphor-icons/react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

export default function Waitlist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" ref={ref} className="section-shell py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={spring}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="eyebrow">Early access</p>
        <h2 className="display-title mt-4 text-slate-950">
          Be first to verify trust
        </h2>
        <p className="body-copy mx-auto mt-4 text-center">
          NeuralForge is in active development. Join the waitlist for early access
          to the trust layer AI agents have been missing.
        </p>

        <div className="mt-10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={spring}
              className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-8 py-4"
            >
              <Check size={20} weight="bold" className="text-[var(--color-accent)]" />
              <span className="text-sm font-medium text-[var(--color-accent)]">
                You&apos;re on the list. We&apos;ll be in touch.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:max-w-lg sm:mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[var(--color-accent)]/40 focus:ring-2 focus:ring-[var(--color-accent)]/10 transition-all"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-medium text-white active:scale-[0.98] active:translate-y-px transition-transform whitespace-nowrap"
              >
                Join waitlist
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-xs text-slate-400">
          No spam. Unsubscribe anytime. We respect your inbox more than most agents do.
        </p>
      </motion.div>
    </section>
  );
}
