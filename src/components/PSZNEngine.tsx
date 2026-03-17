'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Multi-Model Orchestration',
    desc: 'Queries 3-7 AI models simultaneously. Each model processes the same claim independently — no cross-contamination, no echo chambers.',
    code: `// PSZN orchestrates parallel verification
const results = await pszn.verify({
  claim: agent.output,
  models: ['gpt-5', 'claude', 'gemini', 'grok'],
  threshold: 0.85,
  mode: 'consensus'
});`,
  },
  {
    title: 'Claim Extraction',
    desc: 'Every response is decomposed into atomic, verifiable claims. Each claim is scored independently — no aggregate hand-waving.',
    code: `// Atomic claim decomposition
claims: [
  { text: "Revenue grew 23%", score: 0.94 },
  { text: "Q3 was strongest", score: 0.87 },
  { text: "Margin expanded",  score: 0.71 } // ⚠️ flagged
]`,
  },
  {
    title: 'Consensus Scoring',
    desc: 'Semantic similarity clustering compares claims across models. Agreement is measured algorithmically, not assumed. Divergences surface as actionable signal.',
    code: `// Algorithmic consensus — no model speaks for another
consensus: {
  agreement:  0.91,  // 4/4 models aligned
  divergence: 0.09,  // Grok flagged margin claim
  confidence: "HIGH",
  action:     "PROCEED_WITH_CAVEAT"
}`,
  },
  {
    title: 'Divergence Detection',
    desc: 'When models disagree, NeuralForge doesn\'t average it out. It surfaces the disagreement with full context — because knowing where AI is uncertain is more valuable than a fake confidence score.',
    code: `// Divergence = valuable signal
divergence: {
  claim: "Margin expanded to 34%",
  models_agree: ['gpt-5', 'claude', 'gemini'],
  models_disagree: ['grok'],
  grok_alternative: "Margin was 31.2% per SEC filing",
  resolution: "HUMAN_REVIEW_REQUIRED"
}`,
  },
];

export default function PSZNEngine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pszn" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forge-purple/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-forge-cyan tracking-[0.2em] uppercase mb-4 block">
            PSZN Engine
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pure Signal.{' '}
            <span className="gradient-text">Zero Noise.</span>
          </h2>
          <p className="text-lg text-forge-muted max-w-3xl mx-auto">
            The PSZN Engine is the verification core of NeuralForge. Every piece of data
            comes from actual model responses — not simulated consensus. Not cosmetic verification theater.
            Real epistemic value.
          </p>
        </motion.div>

        <div className="space-y-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Text side */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-xs font-mono text-forge-cyan/60 mb-3 tracking-wider">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-forge-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Code side */}
                <div className="bg-forge-black/60 p-8 md:p-10 border-t md:border-t-0 md:border-l border-forge-border/30">
                  <pre className="text-xs md:text-sm font-mono text-forge-muted leading-relaxed overflow-x-auto">
                    <code>{feature.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
