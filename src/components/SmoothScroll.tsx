"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      {/* reducedMotion="user": las animaciones de motion respetan la
          preferencia del sistema "reducir movimiento" */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}
