"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Warning, XCircle } from "@phosphor-icons/react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const domains = [
  { name: "Legal Research", score: 97, status: "stable" },
  { name: "Financial Analysis", score: 94, status: "stable" },
  { name: "Medical Literature", score: 89, status: "caution" },
  { name: "Software Engineering", score: 96, status: "stable" },
  { name: "Market Intelligence", score: 91, status: "stable" },
  { name: "Content Strategy", score: 72, status: "drift" },
];

export default function DriftDetection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="section-shell py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={spring}
        >
          <p className="eyebrow">Domain drift detection</p>
          <h2 className="display-title mt-4 max-w-[14ch] text-slate-950">
            100 domains. Boundaries enforced automatically.
          </h2>
          <p className="body-copy mt-6">
            Agents sound authoritative even when they cross knowledge boundaries.
            NeuralForge monitors domain coherence in real time and flags drift
            before it reaches the user or triggers an action.
          </p>

          <div className="mt-10 space-y-4">
            {[
              "Real-time boundary monitoring across active domains",
              "Automatic alerts when agents exceed knowledge scope",
              "Configurable drift thresholds per domain and tier",
              "Historical drift analytics for compliance auditing",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ ...spring, delay: 0.15 }}
          className="glass-panel rounded-[2rem] p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">
              Domain health monitor
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span className="font-mono text-[0.65rem] text-slate-500">Live</span>
            </div>
          </div>

          <div className="space-y-3">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ ...spring, delay: 0.25 + i * 0.06 }}
                className="flex items-center gap-3"
              >
                <div className="w-32 truncate text-sm text-slate-700">
                  {domain.name}
                </div>
                <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${domain.score}%` } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      domain.status === "stable"
                        ? "bg-[var(--color-accent)]"
                        : domain.status === "caution"
                        ? "bg-amber-400"
                        : "bg-rose-500"
                    }`}
                  />
                </div>
                <div className="w-8 text-right font-mono text-xs text-slate-500">
                  {domain.score}
                </div>
                <div className="w-14 flex justify-end">
                  {domain.status === "stable" ? (
                    <Check size={14} weight="bold" className="text-[var(--color-accent)]" />
                  ) : domain.status === "caution" ? (
                    <Warning size={14} weight="fill" className="text-amber-500" />
                  ) : (
                    <XCircle size={14} weight="fill" className="text-rose-500" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-200 pt-4 flex items-center justify-between text-[0.65rem] text-slate-400">
            <span>6 of 100 domains shown</span>
            <span className="font-mono">Updated 2s ago</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
