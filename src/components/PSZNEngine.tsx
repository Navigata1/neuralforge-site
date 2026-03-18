"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const features = [
  {
    title: "Multi-model orchestration",
    desc: "PSZN queries independent models in parallel so agreement is measured, not assumed.",
    code: `const result = await pszn.verify({
  claim: agent.output,
  models: ["gpt-5", "claude", "gemini", "grok"],
  threshold: 0.85,
  mode: "consensus",
});`,
  },
  {
    title: "Claim extraction",
    desc: "Responses are broken into atomic claims, then scored individually so weak assertions do not hide in strong summaries.",
    code: `claims: [
  { text: "Revenue grew 23%", score: 0.94 },
  { text: "Q3 was strongest", score: 0.87 },
  { text: "Margin expanded", score: 0.71 },
]`,
  },
  {
    title: "Divergence surfaced early",
    desc: "When one model disagrees, PSZN preserves the disagreement as signal and routes it toward review or consent gates.",
    code: `divergence: {
  claim: "Margin expanded to 34%",
  models_agree: ["gpt-5", "claude", "gemini"],
  models_disagree: ["grok"],
  resolution: "HUMAN_REVIEW_REQUIRED",
}`,
  },
];

export default function PSZNEngine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="pszn" ref={ref} className="section-shell py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={spring}
          className="md:sticky md:top-28 md:self-start"
        >
          <p className="eyebrow">PSZN engine</p>
          <h2 className="display-title mt-4 max-w-[10ch] text-slate-950">
            Pure signal. Measurable disagreement.
          </h2>
          <p className="body-copy mt-6">
            NeuralForge uses PSZN as a verification engine, not a decorative badge.
            Every claim is decomposed, compared, clustered, and scored before it can drive execution.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: index * 0.1 }}
              className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white/76 md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r md:p-8">
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{feature.desc}</p>
              </div>
              <div className="bg-slate-950 px-6 py-6 text-sm text-slate-200 md:px-8">
                <pre className="overflow-x-auto font-mono leading-7 text-slate-300">
                  <code>{feature.code}</code>
                </pre>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
