"use client";

import { useEffect, useRef } from "react";

const CONTENT =
  "PSZN ENGINE \u2022 CONSENSUS SCORING \u2022 DOMAIN DRIFT \u2022 CONSENT GATES \u2022 5-LAYER VERIFICATION \u2022 100 DOMAINS \u2022 ";

export default function KineticMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(1);
  const posRef = useRef(0);
  const frameRef = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const delta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      speedRef.current = delta > 0 ? 1 : -1;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      posRef.current += speedRef.current * 0.5;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const repeated = CONTENT.repeat(8);

  return (
    <div className="relative overflow-hidden border-y border-slate-200/60 bg-white/40 backdrop-blur-sm py-4 select-none">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ width: "max-content" }}
      >
        <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.3em] text-slate-400">
          {repeated}
        </span>
        <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.3em] text-slate-400">
          {repeated}
        </span>
      </div>
    </div>
  );
}
