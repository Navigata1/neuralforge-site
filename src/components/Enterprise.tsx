'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const capabilities = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Private Deployment',
    desc: 'Run NeuralForge on your infrastructure. Air-gapped options available. Your data never leaves your network.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3366ff" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: 'Compliance & Audit',
    desc: 'Full audit trails for every verification. SOC 2, HIPAA, and GDPR-ready. Export compliance reports on demand.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" opacity="0.3" />
      </svg>
    ),
    title: 'API Integration',
    desc: 'Drop PSZN verification into your existing agent pipelines. REST + WebSocket APIs. SDKs for Python, TypeScript, Go.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'SLA Guarantees',
    desc: '99.99% uptime. Sub-100ms verification latency. Dedicated infrastructure with auto-scaling.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3366ff" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'White-Label',
    desc: 'Rebrand NeuralForge as your own. Custom domains, themes, and verification branding for your customers.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Consent Engine',
    desc: 'Granular permission controls. Agents only execute actions users explicitly approved. Full consent audit log.',
  },
];

export default function Enterprise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="enterprise" className="py-32 relative" ref={ref}>
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-forge-black via-[#070720] to-forge-black" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-xs font-mono text-forge-cyan tracking-[0.2em] uppercase mb-4 block">
            Enterprise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your AI Agents Are Making Decisions.
            <br />
            <span className="gradient-text">Are They Making the Right Ones?</span>
          </h2>
          <p className="text-lg text-forge-muted max-w-3xl mx-auto mb-4">
            NeuralForge Enterprise brings verification-grade trust to your AI infrastructure.
            Deploy on your terms, with the compliance and security your organization demands.
          </p>
        </motion.div>

        {/* Enterprise visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-12 mb-16 border border-forge-cyan/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Verification Layer Your Stack Is Missing
              </h3>
              <p className="text-forge-muted leading-relaxed mb-6">
                Every major agent platform — OpenClaw, NemoClaw, LangChain, AutoGen — builds
                the runtime. None of them build the verification layer. That&apos;s the gap.
                That&apos;s NeuralForge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#waitlist"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-forge-cyan to-forge-blue text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all text-center text-sm"
                >
                  Request Enterprise Demo
                </a>
                <a
                  href="#waitlist"
                  className="px-6 py-3 rounded-xl border border-forge-border/60 text-forge-text font-medium hover:border-forge-cyan/40 transition-all text-center text-sm"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
            <div className="font-mono text-xs text-forge-muted bg-forge-black/60 rounded-xl p-6 border border-forge-border/20">
              <div className="text-forge-cyan mb-2">$ neuralforge deploy --enterprise</div>
              <div className="text-forge-muted/60 mb-1">✓ Private infrastructure provisioned</div>
              <div className="text-forge-muted/60 mb-1">✓ PSZN Engine configured (7 models)</div>
              <div className="text-forge-muted/60 mb-1">✓ Compliance layer active (SOC2/HIPAA)</div>
              <div className="text-forge-muted/60 mb-1">✓ Consent engine initialized</div>
              <div className="text-forge-muted/60 mb-1">✓ API endpoints ready</div>
              <div className="text-forge-green mt-3">
                ● NeuralForge Enterprise is live.
              </div>
              <div className="text-forge-muted/40 mt-1">
                Verifying 2,847 agent decisions/minute...
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="mb-4">{cap.icon}</div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-forge-cyan transition-colors">
                {cap.title}
              </h3>
              <p className="text-sm text-forge-muted leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
