// src/types/index.ts
// ─── All shared types for Genesis Beasiswa Scout AI ───────────────────────

export interface Scholarship {
  id: number;
  name: string;
  provider: string;
  match: number;
  deadline: string;
  benefit: string;
  link: string;
  /** teal ring = "cyan", green ring = "success" */
  ringColor: "cyan" | "dark";
  /** cyan border highlight */
  highlighted?: boolean;
}

export interface VerificationStep {
  label: string;
  /** delay in ms before this step completes */
  delay: number;
}

export interface UploadDoc {
  key: string;
  label: string;
}

export type FormStep = 1 | 2 | 3 | 4;

export interface FormData {
  nik: string;
  phone: string;
}

export type UploadState = Record<string, boolean>;

export interface NavItem {
  icon: string;
  label: string;
  key: string;
}
