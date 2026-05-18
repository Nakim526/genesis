// src/components/steps/Step4Selesai.tsx
// ─── Step 4: "Verifikasi Selesai!" success state ──────────────────────────
"use client";

import { useEffect, useState } from "react";
import { BigCheckIcon } from "@/components/ui/Icons";
import Link from "next/link";

export default function Step4Selesai() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="bg-navy-600 border border-navy-400 rounded-xl p-12
                 flex flex-col items-center text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.94)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {/* Big check */}
      <div className="mb-5">
        <BigCheckIcon size={72} />
      </div>

      <h2 className="text-white font-extrabold text-[28px] mb-3">
        Verifikasi Selesai!
      </h2>
      <p className="text-muted text-[15px] mb-9">
        Data Anda sedang dianalisis oleh AI agents kami
      </p>

      {/* CTA to dashboard */}
      <Link
        href="/dashboard"
        className="border-2 border-cyan text-cyan font-bold text-[15px]
                   rounded-lg px-8 py-3.5 transition-all duration-200
                   hover:bg-cyan hover:text-navy-900"
      >
        Lihat Hasil Matching
      </Link>
    </div>
  );
}
