// src/app/input/page.tsx
// ─── Multi-step verification form — Steps 1–4 ────────────────────────────
"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import StepBar from "@/components/ui/StepBar";
import StatusPanel from "@/components/ui/StatusPanel";
import Step1DataPribadi from "@/components/steps/Step1DataPribadi";
import Step2UploadDokumen from "@/components/steps/Step2UploadDokumen";
import Step3Verifikasi from "@/components/steps/Step3Verifikasi";
import Step4Selesai from "@/components/steps/Step4Selesai";
import type { FormData, FormStep, UploadState } from "@/types";

export default function InputPage() {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({ nik: "", phone: "" });
  const [uploads, setUploads] = useState<UploadState>({});

  /** Update a single form field */
  const handleChange = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  /** Toggle an upload doc */
  const handleToggleUpload = (key: string) =>
    setUploads((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Minimal navbar — logo only */}
      <Navbar variant="minimal" />

      <div className="max-w-[960px] mx-auto px-6 md:px-8 py-10">
        {/* Page title */}
        <div className="text-center mb-9">
          <h1 className="text-white font-extrabold text-[28px] mb-2">
            Verifikasi Data Anda
          </h1>
          <p className="text-muted text-[15px]">
            Kami akan memverifikasi data Anda menggunakan teknologi AI terdepan
          </p>
        </div>

        {/* Step progress */}
        <StepBar currentStep={step} totalSteps={4} />

        {/* Step content + right panel */}
        <div className="flex gap-6 items-start">
          {/* ── Main form area ──────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {step === 1 && (
              <Step1DataPribadi
                data={formData}
                onChange={handleChange}
                onNext={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <Step2UploadDokumen
                uploads={uploads}
                onToggle={handleToggleUpload}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}

            {step === 3 && (
              <Step3Verifikasi onNext={() => setStep(4)} />
            )}

            {step === 4 && <Step4Selesai />}
          </div>

          {/* ── Right: Status Verifikasi panel ──────────────── */}
          <StatusPanel />
        </div>
      </div>
    </div>
  );
}
