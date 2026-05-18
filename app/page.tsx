// src/app/page.tsx
// ─── Landing page with dot-grid background, hero section ─────────────────

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-navy-900 overflow-hidden">
      {/* ── Dot grid background ─────────────────────────────── */}
      <div
        className="absolute inset-0 bg-dot-grid bg-dot-32 pointer-events-none"
        style={{ opacity: 0.35 }}
      />

      {/* ── Ambient glow blobs ──────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -120, left: -120, width: 480, height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,229,204,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: 80, right: -80, width: 380, height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -60, right: 200, width: 300, height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,229,204,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ── Navigation ─────────────────────────────────────── */}
      <Navbar variant="full" />

      {/* ── Hero ───────────────────────────────────────────── */}
      <HeroSection />
    </main>
  );
}
