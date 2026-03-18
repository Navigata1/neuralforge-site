"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const metrics = [
  { value: "5", suffix: "+", label: "Models in consensus", desc: "Every claim verified across independent models" },
  { value: "100", suffix: "", label: "Mastery domains", desc: "Domain-aware verification from law to quantum physics" },
  { value: "<200", suffix: "ms", label: "Verification latency", desc: "Real-time scoring that keeps pace with your agents" },
  { value: "99.9", suffix: "%", label: "Uptime SLA", desc: "Enterprise-grade reliability for critical pipelines" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: spring },
};

export default function TrustMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-shell py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
      >
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            variants={itemVariants}
            className="border-t border-slate-200 pt-6"
          >
            <div className="font-mono text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {metric.value}
              <span className="text-[var(--color-accent)]">{metric.suffix}</span>
            </div>
            <div className="mt-2 text-sm font-medium text-slate-800">
              {metric.label}
            </div>
            <div className="mt-1 text-xs leading-relaxed text-slate-500">
              {metric.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
