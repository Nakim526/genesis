// src/components/steps/Step1DataPribadi.tsx
// ─── Step 1: NIK Orang Tua + Nomor WhatsApp ───────────────────────────────
"use client";

import { UserIcon, PhoneIcon } from "@/components/ui/Icons";
import type { FormData } from "@/types";

interface Step1Props {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
}

export default function Step1DataPribadi({ data, onChange, onNext }: Step1Props) {
  const isValid = data.nik.trim().length === 16 && data.phone.trim().length >= 10;

  return (
    <div className="bg-navy-600 border border-navy-400 rounded-xl p-7">
      <h2 className="text-white font-bold text-[20px] mb-6">Data Pribadi</h2>

      {/* NIK field */}
      <div className="mb-5">
        <label className="flex items-center gap-2 text-label text-[13px] mb-2">
          <UserIcon size={15} />
          NIK Orang Tua
        </label>
        <input
          type="text"
          inputMode="numeric"
          maxLength={16}
          placeholder="Masukkan NIK (16 digit)"
          value={data.nik}
          onChange={(e) => onChange("nik", e.target.value.replace(/\D/g, ""))}
          className="w-full bg-navy-900 border rounded-lg px-4 py-[14px]
                     text-white text-[15px] placeholder-[#3d4f6a]"
          style={{
            borderColor: data.nik ? "#00e5cc" : "#1e2d45",
          }}
        />
      </div>

      {/* WhatsApp field */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-label text-[13px] mb-2">
          <PhoneIcon size={15} />
          Nomor WhatsApp
        </label>
        <input
          type="tel"
          placeholder="08xx xxxx xxxx"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="w-full bg-navy-900 border rounded-lg px-4 py-[14px]
                     text-white text-[15px] placeholder-[#3d4f6a]"
          style={{
            borderColor: data.phone ? "#00e5cc" : "#1e2d45",
          }}
        />
      </div>

      {/* CTA button */}
      <button
        onClick={onNext}
        disabled={!isValid}
        className="w-full rounded-lg py-[15px] font-bold text-[16px]
                   transition-all duration-150"
        style={{
          background: isValid ? "#00e5cc" : "#1e2d45",
          color: isValid ? "#0a0f1e" : "#7a8ba8",
        }}
      >
        Lanjut ke Upload Dokumen
      </button>
    </div>
  );
}
