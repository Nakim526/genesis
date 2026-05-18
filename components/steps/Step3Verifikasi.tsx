// src/components/steps/Step3Verifikasi.tsx
// ─── Step 3: Animated verification checklist ──────────────────────────────
"use client";

import { useEffect, useState } from "react";
import { CheckCircleIcon, DotsIcon } from "@/components/ui/Icons";
import { VERIFICATION_STEPS } from "@/lib/data";

interface Step3Props {
  onNext: () => void;
}

export default function Step3Verifikasi({ onNext }: Step3Props) {
  // Track which steps have completed
  const [done, setDone] = useState<boolean[]>(
    VERIFICATION_STEPS.map(() => false)
  );

  useEffect(() => {
    const timers = VERIFICATION_STEPS.map((step, i) =>
      setTimeout(() => {
        setDone((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, step.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const allDone = done.every(Boolean);

  return (
    <div className="bg-navy-600 border border-navy-400 rounded-xl p-7">
      <h2 className="text-white font-bold text-[20px] mb-6">Verifikasi Data</h2>

      {/* Step rows */}
      <div className="flex flex-col gap-3 mb-7">
        {VERIFICATION_STEPS.map((step, i) => (
          <div
            key={i}
            className="verif-row flex items-center gap-4 bg-navy-900 rounded-lg
                       px-[18px] py-4"
            style={{
              border: `1px solid ${done[i] ? "rgba(34,197,94,0.3)" : "#1e2d45"}`,
            }}
          >
            {done[i] ? (
              <CheckCircleIcon size={22} color="#22c55e" />
            ) : (
              <DotsIcon size={22} />
            )}
            <span
              className="text-[15px] font-medium transition-colors duration-300"
              style={{ color: done[i] ? "#fff" : "#7a8ba8" }}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Lanjut button — enabled only when all done */}
      <button
        onClick={onNext}
        disabled={!allDone}
        className="w-full rounded-lg py-[15px] font-bold text-[16px]
                   transition-all duration-300"
        style={{
          background: allDone ? "#00e5cc" : "#1e2d45",
          color: allDone ? "#0a0f1e" : "#7a8ba8",
        }}
      >
        Lanjut
      </button>
    </div>
  );
}
