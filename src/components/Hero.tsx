"use client";

import {
  ArrowRight,
  CheckCircle,
  Pulse,
  ShieldCheck,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { MagneticLink } from "@/components/MagneticButton";
import ConsensusViz from "@/components/ConsensusViz";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const trustSignals = [
  { label: "PSZN consensus", value: "5-model quorum" },
  { label: "Domain drift", value: "100 monitored domains" },
  { label: "Execution gates", value: "Human approval in loop" },
];

export default function Hero() {
  return (
    <section className="section-shell min-h-[100dvh] overflow-hidden pt-28 md:pt-32">
      <div className="grid min-h-[100dvh] items-center gap-12 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-16">
        <div className="order-2 flex flex-col justify-center md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="glass-panel inline-flex w-fit items-center gap-3 rounded-full px-4 py-2"
          >
            <Pulse size={16} className="text-[var(--color-accent)]" weight="duotone" />
            <span className="text-xs uppercase tracking-[0.24em] text-slate-600">
              NeuralForge.fm is opening early access
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.08 }}
            className="display-title mt-8 max-w-[12ch] text-left text-slate-950"
          >
            The trust layer for AI agents.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.16 }}
            className="body-copy mt-6 text-left"
          >
            NeuralForge.fm intercepts agent actions before they hit email, finance,
            code, or regulated workflows. PSZN consensus, domain drift detection,
            and consent-gated execution keep autonomous systems inside verified bounds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticLink
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-medium text-white"
            >
              Get early access
              <ArrowRight size={16} />
            </MagneticLink>
            <MagneticLink
              href="#enterprise"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-6 py-3.5 text-sm font-medium text-slate-900"
            >
              Explore enterprise
              <ShieldCheck size={16} />
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.32 }}
            className="mt-12 grid gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="rounded-[1.75rem] border-t border-slate-300 pt-5">
              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
                {trustSignals.map((signal) => (
                  <div key={signal.label} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 text-[var(--color-accent)]" weight="fill" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">{signal.label}</div>
                      <div className="mt-1 text-sm text-slate-600">{signal.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[1.75rem] px-5 py-5">
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
                Live trust envelope
              </div>
              <div className="mt-4 grid grid-cols-[1fr_auto] gap-y-3 text-sm text-slate-700">
                <span>Decision throughput</span>
                <span className="font-mono text-slate-950">2,847/min</span>
                <span>Verification latency</span>
                <span className="font-mono text-slate-950">&lt;200ms</span>
                <span>Escalations routed</span>
                <span className="font-mono text-slate-950">4.2%</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...spring, delay: 0.16 }}
          className="order-1 md:order-2"
        >
          <div className="relative ml-auto max-w-[580px]">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
            <div className="absolute -right-10 bottom-14 h-44 w-44 rounded-full bg-slate-200 blur-3xl" />
            <ConsensusViz />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
