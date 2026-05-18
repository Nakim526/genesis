// src/app/dashboard/page.tsx
// ─── Dashboard: collapsible sidebar + scholarship cards + AI analysis ──────
"use client";

import { useState } from "react";
import Link from "next/link";
import { BoltIcon, MenuIcon, CloseIcon, CheckCircleIcon, ArrowRightIcon } from "@/components/ui/Icons";
import ScholarshipCard from "@/components/ui/ScholarshipCard";
import {
  SCHOLARSHIPS,
  SIDEBAR_NAV,
  AI_ANALYSIS_ITEMS,
  NEXT_STEPS_ITEMS,
} from "@/lib/data";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-navy-900 flex">
      {/* ── Collapsible Sidebar ──────────────────────────────────────── */}
      <aside
        className="flex-shrink-0 bg-navy-800 border-r border-navy-400
                   overflow-hidden transition-all duration-300 ease-in-out
                   flex flex-col pt-4"
        style={{ width: sidebarOpen ? 220 : 0 }}
      >
        {SIDEBAR_NAV.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveNav(item.key)}
            className="flex items-center gap-3 px-5 py-3.5 text-left w-full
                       transition-colors duration-150 whitespace-nowrap"
            style={{
              background: activeNav === item.key ? "#131929" : "transparent",
              borderLeft: `3px solid ${activeNav === item.key ? "#00e5cc" : "transparent"}`,
              color: activeNav === item.key ? "#fff" : "#7a8ba8",
              fontSize: 14,
            }}
          >
            <span className="text-[16px]">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </aside>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ── Top navigation bar ──────────────────────────────────────── */}
        <nav className="flex items-center gap-4 px-8 py-[16px] border-b border-navy-400">
          <button
            onClick={() => setSidebarOpen((o) => !o)}
            className="p-1 hover:opacity-80 transition-opacity"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <CloseIcon size={20} /> : <MenuIcon size={22} />}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <BoltIcon size={20} />
            <span className="text-white font-extrabold text-[16px] tracking-[0.08em]">
              GENESIS
            </span>
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Back to form */}
          <Link
            href="/input"
            className="flex items-center gap-1.5 text-muted text-[13px]
                       hover:text-cyan transition-colors"
          >
            <ArrowRightIcon size={13} className="rotate-180" />
            Form baru
          </Link>
        </nav>

        {/* ── Scrollable content ───────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <h1 className="text-white font-bold text-[22px] mb-5">
            Rekomendasi Beasiswa
          </h1>

          {/* Scholarship cards */}
          <div className="flex flex-col gap-4 mb-6">
            {SCHOLARSHIPS.map((s) => (
              <ScholarshipCard key={s.id} scholarship={s} />
            ))}
          </div>

          {/* ── Bottom 2-col: AI Analysis + Next Steps ─────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AI Analysis */}
            <div className="bg-navy-600 border border-navy-400 rounded-xl p-[22px]">
              <h3 className="text-cyan font-bold text-[15px] mb-4 flex items-center gap-2">
                📊 Analisis AI
              </h3>
              <div className="flex flex-col gap-2.5">
                {AI_ANALYSIS_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-cyan text-[13px] flex-shrink-0 mt-px">
                      →
                    </span>
                    <span className="text-label text-[13px] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-navy-600 border border-navy-400 rounded-xl p-[22px]">
              <h3 className="text-cyan font-bold text-[15px] mb-4 flex items-center gap-2">
                🎯 Next Steps
              </h3>
              <div className="flex flex-col gap-2.5">
                {NEXT_STEPS_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircleIcon
                      size={15}
                      color="#22c55e"
                      className="flex-shrink-0 mt-0.5"
                    />
                    <span className="text-label text-[13px] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
