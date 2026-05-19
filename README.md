# GENESIS — Sistem Multi-Agent AI untuk Pemerataan Akses Beasiswa

<div align="center">

**"Beasiswa untuk yang tepat, bukan yang beruntung."**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

</div>

---

## Mengapa GENESIS Ada?

Setiap tahun, ratusan ribu lulusan SMA/MA/SMK di Indonesia tidak melanjutkan pendidikan ke perguruan tinggi — bukan karena kurang berprestasi, melainkan karena dua masalah yang saling berkaitan: **keterbatasan ekonomi** dan **kesenjangan informasi**.

Beasiswa pemerintah seperti KIP Kuliah, Beasiswa Unggulan, hingga LPDP tersedia dalam jumlah besar. Namun akses terhadap informasi ini tidak merata. Siswa di kota besar dengan guru BK yang aktif dan koneksi internet yang baik jauh lebih mudah menemukan dan mendaftar beasiswa dibanding siswa dari daerah terpencil yang prestasinya justru mungkin lebih layak.

**GENESIS hadir untuk menutup kesenjangan itu.** Bukan sekadar portal informasi beasiswa, melainkan sebuah sistem yang secara aktif menganalisis profil setiap siswa, mencocokkannya dengan beasiswa yang paling relevan, dan mengirimkan notifikasi langsung ke genggaman mereka — bahkan saat mereka sedang tidak membuka website.

---

## Daftar Isi

