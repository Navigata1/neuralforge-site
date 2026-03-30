'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const layers = [
  {
    name: 'NeuralForge.fm',
    role: 'Distribution Layer',
    desc: 'The storefront and delivery network. Where users discover, access, and manage their NeuralForge experience. Consumer and enterprise portals, account management, and marketplace.',
    color: '#00d4ff',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: 'RLAForge.app',
    role: 'The OS Kernel',
    desc: 'MIT Research-Level Accuracy AI Operating System. 100 mastery domains, tiered access control, session management, and the OCEAN output framework. The brain that orchestrates everything.',
    color: '#3366ff',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3366ff" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    name: 'PSZN.dev',
    role: 'Consensus Engine Core',
    desc: 'Pure Signal, Zero Noise. The verification engine that powers everything above it. Multi-model orchestration, claim extraction, semantic clustering, consensus scoring, and divergence detection.',
    color: '#22d3ee',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ecosystem" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-forge-cyan tracking-[0.2em] uppercase mb-4 block">
            Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three Layers.{' '}
            <span className="gradient-text">One Mission.</span>
          </h2>
          <p className="text-lg text-forge-muted max-w-2xl mx-auto">
            NeuralForge isn&apos;t a single product — it&apos;s an ecosystem designed from the
            ground up for trust, verification, and domain mastery.
          </p>
        </motion.div>

        {/* Stack visualization */}
        <div className="space-y-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="relative"
            >
              {/* Connector */}
              {i < layers.length - 1 && (
                <div className="absolute left-1/2 -bottom-4 w-px h-4 bg-gradient-to-b from-forge-border/40 to-transparent z-10" />
              )}

              <div
                className="glass-card rounded-2xl p-8 md:p-10 border"
                style={{ borderColor: `${layer.color}15` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: `${layer.color}10` }}
                  >
                    {layer.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {layer.name}
                      </h3>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase"
                        style={{
                          color: layer.color,
                          background: `${layer.color}10`,
                          border: `1px solid ${layer.color}20`,
                        }}
                      >
                        {layer.role}
                      </span>
                    </div>
                    <p className="text-sm text-forge-muted leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="hidden md:block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={layer.color} strokeWidth="1.5" opacity="0.4">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-forge-muted">
            Each layer is independently deployable.{' '}
            <span className="text-forge-cyan">PSZN.dev</span> can verify outputs from any agent platform —
            not just the NeuralForge ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
