'use client';

import { motion } from 'framer-motion';
import ConsensusViz from './ConsensusViz';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forge-cyan/5 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-forge-blue/5 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forge-blue/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-forge-border/60 bg-forge-card/40 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-forge-cyan animate-pulse" />
            <span className="text-xs font-medium text-forge-muted tracking-wide uppercase">
              Now in Development — Early Access Open
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
          >
            The{' '}
            <span className="gradient-text">Trust Layer</span>
            <br />
            for AI Agents
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-forge-muted leading-relaxed max-w-xl mb-10"
          >
            AI agents are making autonomous decisions — managing your email, executing tasks,
            moving money. <span className="text-forge-text">Who verifies they&apos;re right?</span>
            <br /><br />
            NeuralForge&apos;s PSZN Engine delivers multi-model consensus scoring, domain drift detection,
            and consent-gated execution. Trust, verified.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#waitlist"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-forge-cyan to-forge-blue text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 text-center"
            >
              Get Early Access
            </a>
            <a
              href="#enterprise"
              className="px-8 py-4 rounded-xl border border-forge-border/60 text-forge-text font-medium text-base hover:border-forge-cyan/40 hover:bg-forge-card/40 transition-all duration-300 text-center"
            >
              Enterprise Solutions →
            </a>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-10 mt-14 justify-center lg:justify-start"
          >
            {[
              { value: '100+', label: 'Mastery Domains' },
              { value: '5-Layer', label: 'Verification' },
              { value: '<200ms', label: 'Consensus Scoring' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-forge-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Consensus Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ConsensusViz />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-forge-border/40 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-forge-cyan/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
