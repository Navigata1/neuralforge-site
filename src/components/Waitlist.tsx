'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Waitlist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // TODO: Wire to actual backend
    }
  };

  return (
    <section id="waitlist" className="py-32 relative" ref={ref}>
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-forge-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-forge-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-forge-cyan tracking-[0.2em] uppercase mb-4 block">
            Early Access
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be First to{' '}
            <span className="gradient-text">Verify Trust</span>
          </h2>
          <p className="text-lg text-forge-muted max-w-xl mx-auto mb-10">
            NeuralForge is in active development. Join the waitlist for early access
            to the trust layer that AI agents have been missing.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-forge-cyan/10 border border-forge-cyan/20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-forge-cyan font-medium">
                You&apos;re on the list. We&apos;ll be in touch.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-xl bg-forge-card/60 border border-forge-border/40 text-forge-text placeholder-forge-muted/50 focus:outline-none focus:border-forge-cyan/40 focus:ring-1 focus:ring-forge-cyan/20 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-forge-cyan to-forge-blue text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          )}

          <p className="text-xs text-forge-muted/50 mt-6">
            No spam. Unsubscribe anytime. We respect your inbox more than most AI agents do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
