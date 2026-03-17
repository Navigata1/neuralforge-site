'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const domains = [
  { name: 'Legal Research', score: 97, status: 'stable', color: '#22d3ee' },
  { name: 'Financial Analysis', score: 94, status: 'stable', color: '#22d3ee' },
  { name: 'Medical Literature', score: 89, status: 'caution', color: '#eab308' },
  { name: 'Software Engineering', score: 96, status: 'stable', color: '#22d3ee' },
  { name: 'Market Intelligence', score: 91, status: 'stable', color: '#22d3ee' },
  { name: 'Content Strategy', score: 72, status: 'drift', color: '#ef4444' },
];

export default function DriftDetection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono text-forge-green tracking-[0.2em] uppercase mb-4 block">
              Domain Drift Detection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              100 Domains.
              <br />
              <span className="gradient-text">Zero Blind Spots.</span>
            </h2>
            <p className="text-lg text-forge-muted leading-relaxed mb-8">
              AI agents don&apos;t know their boundaries. A legal research agent can silently
              drift into medical advice. A financial analyst can start making engineering claims.
              NeuralForge&apos;s Domain Drift Detector uses on-device ML to monitor knowledge
              boundaries in real-time across 100 mastery domains.
            </p>

            <div className="space-y-4">
              {[
                'Real-time boundary monitoring across all active domains',
                'Automatic alerts when agents exceed their knowledge scope',
                'Configurable drift thresholds per domain and tier',
                'Historical drift analytics for compliance auditing',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" className="mt-0.5 shrink-0">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-sm text-forge-text">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-mono text-forge-muted tracking-wider uppercase">
                Domain Health Monitor
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-forge-cyan animate-pulse" />
                <span className="text-xs text-forge-muted">Live</span>
              </div>
            </div>

            <div className="space-y-4">
              {domains.map((domain, i) => (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-36 text-sm text-forge-text truncate">
                    {domain.name}
                  </div>
                  <div className="flex-1 h-2 bg-forge-black/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${domain.score}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: domain.color }}
                    />
                  </div>
                  <div className="w-10 text-right text-sm font-mono" style={{ color: domain.color }}>
                    {domain.score}
                  </div>
                  <div className={`w-16 text-right text-xs font-mono ${
                    domain.status === 'stable' ? 'text-forge-green' :
                    domain.status === 'caution' ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {domain.status === 'drift' ? '⚠ DRIFT' : domain.status === 'caution' ? '● WARN' : '● OK'}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-forge-border/30">
              <div className="flex items-center justify-between text-xs text-forge-muted">
                <span>6 of 100 domains shown</span>
                <span className="font-mono">Updated 2s ago</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
