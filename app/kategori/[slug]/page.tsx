import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dummyHeadlineNews, dummyCategoryNews, categories } from "@/data/dummyNews";
import PopularSidebar from "@/components/PopularSidebar";

// Gabungkan seluruh data berita
const allNews = [...dummyHeadlineNews, ...dummyCategoryNews];

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // 1. Validasi apakah kategori yang diminta terdaftar
  const matchedCategory = categories.find((cat) => cat.slug.toLowerCase() === slug.toLowerCase());

  if (!matchedCategory) {
    notFound();
  }

  // 2. Filter berita berdasarkan kategori, ambil maksimal 20 berita
  const filteredNews = allNews
    .filter(
      (item) => 
        item.categorySlug?.toLowerCase() === slug.toLowerCase() || 
        item.category?.toLowerCase() === matchedCategory.name.toLowerCase()
    )
    .slice(0, 20);

  return (
    <main className="min-h-screen pb-12">
      <div className="max-w-[1075px] mx-auto py-6">
        
        {/* Header Kategori Modern (Tanpa Beranda) */}
        <div className="mb-8 pb-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-5 bg-[#fe4203] rounded-full inline-block"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Kategori Pilihan</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight capitalize">
              {matchedCategory.name}
            </h1>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs self-start sm:self-auto">
            {filteredNews.length} Berita Tersedia
          </span>
        </div>

        {/* Layout Utama 2 Kolom (List Berita + Sidebar Populer) */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
          
          {/* KONTEN LIST BERITA KATEGORI (KIRI) - Desain Card Modern */}
          <div className="flex-1 min-w-0 w-full space-y-4">
            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <article 
                  key={`cat-item-${news.id || index}`} 
                  className="group bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start"
                >
                  {/* Thumbnail Berita dengan efek zoom */}
                  <div className="relative w-full sm:w-44 h-40 sm:h-28 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={news.imageUrl}
                      alt={news.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 176px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Meta & Judul */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 text-xs mb-1.5">
                        <span className="font-extrabold text-[#fe4203] uppercase tracking-wider text-[10px] bg-orange-50 px-2.5 py-0.5 rounded-md">
                          {news.category || matchedCategory.name}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-400 text-[11px] font-medium">{news.publishedAt || "Terbaru"}</span>
                      </div>

                      <Link href={`/${news.slug}`}>
                        <h2 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#fe4203] transition-colors line-clamp-2 leading-snug">
                          {news.title}
                        </h2>
                      </Link>
                    </div>

                    {news.summary && (
                      <p className="text-xs text-slate-500 line-clamp-1 leading-relaxed mt-2 font-normal">
                        {news.summary}
                      </p>
                    )}
                  </div>
                </article>
              ))
            ) : (
              <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center shadow-xs">
                <p className="text-slate-500 text-sm font-medium">
                  Belum ada berita yang tersedia untuk kategori <span className="font-bold text-slate-800">{matchedCategory.name}</span>.
                </p>
              </div>
            )}
          </div>

          {/* KONTEN KANAN: Popular Sidebar 300px (Sticky) */}
          <div className="w-full lg:w-[300px] shrink-0 mx-auto lg:mx-0 sticky top-20 z-10">
            <PopularSidebar />
          </div>

        </div>

      </div>
    </main>
  );
}