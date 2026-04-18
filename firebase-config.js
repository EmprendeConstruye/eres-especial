// ╔══════════════════════════════════════════════════════════╗
// ║  firebase-config.js  —  ERES ESPECIAL                    ║
// ║  SOLO DEBES EDITAR ESTE ARCHIVO.                         ║
// ║  Todos los HTML leen la config desde aquí.               ║
// ╚══════════════════════════════════════════════════════════╝
// ═══════════════════════════════════════════════════════════
//  INSTRUCCIONES — LEE ESTO PRIMERO
//
//  Este archivo NO se carga como <script src="">
//  En cambio, COPIA el bloque CONFIG_EE de abajo
//  y PÉGALO dentro del <script> de cada HTML.
//
//  ¿Por qué? Porque Firebase Hosting a veces tiene
//  problemas de timing cuando se carga config externamente.
//  Con config embebida directamente en cada HTML, funciona 100%.
// ═══════════════════════════════════════════════════════════

// ── BLOQUE A COPIAR EN CADA HTML ────────────────────────────
const CONFIG_EE = {

  // 1. Firebase (Firebase Console → ⚙️ → Tu app web)
  firebase: {
    apiKey: "AIzaSyC8mt3x7D3pcntULFReiUlENESAKx-L-kU",
  authDomain: "eres-especial.firebaseapp.com",
  projectId: "eres-especial",
  //storageBucket: "eres-especial.firebasestorage.app",
  messagingSenderId: "1060245560689",
  appId: "1:1060245560689:web:57c9fcbff89469ccd2ead0"
  },

  // 2. Cloudinary (cloudinary.com → Dashboard)
  cloudinary: {
    cloudName:    "ds0lszzxt",  // ej: "mi-tienda-abc"
    uploadPreset: "eres_especial_preset"
  },

  // 3. Tienda
  wa:      "573207410290",
  address: "Carrera 32 N102B-31, Cerca de la estacion del metro cable Santo Domingo",
  mapsUrl: "https://maps.app.goo.gl/KMUKJcXAjfjfKJsH9?g_st=ic",
  horario: "Lun–Mier-Jue-Sáb: 8:30am-8:30pm. Mart-Vier: 8:30am-6.30pm"
};