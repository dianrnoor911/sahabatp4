// ══ JADWAL PELATIHAN LOGIC (ULTRA DEBUG) ══

// Error Logger Global
window.onerror = function(msg, url, line) {
    alert("Kritikal Error: " + msg + "\nLine: " + line);
};

const baseData = [
    { tanggal:"26 – 30 Januari 2026", judul:"Pelatihan Pendidikan Inklusif bagi Pendidik SD (Dasar) Batch I", jenjang:"SD", kuota:60, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"26 – 30 Januari 2026", judul:"Pelatihan Pendidikan Inklusif bagi Pendidik SMP (Dasar)", jenjang:"SMP", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"26 – 30 Januari 2026", judul:"Pelatihan Inklusi Bagi Pendidik SMA (Dasar)", jenjang:"SMA", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"26 – 30 Januari 2026", judul:"Pelatihan Inklusi Bagi Pendidik SMK (Dasar)", jenjang:"SMK", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"26 – 30 Januari 2026", judul:"Pelatihan Pendidikan Inklusif Pendidik Kesetaraan (Dasar)", jenjang:"Kesetaraan", kuota:20, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"2 – 6 Februari 2026", judul:"Pelatihan Pendidikan Inklusif Pendidik PAUD (Dasar) Batch 1", jenjang:"PAUD", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"2 – 6 Februari 2026", judul:"Pelatihan Pendidikan Inklusif Pendidik PAUD (Dasar) Batch 2", jenjang:"PAUD", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"2 – 6 Februari 2026", judul:"Pelatihan Pendidikan Inklusif bagi Pendidik SD (Dasar) Batch II", jenjang:"SD", kuota:60, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"2 – 6 Februari 2026", judul:"Pelatihan Peningkatan Kompetensi Guru SMP dalam Layanan Bimbingan dan Konseling", jenjang:"SMP", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"2 – 6 Februari 2026", judul:"Pelatihan Peningkatan Kompetensi Guru SMA dalam Layanan Bimbingan dan Konseling", jenjang:"SMA", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"2 – 6 Februari 2026", judul:"Peningkatan Kompetensi Teknis Guru SMK Bidang Bisnis dan Manajemen (OTKP 1)", jenjang:"SMK", kuota:48, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"6 – 10 April 2026", judul:"Pelatihan Penguatan Pendidikan Karakter Pendidik PAUD", jenjang:"PAUD", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"6 – 10 April 2026", judul:"Pelatihan Penguatan Pendidikan Karakter Pendidik SD (Batch 1)", jenjang:"SD", kuota:66, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"6 – 10 April 2026", judul:"Pelatihan Penguatan Pendidikan Karakter Pendidik SMP (Batch 1)", jenjang:"SMP", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"6 – 10 April 2026", judul:"Pelatihan Penguatan Pendidikan Karakter Pendidik SMA", jenjang:"SMA", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"13 – 17 April 2026", judul:"Pelatihan Pendidikan Inklusif bagi Pendidik SD (Lanjut) Batch 1", jenjang:"SD", kuota:90, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"13 – 17 April 2026", judul:"Pelatihan Penguatan Pendidikan Karakter Pendidik SMP (Batch 2)", jenjang:"SMP", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"13 – 17 April 2026", judul:"Pelatihan Pendidikan Inklusif Pendidik Kesetaraan (Lanjut)", jenjang:"Kesetaraan", kuota:20, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"20 – 24 April 2026", judul:"Pelatihan Pendidikan Inklusif Pendidik PAUD (Lanjut)", jenjang:"PAUD", kuota:60, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"20 – 24 April 2026", judul:"Pelatihan Pendidikan Inklusif bagi Pendidik SMP (Lanjut)", jenjang:"SMP", kuota:60, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"20 – 24 April 2026", judul:"Pelatihan Inklusi Bagi Pendidik SMA (Lanjut)", jenjang:"SMA", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"20 – 24 April 2026", judul:"Pelatihan Inklusi Bagi Pendidik SMK (Lanjut)", jenjang:"SMK", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"27 April – 3 Mei 2026", judul:"Peningkatan Kompetensi Teknis Guru SMK Bidang Seni dan Kreatif (DKV)", jenjang:"SMK", kuota:24, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"4 – 8 Mei 2026", judul:"Pelatihan Pendidikan Inklusif bagi Pendidik SD (Lanjut) Batch 2", jenjang:"SD", kuota:60, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"4 – 8 Mei 2026", judul:"Pelatihan Peningkatan Kompetensi Mata Pelajaran Pendidik SMP", jenjang:"SMP", kuota:60, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"18 – 22 Mei 2026", judul:"Pelatihan Pencegahan dan Penanganan Kekerasan (PPKSP) Pendidik SD", jenjang:"SD", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"18 – 22 Mei 2026", judul:"Pelatihan Penguatan Pendidikan Karakter Pendidik SMP (Batch 3)", jenjang:"SMP", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"18 – 22 Mei 2026", judul:"Pelatihan Pencegahan dan Penanganan Kekerasan (PPKSP) Pendidik SMP", jenjang:"SMP", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"18 – 22 Mei 2026", judul:"Pelatihan Pencegahan dan Penanganan Kekerasan (PPKSP) Pendidik SMA", jenjang:"SMA", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"18 – 22 Mei 2026", judul:"Pelatihan Pencegahan dan Penanganan Kekerasan (PPKSP) Pendidik SMK", jenjang:"SMK", kuota:30, link:"https://jaklat.jakarta.go.id/login" },
    { tanggal:"18 – 22 Mei 2026", judul:"Pelatihan Pencegahan dan Penanganan Kekerasan bagi Tutor Kesetaraan", jenjang:"Kesetaraan", kuota:20, link:"https://jaklat.jakarta.go.id/login" }
];

