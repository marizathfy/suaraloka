import Link from "next/link";
import Image from "next/image";
import { dummyHeadlineNews } from "@/data/dummyNews";

export default function HeroHeadline() {
  const mainNews = dummyHeadlineNews[0];
  // Mengambil 4 berita untuk bahagian kanan
  const sideNews = dummyHeadlineNews.slice(1, 5);

  return (
    <section className="py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* ================= SEBELAH KIRI (UTAMA BESAR) - 7 KOLUM ================= */}
        <div className="lg:col-span-7">
          <article className="group flex flex-col">
            {/* Gambar Utama */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-slate-100 mb-3.5">
              <Image
                src={mainNews.imageUrl}
                alt={mainNews.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Kandungan Teks di Bawah Gambar */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[#fe4203] text-xs font-bold uppercase tracking-wider">
                  {mainNews.category}
                </span>
                <span className="text-slate-400 text-xs">•</span>
                <span className="text-slate-400 text-xs">
                  {mainNews.publishedAt}
                </span>
              </div>

              <Link href={`/${mainNews.slug}`}>
                <h2 className="text-slate-900 text-xl sm:text-2xl md:text-3xl font-bold leading-snug hover:text-[#fe4203] transition-colors line-clamp-2">
                  {mainNews.title}
                </h2>
              </Link>
            </div>
          </article>
        </div>

        {/* ================= SEBELAH KANAN (4 DATA KANAN TANPA CARD) - 5 KOLUM ================= */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-slate-100">
          {sideNews.map((news, index) => (
            <article 
              key={news.id} 
              className={`group flex gap-3.5 py-3.5 ${index === 0 ? "pt-0" : ""} ${index === sideNews.length - 1 ? "pb-0" : ""}`}
            >
              {/* Gambar Thumb Kecil */}
              <div className="relative w-28 h-20 sm:w-32 sm:h-20 shrink-0 overflow-hidden rounded-md bg-slate-100">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Teks Berita Kecil */}
              <div className="flex flex-col justify-between py-0.5">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-bold text-[#fe4203] uppercase tracking-wider">
                      {news.category}
                    </span>
                    <span className="text-slate-300 text-[10px]">•</span>
                    <span className="text-[10px] text-slate-400">
                      {news.publishedAt}
                    </span>
                  </div>
                  <Link href={`/${news.slug}`}>
                    <h3 className="text-slate-800 font-semibold text-[13px] sm:text-sm leading-snug hover:text-[#fe4203] transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}