1. [Gambaran Sistem](#1-gambaran-sistem)
2. [Alur Kerja Lengkap](#2-alur-kerja-lengkap)
3. [Fitur yang Sudah Berjalan](#3-fitur-yang-sudah-berjalan)
4. [Fitur yang Direncanakan & Kendalanya](#4-fitur-yang-direncanakan--kendalanya)
5. [Arsitektur Teknis](#5-arsitektur-teknis)
6. [Struktur Proyek](#6-struktur-proyek)
7. [Design System](#7-design-system)
8. [Quick Start & Deploy](#8-quick-start--deploy)
9. [Roadmap Menuju Produk Penuh](#9-roadmap-menuju-produk-penuh)
10. [Penutup untuk Investor & Juri](#10-penutup-untuk-investor--juri)

---

## 1. Gambaran Sistem

GENESIS adalah platform web berbasis **sistem multi-agent AI** — bukan satu model AI yang mengerjakan segalanya, melainkan empat agen AI yang bekerja secara berurutan, masing-masing dengan spesialisasi dan tanggung jawab yang berbeda.

### Empat Agen Inti

```
 AGENT 1           AGENT 2           AGENT 3          AGENT 4
 ──────────        ──────────        ──────────        ──────────
 Data              Verifikasi        Matching &        Proactive
 Collector         Agent             Scoring           Notification

 Kumpulkan         Periksa           Cocokkan          Kirim
 data dari         keaslian          profil vs         notifikasi
 3 sumber          dokumen &         syarat            dan pantau
 eksternal         data NIK          beasiswa          24 jam
```

Sistem ini dirancang agar **siswa tidak perlu aktif mencari** — cukup daftar sekali, dan sistem yang terus bekerja untuk mereka di latar belakang.

### Siapa Penggunanya?

| Pengguna | Kebutuhan | Yang Didapat dari GENESIS |
|---|---|---|
| **Lulusan SMA/MA/SMK** | Informasi beasiswa yang relevan | Rekomendasi personal berdasarkan profil ekonomi & akademik |
| **Keluarga kurang mampu** | Bantuan navigasi sistem beasiswa yang kompleks | Panduan langkah demi langkah + notifikasi deadline |
| **Penyelenggara beasiswa** | Kandidat terverifikasi | Data tervalidasi yang mempercepat proses seleksi |
| **Pemerintah/Dinas Pendidikan** | Pemerataan distribusi beasiswa | Jangkauan ke daerah yang selama ini kurang tersentuh |

---

## 2. Alur Kerja Lengkap

Berikut adalah perjalanan lengkap seorang siswa dari pertama membuka GENESIS hingga mendapatkan notifikasi beasiswa. Diagram ini menggambarkan sistem dalam kondisi **terintegrasi penuh** sebagai visi yang sedang dibangun secara bertahap.

```
╔══════════════════════════════════════════════════════════════════╗
║                      SISWA (Browser)                             ║
║  Buka genesis.id → Klik "Cek Kelayakan Beasiswa"                 ║
╚══════════════════════╦═══════════════════════════════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════════════════════════════╗
║  STEP 1 — Input Data Pribadi              [ /input, langkah 1/4 ]║
║                                                                  ║
║  • NIK Orang Tua (16 digit)                                      ║
║  • Nomor WhatsApp (untuk notifikasi utama)                       ║
║                                                                  ║
║  → Validasi format lokal sebelum lanjut                          ║
║  → Data tersimpan ke database (prototype: di browser state)      ║
╚══════════════════════╦═══════════════════════════════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════════════════════════════╗
║  STEP 2 — Upload Dokumen Pendukung        [ /input, langkah 2/4 ]║
║                                                                  ║
║  • Kartu Keluarga ........... validasi NIK & jumlah tanggungan   ║
║  • Tagihan Listrik .......... indikator kondisi ekonomi rumah    ║
║  • Sertifikat Prestasi ...... bukti capaian akademik/non-akademik║
║  • Foto Rumah ............... verifikasi kondisi tempat tinggal  ║
║                                                                  ║
║  → Minimal 2 dari 4 dokumen wajib diupload untuk lanjut          ║
║  → File dikirim ke cloud storage (prototype: hanya toggle UI)    ║
╚══════════════════════╦═══════════════════════════════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════════════════════════════╗
║  STEP 3 — Proses Verifikasi Background    [ /input, langkah 3/4 ]║
║                                                                  ║
║  Empat proses berjalan berurutan:                                ║
║                                                                  ║
║  [1] OCR Scanning                                                ║
║      Tagihan listrik → nominal, nama, alamat                     ║
║      KK → jumlah anggota, pekerjaan orang tua                   ║
║      Sertifikat → jenis penghargaan, level, tahun                ║
║                                                                  ║
║  [2] AI Reasoning                                                ║
║      Analisis konsistensi data yang diekstrak OCR                ║
║      Apakah nominal tagihan sesuai klaim ekonomi?                ║
║      Apakah sertifikat sesuai riwayat sekolah?                   ║
║                                                                  ║
║  [3] Sync DTKS (Data Terpadu Kesejahteraan Sosial — Kemensos)    ║
║      Query database nasional via NIK                             ║
║      Ambil: status ekonomi, tanggungan, kepemilikan aset         ║
║      → Hitung skor kelayakan ekonomi (0–100)                     ║
║                                                                  ║
║  [4] Sync DAPODIK (Data Pokok Pendidikan — Kemdikbud)            ║
║      Query database pendidikan nasional via NIK                  ║
║      Ambil: nilai rapor, riwayat sekolah, kehadiran              ║
║      → Hitung skor akademik (0–100)                              ║
║                                                                  ║
║  Output: profil terverifikasi + trust score                      ║
║  Jika trust score < 60 → ditandai untuk review manual            ║
╚══════════════════════╦═══════════════════════════════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════════════════════════════╗
║  STEP 4 — Verifikasi Selesai              [ /input, langkah 4/4 ]║
║                                                                  ║
║  Profil berhasil diverifikasi.                                   ║
║  Agent matching mulai bekerja di latar belakang.                 ║
║  → "Lihat Hasil Matching" menuju /dashboard                      ║
╚══════════════════════╦═══════════════════════════════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════════════════════════════╗
║  AGENT 3 — Matching & Scoring                  [ background job ]║
║                                                                  ║
║  Input profil:                                                   ║
║    skor_ekonomi    = 82  (dari DTKS)                             ║
║    skor_akademik   = 91  (dari DAPODIK + dokumen)                ║
║    skor_pengalaman = 70  (dari sertifikat OCR)                   ║
║    domisili        = "Sulawesi Selatan"                          ║
║                                                                  ║
║  Proses:                                                         ║
║    1. Vector similarity search → profil vs syarat beasiswa       ║
║    2. Hard filter: jalur, domisili, GPA minimum                  ║
║    3. Weighted scoring: ekonomi(40%)+akademik(35%)+pengalaman(25%)
║    4. LLM reasoning → tulis alasan per rekomendasi               ║
║                                                                  ║
║  Output:                                                         ║
║    KIP Kuliah 2025        → 96% match  ← SANGAT DISARANKAN      ║
║    Beasiswa Unggulan 2025 → 89% match                            ║
║    BSI Scholarship 2025   → 84% match                            ║
║    LPDP Reguler 2025      → 76% match                            ║
╚══════════════════════╦═══════════════════════════════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════════════════════════════╗
║  DASHBOARD — Hasil Rekomendasi Personal          [ /dashboard ]  ║
║                                                                  ║
║  • Daftar beasiswa diurutkan berdasarkan % kecocokan             ║
║  • Deadline, nominal benefit, dan link pendaftaran resmi         ║
║  • Analisis AI: ringkasan proses keempat agent                   ║
║  • Next Steps: panduan tindakan konkret                          ║
╚══════════════════════╦═══════════════════════════════════════════╝
                       ║
                       ▼
╔══════════════════════════════════════════════════════════════════╗
║  AGENT 4 — Proactive Notification    [ berjalan 24 jam nonstop ] ║
║                                                                  ║
║  • Kirim notifikasi pertama via WhatsApp → hasil analisis        ║
║  • Pantau database beasiswa baru setiap hari (cron job)          ║
║  • Jika beasiswa baru cocok dengan profil → notif real-time      ║
║  • H-7 sebelum deadline → kirim reminder otomatis               ║
║                                                                  ║
║  Channel: WhatsApp → SMS → Email (berdasarkan prioritas)         ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## 3. Fitur yang Sudah Berjalan

> Versi ini adalah **prototype fungsional berbasis frontend** — seluruh antarmuka, navigasi, animasi, dan alur pengguna sudah selesai dibangun dan berjalan di browser tanpa memerlukan backend apapun.

---

### 3.1 Landing Page (`/`)

Halaman pertama yang dilihat pengguna. Dirancang untuk menyampaikan proposisi nilai GENESIS dalam hitungan detik.

**Yang benar-benar berjalan:**

- Hero section dengan headline tiga baris bertahap, tagline, dan dua tombol CTA yang keduanya fungsional sebagai navigasi
- Floating card "Dashboard AI" di sisi kanan menampilkan pratinjau tiga beasiswa dengan persentase skor — ini adalah preview visual dari output sistem yang akan dilihat setelah analisis
- Latar belakang dot-grid dengan tiga efek ambient glow berbeda posisi — memberikan kedalaman visual tanpa gambar eksternal
- Navbar lengkap dengan tiga tautan navigasi (Fitur, Cara Kerja, Impact) dan tombol "Cek Kelayakan" yang mengarah ke `/input`
- Responsif: floating card tersembunyi di layar kecil, layout menyesuaikan viewport secara otomatis
- Animasi fade-up saat halaman pertama dimuat — elemen kiri muncul 0ms, floating card muncul 200ms setelahnya

**File:** `src/app/page.tsx`, `src/components/sections/HeroSection.tsx`, `src/components/layout/Navbar.tsx`

---

### 3.2 Form Verifikasi 4 Langkah (`/input`)

Inti dari pengalaman pengguna. Empat langkah yang membawa siswa dari input data mentah hingga menunggu hasil analisis. Seluruh state dikelola secara terpusat di `src/app/input/page.tsx`.

```
State yang dikelola:
  step      : FormStep (1 | 2 | 3 | 4)      — navigasi antar langkah
  formData  : { nik: string, phone: string } — data yang diisi user
  uploads   : Record<string, boolean>        — status tiap kartu dokumen
```

**Step 1 — Data Pribadi** (`src/components/steps/Step1DataPribadi.tsx`)

- Field NIK memblokir input non-numerik secara otomatis, dibatasi tepat 16 karakter
- Field WhatsApp menerima format nomor Indonesia (08xx) dengan validasi panjang minimum 10 karakter
- Tombol "Lanjut" hanya aktif ketika NIK = 16 digit **dan** WhatsApp ≥ 10 karakter — keduanya harus terpenuhi
- Border field berubah dari gelap (`#1e2d45`) menjadi cyan (`#00e5cc`) saat ada input — umpan balik visual instan
- Panel "Status Verifikasi" tampil di sisi kanan dengan indikator pulsing yang menunjukkan sistem sedang siap

**Step 2 — Upload Dokumen** (`src/components/steps/Step2UploadDokumen.tsx`)

- Empat kartu dokumen dalam grid 2×2: Kartu Keluarga, Tagihan Listrik, Sertifikat Prestasi, Foto Rumah
- Klik kartu mengubah tampilannya: ikon upload (↑, border dashed cyan) → ikon centang (✓, border hijau)
- Minimal 2 dari 4 kartu harus dalam status "uploaded" sebelum tombol "Verifikasi Dokumen" aktif
- Hover pada kartu memberikan efek lift (`translateY(-2px)`) — indikasi elemen interaktif
- Tombol "Kembali" membawa ke Step 1 tanpa kehilangan data yang sudah diisi

> **Transparansi:** Klik kartu upload hanya mengubah nilai boolean di React state — belum ada `<input type="file">` dan tidak ada file yang berpindah ke server. Ini adalah keputusan sadar untuk prototype: memvalidasi alur UX terlebih dahulu sebelum membangun infrastruktur file upload.

**Step 3 — Verifikasi Data** (`src/components/steps/Step3Verifikasi.tsx`)

- Empat baris proses: OCR Scanning, AI Reasoning, Sync DTKS, Sync Dapodik
- Setiap baris dimulai dengan ikon titik-titik (pending), berubah menjadi centang hijau setelah jeda berbeda:
  - OCR Scanning → selesai setelah 700ms
  - AI Reasoning → selesai setelah 1.600ms
  - Sync DTKS → selesai setelah 2.500ms
  - Sync Dapodik → selesai setelah 3.400ms
- Border setiap baris berubah dari `#1e2d45` menjadi `rgba(34,197,94,0.3)` saat selesai
- Tombol "Lanjut" hanya aktif setelah semua empat baris selesai (total ~3,5 detik)

> **Transparansi:** Animasi ini menggunakan `setTimeout` JavaScript biasa. Tidak ada HTTP request ke server, tidak ada koneksi ke DTKS atau Dapodik, tidak ada AI yang dipanggil. Ini adalah representasi visual dari proses yang akan berjalan di backend ketika sistem sudah terintegrasi penuh.

**Step 4 — Verifikasi Selesai** (`src/components/steps/Step4Selesai.tsx`)

- Layar sukses dengan ikon centang besar SVG dan animasi scale-in (0.94 → 1.0)
- Teks konfirmasi: "Data Anda sedang dianalisis oleh AI agents kami"
- Tombol "Lihat Hasil Matching" dengan efek hover invert warna (border cyan → fill cyan)

**File:** `src/app/input/page.tsx`, `src/components/steps/Step*.tsx`

---

### 3.3 Dashboard Hasil (`/dashboard`)

Halaman yang menampilkan output dari sistem — daftar beasiswa yang direkomendasikan dengan skor kecocokan.

**Sidebar navigasi:**
- Diaktifkan oleh tombol hamburger (≡) di navbar kiri
- Animasi lebar 0 → 220px dengan CSS transition
- Tiga menu: Notification Center, History, Settings — klik mengubah `activeNav` state
- Item aktif ditandai border kiri cyan dan background berbeda

**Empat kartu beasiswa:**
- KIP Kuliah 2025 (96%), Beasiswa Unggulan 2025 (89%), BSI Scholarship 2025 (84%), LPDP Reguler 2025 (76%)
- Setiap kartu menampilkan: nama, ikon verifikasi ✓, deadline, nominal benefit, tombol "Daftar Sekarang"
- Tombol "Daftar Sekarang" mengarah ke URL resmi masing-masing program
- Lingkaran progres SVG: animasi `stroke-dashoffset` dari circumference penuh ke nilai match saat halaman dimuat
- Kartu "Beasiswa Unggulan" memiliki border cyan yang lebih terang sebagai highlight prioritas
- Hover: setiap kartu naik 3px (`translateY(-3px)`) untuk kesan interaktif

**Dua panel bawah:**
- "📊 Analisis AI": ringkasan proses keempat agent dalam format arrow list
- "🎯 Next Steps": empat tindakan konkret dengan ikon centang hijau

> **Transparansi:** Seluruh data di dashboard — nama beasiswa, persentase match, deadline, benefit — berasal dari `src/lib/data.ts` yang di-hardcode. Angka 96%, 89%, 84%, 76% bukan hasil kalkulasi AI; dipilih untuk terlihat realistis dalam demonstrasi. Ketika AI Matching Engine terintegrasi, file `data.ts` akan digantikan oleh query ke database.

**File:** `src/app/dashboard/page.tsx`, `src/components/ui/ScholarshipCard.tsx`, `src/components/ui/CircleProgress.tsx`

---

### 3.4 Komponen UI yang Dapat Digunakan Ulang

| Komponen | Lokasi | Fungsi |
|---|---|---|
| `Navbar` | `components/layout/Navbar.tsx` | Varian `full` (landing) dan `minimal` (form/dashboard) |
| `StepBar` | `components/ui/StepBar.tsx` | Bar 4 segmen, segmen selesai berwarna cyan |
| `StatusPanel` | `components/ui/StatusPanel.tsx` | Panel kanan form — 5 status indicator + tips card |
| `CircleProgress` | `components/ui/CircleProgress.tsx` | Ring SVG animasi dengan nilai dan label "Match" |
| `ScholarshipCard` | `components/ui/ScholarshipCard.tsx` | Kartu beasiswa lengkap dengan ring + tombol |
| `Icons` | `components/ui/Icons.tsx` | 14 ikon SVG inline — nol dependensi library ikon |

---

## 4. Fitur yang Direncanakan & Kendalanya

Bagian ini menjelaskan secara jujur mengapa sejumlah komponen sistem belum bisa diimplementasikan dalam prototype ini, dengan alasan teknis, finansial, dan regulatoris yang spesifik dan dapat diverifikasi.

---

### 4.1 Penyimpanan Data & API Backend

**Yang direncanakan:**
Setiap kali siswa mengisi form, datanya harus tersimpan permanen di database server — bukan hanya di memori browser yang hilang saat tab ditutup. Data inilah yang menjadi input bagi keempat agent AI.

**Kondisi saat ini:**
State form (`nik`, `phone`, `uploads`) ada di `useState` React di `src/app/input/page.tsx`. Data menghilang saat pengguna berpindah halaman atau menutup tab.

**Kenapa belum ada:**
- **Biaya:** Database cloud (Supabase, Railway) memiliki biaya $0–25/bulan bahkan di tier gratis. Untuk prototype demonstrasi dengan waktu terbatas, mengalokasikan anggaran ini tidak diprioritaskan.
- **Keamanan:** Menyimpan NIK dan nomor telepon memerlukan enkripsi at-rest, kebijakan retensi data, dan kepatuhan UU PDP No. 27/2022 — ini tanggung jawab hukum yang memerlukan persiapan matang sebelum produksi.
- **Waktu:** Membangun API route yang robust termasuk validasi server-side, error handling, dan rate limiting adalah pekerjaan tersendiri di luar pengembangan UI yang sudah dikerjakan.

---

### 4.2 Upload File Nyata & OCR Dokumen

**Yang direncanakan:**
Dokumen yang diupload diproses oleh Agent 2 menggunakan Claude Vision API untuk mengekstrak informasi kunci: nominal tagihan listrik, jumlah anggota keluarga dari KK, nama dan level penghargaan dari sertifikat.

**Kondisi saat ini:**
Klik kartu upload di Step 2 hanya mengubah boolean di state. Tidak ada `<input type="file">`, tidak ada transfer data ke server.

**Kenapa belum ada:**
- **Biaya OCR API:** Satu dokumen diproses Claude Vision menghabiskan 1.000–3.000 token. Dengan tarif $3–15 per juta token (tergantung model), biaya ini nyata dan perlu dianggarkan khusus.
- **Keamanan data sensitif:** Scan KK dan NIK termasuk data pribadi yang sangat sensitif. Proses upload, penyimpanan sementara, dan penghapusan setelah OCR harus mengikuti standar keamanan ketat.
- **Kompleksitas pipeline:** Upload → cloud storage → trigger OCR job → parse hasil → simpan ke database adalah pipeline multi-langkah yang memerlukan error handling di setiap titiknya.

---

### 4.3 Integrasi DTKS — Data Terpadu Kesejahteraan Sosial (Kemensos)

**Yang direncanakan:**
DTKS adalah database Kementerian Sosial RI yang berisi data 40 juta keluarga pra-sejahtera. Dengan query NIK ke DTKS, sistem mendapatkan kondisi ekonomi keluarga siswa secara objektif dari sumber pemerintah — jauh lebih andal dibanding pengakuan mandiri.

Data yang tersedia: penghasilan per kapita, jumlah tanggungan, kepemilikan aset, dan status penerima program sosial lain (PKH, BPNT, PBI-JKN).

**Kondisi saat ini:**
"Syncing DTKS" di Step 3 dan StatusPanel adalah animasi `setTimeout` dan teks statis. Tidak ada HTTP request ke endpoint manapun.

**Kenapa belum ada:**
- **Akses tidak publik.** API DTKS hanya tersedia untuk instansi pemerintah dan mitra resmi yang sudah menandatangani Perjanjian Kerja Sama dengan Pusdatin Kemensos. Tidak ada endpoint yang bisa dipanggil tanpa akses resmi.
- **Proses birokrasi 3–6 bulan.** Mendapatkan akses memerlukan: proposal kerja sama formal, audit keamanan sistem, penandatanganan perjanjian perlindungan data, dan persetujuan berjenjang. Ini tidak bisa dipercepat dengan kemampuan engineering.
- **Bukan hambatan teknis.** Kode untuk memanggil API ini bisa ditulis dalam hitungan jam. Hambatannya adalah institusional, bukan implementasi.

**Jalur alternatif sambil menunggu akses resmi:**
Tagihan listrik yang diupload → OCR → ekstrak nominal → digunakan sebagai proxy kondisi ekonomi. Ini tidak setepat data DTKS, tetapi sudah memberikan sinyal yang berguna.

---

### 4.4 Integrasi DAPODIK — Data Pokok Pendidikan (Kemdikbud)

**Yang direncanakan:**
DAPODIK mencatat seluruh data akademik siswa Indonesia: nilai rapor per semester, kehadiran, riwayat sekolah, dan data keluarga yang terdaftar di sekolah. Akses ini memungkinkan verifikasi prestasi akademik secara independen.

**Kondisi saat ini:**
Sama dengan DTKS — animasi `setTimeout` tanpa proses nyata.

**Kenapa belum ada:**
- **Struktur akses berbeda:** DAPODIK menggunakan autentikasi berbasis operator sekolah. Tidak ada akses langsung per-siswa dari aplikasi pihak ketiga.
- **UU PDP:** Data akademik siswa di bawah 18 tahun termasuk data sensitif. Memrosesnya memerlukan kepatuhan regulasi yang menambah lapisan persyaratan hukum.
- **Biaya konsultasi:** Memastikan kepatuhan ini memerlukan pendampingan hukum yang biayanya tidak trivial untuk tahap awal.

**Jalur alternatif:**
Siswa mengupload scan transkrip nilai atau SKL → OCR mengekstrak nilai rata-rata → digunakan sebagai input skor akademik.

---

### 4.5 AI Matching Engine (Agent 3)

**Yang direncanakan:**
Agent ini menerima tiga skor dari profil siswa dan membandingkannya dengan syarat ratusan beasiswa menggunakan vector similarity search dan LLM reasoning, menghasilkan ranked list dengan persentase dan penjelasan dalam bahasa natural.

**Kondisi saat ini:**
Persentase match di dashboard (96%, 89%, 84%, 76%) adalah angka hardcoded di `src/lib/data.ts`. Bukan hasil kalkulasi apapun.

```typescript
// src/lib/data.ts — ini BUKAN output AI
export const SCHOLARSHIPS = [
  { name: "KIP Kuliah 2025",       match: 96 }, // angka dipilih manual
  { name: "Beasiswa Unggulan 2025", match: 89 }, // angka dipilih manual
  { name: "BSI Scholarship 2025",  match: 84 }, // angka dipilih manual
  { name: "Beasiswa LPDP 2025",    match: 76 }, // angka dipilih manual
];
```

**Kenapa belum ada:**
- **Biaya API:** Satu sesi matching yang memproses 20 beasiswa bisa menghabiskan 5.000–15.000 token. Dengan ratusan pendaftar per hari, biaya bulanannya bisa $50–200 — memerlukan perencanaan anggaran khusus.
- **Latensi:** LLM memerlukan 2–10 detik per request. Ini harus dikelola dengan background job queue agar tidak memblokir pengalaman pengguna.
- **Database beasiswa:** Membangun database beasiswa yang selalu up-to-date adalah pekerjaan editorial berkelanjutan, bukan hanya teknis — memerlukan tim atau otomasi web scraping yang andal.

---

### 4.6 Notifikasi WhatsApp Otomatis (Agent 4)

**Yang direncanakan:**
Setelah matching, siswa menerima WhatsApp langsung tanpa perlu membuka website. Agent 4 juga terus memantau database beasiswa baru dan mengirim notifikasi proaktif.

**Kondisi saat ini:**
Tidak ada pengiriman notifikasi apapun. Sidebar "Notification Center" di dashboard belum memiliki konten.

**Kenapa belum ada:**
- **Biaya per pesan:** Provider lokal Indonesia seperti Fonnte atau Wablas mengenakan ~Rp 150–500 per pesan. Dengan ribuan siswa, biaya notifikasi menjadi lini anggaran tersendiri.
- **Verifikasi akun bisnis:** Mendaftarkan WhatsApp Business resmi memerlukan verifikasi Facebook Business Manager dan nomor telepon bisnis — proses 1–4 minggu.
- **Server persisten:** Cron job monitoring memerlukan server yang terus berjalan, bukan serverless. Ini menambah biaya infrastruktur bulanan.

---

### 4.7 Google Street View API

**Yang direncanakan:**
Verifikasi foto rumah yang diupload siswa dengan membandingkannya terhadap kondisi aktual lingkungan dari Street View berdasarkan alamat NIK — mencegah manipulasi foto.

**Kenapa belum ada:**
- **Bergantung pada DTKS:** Alamat NIK baru bisa didapat setelah integrasi DTKS berjalan.
- **Biaya per-request:** Google Maps Platform menagih $7 per 1.000 request Static Street View.
- **Prioritas:** Ini fitur lapis kedua. Lapis pertama (OCR dokumen) jauh lebih fundamental dan perlu diselesaikan lebih dulu.

---

## 5. Arsitektur Teknis

### Kondisi Saat Ini — Frontend Prototype

```
Browser
└── Next.js 14 (App Router, dapat di-deploy ke Vercel)
    ├── /           Landing Page (static)
    ├── /input      Form 4 langkah (state lokal React, tidak ada server)
    └── /dashboard  Hasil beasiswa (data dummy dari lib/data.ts)

Tidak ada:
  × Database atau API routes
  × Background jobs atau job queue
  × External API calls (DTKS, DAPODIK, AI, WhatsApp)
  × File storage atau pemrosesan dokumen
```

### Target Arsitektur Produksi

```
Browser (Next.js 14 Client Components)
│
├── POST /api/register ──────────────→ Supabase PostgreSQL
│     Terima: NIK + WA + metadata              │
│     Validasi server-side                     │
│     Simpan ke tabel registrations            │
│     Return: job_id untuk tracking            │
│     Trigger: background job ke queue         │
│                                              │
├── POST /api/upload ─────────────────→ Supabase Storage
│     Presigned URL untuk upload langsung      │
│     File terenkripsi at-rest                 │
│     Return: file_url untuk diproses OCR      │
│                                              │
└── GET /api/status/:job_id ──────────→ Cek status proses agent


Background Job Queue (Redis + Bull / Supabase Edge Functions)
│
├── AGENT 1 — Data Collector
│   ├── Query DTKS API via NIK → data ekonomi keluarga
│   ├── Query DAPODIK API via NIK → data akademik siswa
│   └── Web scraping → database beasiswa terkini
│
├── AGENT 2 — Verification Agent
│   ├── Claude Vision API → OCR semua dokumen yang diupload
│   ├── Google Street View → verifikasi kondisi lingkungan rumah
│   ├── Cross-check NIK vs data keluarga dari dua sumber
│   └── Hitung trust score (0–100), flag jika < 60
│
├── AGENT 3 — Matching & Scoring
│   ├── Normalisasi tiga skor: ekonomi, akademik, pengalaman
│   ├── Vector similarity search vs database beasiswa (pgvector)
│   ├── Hard filter: jalur masuk, domisili, GPA minimum
│   ├── Weighted ranking: ekonomi(40%) + akademik(35%) + pengalaman(25%)
│   └── Claude Sonnet → generate penjelasan rekomendasi per beasiswa
│
└── AGENT 4 — Proactive Notification (persistent, tidak berhenti)
    ├── Kirim WhatsApp pertama via Fonnte API (hasil matching)
    ├── Cron job harian pukul 07.00: cek beasiswa baru di database
    ├── Jika ada yang cocok → kirim notifikasi real-time
    └── H-7 sebelum deadline → kirim reminder otomatis


External APIs & Services
  Anthropic Claude API ......... OCR dokumen + reasoning + matching
  DTKS API (Kemensos) .......... data ekonomi (perlu MoU resmi)
  DAPODIK API (Kemdikbud) ...... data akademik (perlu akses resmi)
  Fonnte / Wablas API .......... WhatsApp Business notifications
  Google Maps Platform ......... Street View verifikasi rumah
```

---

## 6. Struktur Proyek

```
genesis/
├── src/
│   ├── app/
│   │   ├── layout.tsx                  Root layout, load Inter font via CDN
│   │   ├── globals.css                 Animasi, scrollbar custom, dot-grid bg
│   │   ├── page.tsx                    Landing page (/)
│   │   ├── input/
│   │   │   └── page.tsx                Form orchestrator — state manager utama
│   │   └── dashboard/
│   │       └── page.tsx                Dashboard hasil — data dari lib/data.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx              2 varian: full (landing) | minimal (form)
│   │   ├── ui/
│   │   │   ├── Icons.tsx               14 ikon SVG inline, nol dependensi eksternal
│   │   │   ├── CircleProgress.tsx      Ring SVG animasi stroke-dashoffset
│   │   │   ├── StatusPanel.tsx         Panel kanan "Status Verifikasi"
│   │   │   ├── StepBar.tsx             Bar 4 segmen dengan label langkah
│   │   │   └── ScholarshipCard.tsx     Kartu beasiswa + ring + tombol daftar
│   │   ├── sections/
│   │   │   └── HeroSection.tsx         Hero landing + floating preview card
│   │   └── steps/
│   │       ├── Step1DataPribadi.tsx    NIK + WA + validasi format
│   │       ├── Step2UploadDokumen.tsx  4 kartu upload (UI toggle, belum nyata)
│   │       ├── Step3Verifikasi.tsx     Animasi checklist bertahap (setTimeout)
│   │       └── Step4Selesai.tsx        Layar sukses + navigasi ke dashboard
│   │
│   ├── lib/
│   │   ├── data.ts                     SEMUA dummy data hardcoded di sini
│   │   └── utils.ts                    Helper cn() untuk merge className
│   │
│   └── types/
│       └── index.ts                    TypeScript interfaces: Scholarship, FormData, dll
│
├── tailwind.config.ts                  Token warna exact dari desain asli
├── next.config.mjs
├── vercel.json
└── package.json
```

---

## 7. Design System

Token warna didefinisikan sebagai custom color di `tailwind.config.ts` — konsisten di seluruh komponen tanpa nilai hex berulang.

| Token Tailwind | Hex | Digunakan Untuk |
|---|---|---|
| `bg-navy-900` | `#0a0f1e` | Background utama seluruh halaman |
| `bg-navy-800` | `#0d1525` | Background sidebar |
| `bg-navy-600` | `#131929` | Surface kartu dan panel |
| `bg-navy-400` | `#1e2d45` | Border default semua elemen |
| `text-cyan` / `bg-cyan` | `#00e5cc` | Aksen primer: CTA, heading AI, icon aktif |
| `cyan-dark` | `#06b6d4` | Ring progress kartu 2, 3, 4 |
| `success` | `#22c55e` | Centang selesai, ring KIP Kuliah |
| `text-muted` | `#7a8ba8` | Teks sekunder dan placeholder |
| `text-label` | `#94a3b8` | Label input dan caption |

**Font:** Inter (400–900) via Google Fonts CDN di `layout.tsx`. Dimuat lewat `<link>` bukan `next/font` untuk menghindari timeout jaringan saat `next build` di lingkungan tanpa akses internet penuh.

**Animasi yang tersedia di `globals.css`:**

| Nama | Efek | Digunakan Di |
|---|---|---|
| `animate-fade-up` | Muncul dari bawah | Hero left section |
| `animate-fade-up-delay` | Muncul dari bawah, delay 200ms | Hero floating card |
| `dot-pulse` | Berkedip smooth | Indikator pulsing StatusPanel |
| `circle-progress` | Stroke berjalan 1,2 detik | Ring CircleProgress |
| `card-lift` | Naik 3px saat hover | Kartu beasiswa dashboard |
| `shimmer` | Kilap background | Placeholder loading (disiapkan) |

---

## 8. Quick Start & Deploy

### Menjalankan Lokal

```bash
git clone https://github.com/<username>/genesis-beasiswa
cd genesis-beasiswa
npm install
npm run dev
```

Buka `http://localhost:3000`. Tidak ada konfigurasi environment variable yang dibutuhkan untuk prototype ini — semua data sudah ada di `src/lib/data.ts`.

### Deploy ke Vercel

**Via CLI (paling cepat):**
```bash
npm i -g vercel
vercel --prod
```

**Via GitHub:**
1. Push repository ke GitHub
2. Buka [vercel.com/new](https://vercel.com/new) → Import repository
3. Framework: Next.js (terdeteksi otomatis)
4. Klik **Deploy** — selesai dalam ~2 menit

Tidak ada environment variable yang perlu diatur untuk versi prototype ini.

### Environment Variables untuk Produksi

Ketika integrasi backend mulai dibangun, buat file `.env.local`:

```env
# Database
DATABASE_URL=postgresql://user:pass@host/db

# AI
ANTHROPIC_API_KEY=sk-ant-...

# WhatsApp
FONNTE_TOKEN=...

# Google Maps
GOOGLE_MAPS_API_KEY=AIza...

# Data pemerintah (setelah MoU resmi)
DTKS_API_URL=https://...
DTKS_API_KEY=...
DAPODIK_API_URL=https://...
DAPODIK_API_KEY=...

# App
NEXT_PUBLIC_URL=https://genesis.id
```

---

## 9. Roadmap Menuju Produk Penuh

Fase disusun berdasarkan **dependensi teknis** (apa yang harus ada sebelum yang lain bisa dibangun) dan **impact per effort** (nilai terbesar dengan usaha yang realistis).

### Fase 1 — Backend Dasar
*Estimasi: 2–3 minggu | Biaya: $0–25/bulan (Supabase Free/Pro)*

Fondasi yang tidak bisa dilewati. Semua fase berikutnya bergantung pada ini.

- [ ] Setup Supabase: project, schema database, RLS policies
- [ ] `POST /api/register` — simpan NIK + WA ke tabel `registrations`
- [ ] Upload file nyata di Step 2 via Supabase Storage presigned URL
- [ ] Enkripsi data sensitif at-rest
- [ ] Validasi server-side dan rate limiting dasar

### Fase 2 — OCR Dokumen
*Estimasi: 1–2 minggu | Biaya: $20–50/bulan untuk Anthropic API*

Sumber data alternatif yang tidak memerlukan MoU pemerintah.

- [ ] Integrasi Claude Vision API untuk OCR semua jenis dokumen
- [ ] Ekstrak data tagihan listrik: nominal, nama pemegang, periode
- [ ] Ekstrak data KK: jumlah anggota, pekerjaan orang tua
- [ ] Ekstrak data sertifikat: nama penghargaan, level, tahun
- [ ] Tampilkan hasil OCR ke pengguna untuk konfirmasi

### Fase 3 — AI Matching Engine
*Estimasi: 2–4 minggu | Biaya: $50–150/bulan*

Jantung sistem. Mengubah data mentah menjadi rekomendasi bermakna.

- [ ] Definisikan skema scoring: bobot ekonomi (40%), akademik (35%), pengalaman (25%)
- [ ] Bangun database beasiswa terstruktur (mulai 20–30 beasiswa utama nasional)
- [ ] Implementasi pgvector di Supabase untuk similarity search
- [ ] Integrasi Claude Sonnet API untuk reasoning dan penjelasan rekomendasi
- [ ] Dashboard menampilkan hasil dinamis — data `lib/data.ts` pensiun

### Fase 4 — Notifikasi Proaktif
*Estimasi: 1 minggu | Biaya: ~Rp 500.000–2.000.000/bulan*

Mengaktifkan proposisi nilai inti: sistem yang bekerja untuk siswa, bukan sebaliknya.

- [ ] Daftar Fonnte Business API
- [ ] `POST /api/notify` — kirim WhatsApp setelah matching selesai
- [ ] Vercel Cron: monitoring database beasiswa setiap hari pukul 07.00 WIB
- [ ] Reminder H-7 dan H-1 sebelum deadline

### Fase 5 — Integrasi Data Pemerintah
*Estimasi: 3–6 bulan proses birokrasi | Biaya: konsultasi hukum*

Lapisan yang mengangkat akurasi dari "berguna" ke "sangat dapat diandalkan".

- [ ] Proposal kemitraan ke Pusdatin Kemensos (DTKS)
- [ ] Koordinasi dengan Pusdatin Kemdikbud (DAPODIK)
- [ ] Audit keamanan sistem sesuai standar pemerintah
- [ ] Penandatanganan PKS/MoU dan konfigurasi akses API resmi
- [ ] Migrasi sumber data dari OCR dokumen ke sumber pemerintah

> Fase 5 adalah yang paling memakan waktu bukan karena kompleksitas teknis, melainkan karena proses institusional yang tidak bisa dipercepat dengan kemampuan engineering. Fase 1–4 dapat dikerjakan sepenuhnya secara paralel sambil menunggu akses resmi dari pemerintah.

---

## 10. Penutup untuk Investor & Juri

GENESIS bukan sekadar aplikasi pencari beasiswa. Ini adalah **infrastruktur keadilan pendidikan** yang menyentuh masalah struktural yang sudah lama ada: informasi dan kesempatan yang tidak terdistribusi secara adil.

**Masalahnya nyata dan terukur.** Berdasarkan data Kemendiktisaintek, dari ~1,5 juta lulusan SMA/MA/SMK per tahun yang masuk kategori layak penerima beasiswa, kurang dari 30% yang berhasil mendaftar dan mendapatkannya — sebagian besar bukan karena tidak memenuhi syarat, melainkan karena tidak tahu caranya.

**Teknologinya sudah terbukti.** Setiap komponen dalam arsitektur GENESIS menggunakan teknologi yang sudah mature dan terbukti di skala besar: Next.js untuk web, Supabase untuk database, Anthropic Claude untuk AI, WhatsApp Business API untuk notifikasi. Tidak ada teknologi eksperimental yang berisiko gagal.

**Alur sistemnya sudah tervalidasi.** Prototype ini bukan sekadar desain di Figma — ini adalah aplikasi yang berjalan di browser, dengan navigasi, validasi, animasi, dan alur pengguna yang sudah dipikirkan dan dibangun dari awal sampai akhir. Fondasi UI dan UX sudah selesai; yang tersisa adalah menghubungkannya dengan data nyata.

**Yang dibutuhkan untuk melangkah ke fase berikutnya:**

| Kebutuhan | Fungsi | Estimasi |
|---|---|---|
| Supabase Pro | Database + storage + edge functions | $25/bulan |
| Anthropic API budget | OCR dokumen + AI matching | $50–150/bulan |
| WhatsApp Business API | Notifikasi proaktif ke siswa | Rp 500.000–2 juta/bulan |
| Pendampingan hukum | Kepatuhan UU PDP + MoU pemerintah | Variabel |
| 2–3 bulan pengembangan penuh | Fase 1–4 backend | Sumber daya tim |

Dengan dukungan yang tepat, GENESIS bisa beranjak dari prototype demonstrasi ini menjadi platform yang benar-benar berjalan dan membantu ratusan ribu siswa Indonesia menemukan jalan mereka ke perguruan tinggi — tanpa harus beruntung terlebih dahulu.

---

<div align="center">

Dibuat dengan ❤️ untuk Indonesia

**GENESIS** — Sistem Multi-Agent AI untuk Pemerataan Akses Beasiswa

*"Beasiswa untuk yang tepat, bukan yang beruntung."*

</div>
