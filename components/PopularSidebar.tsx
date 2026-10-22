import Link from "next/link";
import { dummyHeadlineNews } from "@/data/dummyNews";

export default function PopularSidebar() {
  const popularSidebarNews = dummyHeadlineNews.slice(0, 5);

  return (
    <aside className="w-full lg:w-[300px] flex flex-col gap-6 shrink-0">
      {/* Box Berita Populer */}
      <div className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 mb-4">
          <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider">
            BERITA POPULER
          </h3>
        </div>

        <div className="flex flex-col divide-y divide-slate-100">
          {popularSidebarNews.map((news, index) => (
            <article 
              key={`pop-${news.id}`} 
              className={`group flex items-center gap-3.5 py-3.5 ${index === 0 ? "pt-0" : ""} ${index === popularSidebarNews.length - 1 ? "pb-0" : ""}`}
            >
              {/* Nomor Urut: Warna Oren & Sejajar Tinggi dengan Teks */}
              <span className="text-xl font-black shrink-0 w-7 text-center text-[#fe4203]">
                0{index + 1}
              </span>

              <div className="flex flex-col justify-center w-full min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[10px] font-bold text-[#fe4203] uppercase tracking-wider">
                    {news.category}
                  </span>
                  <span className="text-slate-300 text-[10px]">•</span>
                  <span className="text-[10px] text-slate-400">{news.publishedAt}</span>
                </div>
                
                <Link href={`/${news.slug}`}>
                  <h4 className="text-slate-800 font-semibold text-xs sm:text-sm leading-snug hover:text-[#fe4203] transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Kotak Iklan: Lebar 300px dan Posisinya di Tengah */}
      <div className="w-full flex justify-center">
        <div className="w-[300px] h-[250px] bg-slate-100 border border-slate-200  flex flex-col items-center justify-center text-slate-400 text-xs font-semibold p-2 text-center shrink-0">
          <span>[ Slot Iklan Banner ]</span>
          <span className="text-[10px] text-slate-400 mt-1">300 x 250 px</span>
        </div>
      </div>
    </aside>
  );
}