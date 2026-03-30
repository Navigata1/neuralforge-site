'use client';

import { useEffect, useState } from 'react';

const models = [
  { name: 'GPT-5', color: '#00d4ff', angle: 0 },
  { name: 'Claude', color: '#3366ff', angle: 72 },
  { name: 'Gemini', color: '#22d3ee', angle: 144 },
  { name: 'Grok', color: '#66b2ff', angle: 216 },
  { name: 'DeepSeek', color: '#0099cc', angle: 288 },
];

export default function ConsensusViz() {
  const [scores, setScores] = useState(models.map(() => 0));
  const [consensus, setConsensus] = useState(0);
  const [activeModel, setActiveModel] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      const newScores = models.map(() => 75 + Math.random() * 23);
      setScores(newScores);
      const avg = newScores.reduce((a, b) => a + b, 0) / newScores.length;
      setConsensus(Math.round(avg));
    }, 3000);

    // Initial
    const init = models.map(() => 75 + Math.random() * 23);
    setScores(init);
    setConsensus(Math.round(init.reduce((a, b) => a + b, 0) / init.length));

    // Cycle active model
    let modelIdx = 0;
    const modelInterval = setInterval(() => {
      setActiveModel(modelIdx % models.length);
      modelIdx++;
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(modelInterval);
    };
  }, []);

  const cx = 200;
  const cy = 200;
  const radius = 140;

  return (
    <div className="relative w-[400px] h-[400px]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-forge-cyan/5 rounded-full blur-[60px]" />

      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={radius + 20} fill="none" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(0,212,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Connection lines between models */}
        {models.map((model, i) => {
          const x1 = cx + radius * Math.cos((model.angle - 90) * Math.PI / 180);
          const y1 = cy + radius * Math.sin((model.angle - 90) * Math.PI / 180);
          return models.slice(i + 1).map((model2, j) => {
            const x2 = cx + radius * Math.cos((model2.angle - 90) * Math.PI / 180);
            const y2 = cy + radius * Math.sin((model2.angle - 90) * Math.PI / 180);
            return (
              <line
                key={`${i}-${j}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(0,212,255,0.08)"
                strokeWidth="1"
              />
            );
          });
        })}

        {/* Model nodes */}
        {models.map((model, i) => {
          const x = cx + radius * Math.cos((model.angle - 90) * Math.PI / 180);
          const y = cy + radius * Math.sin((model.angle - 90) * Math.PI / 180);
          const isActive = activeModel === i;
          const score = scores[i];

          return (
            <g key={model.name}>
              {/* Pulse ring */}
              <circle
                cx={x} cy={y} r={isActive ? 28 : 22}
                fill="none"
                stroke={model.color}
                strokeWidth="1"
                opacity={isActive ? 0.5 : 0.15}
                style={{ transition: 'all 0.5s ease' }}
              />
              {/* Node */}
              <circle
                cx={x} cy={y} r={isActive ? 18 : 14}
                fill={`${model.color}20`}
                stroke={model.color}
                strokeWidth={isActive ? 2 : 1}
                style={{ transition: 'all 0.3s ease' }}
              />
              {/* Score */}
              <text
                x={x} y={y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={model.color}
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="600"
              >
                {Math.round(score)}
              </text>
              {/* Label */}
              <text
                x={x}
                y={y + (model.angle > 90 && model.angle < 270 ? 36 : -30)}
                textAnchor="middle"
                fill="rgba(224,224,255,0.6)"
                fontSize="11"
                fontFamily="Geist, sans-serif"
                fontWeight="500"
              >
                {model.name}
              </text>

              {/* Data flow line to center */}
              {isActive && (
                <line
                  x1={x} y1={y} x2={cx} y2={cy}
                  stroke={model.color}
                  strokeWidth="1.5"
                  opacity="0.4"
                  strokeDasharray="3 3"
                >
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                </line>
              )}
            </g>
          );
        })}

        {/* Center consensus hub */}
        <circle cx={cx} cy={cy} r={40} fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.2)" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r={30} fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />

        {/* PSZN label */}
        <text x={cx} y={cy - 8} textAnchor="middle" fill="rgba(0,212,255,0.7)" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="2">
          PSZN
        </text>
        {/* Consensus score */}
        <text x={cx} y={cy + 12} textAnchor="middle" fill="#00d4ff" fontSize="20" fontFamily="JetBrains Mono" fontWeight="700">
          {consensus}%
        </text>
      </svg>

      {/* Labels */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <div className="text-[10px] text-forge-muted font-mono tracking-wider uppercase">
          Live Consensus Score
        </div>
      </div>
    </div>
  );
}
