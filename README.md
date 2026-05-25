# YogaYuk - Yoga & Mindfulness Platform

![node](https://img.shields.io/npm/v/npm.svg?logo=nodedotjs)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23764abc.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Platform aplikasi web untuk pemesanan kelas Yoga dan manajemen kesehatan mental.
*A web application platform for booking Yoga classes and mindfulness management.*

---

## 🇮🇩 Bahasa Indonesia

### Rute utama proyek terdiri dari 6 bagian:
1. **Home**: `(/)` - Halaman utama aplikasi.
2. **Classes**: `(/classes)` - Daftar kelas yoga yang tersedia.
3. **About**: `(/about)` - Informasi tentang YogaYuk.
4. **Login**: `(/login)` - Masuk ke akun pengguna.
5. **Signup**: `(/signup)` - Pendaftaran akun baru.
6. **Profile**: `(/profile/:id)` - Detail profil dan manajemen akun.

### Fitur Utama
- **Autentikasi**: Sistem Login & Signup menggunakan JWT dan Redux Toolkit.
- **Manajemen Profil**: Melihat dan memperbarui data pengguna.
- **Pemesanan Kelas**: Mencari dan memesan kelas yoga (dalam pengembangan).
- **Validasi Formulir**: Validasi sisi klien menggunakan Zod dan React Hook Form.
### Teknologi
- **Frontend**: React 19 + Vite
- **State Management**: Redux Toolkit (authSlice)
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios dengan Interceptors (untuk menyertakan token otomatis)

### Persiapan Proyek
1. Clone repositori ini.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Buat file `.env` di root folder:
   ```env
   VITE_API_URL=http://localhost:5137/api
   ```
4. Jalankan perintah `npm run dev` untuk memulai server pengembangan.

---

## 🇬🇧 English

### Key Features
- **Authentication**: Login & Signup system integrated with JWT and Redux Toolkit.
- **Profile Management**: View and update user profile data.
- **Class Booking**: Search and book yoga classes (work in progress).
- **Form Validation**: Client-side validation using Zod and React Hook Form.

### Tech Stack
- **Frontend**: React 19 + Vite
- **State Management**: Redux Toolkit (authSlice)
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios with Interceptors (auto-injecting Bearer token)

### Project Setup
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root folder:
   ```env
   VITE_API_URL=http://localhost:5137/api
   ```
4. Run `npm run dev` to start the development server.

---

## 📁 Struktur Folder / Project Structure

```text
src/
├── api/          # Konfigurasi Axios & API Services
├── pages/        # Komponen Halaman (Home, Auth, Profile, etc.)
├── schemas/      # Zod Validation Schemas
├── store/        # Redux Toolkit Slices & Store
└── main.jsx      # Entry point aplikasi
```

### Catatan Penting / Important Notes
Jika Anda mengalami masalah saat registrasi, pastikan variabel `VITE_API_URL` di file `.env` sudah sesuai dengan backend yang berjalan (umumnya port 3000 atau 5000).

---
*Created with ❤️ for YogaYuk Team.*
