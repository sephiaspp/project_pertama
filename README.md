# My First Web Engineering Project

A clean, modern, and responsive landing page built as a hands-on exercise for Web Engineering fundamentals. No frameworks — just the core building blocks of the web.

---

## 📋 Deskripsi Project

Website ini adalah landing page satu halaman (*single-page*) yang mendemonstrasikan penggunaan:

- **Semantic HTML5** — struktur halaman yang bermakna dan aksesibel.
- **Tailwind CSS** — styling modern berbasis utility class tanpa menulis CSS kustom.
- **Vanilla JavaScript** — interaktivitas penuh tanpa library atau framework tambahan.

Halaman terdiri dari empat section utama:

| Section   | Isi                                                            |
|-----------|----------------------------------------------------------------|
| **Hero**  | Judul utama, deskripsi singkat, dan tombol CTA                 |
| **About** | Tiga kartu yang menjelaskan pendekatan pengembangan proyek     |
| **Skills**| Kartu + progress bar untuk HTML5, Tailwind CSS, Vanilla JS    |
| **Contact**| Form sederhana dengan validasi client-side                   |

---

## 🛠️ Teknologi yang Digunakan

| Teknologi          | Versi / Sumber                              | Kegunaan                       |
|--------------------|---------------------------------------------|--------------------------------|
| HTML5              | Native browser                              | Struktur & semantik halaman    |
| Tailwind CSS       | CDN — `cdn.tailwindcss.com`                 | Styling & layout responsif     |
| Vanilla JavaScript | Native browser (ES6+)                       | Interaksi & animasi            |
| Google Fonts       | CDN — `fonts.googleapis.com` (Inter)        | Tipografi modern               |

> Tidak menggunakan React, Vue, Angular, Bootstrap, jQuery, atau framework lainnya.

---

## 📁 Struktur File

```
project_pertama/
├── index.html   ← Halaman utama (HTML5 + Tailwind CSS)
├── script.js    ← Semua interaksi (Vanilla JavaScript)
└── README.md    ← Dokumentasi project ini
```

---

## ✨ Fitur JavaScript

| Fitur                          | Deskripsi                                                              |
|--------------------------------|------------------------------------------------------------------------|
| Hamburger Menu                 | Toggle menu navigasi untuk tampilan mobile lengkap dengan animasi ikon |
| Smooth Scrolling               | Klik nav link → scroll halus ke section tujuan                         |
| Active Nav Link                | Nav link otomatis ter-highlight sesuai section yang sedang dilihat     |
| Navbar on Scroll               | Navbar menjadi lebih solid saat di-scroll melewati hero                |
| Skill Bar Animation            | Progress bar teranmasi saat section Skills masuk ke viewport           |
| Contact Form Validation        | Validasi nama, email, dan panjang pesan sebelum submit                 |

---

## 🚀 Cara Menjalankan Project

Project ini tidak memerlukan build tool, bundler, atau npm. Cukup buka file HTML langsung di browser.

### Menggunakan Live Preview (Rekomendasi)

**VS Code / Kiro IDE:**

1. Pastikan ekstensi **Live Preview** (dari Microsoft) atau **Live Server** (dari Ritwick Dey) sudah ter-install.
2. Buka file `index.html` di editor.
3. Klik kanan pada file → pilih **"Show Preview"** (Live Preview) atau **"Open with Live Server"**.
4. Browser akan membuka `http://localhost:3000` (atau port lain) secara otomatis.
5. Setiap kali file disimpan, halaman akan ter-refresh secara otomatis.

**Alternatif — Buka Langsung:**

1. Klik dua kali file `index.html` di File Explorer.
2. File akan terbuka di browser default.

> **Catatan:** Tailwind CSS dan Google Fonts dimuat dari CDN, jadi diperlukan koneksi internet agar tampilan terlihat sempurna.

---

## 📸 Tampilan Halaman

| Section  | Tampilan                                                   |
|----------|------------------------------------------------------------|
| Navbar   | Fixed, transparan, blur backdrop, hamburger menu (mobile)  |
| Hero     | Full-screen, gradient text, dua tombol CTA, scroll arrow   |
| About    | Tiga kartu dengan ikon SVG, hover animasi                  |
| Skills   | Tiga kartu dengan progress bar animasi                     |
| Contact  | Form dengan validasi dan feedback message                  |
| Footer   | Minimal, nama teknologi berwarna                           |

---

*Dibuat sebagai bagian dari latihan Web Engineering · 2024*
