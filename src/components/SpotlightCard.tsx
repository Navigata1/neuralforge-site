"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { ReactNode } from "react";

export default function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(0,102,255,0.12), transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(0,102,255,0.35), rgba(148,163,184,0.22) 70%)`;

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const onPointerLeave = () => {
    mouseX.set(-400);
    mouseY.set(-400);
  };

  return (
    <motion.div
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`group relative overflow-hidden rounded-[1.9rem] ${className}`}
    >
      {/* Animated border layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[1.9rem] z-10"
        style={{
          background: border,
          WebkitMaskImage: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      {/* Inner glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[1.9rem] z-0 opacity-60"
        style={{ background }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
