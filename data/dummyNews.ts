export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface NewsItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  imageUrl: string;
  summary: string;
  content?: string;
  author: string;
  publishedAt: string;
}

export const categories: Category[] = [
  { id: 1, name: "Nasional", slug: "nasional" },
  { id: 2, name: "Teknologi", slug: "teknologi" },
  { id: 3, name: "Ekonomi", slug: "ekonomi" },
  { id: 4, name: "Olahraga", slug: "olahraga" },
  { id: 5, name: "Hiburan", slug: "hiburan" },
  { id: 6, name: "Gaya Hidup", slug: "gaya-hidup" },
];

export const dummyHeadlineNews: NewsItem[] = [
  {
    id: 101,
    title: "Presiden Resmikan Proyek Infrastruktur Digital Nasional di Ibu Kota Baru",
    slug: "presiden-resmikan-proyek-infrastruktur-digital-nasional",
    category: "Nasional",
    categorySlug: "nasional",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
    summary: "Pemerintah secara resmi memulai pengoperasian pusat data nasional terpadu untuk mempercepat transformasi digital Indonesia.",
    author: "Tim Redaksi",
    publishedAt: "10 Menit lalu"
  },
  {
    id: 102,
    title: "Peluncuran Smartphone Terbaru Generasi 5G dengan Kamera AI Tercanggih",
    slug: "peluncuran-smartphone-terbaru-generasi-5g",
    category: "Teknologi",
    categorySlug: "teknologi",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    summary: "Inovasi baru di bidang fotografi seluler berkat integrasi pemrosesan kecerdasan buatan secara real-time.",
    author: "Andi Saputra",
    publishedAt: "25 Menit lalu"
  },
  {
    id: 103,
    title: "IHSG Ditutup Menguat di Tengah Tren Positif Pasar Global Hari Ini",
    slug: "ihsg-ditutup-menguat-di-tengah-tren-positif",
    category: "Ekonomi",
    categorySlug: "ekonomi",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    summary: "Indeks Harga Saham Gabungan bergerak menguat signifikan terdorong masuknya modal asing di sektor perbankan.",
    author: "Siti Rahma",
    publishedAt: "1 Jam lalu"
  },
  {
    id: 104,
    title: "Timnas Garuda Bersiap Hadapi Laga Kualifikasi Piala Dunia Minggu Ini",
    slug: "timnas-garuda-bersiap-hadapi-laga-kualifikasi",
    category: "Olahraga",
    categorySlug: "olahraga",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
    summary: "Latihan intensif digelar untuk memastikan kondisi fisik para pemain utama dalam posisi puncak jelang pertandingan.",
    author: "Budi Santoso",
    publishedAt: "2 Jam lalu"
  },
  {
    id: 105,
    title: "Festival Film Internasional Resmi Dibuka dengan Deretan Karya Sinematik",
    slug: "festival-film-internasional-resmi-dibuka",
    category: "Hiburan",
    categorySlug: "hiburan",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    summary: "Ajang tahunan perfilman menghadirkan ratusan sutradara dan aktor ternama dari berbagai negara.",
    author: "Rina Wijaya",
    publishedAt: "3 Jam lalu"
  }
];

