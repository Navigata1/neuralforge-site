"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

export default function TextScramble({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const startRef = useRef(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const duration = 1400;
    const chars = text.split("");

    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const result = chars.map((char, i) => {
        if (char === " " || char === ".") return char;
        const charThreshold = i / chars.length;
        if (progress > charThreshold + 0.3) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      setDisplay(result.join(""));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [text]);

  return <span className={className}>{display}</span>;
}
