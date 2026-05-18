// src/lib/data.ts
// ─── Realistic dummy data for Genesis Beasiswa Scout AI ───────────────────

import type { Scholarship, VerificationStep, UploadDoc, NavItem } from "@/types";

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 1,
    name: "KIP Kuliah 2025",
    provider: "Kemdiktisaintek RI",
    match: 96,
    deadline: "31 Des 2025",
    benefit: "Rp500.000 – Rp1.000.000 per semester",
    link: "https://kip-kuliah.kemdikbud.go.id",
    ringColor: "cyan",
  },
  {
    id: 2,
    name: "Beasiswa Unggulan 2025",
    provider: "Kemendikbud RI",
    match: 89,
    deadline: "15 Jan 2026",
    benefit: "Rp1.000.000 per semester + akomodasi",
    link: "https://beasiswaunggulan.kemdikbud.go.id",
    ringColor: "dark",
    highlighted: true,
  },
  {
    id: 3,
    name: "BSI Scholarship 2025",
    provider: "Bank Syariah Indonesia",
    match: 84,
    deadline: "28 Feb 2026",
    benefit: "Rp750.000 per semester",
    link: "https://bsi.co.id/beasiswa",
    ringColor: "dark",
  },
  {
    id: 4,
    name: "Beasiswa LPDP Reguler 2025",
    provider: "Kementerian Keuangan RI",
    match: 76,
    deadline: "30 Apr 2026",
    benefit: "Full biaya kuliah + biaya hidup",
    link: "https://lpdp.kemenkeu.go.id",
    ringColor: "dark",
  },
];

export const VERIFICATION_STEPS: VerificationStep[] = [
  { label: "OCR Scanning", delay: 700 },
  { label: "AI Reasoning", delay: 1600 },
  { label: "Sync DTKS", delay: 2500 },
  { label: "Sync Dapodik", delay: 3400 },
];

export const UPLOAD_DOCS: UploadDoc[] = [
  { key: "kk", label: "Kartu Keluarga" },
  { key: "listrik", label: "Tagihan Listrik" },
  { key: "prestasi", label: "Sertifikat Prestasi" },
  { key: "rumah", label: "Foto Rumah" },
];

export const AI_ANALYSIS_ITEMS: string[] = [
  "Data Collector: Mengumpulkan profil lengkap",
  "Verification: Dokumen sudah terverifikasi",
  "Matching: 4 beasiswa paling cocok ditemukan",
  "Notifikasi: Akan dikirim saat ada beasiswa baru",
];

export const NEXT_STEPS_ITEMS: string[] = [
  "Siapkan dokumen tambahan jika diminta",
  "Pantau notifikasi WhatsApp Anda",
  "Daftar beasiswa sesuai deadline",
  "Hubungi support jika ada pertanyaan",
];

export const SIDEBAR_NAV: NavItem[] = [
  { icon: "🔔", label: "Notification Center", key: "notif" },
  { icon: "🕐", label: "History", key: "history" },
  { icon: "⚙️", label: "Settings", key: "settings" },
];
