'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
  { value: '5', suffix: '+', label: 'AI Models in Consensus', desc: 'Every claim verified across multiple independent models' },
  { value: '100', suffix: '', label: 'Mastery Domains', desc: 'From legal research to quantum physics — domain-aware verification' },
  { value: '<200', suffix: 'ms', label: 'Verification Latency', desc: 'Real-time consensus scoring that doesn\'t slow down your agents' },
  { value: '99.9', suffix: '%', label: 'Uptime SLA', desc: 'Enterprise-grade reliability for mission-critical verification' },
];

export default function TrustMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-forge-cyan/[0.02] via-forge-purple/[0.02] to-forge-pink/[0.02]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {metric.value}
                <span className="text-forge-cyan">{metric.suffix}</span>
              </div>
              <div className="text-sm font-semibold text-forge-text mb-2">
                {metric.label}
              </div>
              <div className="text-xs text-forge-muted leading-relaxed">
                {metric.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
