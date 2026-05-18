// src/components/ui/ScholarshipCard.tsx
// ─── Individual scholarship result card with circle progress ring ──────────
"use client";

import CircleProgress from "@/components/ui/CircleProgress";
import { CheckCircleIcon, CalendarIcon, MoneyIcon } from "@/components/ui/Icons";
import type { Scholarship } from "@/types";

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export default function ScholarshipCard({ scholarship: s }: ScholarshipCardProps) {
  const ringColor = s.ringColor === "cyan" ? "#00e5cc" : "#06b6d4";

  return (
    <div
      className="card-lift bg-navy-600 rounded-xl px-6 py-[22px]
                 flex items-center gap-5"
      style={{
        border: `1px solid ${s.highlighted ? "rgba(0,229,204,0.4)" : "#1e2d45"}`,
        boxShadow: s.highlighted
          ? "0 0 24px rgba(0,229,204,0.08)"
          : undefined,
      }}
    >
      {/* ── Left: info ──────────────────────────────────────────────── */}
      <div className="flex-1 min-w-0">
        {/* Title row */}
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-white font-bold text-[17px] leading-tight">
            {s.name}
          </h3>
          <CheckCircleIcon size={17} color="#22c55e" />
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-8 gap-y-1">
          <div>
            <p className="text-muted text-[12px] mb-1">Deadline</p>
            <div className="flex items-center gap-1.5 text-white text-[14px]">
              <CalendarIcon size={13} />
              {s.deadline}
            </div>
          </div>
          <div>
            <p className="text-muted text-[12px] mb-1">Benefit</p>
            <div className="flex items-center gap-1.5 text-white text-[14px]">
              <MoneyIcon size={13} />
              {s.benefit}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: ring + button ─────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-3 flex-shrink-0">
        <CircleProgress value={s.match} color={ringColor} size={80} />
        <a
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan text-navy-900 font-bold text-[13px]
                     px-[18px] py-2.5 rounded-lg whitespace-nowrap
                     hover:bg-cyan-400 transition-colors"
        >
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
}
