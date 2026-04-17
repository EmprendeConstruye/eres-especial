// ╔══════════════════════════════════════════════════════════╗
// ║  firebase-config.js  —  ERES ESPECIAL                    ║
// ║  SOLO DEBES EDITAR ESTE ARCHIVO.                         ║
// ║  Todos los HTML leen la config desde aquí.               ║
// ╚══════════════════════════════════════════════════════════╝

// ── 1. TU CONFIGURACIÓN DE FIREBASE ────────────────────────
//    Firebase Console → ⚙️ Configuración → Tu app web
window.FIREBASE_CONFIG = {
 apiKey: "AIzaSyC8mt3x7D3pcntULFReiUlENESAKx-L-kU",
  authDomain: "eres-especial.firebaseapp.com",
  projectId: "eres-especial",
  messagingSenderId: "1060245560689",
  appId: "1:1060245560689:web:57c9fcbff89469ccd2ead0"
};

// ── 2. TUS DATOS DE CLOUDINARY (para subir imágenes gratis) ─
//    cloudinary.com → Dashboard → Cloud name
window.CLOUDINARY_CONFIG = {
  cloudName:    "ds0lszzxt",   // ej: "mi-tienda-abc"
  uploadPreset: "eres_especial_preset"  // el que creaste en Cloudinary
};

// ── 3. TU NÚMERO DE WHATSAPP ────────────────────────────────
window.WA_NUMBER = "573207410290";  // formato internacional sin + ni espacios