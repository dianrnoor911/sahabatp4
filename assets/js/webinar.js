// ══ WEBINAR FINAL LOGIC (WITH FALLBACK) ══
let webinarsData = [];

function startApp() {
    if (typeof db !== 'undefined' && db !== null) {
        loadData();
    } else {
        setTimeout(startApp, 50);
    }
}

function loadData() {
    const container = document.getElementById('webinarContainer');
    if(!container) return;

    db.collection("webinars").orderBy("tanggal", "desc").onSnapshot((snaps) => {
        webinarsData = [];
        snaps.forEach(doc => {
            webinarsData.push({ id: doc.id, ...doc.data() });
        });
        renderWebinars();
    }, (err) => {
        console.error("Firestore Error:", err);
    });
}

function renderWebinars() {
    const container = document.getElementById('webinarContainer');
    const searchInput = document.getElementById('webinarSearch');
    const search = searchInput ? searchInput.value.toLowerCase() : "";
    const filtered = webinarsData.filter(w => (w.judul || '').toLowerCase().includes(search));

    if (filtered.length === 0) {
        container.innerHTML = `<div class="webinar-not-found">Webinar tidak ditemukan.</div>`;
        return;
    }

    let html = '';
    filtered.forEach(item => {
        html += createCardHTML(item.id, item);
    });
    container.innerHTML = html;
}

function createCardHTML(id, data) {
    const status = data.status || 'upcoming';
    const tagLabel = status === 'upcoming' ? 'Segera' : (status === 'live' ? 'Live' : 'Selesai');
    let dateStr = "-";
    if(data.tanggal) {
        const d = new Date(data.tanggal);
        if(!isNaN(d)) dateStr = d.toLocaleDateString('id-ID', {day:'numeric', month:'long', year:'numeric'});
    }

    return `
        <div class="webinar-card">
            <div class="webinar-media">
                <img src="${data.gambar || 'https://i.ibb.co.com/gMjGGm9C/1.png'}" alt="Thumbnail">
                <span class="status-tag status-${status}">${tagLabel}</span>
            </div>
            <div class="webinar-info">
                <div class="webinar-date-row">📅 ${dateStr}</div>
                <h3 class="webinar-judul">${data.judul}</h3>
                <div class="webinar-speaker">
                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(data.narasumber || 'P4')}&background=random" alt="Avatar">
                    <span><strong>${data.narasumber || 'Tim P4 Selatan'}</strong> Narasumber</span>
                </div>
                <div class="webinar-footer-btns">
                    ${status === 'done' 
                        ? `<button class="btn-webinar btn-play" onclick="openVideo('${data.linkVideo}', \`${data.judul}\`)">Tonton Rekaman</button>` 
                        : `<a href="${data.linkDaftar || '#'}" target="_blank" class="btn-webinar btn-play">Daftar Sesi</a>`
                    }
                    <button class="btn-webinar btn-alt" onclick="openMateri('${data.linkMateri}', \`${data.judul}\`)">Materi</button>
                </div>
            </div>
        </div>
    `;
}

window.filterWebinars = function() { renderWebinars(); }

// ══ MODAL VIDEO WITH FALLBACK ══
window.openVideo = function(url, title) {
    const vId = extractID(url);
    const modal = document.getElementById('modalVideo');
    const playerDiv = document.getElementById('player');
    const fallbackLink = document.getElementById('ytFallbackLink');
    
    document.getElementById('videoTitle').innerText = title;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (vId) {
        // Set link fallback untuk tombol merah
        if(fallbackLink) fallbackLink.href = `https://www.youtube.com/watch?v=${vId}`;

        // Suntik Iframe murni
        playerDiv.innerHTML = `
            <iframe 
                src="https://www.youtube-nocookie.com/embed/${vId}?autoplay=1&rel=0" 
                allow="autoplay; encrypted-media; picture-in-picture" 
                allowfullscreen>
            </iframe>`;
    } else {
        window.open(url, '_blank');
    }
}

window.closeVideo = function() {
    document.getElementById('modalVideo').style.display = 'none';
    document.getElementById('player').innerHTML = '';
    document.body.style.overflow = 'auto';
}

window.openMateri = function(url, title) {
    if(!url || url === '#' || url === '') return alert("Maaf, materi belum tersedia.");
    const modal = document.getElementById('modalDoc');
    document.getElementById('docTitle').innerText = "Materi: " + title;
    document.getElementById('docDownload').href = url;
    let previewUrl = url;
    if(url.includes('drive.google.com/file/d/')) {
        previewUrl = url.replace('/view?usp=drive_link', '/preview').replace('/view', '/preview');
    }
    document.getElementById('docFrame').src = previewUrl;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

window.closeDoc = function() {
    document.getElementById('modalDoc').style.display = 'none';
    document.getElementById('docFrame').src = '';
    document.body.style.overflow = 'auto';
}

window.closeVideoOnBg = function(e) { if(e.target.id === 'modalVideo') closeVideo(); }
window.closeDocOnBg = function(e) { if(e.target.id === 'modalDoc') closeDoc(); }

function extractID(url) {
    if(!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

document.addEventListener('DOMContentLoaded', startApp);
