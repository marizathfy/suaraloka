import Link from "next/link";
import Image from "next/image";
import { dummyCategoryNews } from "@/data/dummyNews";

export default function CategoryNewsList() {
  return (
    <div className="flex flex-col">
      {/* Header Seksyen Kategori */}
      <div className="flex items-center justify-between border-b-2 border-[#021B50] pb-2 mb-6">
        <Link href="/indeks" className="text-[15px] font-semibold text-[#fe4203] hover:underline">
          Indeks Lainnya &rarr;
        </Link>
      </div>

      {/* Senarai 10 Berita Kategori ke Bawah */}
      <div className="flex flex-col divide-y divide-slate-100">
        {dummyCategoryNews.map((news) => (
          <article 
            key={news.id} 
            className="group flex gap-4 py-4 first:pt-0 last:pb-0"
          >
            {/* Gambar Thumbnail */}
            <div className="relative w-32 h-20 sm:w-40 sm:h-24 shrink-0 overflow-hidden rounded-md bg-slate-100">
              <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Kandungan Teks Berita */}
            <div className="flex flex-col justify-between py-0.5 w-full min-w-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-[#fe4203] uppercase tracking-wider">
                    {news.category}
                  </span>
                  <span className="text-slate-300 text-xs">•</span>
                  <span className="text-[11px] text-slate-400">
                    {news.publishedAt}
                  </span>
                </div>

                <Link href={`/${news.slug}`}>
                  <h4 className="text-slate-900 font-bold text-[14px] sm:text-sm md:text-base leading-snug hover:text-[#fe4203] transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                </Link>
              </div>
              
              {/* Deskripsi dibatasi strictly 1 baris */}
              {news.summary && (
                <p className="text-slate-500 text-xs line-clamp-1 truncate mt-1">
                  {news.summary}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}