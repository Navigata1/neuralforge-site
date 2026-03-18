"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const models = [
  { name: "GPT-5", angle: 0 },
  { name: "Claude", angle: 72 },
  { name: "Gemini", angle: 144 },
  { name: "Grok", angle: 216 },
  { name: "DeepSeek", angle: 288 },
];

export default function ConsensusViz() {
  const [scores, setScores] = useState(models.map(() => 0));
  const [consensus, setConsensus] = useState(0);
  const [activeModel, setActiveModel] = useState(-1);

  useEffect(() => {
    const sample = () => {
      const nextScores = models.map(() => 82 + Math.round(Math.random() * 15));
      setScores(nextScores);
      setConsensus(
        Math.round(nextScores.reduce((total, score) => total + score, 0) / nextScores.length),
      );
    };

    sample();

    const metricsTimer = window.setInterval(sample, 2800);
    let index = 0;
    const pulseTimer = window.setInterval(() => {
      setActiveModel(index % models.length);
      index += 1;
    }, 900);

    return () => {
      window.clearInterval(metricsTimer);
      window.clearInterval(pulseTimer);
    };
  }, []);

  const cx = 190;
  const cy = 190;
  const radius = 124;

  return (
    <div className="glass-panel relative w-full max-w-[540px] rounded-[2rem] p-6 md:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="eyebrow">PSZN consensus</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Live agreement mesh
          </h3>
        </div>
        <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-right">
          <div className="font-mono text-xl font-semibold text-[var(--color-accent)]">
            {consensus}%
          </div>
          <div className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">
            consensus
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.8fr]">
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/90 p-3">
          <svg viewBox="0 0 380 380" className="h-full w-full">
            <circle cx={cx} cy={cy} r={radius + 18} fill="none" stroke="rgba(148,163,184,0.26)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(0,102,255,0.12)" strokeWidth="1" strokeDasharray="4 6" />

            {models.map((model, index) => {
              const x1 = cx + radius * Math.cos(((model.angle - 90) * Math.PI) / 180);
              const y1 = cy + radius * Math.sin(((model.angle - 90) * Math.PI) / 180);

              return models.slice(index + 1).map((nextModel, nextIndex) => {
                const x2 = cx + radius * Math.cos(((nextModel.angle - 90) * Math.PI) / 180);
                const y2 = cy + radius * Math.sin(((nextModel.angle - 90) * Math.PI) / 180);

                return (
                  <line
                    key={`${model.name}-${nextModel.name}-${nextIndex}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(148,163,184,0.18)"
                    strokeWidth="1"
                  />
                );
              });
            })}

            {models.map((model, index) => {
              const x = cx + radius * Math.cos(((model.angle - 90) * Math.PI) / 180);
              const y = cy + radius * Math.sin(((model.angle - 90) * Math.PI) / 180);
              const isActive = activeModel === index;

              return (
                <g key={model.name}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={isActive ? 26 : 22}
                    initial={false}
                    animate={{ opacity: isActive ? 0.38 : 0.12 }}
                    transition={spring}
                    fill="rgba(0,102,255,0.08)"
                    stroke="rgba(0,102,255,0.18)"
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={isActive ? 16 : 14}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0.8 }}
                    transition={spring}
                    fill="white"
                    stroke="rgba(0,102,255,0.85)"
                    strokeWidth={isActive ? 2 : 1.4}
                  />
                  <text
                    x={x}
                    y={y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#0066ff"
                    fontSize="9.5"
                    fontFamily="var(--font-geist-mono)"
                    fontWeight="700"
                  >
                    {scores[index]}
                  </text>
                  <text
                    x={x}
                    y={y + (model.angle > 90 && model.angle < 270 ? 38 : -30)}
                    textAnchor="middle"
                    fill="#475467"
                    fontSize="10.5"
                    fontFamily="var(--font-geist)"
                    fontWeight="500"
                  >
                    {model.name}
                  </text>
                </g>
              );
            })}

            <circle cx={cx} cy={cy} r={42} fill="rgba(0,102,255,0.09)" stroke="rgba(0,102,255,0.18)" strokeWidth="1.4" />
            <circle cx={cx} cy={cy} r={28} fill="white" stroke="rgba(0,102,255,0.22)" strokeWidth="1.2" />
            <text
              x={cx}
              y={cy - 7}
              textAnchor="middle"
              fill="#475467"
              fontSize="8.5"
              fontFamily="var(--font-geist-mono)"
              fontWeight="700"
              letterSpacing="2"
            >
              PSZN
            </text>
            <text
              x={cx}
              y={cy + 11}
              textAnchor="middle"
              fill="#0f172a"
              fontSize="18"
              fontFamily="var(--font-geist-mono)"
              fontWeight="700"
            >
              {consensus}%
            </text>
          </svg>
        </div>

        <div className="flex flex-col divide-y divide-slate-200 rounded-[1.75rem] border border-slate-200 bg-white/85">
          {models.map((model, index) => (
            <div key={model.name} className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-4">
              <div>
                <div className="text-sm font-medium text-slate-900">{model.name}</div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    className="h-full rounded-full bg-[var(--color-accent)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${scores[index]}%` }}
                    transition={spring}
                  />
                </div>
              </div>
              <div className="font-mono text-sm text-slate-600">{scores[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
