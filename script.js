document.addEventListener('DOMContentLoaded', () => {

    // 1. Pilar Berita (Integrated Keywords)
    const dataPilar = {
        elite: [
            { cat: "El Clasico", title: "Madrid vs Barca: Duel Strategi Zidane & Luka Modrić", desc: "Pertarungan gengsi di Bernabéu. Akankah Madrid vs Barcelona menjadi panggung terakhir Modrić?", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400" },
            { cat: "UCL", title: "PSG vs Bayern Munchen: Griezmann Jadi Kunci Serangan", desc: "Antoine Griezmann siap menghancurkan pertahanan Bayern dalam laga hidup mati di Paris.", img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400" },
            { cat: "Transfer", title: "Arsenal vs Atlético Madrid Berebut Marc Guéhi & Kounde", desc: "Mikel Arteta siapkan dana besar untuk Guehi, namun Atletico tawarkan tukar tambah dengan Kounde.", img: "https://images.unsplash.com/photo-1518091043644-c1d445bcc97a?w=400" }
        ],
        indo: [
            { cat: "Timnas", title: "Jadwal Timnas Indonesia di Kualifikasi Piala Dunia 2026", desc: "Cek jadwal lengkap perjuangan Garuda menuju World Cup 2026. Bisakah kita lolos?", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400" },
            { cat: "Asia", title: "East Bengal vs Juarez: Gebrakan Baru Liga India", desc: "East Bengal mencoba menantang Juárez vs UANL dalam turnamen pramusim lintas benua.", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" }
        ],
        niche: [
            { cat: "Serie C", title: "Salernitana, Benevento, & Catania: Misi Kembali ke A", desc: "Tiga raksasa tidur Italia berjuang di kasta bawah. Federico Chiesa berikan dukungan moral.", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400" },
            { cat: "Europe", title: "Kejutan Otelul Galati & Sportivo Trinidense", desc: "Kisah epik klub kecil Otelul Galati yang berhasil menembus kompetisi Eropa musim ini.", img: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400" }
        ],
        global: [
            { cat: "NBA", title: "Luka Dončić Menggila di Laga Celtics vs Timberwolves", desc: "Update NBA: Lakers vs Pistons berakhir tipis, sementara Dončić pamer skill tingkat dewa.", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400" },
            { cat: "Tennis", title: "Sabalenka Melaju, Alexandra Eala Cetak Rekor", desc: "Aryna Sabalenka amankan tiket final, sementara bintang muda Filipina Eala terus meroket.", img: "https://images.unsplash.com/photo-1595435064222-4528249a2a9a?w=400" }
        ]
    };

    // 2. Render Function
    const renderSection = (items, elementId) => {
        const container = document.getElementById(elementId);
        container.innerHTML = items.map(item => `
            <article class="card">
                <img src="${item.img}" class="card-img" alt="${item.title}">
                <div class="card-body">
                    <span class="card-cat">${item.cat}</span>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </article>
        `).join('');
    };

    renderSection(dataPilar.elite, 'pilar-elite');
    renderSection(dataPilar.indo, 'pilar-indo');
    renderSection(dataPilar.niche, 'pilar-niche');
    renderSection(dataPilar.global, 'pilar-global');

    // 3. Results Data (Integrated Keywords)
    const results = [
        { t: "Castellón vs Leonesa", s: "2 - 1" },
        { t: "Estudiantes vs Huracan", s: "1 - 1" },
        { t: "Lakers vs Pistons", s: "120 - 102" },
        { t: "Tolima vs Real Cartagena", s: "3 - 0" },
        { t: "Juárez vs UANL", s: "0 - 2" },
        { t: "Torpedo Moscow vs Elana", s: "1 - 0" }
    ];

    document.getElementById('results-list').innerHTML = results.map(r => `
        <div class="res-item">
            <span>${r.t}</span>
            <span class="score">${r.s}</span>
        </div>
    `).join('');

    // 4. Live Ticker Animation
    const ticker = document.getElementById('live-ticker');
    const tickerNews = [
        "Jadwal Timnas Indonesia vs Australia: 26 Maret 2026",
        "Transfer Update: Isak & Kenneth Taylor dalam radar PSG",
        "NBA: Celtics vs Timberwolves sedang berlangsung!",
        "Real Madrid vs Barcelona: Tiket ludes dalam 10 menit",
        "Zidane resmi kembali melatih? Tunggu update selanjutnya"
    ];
    ticker.innerHTML = `<marquee scrollamount="5">${tickerNews.join(' &nbsp; | &nbsp; ')}</marquee>`;
});
