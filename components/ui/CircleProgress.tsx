// src/components/ui/CircleProgress.tsx
// ─── Animated circular progress ring matching the dashboard match % ────────
"use client";

import { useEffect, useState } from "react";

interface CircleProgressProps {
  /** 0–100 */
  value: number;
  /** stroke color */
  color?: string;
  /** outer diameter in px */
  size?: number;
}

export default function CircleProgress({
  value,
  color = "#00e5cc",
  size = 80,
}: CircleProgressProps) {
  const [animated, setAnimated] = useState(0);
  const radius = 34;
  const circumference = 2 * Math.PI * radius;

  // Animate on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => setAnimated(value));
    return () => cancelAnimationFrame(raf);
  }, [value]);

  const offset = circumference - (animated / 100) * circumference;

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 80 80">
        {/* Track */}
        <circle
          cx="40" cy="40" r={radius}
          fill="none"
          stroke="#1e2d45"
          strokeWidth="6"
        />
        {/* Progress arc */}
        <circle
          cx="40" cy="40" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
          className="circle-progress"
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-white font-bold leading-none" style={{ fontSize: 18 }}>
          {value}%
        </span>
        <span className="text-muted leading-none mt-0.5" style={{ fontSize: 11 }}>
          Match
        </span>
      </div>
    </div>
  );
}
