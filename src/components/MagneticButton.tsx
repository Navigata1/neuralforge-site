"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { ReactNode } from "react";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

function useMagneticMotion() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);
  const translateX = useSpring(x, spring);
  const translateY = useSpring(y, spring);
  const boxShadow = useMotionTemplate`0 16px 40px -28px rgba(15, 23, 42, 0.28), ${translateX}px ${translateY}px 20px -18px rgba(0, 102, 255, 0.18)`;

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.08);
    y.set(offsetY * 0.08);
    rotateX.set(offsetY * -0.03);
    rotateY.set(offsetX * 0.03);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return { onPointerMove, onPointerLeave: reset, translateX, translateY, rotateX, rotateY, boxShadow };
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const { onPointerMove, onPointerLeave, translateX, translateY, rotateX, rotateY, boxShadow } =
    useMagneticMotion();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      whileTap={{ scale: 0.98, y: 1 }}
      transition={spring}
      style={{ x: translateX, y: translateY, rotateX, rotateY, boxShadow }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export function MagneticLink({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  const { onPointerMove, onPointerLeave, translateX, translateY, rotateX, rotateY, boxShadow } =
    useMagneticMotion();

  return (
    <motion.div
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      whileTap={{ scale: 0.98, y: 1 }}
      transition={spring}
      style={{ x: translateX, y: translateY, rotateX, rotateY, boxShadow }}
      className="inline-flex"
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
