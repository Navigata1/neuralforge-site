"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Cpu, Flask } from "@phosphor-icons/react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const layers = [
  {
    name: "NeuralForge.fm",
    role: "Distribution layer",
    desc: "The storefront and delivery network. Consumer and enterprise portals, account management, marketplace, and onboarding.",
    Icon: Globe,
  },
  {
    name: "RLAForge.app",
    role: "The OS kernel",
    desc: "MIT Research-Level Accuracy AI Operating System. 100 mastery domains, tiered access control, session management, and the OCEAN output framework.",
    Icon: Cpu,
  },
  {
    name: "PSZN.dev",
    role: "Consensus engine core",
    desc: "Pure Signal, Zero Noise. Multi-model orchestration, claim extraction, semantic clustering, consensus scoring, and divergence detection.",
    Icon: Flask,
  },
];

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="ecosystem" ref={ref} className="section-shell max-w-5xl py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={spring}
        className="mb-14"
      >
        <p className="eyebrow">Ecosystem</p>
        <h2 className="display-title mt-4 text-slate-950">
          Three layers. One mission.
        </h2>
        <p className="body-copy mt-4">
          NeuralForge is an ecosystem designed from the ground up for trust,
          verification, and domain mastery. Each layer is independently deployable.
        </p>
      </motion.div>

      <div className="space-y-4">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...spring, delay: 0.12 * i }}
            className="glass-panel rounded-[2rem] p-6 md:p-8"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="shrink-0 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-[var(--color-accent)]">
                <layer.Icon size={24} weight="duotone" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {layer.name}
                  </h3>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-wider text-slate-500">
                    {layer.role}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {layer.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ ...spring, delay: 0.5 }}
        className="mt-10 text-center text-sm text-slate-500"
      >
        PSZN.dev can verify outputs from any agent platform, not just the NeuralForge ecosystem.
      </motion.p>
    </section>
  );
}
