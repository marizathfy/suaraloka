import Link from "next/link";
import Image from "next/image";
import { dummyHeadlineNews } from "@/data/dummyNews";

export default function HeroHeadline() {
  const mainNews = dummyHeadlineNews[0];
  const subNews = dummyHeadlineNews.slice(1, 5);

  return (
    <section className="py-4">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-between">
        
        {/* ================= SEBELAH KIRI: HEADLINE UTAMA + 4 SUB-HEADLINE ================= */}
        <div className="flex-1 min-w-0 w-full flex flex-col gap-6">
          
          {/* 1. HEADLINE UTAMA BESAR */}
          <article className="group relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 shadow-sm block">
            <Image
              src={mainNews.imageUrl}
              alt={mainNews.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            
            {/* Gradient Overlay Gelap di Bawah */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-[#fe4203] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {mainNews.category}
                </span>
                <span className="text-slate-300 text-xs">•</span>
                <span className="text-slate-300 text-xs font-medium">
                  {mainNews.publishedAt}
                </span>
              </div>

              <Link href={`/${mainNews.slug}`}>
                <h2 className="text-white text-base sm:text-2xl lg:text-3xl font-black leading-snug hover:underline line-clamp-2 drop-shadow-md">
                  {mainNews.title}
                </h2>
              </Link>
            </div>
          </article>

          {/* 2. 4 HEADLINE KECIL DI BAWAHNYA */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {subNews.map((news) => (
              <article 
                key={news.id} 
                className="group flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 bg-white sm:p-3 sm:rounded-2xl sm:border sm:border-slate-200/80 sm:shadow-xs hover:border-slate-300 transition-all items-start"
              >
                {/* Thumbnail */}
                <div className="relative w-full sm:w-32 aspect-[16/10] sm:h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={news.imageUrl}
                    alt={news.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 130px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Teks Berita */}
                <div className="flex flex-col justify-center min-w-0 flex-1 w-full">
                  <div className="flex items-center gap-1.5 mb-1 text-[10px] sm:text-xs">
                    <span className="font-bold text-[#fe4203] uppercase tracking-wider">
                      {news.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400 font-medium truncate">
                      {news.publishedAt}
                    </span>
                  </div>
                  
                  <Link href={`/${news.slug}`}>
                    <h3 className="text-slate-900 font-bold text-xs sm:text-[13px] leading-snug hover:text-[#fe4203] transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* ================= SEBELAH KANAN / BAWAH: BANNER IKLAN 300x600 (TAMPIL DI SEMUA PERANGKAT) ================= */}
        <div className="w-full lg:w-[300px] shrink-0 flex justify-center mx-auto">
          <div className="sticky top-20 w-[300px] h-[600px] bg-slate-100 rounded-2xl p-6 border-2 border-dashed border-slate-300 flex flex-col justify-between text-center relative shadow-xs box-border">
            
            {/* Label Atas */}
            <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold tracking-wider uppercase">
              <span>IKLAN / SPONSOR</span>
              <span>300x600</span>
            </div>

            {/* Isi Banner Tulisan Saja */}
            <div className="flex flex-col items-center justify-center my-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-orange-100 text-[#fe4203] flex items-center justify-center font-black text-xl shadow-xs">
                ADS
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#fe4203] uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                  Pasang Iklan Anda
                </span>
                <h3 className="text-slate-900 font-black text-xl sm:text-2xl leading-snug tracking-tight">
                  Mau Iklan Bisa Di Sini <br/><span className="text-[#fe4203]">suaraloka.id</span>
                </h3>
                <p className="text-xs text-slate-500 font-medium pt-2">
                  Jangkau pembaca lebih luas bersama portal berita terpercaya.
                </p>
              </div>
            </div>

            {/* Tombol Kontak Bawah */}
            <div>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-[#021B50] hover:bg-[#042b7d] text-white text-xs font-bold py-3 rounded-xl transition-colors shadow-sm"
              >
                Hubungi Pemasangan Iklan
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}