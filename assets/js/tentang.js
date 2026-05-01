/**
 * Sahabat P4 - Tentang Page Script
 * Menghandel sinkronisasi statistik secara real-time dari Firestore
 */

// Pastikan firebase sudah terinisialisasi dari firebase-config.js
const dbTentang = firebase.firestore();

// Element Selector
const statPelatihan = document.getElementById('stat-pelatihan');
const statMateri = document.getElementById('stat-materi');
const statWebinar = document.getElementById('stat-webinar');

/**
 * Update Statistik dari Firestore
 */
function updateTentangStats() {
    // 1. Hitung Jumlah Pelatihan (Menggunakan koleksi 'jadwal')
    dbTentang.collection('jadwal').onSnapshot(snapshot => {
        if (statPelatihan) {
            statPelatihan.innerText = snapshot.size;
        }
    }, err => console.error("Error Pelatihan:", err));

    // 2. Hitung Jumlah Paket Materi
    dbTentang.collection('materi').onSnapshot(snapshot => {
        if (statMateri) {
            statMateri.innerText = snapshot.size;
        }
    }, err => console.error("Error Materi:", err));

    // 3. Hitung Jumlah Webinar (Untuk bagian di bawah jika ada)
    // Jika ingin menampilkan jumlah webinar di salah satu card statistik
    // Saat ini di HTML ada 4 card: Pelatihan, Jenjang, Wilayah, Materi.
    // Kita biarkan sesuai layout HTML yang ada dulu.
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    updateTentangStats();
});
