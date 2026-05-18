// src/components/sections/HeroSection.tsx
// ─── Landing hero: left text + right floating Dashboard AI card ───────────
"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center px-8 md:px-12 gap-12 lg:gap-20"
      style={{ minHeight: "calc(100vh - 73px)" }}
    >
      {/* ── Left — text block ─────────────────────────────────────────── */}
      <div className="flex-1 animate-fade-up">
        {/* Headline */}
        <h1 className="leading-[1.04] mb-5">
          <span
            className="block font-black"
            style={{ color: "#00e5cc", fontSize: "clamp(40px,6vw,60px)" }}
          >
            GENESIS
          </span>
          <span
            className="block text-white font-extrabold"
            style={{ fontSize: "clamp(36px,5.5vw,54px)" }}
          >
            Sistem Multi-
          </span>
          <span
            className="block text-white font-extrabold"
            style={{ fontSize: "clamp(36px,5.5vw,54px)" }}
          >
            Agent AI
          </span>
        </h1>

        <h2 className="text-white font-semibold text-[20px] mb-3">
          Pemerataan Akses Beasiswa
        </h2>

        <p className="text-muted text-[15px] italic mb-9">
          "Beasiswa untuk yang tepat, bukan yang beruntung."
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3.5">
          <Link
            href="/input"
            className="flex items-center gap-2 bg-cyan text-navy-900 font-bold
                       text-[15px] px-6 py-[13px] rounded-lg
                       hover:bg-cyan-400 transition-colors"
          >
            Cek Kelayakan Beasiswa <ArrowRightIcon size={16} />
          </Link>

          <Link
            href="#cara-kerja"
            className="flex items-center gap-2 text-white font-semibold
                       text-[15px] px-6 py-[13px] rounded-lg border-2
                       border-navy-400 hover:border-cyan transition-colors"
          >
            Lihat Cara Kerja AI <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>

      {/* ── Right — floating dashboard preview card ────────────────────── */}
      <div className="hidden lg:block flex-shrink-0 animate-fade-up-delay"
           style={{ width: 340 }}>
        {/* Main card */}
        <div
          className="relative bg-navy-600 border border-navy-400 rounded-2xl p-5"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
        >
          {/* Card header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-cyan font-bold text-[15px]">Dashboard AI</span>
            {/* Green pulse dot */}
            <span
              className="w-2.5 h-2.5 rounded-full bg-success dot-pulse"
            />
          </div>

          {/* Scholarship rows */}
          {[
            { name: "KIP Kuliah", pct: "95%", color: "#22c55e" },
            { name: "Beasiswa Unggulan", pct: "90%", color: "#06b6d4" },
            { name: "BSI Scholarship", pct: "85%", color: "#06b6d4" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between bg-navy-900
                         rounded-lg px-3.5 py-3 mb-2 last:mb-0"
            >
              <span className="text-white text-[14px] font-medium">
                {item.name}
              </span>
              <span className="font-bold text-[14px]" style={{ color: item.color }}>
                {item.pct}
              </span>
            </div>
          ))}
        </div>

        {/* Ghost / depth card behind */}
        <div
          className="relative mx-4 h-4 -mt-2 rounded-b-2xl border border-navy-400"
          style={{ background: "#0d1525", opacity: 0.7, zIndex: -1 }}
        />
      </div>
    </section>
  );
}
