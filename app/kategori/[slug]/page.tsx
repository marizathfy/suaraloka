import { Suspense } from "react";
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

// Komponen konten async yang aman dengan await params
async function CategoryContent({ params }: CategoryPageProps) {
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
    <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
      
      {/* KONTEN LIST BERITA KATEGORI (KIRI) */}
      <div className="flex-1 min-w-0 w-full space-y-4">
        {/* Header Kategori: Judul di Kiri, Badge Jumlah Berita di Kanan */}
        <div className="mb-6 pb-4 border-b border-slate-200 flex flex-row items-end sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-5 bg-[#fe4203] rounded-full inline-block"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Kategori Pilihan</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight capitalize">
              {matchedCategory.name}
            </h1>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs shrink-0">
            {filteredNews.length} Berita Tersedia
          </span>
        </div>

        {filteredNews.length > 0 ? (
          filteredNews.map((news, index) => (
            <article 
              key={`cat-item-${news.id || index}`} 
              className="group bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-row gap-3.5 sm:gap-4 items-start"
            >
              {/* Thumbnail Berita Kiri */}
              <div className="relative w-28 h-20 sm:w-44 sm:h-28 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  fill
                  sizes="(max-width: 640px) 112px, 176px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta & Judul Kanan */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs mb-1">
                    <span className="text-[#fe4203] uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-md font-bold">
                      {news.category || matchedCategory.name}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400 font-medium">{news.publishedAt || "Terbaru"}</span>
                  </div>

                  <Link href={`/${news.slug}`}>
                    <h2 className="font-bold text-xs sm:text-base text-slate-900 group-hover:text-[#fe4203] transition-colors line-clamp-2 leading-snug">
                      {news.title}
                    </h2>
                  </Link>
                </div>

               {news.summary && (
                <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-1 leading-relaxed mt-1 font-normal">
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
  );
}

// Skeleton loading instan saat berpindah kategori
function CategorySkeleton() {
  return (
    <div className="animate-pulse space-y-4 py-4">
      <div className="h-8 bg-slate-200 rounded-lg w-48"></div>
      <div className="h-28 bg-slate-100 rounded-2xl w-full"></div>
      <div className="h-28 bg-slate-100 rounded-2xl w-full"></div>
    </div>
  );
}

// Halaman utama yang membungkus dengan Suspense agar navigasi instan & tidak error
export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main className="min-h-screen pb-12 bg-white py-6">
      <div className="max-w-[1075px] mx-auto sm:px-0">
        <Suspense fallback={<CategorySkeleton />}>
          <CategoryContent params={params} />
        </Suspense>
      </div>
    </main>
  );
}