// DATA DUMMY 20 BERITA KATEGORI INDEX
export const dummyCategoryNews: NewsItem[] = [
  {
    id: 1,
    title: "Kembangkan Chip Pintar, Perusahaan Teknologi Ini Investasi Milyaran Dolar",
    slug: "kembangkan-chip-pintar-perusahaan-teknologi-investasi",
    category: "Teknologi",
    categorySlug: "teknologi",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    summary: "Inovasi fabrikasi pemrosesan terbaharu mampu mengurangkan penggunaan tenaga sehingga 40%.",
    author: "Rian Pratama",
    publishedAt: "30 Menit lalu"
  },
  {
    id: 2,
    title: "Bank Sentral Pertahankan Suku Bunga Utama di Tengah Inflasi Stabil",
    slug: "bank-sentral-pertahankan-suku-bunga-utama",
    category: "Ekonomi",
    categorySlug: "ekonomi",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    summary: "Keputusan ini diambil untuk terus menjaga stabilitas nilai tukar rupiah dan dorongan pertumbuhan ekosistem bisnis.",
    author: "Siti Rahma",
    publishedAt: "45 Menit lalu"
  },
  {
    id: 3,
    title: "Kemenangan Dramatis Klub Lokal Memastikan Tiket ke Babak Final",
    slug: "kemenangan-dramatis-klub-lokal-memastikan-tiket-final",
    category: "Olahraga",
    categorySlug: "olahraga",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
    summary: "Gol penentu kemenangan dicetak pada detik-detik akhir babak perpanjangan waktu melalui tendangan bebas.",
    author: "Budi Santoso",
    publishedAt: "1 Jam lalu"
  },
  {
    id: 4,
    title: "Konser Musik Lintas Generasi Sedot Puluhan Ribu Penonton di Jakarta",
    slug: "konser-musik-lintas-generasi-sedot-puluhan-ribu-penonton",
    category: "Hiburan",
    categorySlug: "hiburan",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    summary: "Penampilan spektakuler dari puluhan musisi legendaris berhasil menghibur para penikmat musik dari berbagai kelompok usia.",
    author: "Rina Wijaya",
    publishedAt: "2 Jam lalu"
  },
  {
    id: 5,
    title: "Tips Menjaga Keseimbangan Hidup dan Pekerjaan di Era Serba Cepat",
    slug: "tips-menjaga-keseimbangan-hidup-dan-pekerjaan",
    category: "Gaya Hidup",
    categorySlug: "gaya-hidup",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    summary: "Penerapan rutinitas sederhana dan jeda digital secara berkala terbukti mampu mengurangi tingkat stres pekerja perkotaan.",
    author: "Dewi Lestari",
    publishedAt: "2 Jam lalu"
  },
  {
    id: 6,
    title: "Pemerintah Terapkan Aturan Baru Perlindungan Data Pribadi Masyarakat",
    slug: "pemerintah-terapkan-aturan-baru-perlindungan-data-pribadi",
    category: "Nasional",
    categorySlug: "nasional",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    summary: "Regulasi baru ini diharapkan dapat memberikan jaminan keamanan data warga negara di era transformasi digital nasional.",
    author: "Tim Redaksi",
    publishedAt: "3 Jam lalu"
  },
  {
    id: 7,
    title: "Eksplorasi Ruang Angkasa: Satelit Baru Berhasil Mengirimkan Foto Pertama",
    slug: "eksplorasi-ruang-angkasa-satelit-baru-berhasil-kirim-foto",
    category: "Teknologi",
    categorySlug: "teknologi",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    summary: "Gambar beresolusi tinggi menunjukkan pemandangan permukaan planet secara detail untuk penelitian masa depan.",
    author: "Rian Pratama",
    publishedAt: "3 Jam lalu"
  },
  {
    id: 8,
    title: "Sektor UMKM Digital Catat Pertumbuhan Transaksi Mencapai Rekor Baru",
    slug: "sektor-umkm-digital-catat-pertumbuhan-transaksi-rekor-baru",
    category: "Ekonomi",
    categorySlug: "ekonomi",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
   
    summary: "Pemanfaatan platform pembayaran digital serta adopsi marketplace memperluas jangkauan pasar hingga ke pelosok daerah.",
    author: "Siti Rahma",
    publishedAt: "4 Jam lalu"
  },
  {
    id: 9,
    title: "Pembalap Muda Indonesia Raih Podium Utama pada Kejuaraan Asia",
    slug: "pembalap-muda-indonesia-raih-podium-utama-kejuaraan-asia",
    category: "Olahraga",
    categorySlug: "olahraga",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    summary: "Performa konsisten sejak awal putaran lap mengantarkan sang pebalap memimpin balapan hingga garis akhir.",
    author: "Budi Santoso",
    publishedAt: "4 Jam lalu"
  },
  {
    id: 10,
    title: "Peluncuran Album Baru Musisi Pop Puncak Tangga Lagu Dalam Hitungan Jam",
    slug: "peluncuran-album-baru-musisi-pop-puncak-tangga-lagu",
    category: "Hiburan",
    categorySlug: "hiburan",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    summary: "Kumpulan lagu bertema nostalgia ini langsung mendapat pujian positif dari kritik musik ternama mancanegara.",
    author: "Rina Wijaya",
    publishedAt: "5 Jam lalu"
  },
  {
    id: 11,
    title: "Rekomendasi Destinasi Wisata Alam Hidden Gem Terfavorit Tahun Ini",
    slug: "rekomendasi-destinasi-wisata-alam-hidden-gem-terfavorit",
    category: "Gaya Hidup",
    categorySlug: "gaya-hidup",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    summary: "Menyajikan panorama pegunungan dan pantai asri yang belum banyak terjamah komersialisasi pariwisata.",
    author: "Dewi Lestari",
    publishedAt: "5 Jam lalu"
  },
  {
    id: 12,
    title: "Program Beasiswa Pendidikan Tinggi Dibuka untuk Ribuan Pelajar",
    slug: "program-beasiswa-pendidikan-tinggi-dibuka-untuk-ribuan-pelajar",
    category: "Nasional",
    categorySlug: "nasional",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    summary: "Dukungan penuh diberikan pemerintah demi mencetak generasi unggul yang siap bersaing dalam iklim global.",
    author: "Tim Redaksi",
    publishedAt: "6 Jam lalu"
  },
  {
    id: 13,
    title: "Pengembangan Kendaraan Listrik Lokal Catat Kemajuan Signifikan",
    slug: "pengembangan-kendaraan-listrik-lokal-catat-kemajuan-signifikan",
    category: "Teknologi",
    categorySlug: "teknologi",
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
    summary: "Pengujian jarak tempuh baterai buatan dalam negeri menunjukkan efisiensi daya yang memuaskan untuk pemakaian harian.",
    author: "Rian Pratama",
    publishedAt: "6 Jam lalu"
  },
  {
    id: 14,
    title: "Sektor Industri Kreatif Dorong Peningkatan PDB Nasional",
    slug: "sektor-industri-kreatif-dorong-peningkatan-pdb-nasional",
    category: "Ekonomi",
    categorySlug: "ekonomi",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    summary: "Produk fesyen, kriya, dan desain digital buatan kreator lokal sukses menembus rantai pasok pasar internasional.",
    author: "Siti Rahma",
    publishedAt: "7 Jam lalu"
  },
  {
    id: 15,
    title: "Kompetisi E-Sports Nasional Dimulai, Puluhan Tim Bertanding",
    slug: "kompetisi-e-sports-nasional-dimulai-puluhan-tim-bertanding",
    category: "Olahraga",
    categorySlug: "olahraga",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    summary: "Ajang bergengsi ini memperebutkan total hadiah miliaran rupiah serta tiket mewakili negara di pentas dunia.",
    author: "Budi Santoso",
    publishedAt: "7 Jam lalu"
  },
  {
    id: 16,
    title: "Pameran Seni Kontemporer Hadirkan Karya Penuh Makna Budaya",
    slug: "pameran-seni-kontemporer-hadirkan-karya-penuh-makna-budaya",
    category: "Hiburan",
    categorySlug: "hiburan",
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=600&q=80",
    summary: "Kombinasi antara instalasi visual modern dan tradisi lokal menarik perhatian para kolektor dan penikmat seni.",
    author: "Rina Wijaya",
    publishedAt: "8 Jam lalu"
  },
  {
    id: 17,
    title: "Tren Kuliner Sehat Berbahan Organik Semakin Diminati Masyarakat",
    slug: "tren-kuliner-sehat-berbahan-organik-semakin-diminati-masyarakat",
    category: "Gaya Hidup",
    categorySlug: "gaya-hidup",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
    summary: "Restoran dan kedai makanan ramah lingkungan kini menjamur di kota-kota besar seiring meningkatnya kesadaran kesehatan.",
    author: "Dewi Lestari",
    publishedAt: "8 Jam lalu"
  },
  {
    id: 18,
    title: "Upaya Mitigasi Bencana Alam Ditingkatkan di Daerah Rawan",
    slug: "upaya-mitigasi-bencana-alam-ditingkatkan-di-daerah-rawan",
    category: "Nasional",
    categorySlug: "nasional",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    summary: "Sistem peringatan dini dan simulasi evakuasi warga disiapkan demi menekan risiko kerugian materiil serta jiwa.",
    author: "Tim Redaksi",
    publishedAt: "9 Jam lalu"
  },
  {
    id: 19,
    title: "Keamanan Siber: Panduan Mencegah Serangan Phishing pada Akun Pribadi",
    slug: "keamanan-siber-panduan-mencegah-serangan-phishing",
    category: "Teknologi",
    categorySlug: "teknologi",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    summary: "Para ahli membagikan tips mengidentifikasi email mencurigakan serta mengamankan kredensial perbankan digital.",
    author: "Rian Pratama",
    publishedAt: "9 Jam lalu"
  },
  {
    id: 20,
    title: "Inovasi Pertanian Modern Tingkatkan Hasil Panen Petani Lokal",
    slug: "inovasi-pertanian-modern-tingkatkan-hasil-panen-petani-lokal",
    category: "Ekonomi",
    categorySlug: "ekonomi",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
    summary: "Pemanfaatan teknologi sensor tanah dan irigasi otomatis bantu hemat air dan dongkrak produktivitas komoditas pangan.",
    author: "Siti Rahma",
    publishedAt: "10 Jam lalu"
  }
];