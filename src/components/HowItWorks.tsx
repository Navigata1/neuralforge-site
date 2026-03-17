'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Query Ingestion',
    desc: 'Your AI agent submits a decision or output. NeuralForge intercepts it before execution, extracting discrete claims and action intents.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h4" />
      </svg>
    ),
    color: 'from-forge-cyan/20 to-forge-cyan/5',
    borderColor: 'border-forge-cyan/20',
  },
  {
    num: '02',
    title: 'PSZN Consensus',
    desc: 'Claims are verified across multiple AI models in parallel. Each model independently scores accuracy — no model speaks for another. Algorithmic consensus, not theater.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    color: 'from-forge-purple/20 to-forge-purple/5',
    borderColor: 'border-forge-purple/20',
  },
  {
    num: '03',
    title: 'Verified Execution',
    desc: 'Only claims that pass the consensus threshold proceed. Divergences are flagged. Domain drift is caught. Your consent gates every action. Trust, verified.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    color: 'from-forge-green/20 to-forge-green/5',
    borderColor: 'border-forge-green/20',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-forge-purple tracking-[0.2em] uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three Steps to{' '}
            <span className="gradient-text">Verified Trust</span>
          </h2>
          <p className="text-lg text-forge-muted max-w-2xl mx-auto">
            NeuralForge sits between your AI agents and the real world.
            Every decision passes through verification before it executes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px">
                  <div className="w-full h-px bg-gradient-to-r from-forge-border/60 to-forge-border/20" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-forge-border/40" />
                </div>
              )}

              <div className={`glass-card rounded-2xl p-8 h-full border ${step.borderColor}`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>

                <div className="text-xs font-mono text-forge-muted mb-3 tracking-wider">
                  STEP {step.num}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-forge-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
