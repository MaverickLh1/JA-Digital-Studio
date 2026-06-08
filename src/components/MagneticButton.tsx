"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  ariaLabel,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { x: springX, y: springY },
    className,
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...sharedProps}>
      {children}
    </motion.button>
  );
}
