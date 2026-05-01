const firebaseConfig = {
  apiKey: "AIzaSyCXhXyrajishlP0q9j6QggQWtWW3oKuPhc",
  authDomain: "sahabat-p4.firebaseapp.com",
  projectId: "sahabat-p4",
  storageBucket: "sahabat-p4.firebasestorage.app",
  messagingSenderId: "835411215925",
  appId: "1:835411215925:web:51172aa6363bea37bb137c",
  measurementId: "G-VK5N7MTZ0T"
};

// Initialize Firebase (Compat)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Inisialisasi Auth, DB & Storage dengan pengaman
const auth = (typeof firebase.auth === 'function') ? firebase.auth() : null;
const db = (typeof firebase.firestore === 'function') ? firebase.firestore() : null;

if (db) {
    // 🔥 JURUS PAMUNGKAS: Paksa koneksi lewat jalur Long Polling 
    // Agar bisa menembus blokir browser saat buka file lokal (file://)
    db.settings({ experimentalForceLongPolling: true });
} else {
    console.error("Firestore SDK tidak terdeteksi. Pastikan script firestore-compat.js sudah ada di HTML.");
}