let data = [...baseData];

const imageMap = {
  PAUD:       'https://i.ibb.co.com/gMjGGm9C/1.png',
  SD:         'https://i.ibb.co.com/cSzbGvqw/4.png',
  SMP:        'https://i.ibb.co.com/rGbzLkJq/5.png',
  SMA:        'https://i.ibb.co.com/RpN4hpBc/6.png',
  SLB:        'https://i.ibb.co.com/PGpNCK4v/7.png',
  Kesetaraan: 'https://i.ibb.co.com/5hRPDY5w/Salinan-dari-Pelatihan-dan-Pengembangan-Pendidik-jenjang-PAUD.png',
  SMK:        'https://i.ibb.co.com/MkcVSZX5/8.png',
};

const colorMap = {
  PAUD:       { badge: 'badge-paud',       banner: 'banner-paud' },
  SD:         { badge: 'badge-sd',         banner: 'banner-sd' },
  SMP:        { badge: 'badge-smp',        banner: 'banner-smp' },
  SMA:        { badge: 'badge-sma',        banner: 'banner-sma' },
  SMK:        { badge: 'badge-smk',        banner: 'banner-smk' },
  Kesetaraan: { badge: 'badge-kesetaraan', banner: 'banner-kesetaraan' },
  SLB:        { badge: 'badge-slb',        banner: 'banner-slb' },
};

let activeFilter = 'semua';
const bulanMap = {'Januari':1,'Februari':2,'Maret':3,'April':4,'Mei':5,'Juni':6,'Juli':7,'Agustus':8,'September':9,'Oktober':10,'November':11,'Desember':12};

function getEndDate(tanggal) {
  const parts = tanggal.split('–').map(s => s.trim());
  const lastPart = parts[parts.length - 1]; 
  const tokens = lastPart.split(' ');
  const day = parseInt(tokens[0]);
  const month = bulanMap[tokens[1]];
  const year = parseInt(tokens[2]);
  return (day && month && year) ? new Date(year, month-1, day, 23, 59, 59) : null;
}

function isPast(tanggal) {
  const end = getEndDate(tanggal);
  return end ? end < new Date() : false;
}

