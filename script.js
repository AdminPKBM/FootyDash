document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Live Ticker Data
    const tickerContainer = document.getElementById('ticker-js');
    const scores = [
        "LIVE: Liverpool 2 - 2 Arsenal (70')",
        "LIVE: Real Madrid 1 - 0 AC Milan (35')",
        "FT: Persija 3 - 1 Persib",
        "FT: Bayern 5 - 0 Ajax",
        "UPCOMING: Indonesia vs Australia (19:00 WIB)"
    ];
    tickerContainer.innerHTML = scores.map(s => `<span style="margin-right: 50px;">${s}</span>`).join('');

    // 2. Data Berita (Simulasi Fetch API)
    const newsBatch1 = [
        { title: "Resmi: Jurgen Klopp Kembali ke Lapangan Hijau?", desc: "Mantan manajer Liverpool ini dikabarkan akan menangani tim nasional...", img: "https://images.unsplash.com/photo-1518091043644-c1d445bcc97a?w=400" },
        { title: "Sepatu Emas: Siapa Top Skor Sementara?", desc: "Daftar pemain paling tajam di lima liga top Eropa musim ini.", img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400" }
    ];

    const newsBatch2 = [
        { title: "Strategi Parkir Bus Masih Efektif?", desc: "Analisis taktik pertahanan di era sepak bola modern 2026.", img: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400" },
        { title: "Update Transfer Musim Dingin", desc: "Rekap transaksi pemain paling mengejutkan minggu ini.", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400" }
    ];

    const renderNews = (data, targetId) => {
        const target = document.getElementById(targetId);
        target.innerHTML = data.map(n => `
            <div class="news-card">
                <img src="${n.img}" alt="football">
                <div class="news-content">
                    <h3>${n.title}</h3>
                    <p>${n.desc}</p>
                    <small style="color:#e21b1b; cursor:pointer;">Baca Selengkapnya →</small>
                </div>
            </div>
        `).join('');
    };

    renderNews(newsBatch1, 'news-feed-1');
    renderNews(newsBatch2, 'news-feed-2');

    // 3. Data Hasil Pertandingan
    const results = [
        { m: "Man City vs Chelsea", s: "4 - 1" },
        { m: "Barcelona vs Sevilla", s: "2 - 0" },
        { m: "AS Roma vs Lazio", s: "1 - 1" },
        { m: "Al Nassr vs Al Hilal", s: "2 - 3" }
    ];
    document.getElementById('results-list').innerHTML = results.map(r => `
        <div class="res-item">
            <span>${r.m}</span>
            <span class="score">${r.s}</span>
        </div>
    `).join('');

    // 4. Video Highlights
    const videos = [
        { title: "Final UCL 2026 Recap", thumb: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400" },
        { title: "Top 10 Gol Minggu Ini", thumb: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=400" },
        { title: "Skill Maut Lamine Yamal", thumb: "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=400" }
    ];
    document.getElementById('video-container').innerHTML = videos.map(v => `
        <div class="video-card">
            <div class="v-thumb" style="background-image: url('${v.thumb}')">
                <i class="fas fa-play-circle play-btn"></i>
            </div>
            <div style="padding:10px;">
                <h4>${v.title}</h4>
            </div>
        </div>
    `).join('');
});
