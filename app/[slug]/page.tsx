import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dummyHeadlineNews, dummyCategoryNews } from "@/data/dummyNews";
import PopularSidebar from "@/components/PopularSidebar";
import NewsComment from "@/components/NewsComment";

// Gabungkan seluruh data berita untuk carian
const allNews = [...dummyHeadlineNews, ...dummyCategoryNews];

export async function generateStaticParams() {
  const allNews = [...dummyHeadlineNews, ...dummyCategoryNews];
  return allNews.map((item) => ({
    slug: item.slug,
  }));
}

interface DetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailPage({ params }: DetailPageProps) {
  const { slug } = await params;

  // Cari berita berdasarkan slug
  const news = allNews.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  // 1. Ambil berita dari kategori yang sama (kecuali berita yang sedang dibuka)
  const sameCategoryNews = allNews.filter(
    (item) => item.categorySlug === news.categorySlug && item.id !== news.id
  );

  // 2. Ambil berita dari kategori lain sebagai tambahan jika kurang dari 6
  const otherCategoryNews = allNews.filter(
    (item) => item.categorySlug !== news.categorySlug && item.id !== news.id
  );

  // 3. Gabungkan sehingga tepat mendapat 6 data berita
  const relatedNews = [...sameCategoryNews, ...otherCategoryNews].slice(0, 6);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1075px] mx-auto py-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <Link href="/" className="hover:text-[#fe4203] transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link href={`/${news.categorySlug}`} className="hover:text-[#fe4203] transition-colors capitalize">
            {news.category}
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate max-w-[250px] sm:max-w-[400px]">
            News
          </span>
        </nav>

        {/* Layout Utama 2 Kolom (Konten Berita + Sidebar Populer) */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
          
          {/* KONTEN BERITA (KIRI) */}
          <article className="flex-1 min-w-0 w-full">
            
            {/* Judul Berita Utama */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              {news.title}
            </h1>

            {/* Category Badge & Meta Information */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#fe4203] uppercase tracking-wider">{news.category}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 text-xs">{news.publishedAt || "10 Oktober 2025"}</span>
            </div>

            {/* Penulis & Share Button */}
            <div className="flex items-center justify-between border-b border-slate-100 py-3 mb-6">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span>Oleh <strong className="text-slate-900">{news.author}</strong></span>
              </div>

              {/* Tombol Bagikan */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Bagikan:</span>
                
                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Share to Facebook"
                  className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.71V8z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Share to Instagram"
                  className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://whatsapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Share to WhatsApp"
                  className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.497-.248-1.608-.99-3.064-2.281-1.132-1.002-1.894-2.24-2.117-2.613-.223-.373-.024-.574.13-.745.133-.133.297-.347.445-.521.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Gambar Utama Berita + Meta Deskripsi 1 Baris */}
            <div className="mb-6">
              <div className="relative w-full h-[250px] sm:h-[380px] md:h-[450px] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              {/* Meta Deskripsi / Caption Foto 1 Baris */}
              <p className="text-xs text-slate-500 mt-2 px-1 italic">
                Ilustrasi / Foto: Dok. suaraloka.id ({news.category})
              </p>
            </div>

            {/* Ringkasan Berita */}
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed italic bg-slate-50 border-l-4 border-[#fe4203] p-4 rounded-r-lg mb-6">
              "{news.summary}"
            </p>

            {/* Isi Konten Berita */}
            <div className="prose max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                <strong>JAKARTA, Suaraloka.id</strong> — {news.summary} Berdasarkan rincian perkembangan terbaru, berbagai pihak menyambut baik langkah strategis yang diambil untuk memastikan kontinuitas program kerja secara jangka panjang.
              </p>
              <p>
                Para pakar menilai keberlanjutan dari inisiatif ini akan membawa dampak positif bagi perkembangan ekosistem terkait. Dalam beberapa bulan ke depan, implementasi secara menyeluruh akan terus dipantau guna mengevaluasi efektivitas serta respons dari masyarakat.
              </p>

              {/* EMBED YOUTUBE DI DALAM BODY ARTIKEL */}
              <div className="my-6">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm bg-slate-900">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-[11px] text-slate-400 text-center mt-1.5 italic">
                  Video: Konferensi pers dan pembahasan terkait perkembangan topik utama. (YouTube/Suaraloka Official)
                </p>
              </div>

              <p>
                "Kami berkomitmen untuk terus menghadirkan inovasi dan keterbukaan informasi bagi seluruh pemangku kepentingan," ujar salah satu perwakilan resmi saat ditemui di lokasi kegiatan.
              </p>
            </div>

            {/* Tag Pilihan */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-500">Tag:</span>
              <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full hover:bg-slate-200 cursor-pointer">
                #{news.category}
              </span>
              <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full hover:bg-slate-200 cursor-pointer">
                #Suaraloka
              </span>
              <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full hover:bg-slate-200 cursor-pointer">
                #BeritaTerkini
              </span>
            </div>

            <NewsComment slug={slug} />

            {/* SEKSI BERITA TERKAIT (Diubah menjadi 2 Kolom di Mobile & Desktop) */}
            <div className="mt-10 pt-6 border-t-2 border-slate-900">
              <h3 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-4">
                Berita Terkait
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {relatedNews.map((item) => (
                  <Link key={`rel-${item.id}`} href={`/${item.slug}`} className="group rounded-lg hover:bg-slate-50 transition-colors flex flex-col">
                    
                    {/* Kotak Gambar dengan Aspect Ratio Resmi */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-2 bg-slate-100">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <span className="text-[10px] font-bold text-[#fe4203] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-[12px] sm:text-[14px] font-semibold text-slate-800 group-hover:text-[#fe4203] line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 mt-1 block">{item.publishedAt}</span>
                  </Link>
                ))}
              </div>
            </div>

          </article>

          {/* KONTEN KANAN: Popular Sidebar 300px (Sticky) */}
          <div className="w-full lg:w-[300px] shrink-0 mx-auto lg:mx-0 sticky top-20 z-10">
            <PopularSidebar />
          </div>

        </div>

      </div>
    </main>
  );
}