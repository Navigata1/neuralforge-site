"use client";

import {
  CreditCard,
  EnvelopeSimpleOpen,
  ShieldWarning,
  Target,
} from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const incidents = [
  {
    icon: EnvelopeSimpleOpen,
    title: "Email deletion",
    desc: "Agents already archive and delete at scale. One unchecked classifier can erase high-value conversations before a human sees the mistake.",
  },
  {
    icon: CreditCard,
    title: "Unauthorized spend",
    desc: "Integrated payment tools turn optimistic recommendations into live transactions. Verification has to happen before the API call, not after the charge.",
  },
  {
    icon: ShieldWarning,
    title: "Data exfiltration",
    desc: "Prompt injection and tool abuse push private context into public endpoints. Trust layers need to watch action intent as closely as model output.",
  },
  {
    icon: Target,
    title: "Domain drift",
    desc: "Research agents can slide from one specialty into another while still sounding authoritative. The failure mode is confidence without competence.",
  },
];

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="problem" ref={ref} className="section-shell py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-[0.78fr_1.22fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="md:pr-10"
        >
          <p className="eyebrow">Where agents fail</p>
          <h2 className="display-title mt-4 max-w-[10ch] text-slate-950">
            Autonomy without verification breaks fast.
          </h2>
          <p className="body-copy mt-6">
            NeuralForge exists because the risk pattern is already visible:
            agents act with speed, broad permissions, and incomplete certainty.
            The missing layer is independent verification before execution.
          </p>
          <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white/72 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)]">
            <div className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-500">
              Operating assumption
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              If an agent can write, send, move, or purchase, it needs a trust layer
              with consensus checks, domain boundaries, and explicit approval paths.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
          {incidents.map((incident, index) => {
            const Icon = incident.icon;

            return (
              <motion.div
                key={incident.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: index * 0.08 }}
                className={`glass-panel rounded-[1.9rem] p-6 ${
                  index % 2 === 0 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-3 text-[var(--color-accent)]">
                    <Icon size={22} weight="duotone" />
                  </div>
                  <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-950">
                  {incident.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{incident.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
