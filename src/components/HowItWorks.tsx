"use client";

import {
  ArrowsClockwise,
  ShieldCheck,
  Timer,
} from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Capture the proposed action",
    desc: "NeuralForge sits in the execution path and normalizes the agent output into claims, intent, destination, and risk context.",
    icon: Timer,
  },
  {
    number: "02",
    title: "Run PSZN verification",
    desc: "Multiple models review the same claim independently. Agreement, divergence, and domain fit are scored before any tool call leaves the system.",
    icon: ArrowsClockwise,
  },
  {
    number: "03",
    title: "Gate the execution path",
    desc: "NeuralForge routes low-confidence actions into approval or fallback flows, preserving speed for safe decisions and friction for risky ones.",
    icon: ShieldCheck,
  },
];

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="how-it-works" ref={ref} className="section-shell py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={spring}
        className="grid gap-8 md:grid-cols-[0.82fr_1.18fr]"
      >
        <div>
          <p className="eyebrow">How it works</p>
          <h2 className="display-title mt-4 max-w-[11ch] text-slate-950">
            Verification stays in the flow.
          </h2>
          <p className="body-copy mt-6">
            The system is designed like an operating layer, not a report page.
            Checks happen in-line, with enough context to stop bad actions and keep good ones moving.
          </p>
        </div>

        <div className="grid gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 28 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ ...spring, delay: index * 0.1 }}
                className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white/72 p-6 md:grid-cols-[120px_1fr] md:items-start md:p-8"
              >
                <div className="flex items-center gap-4 md:block">
                  <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50 p-3 text-[var(--color-accent)]">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400 md:mt-5">
                    Step {step.number}
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
