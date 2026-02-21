"use client";

import { motion } from "motion/react";

type SparklePosition = "top-left" | "middle-left" | "bottom-right";

type SparkleConfig = {
  position: SparklePosition;
  color: string;
};

const POSITION_MAP: Record<SparklePosition, string> = {
  "top-left": "top-0 left-24",
  "middle-left": "top-1/2 left-6 -translate-y-1/2",
  "bottom-right": "bottom-20 right-0",
};

const SparkleSVG = ({ color, size = 24 }: { color: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z"
      fill={color}
    />
  </svg>
);

export const Sparkles = ({ sparkles }: { sparkles: SparkleConfig[] }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((sparkle, index) => (
        <div
          key={`${sparkle.position}-${index}`}
          className={`absolute ${POSITION_MAP[sparkle.position]}`}
        >
          {/* Main sparkle - larger */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
              delay: index * 0.2,
            }}
            style={{ filter: `drop-shadow(0 0 10px ${sparkle.color})` }}
          >
            <SparkleSVG color={sparkle.color} size={24} />
          </motion.div>

          {/* Tiny sparkle - larger too */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{
              rotate: [0, -360],
              scale: [0.5, 1, 0.5],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
              delay: index * 0.3,
            }}
            style={{ filter: `drop-shadow(0 0 8px ${sparkle.color})` }}
          >
            <SparkleSVG color={sparkle.color} size={14} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};
