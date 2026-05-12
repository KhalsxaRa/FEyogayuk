-- Membuat min 5 routing halaman di react dengan state management
<br>
-- pada 1 halaman dengan dynamic routing. Total 5 Routes (4 statis, 1 Dinamis) dari table ERD yang diberikan dalam yogaYuk (1).png
1  web dinamis itu ada pada rute login sign up dengan definisi komponen user untuk sign up terdiri dari    nama varchar(255) NOT NULL,
   email varchar(255) NOT NULL UNIQUE,
   telepon varchar(20),
   passw text NOT NULL,
   validasi_passw text NOT NULL beri id unik dari uuidv4 dan password hash pada validasi_passw  dan passw
dengan dependencies sebagai berikut:

``
  "@reduxjs/toolkit": "^2.11.2",
    "@tailwindcss/vite": "^4.2.4",
    "axios": "^1.15.2",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-redux": "^9.2.0",
    "react-router": "^7.14.2",
    "tailwindcss": "^4.2.4"
   ``
serta buatkan skema untuk user bagian sign up dan login validasi skema dengan zod