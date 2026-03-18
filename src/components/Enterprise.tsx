"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lock,
  FileText,
  Code,
  Timer,
  UsersThree,
  ShieldCheck,
} from "@phosphor-icons/react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const capabilities = [
  { Icon: Lock, title: "Private deployment", desc: "Run NeuralForge on your infrastructure. Air-gapped options available. Your data never leaves your network." },
  { Icon: FileText, title: "Compliance and audit", desc: "Full audit trails for every verification. SOC 2, HIPAA, and GDPR-ready. Export compliance reports on demand." },
  { Icon: Code, title: "API integration", desc: "Drop PSZN verification into existing agent pipelines. REST and WebSocket APIs. SDKs for Python, TypeScript, Go." },
  { Icon: Timer, title: "SLA guarantees", desc: "99.99% uptime. Sub-100ms verification latency. Dedicated infrastructure with auto-scaling." },
  { Icon: UsersThree, title: "White-label", desc: "Rebrand NeuralForge as your own. Custom domains, themes, and verification branding for your customers." },
  { Icon: ShieldCheck, title: "Consent engine", desc: "Granular permission controls. Agents only execute actions users explicitly approved. Full consent audit log." },
];

export default function Enterprise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="enterprise" ref={ref} className="section-shell py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={spring}
        className="mb-14"
      >
        <p className="eyebrow">Enterprise</p>
        <h2 className="display-title mt-4 max-w-[20ch] text-slate-950">
          Your agents are making decisions. Are they the right ones?
        </h2>
        <p className="body-copy mt-6">
          NeuralForge Enterprise brings verification-grade trust to your AI infrastructure.
          Deploy on your terms with the compliance and security your organization demands.
        </p>
      </motion.div>

      {/* Enterprise hero card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...spring, delay: 0.12 }}
        className="mb-12 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 md:grid-cols-2"
      >
        <div className="p-8 md:p-10">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
            The verification layer your stack is missing
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Every major agent platform builds the runtime. None of them build the verification layer.
            NeuralForge sits on top of any agent to score, gate, and audit decisions before execution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-center text-sm font-medium text-white active:scale-[0.98] active:translate-y-px"
            >
              Request enterprise demo
            </a>
            <a
              href="#waitlist"
              className="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-medium text-slate-700 hover:border-slate-300"
            >
              Talk to sales
            </a>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-slate-950 p-8 font-mono text-xs leading-7 text-slate-400 md:border-t-0 md:border-l md:p-10">
          <div className="text-[var(--color-accent)]">$ neuralforge deploy --enterprise</div>
          <div className="mt-2 text-slate-500">Private infrastructure provisioned</div>
          <div className="text-slate-500">PSZN Engine configured (7 models)</div>
          <div className="text-slate-500">Compliance layer active (SOC2/HIPAA)</div>
          <div className="text-slate-500">Consent engine initialized</div>
          <div className="text-slate-500">API endpoints ready</div>
          <div className="mt-3 text-emerald-400">NeuralForge Enterprise is live.</div>
          <div className="mt-1 text-slate-600">Verifying 2,847 agent decisions/minute...</div>
        </div>
      </motion.div>

      {/* Capabilities — asymmetric 2-col zig-zag */}
      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: 0.2 + i * 0.06 }}
            className={`glass-panel rounded-[1.75rem] p-6 ${i % 2 === 1 ? "md:translate-y-6" : ""}`}
          >
            <cap.Icon size={22} weight="duotone" className="text-[var(--color-accent)]" />
            <h3 className="mt-4 text-base font-semibold tracking-tight text-slate-950">
              {cap.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
