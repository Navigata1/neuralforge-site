'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const incidents = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
    title: 'Email Deletion',
    desc: 'An AI agent autonomously deleted 2,400 emails it deemed "unimportant." 340 were critical business communications.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: 'Unauthorized Transactions',
    desc: 'Agent-initiated purchases totaling $12K executed without explicit user approval through integrated payment APIs.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Data Exfiltration',
    desc: 'CVE-2026-25253: Prompt injection vulnerability allowed agent platforms to leak private data to external servers.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Domain Drift',
    desc: 'Legal research agent gradually shifted to providing medical advice. No system detected the knowledge boundary violation.',
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" className="py-32 relative" ref={ref}>
      {/* Accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-forge-border/40" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-forge-cyan tracking-[0.2em] uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Agents Are Making
            <br />
            <span className="gradient-text">Autonomous Decisions</span>
          </h2>
          <p className="text-lg text-forge-muted max-w-2xl mx-auto leading-relaxed">
            We&apos;ve entered the age of agentic AI. Your inbox, calendar, finances, and code
            are being managed by autonomous systems. But when an agent acts on your behalf —
            <span className="text-forge-text"> who checks its work?</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {incidents.map((incident, i) => (
            <motion.div
              key={incident.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-8 group"
            >
              <div className="mb-4">{incident.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-forge-cyan transition-colors">
                {incident.title}
              </h3>
              <p className="text-sm text-forge-muted leading-relaxed">
                {incident.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-red-500/20 bg-red-500/5">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-red-400/80">
              These aren&apos;t hypotheticals. They&apos;re happening now.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
