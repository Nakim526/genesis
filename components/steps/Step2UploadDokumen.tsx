// src/components/steps/Step2UploadDokumen.tsx
// ─── Step 2: Upload 4 dokumen — KK, Tagihan Listrik, Sertifikat, Foto Rumah
"use client";

import { UploadIcon, CheckCircleFilledIcon } from "@/components/ui/Icons";
import { UPLOAD_DOCS } from "@/lib/data";
import type { UploadState } from "@/types";

interface Step2Props {
  uploads: UploadState;
  onToggle: (key: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2UploadDokumen({
  uploads,
  onToggle,
  onNext,
  onBack,
}: Step2Props) {
  const uploadedCount = UPLOAD_DOCS.filter((d) => uploads[d.key]).length;
  const canProceed = uploadedCount >= 2;

  return (
    <div className="bg-navy-600 border border-navy-400 rounded-xl p-7">
      <h2 className="text-white font-bold text-[20px] mb-6">Upload Dokumen</h2>

      {/* 2×2 grid of upload cards */}
      <div className="grid grid-cols-2 gap-3.5 mb-6">
        {UPLOAD_DOCS.map((doc) => {
          const done = !!uploads[doc.key];
          return (
            <button
              key={doc.key}
              type="button"
              onClick={() => onToggle(doc.key)}
              className="upload-card flex flex-col items-center gap-3 rounded-xl
                         py-8 px-4 text-center"
              style={{
                border: `2px dashed ${done ? "#22c55e" : "#00e5cc"}`,
                background: done
                  ? "rgba(34,197,94,0.05)"
                  : "rgba(0,229,204,0.03)",
              }}
            >
              {done ? (
                <CheckCircleFilledIcon color="#22c55e" size={32} />
              ) : (
                <UploadIcon color="#00e5cc" size={32} />
              )}
              <div>
                <p className="text-white font-semibold text-[14px] leading-snug">
                  {doc.label}
                </p>
                <p
                  className="text-[12px] mt-1"
                  style={{ color: done ? "#22c55e" : "#7a8ba8" }}
                >
                  {done ? "Terupload" : "Klik untuk upload"}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 bg-transparent border border-navy-400 text-cyan
                     rounded-lg py-[14px] font-semibold text-[15px]
                     hover:border-cyan transition-colors"
        >
          Kembali
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="flex-[2] rounded-lg py-[14px] font-bold text-[15px]
                     transition-all duration-150"
          style={{
            background: canProceed ? "#00e5cc" : "#1e2d45",
            color: canProceed ? "#0a0f1e" : "#7a8ba8",
          }}
        >
          Verifikasi Dokumen
        </button>
      </div>
    </div>
  );
}
