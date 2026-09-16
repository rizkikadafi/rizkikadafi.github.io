# Rizki Kadafi — Portfolio

Personal portfolio website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Dark-first glassmorphism design, deployed to GitHub Pages via GitHub Actions.

## Stack

- **Astro 5+** — static site generation, Content Layer API
- **Tailwind CSS 4** — via `@tailwindcss/vite`
- **Content collections + Zod** — typed, validated data
- **GitHub Actions + GitHub Pages** — auto deploy on push to `main`

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Type-check components & validate data schemas |

## Cara update konten

Semua konten situs terpusat di file YAML di folder **`src/data/`**. Edit file, biar halaman ikut berubah — tidak perlu sentuh kode komponen.

| File | Isi | Contoh edit |
| --- | --- | --- |
| `src/data/site.yaml` | Nama, role, tagline, sosmed, stats | Ganti role / tambah sosmed |
| `src/data/about.yaml` | Paragraf bio + kartu highlight | Update cerita diri |
| `src/data/experience.yaml` | Riwayat pengalaman kerja (timeline) | Tambah/pindah pekerjaan |
| `src/data/educations.yaml` | Riwayat pendidikan (timeline) | Tambah/edit pendidikan; field opsional `thesis` untuk skripsi/tesis/proyek akhir/publikasi |
| `src/data/skills.yaml` | Kategori keahlian + ikon skill | Tambah skill baru; logo via Simple Icons (`src`) atau ikon boxicons (`icon`) |
| `src/data/projects.yaml` | Daftar proyek | Tambah proyek, link, gambar |
| `src/data/contact.yaml` | Opsi kontak di section Contact | Tambah email/WA/telegram |

> **Tip:** Saat menambah entri baru pada file list (experience/skills/projects/contact), setiap proyek/profil harus punya `id` unik. Formatnya mengikuti entri yang sudah ada — ikuti contoh di dalam file.
>
> **Urutan timeline (Experience/Education):** urutan tampil diatur field `order`. Semakin besar angkanya, semakin atas posisinya (terbaru = angka terbesar). Field ini wajib agar urutan benar — `getCollection` memang mengurut otomatis tanpa sorting manual.

### Tambah proyek (contoh)

```yaml
- id: nama-proyek-unik
  name: Nama Proyek
  desc: Deskripsi singkat proyek.
  year: 2025
  featured: true
  tech: [Astro, Tailwind]
  links:
    github: https://github.com/rizkikadafi/nama-proyek/
    deployment: https://nama-proyek.vercel.app/
  img: /assets/image/projects/nama-proyek.png
```

1. Salin potongan di atas ke `src/data/projects.yaml`
2. Simpan screenshot proyek di `public/assets/image/projects/`
3. Sesuaikan path di `img`

### Konten, bukan kode

- **Section** (About, Experience, Skills, Projects, Contact) diatur oleh file YAML di atas, sedangkan **komponen** (tampilan) ada di `src/components/`.
- Untuk mengubah **navigasi**, edit daftar `navItems` di `src/components/Navbar.astro`.
- Untuk mengubah **ikon/logo & gambar**, letakkan aset di `public/assets/`.

## Deploy

Workflow `.github/workflows/deploy.yml` otomatis build & deploy saat push ke branch `main`.

**Satu kali setup (jika belum):** repo → *Settings → Pages → Source: GitHub Actions*.

Selama pengembangan aktif, kerja di branch `update` — deployment hanya berjalan dari `main`, jadi aman untuk iterasi tanpa risiko error deploy.