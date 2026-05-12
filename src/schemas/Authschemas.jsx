import { z } from 'zod';

export const signupSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Format email tidak valid"),
  telepon: z.string().min(10, "Nomor telepon minimal 10 digit"),
  passw: z.string().min(6, "Password minimal 6 karakter"),
  validasi_passw: z.string()
}).refine((data) => data.passw === data.validasi_passw, {
  message: "Password tidak cocok",
  path: ["validasi_passw"],
});

export const loginSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  passw: z.string().min(1, "Password harus diisi"),
});
