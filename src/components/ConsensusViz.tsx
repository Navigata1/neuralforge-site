"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const springConfig = { stiffness: 100, damping: 20 } as const;

const models = [
  { name: "GPT-5", angle: 0 },
  { name: "Claude", angle: 72 },
  { name: "Gemini", angle: 144 },
  { name: "Grok", angle: 216 },
  { name: "DeepSeek", angle: 288 },
];

const cx = 190;
const cy = 190;
const radius = 124;

function getPos(angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

function PulsingLine({ x1, y1, x2, y2, active }: { x1: number; y1: number; x2: number; y2: number; active: boolean }) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={active ? "rgba(0,102,255,0.4)" : "rgba(148,163,184,0.18)"}
      strokeWidth={active ? 1.8 : 1}
      initial={false}
      animate={{
        stroke: active ? "rgba(0,102,255,0.4)" : "rgba(148,163,184,0.18)",
        strokeWidth: active ? 1.8 : 1,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    />
  );
}

function ModelNode({ model, index, score, isActive, onHover }: {
  model: { name: string; angle: number };
  index: number;
  score: number;
  isActive: boolean;
  onHover: (i: number | null) => void;
}) {
  const { x, y } = getPos(model.angle);
  const scale = useSpring(useMotionValue(1), springConfig);

  const handleEnter = useCallback(() => {
    scale.set(1.15);
    onHover(index);
  }, [scale, onHover, index]);

  const handleLeave = useCallback(() => {
    scale.set(1);
    onHover(null);
  }, [scale, onHover]);

  return (
    <g
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      style={{ cursor: "pointer" }}
    >
      <motion.circle
        cx={x}
        cy={y}
        r={24}
        initial={false}
        animate={{ opacity: isActive ? 0.35 : 0.1 }}
        transition={springConfig}
        fill="rgba(0,102,255,0.08)"
        stroke="rgba(0,102,255,0.18)"
      />
      <motion.circle
        cx={x}
        cy={y}
        r={15}
        fill="white"
        stroke={isActive ? "rgba(0,102,255,0.85)" : "rgba(148,163,184,0.5)"}
        strokeWidth={isActive ? 2 : 1.4}
        initial={false}
        animate={{
          stroke: isActive ? "rgba(0,102,255,0.85)" : "rgba(148,163,184,0.5)",
          strokeWidth: isActive ? 2 : 1.4,
        }}
        style={{ scale }}
        transition={springConfig}
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
        {score}
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
}

export default function ConsensusViz() {
  const [scores, setScores] = useState(models.map(() => 0));
  const [consensus, setConsensus] = useState(0);
  const [activeModel, setActiveModel] = useState<number | null>(null);
  const [pulseIndex, setPulseIndex] = useState(0);

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

    let idx = 0;
    const pulseTimer = window.setInterval(() => {
      setPulseIndex(idx % models.length);
      idx += 1;
    }, 900);

    return () => {
      window.clearInterval(metricsTimer);
      window.clearInterval(pulseTimer);
    };
  }, []);

  const hoveredOrPulsed = activeModel ?? pulseIndex;

  // Generate connection lines between all model pairs
  const connections: { x1: number; y1: number; x2: number; y2: number; key: string; active: boolean }[] = [];
  for (let i = 0; i < models.length; i++) {
    for (let j = i + 1; j < models.length; j++) {
      const p1 = getPos(models[i].angle);
      const p2 = getPos(models[j].angle);
      const active = hoveredOrPulsed === i || hoveredOrPulsed === j;
      connections.push({
        x1: p1.x, y1: p1.y,
        x2: p2.x, y2: p2.y,
        key: `${i}-${j}`,
        active,
      });
    }
  }

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

            {connections.map((conn) => (
              <PulsingLine key={conn.key} x1={conn.x1} y1={conn.y1} x2={conn.x2} y2={conn.y2} active={conn.active} />
            ))}

            {models.map((model, index) => (
              <ModelNode
                key={model.name}
                model={model}
                index={index}
                score={scores[index]}
                isActive={hoveredOrPulsed === index}
                onHover={setActiveModel}
              />
            ))}

            <circle cx={cx} cy={cy} r={42} fill="rgba(0,102,255,0.06)" stroke="rgba(0,102,255,0.15)" strokeWidth="1.4" />
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
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
