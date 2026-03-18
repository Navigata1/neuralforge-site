"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "@phosphor-icons/react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const tiers = [
  {
    name: "Free",
    price: 0,
    desc: "Start verifying agent outputs today.",
    features: [
      "6 base domains (A\u2013F)",
      "5-layer verification",
      "Base model access",
      "Community support",
      "100 verifications / day",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    price: 19,
    desc: "For professionals who depend on reliable AI.",
    features: [
      "26 domains (G\u2013Z) + 1 custom",
      "Enhanced model routing",
      "Session history and replay",
      "Basic drift detection",
      "1,000 verifications / day",
      "Email support",
    ],
    cta: "Go Pro",
    popular: false,
  },
  {
    name: "Nexus",
    price: 49,
    desc: "The sweet spot for power users.",
    features: [
      "26 domains + 5 custom",
      "File uploads and analysis",
      "Multi-format exports",
      "3 concurrent sessions",
      "Advanced drift analytics",
      "5,000 verifications / day",
      "Priority support",
    ],
    cta: "Get Nexus",
    popular: true,
  },
  {
    name: "Apex",
    price: 99,
    desc: "Full power. No compromises.",
    features: [
      "All 100 mastery domains",
      "Domain Drift Detector",
      "Real-time toggles",
      "PSZN consensus reports",
      "10 concurrent sessions",
      "Unlimited verifications",
      "Dedicated support",
    ],
    cta: "Go Apex",
    popular: false,
  },
  {
    name: "Pantheon",
    price: 199,
    desc: "The complete verification platform.",
    features: [
      "Everything in Apex",
      "Unlimited custom domains",
      "Fine-tuning (A\u2013J sub-specs)",
      "Unity AR/VR exports",
      "Full API access",
      "White-label options",
      "Concierge onboarding",
    ],
    cta: "Join Pantheon",
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: spring },
};

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" ref={ref} className="section-shell py-24 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-14">
          <p className="eyebrow">Pricing</p>
          <h2 className="display-title mt-4 text-slate-950">
            Choose your trust level
          </h2>
          <p className="body-copy mt-4">
            Every tier includes the PSZN consensus engine. Scale verification as you grow.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/60 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all active:scale-[0.97] active:translate-y-[1px] ${
                !annual ? "bg-[var(--color-accent)] text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all active:scale-[0.97] active:translate-y-[1px] ${
                annual ? "bg-[var(--color-accent)] text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Annual <span className="ml-1 text-xs opacity-70">save 20%</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={`relative rounded-[2rem] border p-6 ${
                tier.popular
                  ? "border-[var(--color-accent)]/30 bg-white shadow-[0_24px_60px_-36px_rgba(0,102,255,0.25)]"
                  : "border-slate-200 bg-white/72"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-6 rounded-full bg-[var(--color-accent)] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-white">
                  Most popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-base font-semibold text-slate-950">{tier.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{tier.desc}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-slate-950">
                    {tier.price === 0 ? "Free" : `$${annual ? Math.round(tier.price * 0.8) : tier.price}`}
                  </span>
                  {tier.price > 0 && (
                    <span className="text-sm text-slate-400">/mo</span>
                  )}
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    <span className="text-xs leading-relaxed text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block rounded-full py-2.5 text-center text-sm font-medium transition-all active:scale-[0.97] active:translate-y-[1px] ${
                  tier.popular
                    ? "bg-[var(--color-accent)] text-white"
                    : "border border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
