# GENESIS — Beasiswa Scout AI

Platform multi-agent AI untuk pemerataan akses beasiswa bagi lulusan SMA/MA/SMK.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Open http://localhost:3000
```

---

## 📁 Struktur Proyek

```
src/
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout + Inter font
│   ├── globals.css              # Global styles, animations
│   ├── page.tsx                 # Landing page (/)
│   ├── input/
│   │   └── page.tsx             # Multi-step form (/input)
│   └── dashboard/
│       └── page.tsx             # Dashboard hasil (/dashboard)
│
├── components/
│   ├── layout/
│   │   └── Navbar.tsx           # Navbar (full/minimal variant)
│   ├── ui/
│   │   ├── Icons.tsx            # All SVG icons
│   │   ├── CircleProgress.tsx   # Animated circular % ring
│   │   ├── StatusPanel.tsx      # "Status Verifikasi" sidebar panel
│   │   ├── StepBar.tsx          # 4-segment progress bar
│   │   └── ScholarshipCard.tsx  # Scholarship result card
│   ├── sections/
│   │   └── HeroSection.tsx      # Landing hero + floating card
│   └── steps/
│       ├── Step1DataPribadi.tsx # NIK + WhatsApp form
│       ├── Step2UploadDokumen.tsx # 4 upload cards
│       ├── Step3Verifikasi.tsx  # Animated checklist
│       └── Step4Selesai.tsx     # Success screen
│
├── lib/
│   ├── data.ts                  # All dummy data constants
│   └── utils.ts                 # cn() helper
│
└── types/
    └── index.ts                 # TypeScript interfaces
```

---

## 🌐 Deploy ke Vercel

### Option A — Vercel CLI (recommended)

```bash
npm i -g vercel
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push repo ke GitHub
2. Buka https://vercel.com/new
3. Import repository
4. Framework: **Next.js** (auto-detect)
5. Klik **Deploy**

---

## 🎨 Design System

| Token | Value | Keterangan |
|---|---|---|
| `bg-navy-900` | `#0a0f1e` | Background utama |
| `bg-navy-600` | `#131929` | Surface card |
| `bg-navy-400` | `#1e2d45` | Border default |
| `text-cyan` | `#00e5cc` | Aksen primer (CTA, heading) |
| `cyan-dark` | `#06b6d4` | Aksen sekunder (ring) |
| `success` | `#22c55e` | Checklist, status done |
| `text-muted` | `#7a8ba8` | Teks sekunder |
| `text-label` | `#94a3b8` | Label & caption |

---

## 📄 Halaman

| Route | Deskripsi |
|---|---|
| `/` | Landing page |
| `/input` | Multi-step form verifikasi (Step 1–4) |
| `/dashboard` | Hasil rekomendasi beasiswa |

---

## 🔧 Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — strict mode
- **Tailwind CSS** — utility styling
- **Inter** — Google Fonts (via next/font)
- **Lucide React** — icons (via custom wrapper)

---

## 📌 Catatan Pengembangan Lanjutan

1. **API Routes** — tambahkan `src/app/api/verify/route.ts` untuk handle submit form
2. **State Management** — gunakan Zustand atau Context API untuk form state antar halaman
3. **Database** — integrasikan Prisma + Supabase untuk menyimpan data pendaftar
4. **Auth** — tambahkan NextAuth.js untuk autentikasi
5. **AI Agent** — integrasikan Anthropic API di server actions
