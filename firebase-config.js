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
window.WA_NUMBER = "573207410290";  // formato internacional sin + ni espacios 573207410290

// ── 4. TIENDA FÍSICA ─────────────────────────────────────────
//    Edita con la dirección real de tu tienda
window.STORE_CONFIG = {
  address:  "Calle 111 A N68A-90, cerca de la estacio del metrocable Santo Domingo", // Escribe aquí tu dirección completa, Medellín
  // Para obtener tu link de Maps:
  //   1. Busca tu negocio en Google Maps
  //   2. Clic en "Compartir" → "Copiar enlace"
  //   3. Pega ese enlace aquí:
  mapsUrl:  "https://maps.app.goo.gl/aMDUnunF5BHFEhw96",
  horario:  "Lun–Sáb: 10am – 7pm · Dom: 11am – 5pm",
  telefono: "+57 320 7410290"
};
 
// ── 5. WOMPI (pasarela de pago) ───────────────────────────────
//    wompi.com → Mi cuenta → Llaves de API
//    Usa pub_test_ para pruebas, pub_prod_ para producción
// Nombre de Uusrio de Wompi "eresespecial20"
// correo electronico "vallejo.timo15@gmail.com"
// habilitar cuadno joca tenga la cuenta 
window.WOMPI_PUBLIC_KEY = "pub_test_REEMPLAZA_CON_TU_PUBLIC_KEY";