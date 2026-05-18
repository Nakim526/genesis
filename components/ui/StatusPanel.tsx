// src/components/ui/StatusPanel.tsx
// ─── Right-side "Status Verifikasi" panel — visible on all form steps ──────

import {
  CheckCircleIcon,
  EyeIcon,
  DocIcon,
} from "@/components/ui/Icons";

export default function StatusPanel() {
  return (
    <aside
      className="hidden lg:flex flex-col gap-4 flex-shrink-0
                 bg-navy-600 border border-navy-400 rounded-xl p-5"
      style={{ width: 260 }}
    >
      {/* Header */}
      <h3 className="text-cyan font-bold text-[16px] mb-1">Status Verifikasi</h3>

      {/* Row 1 — pulsing clock */}
      <div className="flex items-start gap-3">
        <div
          className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 border-cyan
                     flex items-center justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-cyan dot-pulse" />
        </div>
        <div>
          <p className="text-white text-[13px] font-medium leading-snug">
            AI sedang memverifikasi data...
          </p>
          <p className="text-muted text-[12px] mt-0.5">Proses berjalan realtime</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-navy-400" />

      {/* Status rows */}
      <div className="flex items-center gap-3">
        <EyeIcon size={18} />
        <span className="text-white text-[13px]">OCR scanning aktif</span>
      </div>

      <div className="flex items-center gap-3">
        <DocIcon size={18} />
        <span className="text-white text-[13px]">Reasoning AI berjalan</span>
      </div>

      <div className="flex items-center gap-3">
        <CheckCircleIcon size={18} color="#22c55e" />
        <span className="text-label text-[13px]">Syncing DTKS</span>
      </div>

      <div className="flex items-center gap-3">
        <CheckCircleIcon size={18} color="#22c55e" />
        <span className="text-label text-[13px]">Syncing Dapodik</span>
      </div>

      {/* Tips card */}
      <div
        className="rounded-lg p-3 mt-1"
        style={{
          background: "rgba(0,229,204,0.05)",
          border: "1px solid rgba(0,229,204,0.15)",
        }}
      >
        <p className="text-cyan text-[12px] font-semibold mb-1">💡 Tips:</p>
        <p className="text-label text-[12px] leading-relaxed">
          Pastikan dokumen jelas dan terbaca untuk hasil verifikasi terbaik
        </p>
      </div>
    </aside>
  );
}