function render() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  let filtered = data;
  if (activeFilter !== 'semua') filtered = filtered.filter(d => d.jenjang === activeFilter);
  if (q) filtered = filtered.filter(d => d.judul.toLowerCase().includes(q) || d.jenjang.toLowerCase().includes(q) || d.tanggal.toLowerCase().includes(q));

  let html = '';
  if (filtered.length === 0) {
    html = '<p class="no-result">Pelatihan tidak ditemukan.</p>';
  } else {
    html += `<div class="grid">`;
    filtered.forEach(d => {
      const cm = colorMap[d.jenjang] || colorMap['SLB'];
      const img = imageMap[d.jenjang] || imageMap['SD'];
      html += `
        <div class="card">
          <div class="card-img-wrap"><img src="${img}" alt="${d.jenjang}" loading="lazy" /></div>
          <div class="card-banner ${cm.banner}"></div>
          <div class="card-body">
            <span class="card-badge ${cm.badge}">${d.jenjang}</span>
            <p class="card-title">${d.judul}</p>
            <div class="card-info"><div class="card-info-row">${d.tanggal}</div></div>
            <span class="kuota-badge">Kuota ${d.kuota} peserta</span>
          </div>
          <div class="card-footer">
            ${isPast(d.tanggal) ? `<span class="btn-daftar ditutup">Pendaftaran Ditutup</span>` : `<a href="${d.link}" class="btn-daftar" target="_blank">Daftar Sekarang</a>`}
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }
  document.getElementById('mainContent').innerHTML = html;
}

function buildFilters() {
  const list = [{key:'semua',label:'Semua',cls:'fb-semua'},{key:'PAUD',label:'PAUD',cls:'fb-paud'},{key:'SD',label:'SD',cls:'fb-sd'},{key:'SMP',label:'SMP',cls:'fb-smp'},{key:'SMA',label:'SMA',cls:'fb-sma'},{key:'SMK',label:'SMK',cls:'fb-smk'},{key:'Kesetaraan',label:'Kesetaraan',cls:'fb-kesetaraan'},{key:'SLB',label:'SLB',cls:'fb-slb'}];
  const wrap = document.getElementById('filterWrap');
  if (wrap) wrap.innerHTML = list.map(f => `<button class="filter-btn ${f.cls}${f.key === 'semua' ? ' active' : ''}" onclick="setFilter('${f.key}', this)">${f.label}</button>`).join('');
}

window.setFilter = function(key, el) {
  activeFilter = key;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  render();
}

function updateStatusIndicator(msg, color) {
    let indicator = document.getElementById('db-status');
    if(!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'db-status';
        indicator.style = "position:fixed; bottom:10px; left:10px; padding:10px; background:rgba(0,0,0,0.9); color:white; font-size:12px; border-radius:8px; z-index:9999; cursor:pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.5);";
        document.body.appendChild(indicator);
    }
    indicator.innerHTML = `<strong>STATUS:</strong> ${msg} <br> <small>(Klik untuk cek paksa)</small>`;
    indicator.style.borderLeft = `5px solid ${color}`;
    indicator.onclick = () => {
        alert("Mencoba panggil ulang database...");
        window.location.reload();
    };
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        buildFilters();
        render(); 
        
        updateStatusIndicator("MEMULAI KONEKSI...", "orange");

        if (typeof firebase === 'undefined') {
            updateStatusIndicator("ERROR: FIREBASE TIDAK TERINSTAL!", "red");
            return;
        }

        if (typeof db !== 'undefined') {
            console.log("Mencoba Listen ke Firestore...");
            db.collection("jadwal").onSnapshot((querySnapshot) => {
                console.log("Snapshot diterima!");
                if (!querySnapshot.empty) {
                    updateStatusIndicator("DATABASE LIVE (SYNCED)", "#22c55e");
                    const fireData = [];
                    querySnapshot.forEach(doc => fireData.push(doc.data()));
                    data = fireData;
                    render();
                } else {
                    updateStatusIndicator("DATABASE KOSONG / BELUM SYNC", "yellow");
                }
            }, (error) => {
                console.error("Firestore Error:", error);
                updateStatusIndicator("KONEKSI GAGAL: " + error.message, "#ef4444");
                alert("Firebase Error: " + error.message);
            });
        } else {
            updateStatusIndicator("ERROR: DB TIDAK TERDEFINISI!", "red");
        }
    } catch (e) {
        alert("Kesalahan Program: " + e.message);
        updateStatusIndicator("CRASH: " + e.message, "red");
    }
});
