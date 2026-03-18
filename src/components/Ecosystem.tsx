"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Cpu, Flask } from "@phosphor-icons/react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const layers = [
  {
    name: "NeuralForge.fm",
    role: "Distribution layer",
    desc: "The storefront and delivery network. Consumer and enterprise portals, account management, marketplace, and onboarding.",
    Icon: Globe,
    color: "bg-blue-50 border-blue-100 text-[var(--color-accent)]",
  },
  {
    name: "RLAForge.app",
    role: "The OS kernel",
    desc: "MIT Research-Level Accuracy AI Operating System. 100 mastery domains, tiered access control, session management, and the OCEAN output framework.",
    Icon: Cpu,
    color: "bg-slate-50 border-slate-200 text-slate-700",
  },
  {
    name: "PSZN.dev",
    role: "Consensus engine core",
    desc: "Pure Signal, Zero Noise. Multi-model orchestration, claim extraction, semantic clustering, consensus scoring, and divergence detection.",
    Icon: Flask,
    color: "bg-emerald-50 border-emerald-100 text-emerald-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: spring },
};

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="ecosystem" ref={ref} className="section-shell max-w-5xl py-24 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-14">
          <p className="eyebrow">Ecosystem</p>
          <h2 className="display-title mt-4 text-slate-950">
            Three layers. One mission.
          </h2>
          <p className="body-copy mt-4">
            NeuralForge is an ecosystem designed from the ground up for trust,
            verification, and domain mastery. Each layer is independently deployable.
          </p>
        </motion.div>

        {/* Desktop: Accordion vertical strips */}
        <motion.div variants={itemVariants} className="hidden md:flex gap-3 h-[320px]">
          {layers.map((layer, i) => {
            const isExpanded = expanded === i;
            const Icon = layer.Icon;

            return (
              <motion.div
                key={layer.name}
                onHoverStart={() => setExpanded(i)}
                onHoverEnd={() => setExpanded(null)}
                animate={{ flex: isExpanded ? 4 : 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 26 }}
                className="relative glass-panel rounded-[2rem] overflow-hidden cursor-pointer"
              >
                <div className="h-full p-6 flex flex-col justify-between">
                  <div className={`shrink-0 rounded-2xl border p-3 w-fit ${layer.color}`}>
                    <Icon size={22} weight="duotone" />
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950 whitespace-nowrap">
                      {layer.name}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 26 }}
                      className="overflow-hidden"
                    >
                      <span className="mt-2 inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-wider text-slate-500">
                        {layer.role}
                      </span>
                      <p className="mt-3 text-sm leading-7 text-slate-600 max-w-[340px]">
                        {layer.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile: Stacked cards */}
        <motion.div variants={containerVariants} className="md:hidden space-y-4">
          {layers.map((layer) => {
            const Icon = layer.Icon;

            return (
              <motion.div
                key={layer.name}
                variants={itemVariants}
                className="glass-panel rounded-[2rem] p-6"
              >
                <div className="flex flex-col gap-5">
                  <div className={`shrink-0 rounded-2xl border p-4 w-fit ${layer.color}`}>
                    <Icon size={24} weight="duotone" />
                  </div>
                  <div>
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
            );
          })}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-10 text-center text-sm text-slate-500"
        >
          PSZN.dev can verify outputs from any agent platform, not just the NeuralForge ecosystem.
        </motion.p>
      </motion.div>
    </section>
  );
}
