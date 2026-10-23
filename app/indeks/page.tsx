'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PopularSidebar from "@/components/PopularSidebar";
import { dummyHeadlineNews, dummyCategoryNews } from '@/data/dummyNews';

export default function IndeksPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Gabungkan seluruh sumber data berita
  const allNews = [...dummyHeadlineNews, ...dummyCategoryNews];

  // Logika filter data berita (Kategori & Tanggal)
  const filteredNews = allNews.filter((news: any) => {
    // 1. Filter Kategori
    const matchCategory = selectedCategory 
      ? news.category?.toLowerCase() === selectedCategory.toLowerCase() || news.categorySlug?.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    // 2. Filter Tanggal
    let matchDate = true;
    if (selectedDate) {
      const [selYear, selMonth, selDay] = selectedDate.split('-');
      const newsDateStr = (news.publishedAt || news.time || '').toLowerCase();

      const monthsIndo: { [key: string]: string } = {
        '01': 'januari', '02': 'februari', '03': 'maret', '04': 'april',
        '05': 'mei', '06': 'juni', '07': 'juli', '08': 'agustus',
        '09': 'september', '10': 'oktober', '11': 'november', '12': 'desember'
      };

      const dayFormatted = parseInt(selDay, 10).toString();
      const monthName = monthsIndo[selMonth] || '';

      const hasYear = newsDateStr.includes(selYear);
      const hasMonth = newsDateStr.includes(monthName);
      const hasDay = newsDateStr.includes(selDay) || newsDateStr.includes(dayFormatted);

      matchDate = hasYear && hasMonth && hasDay;
    }

    return matchCategory && matchDate;
  });

  // Tampilkan data hasil filter, atau fallback jika tidak difilter
  const newsList = selectedCategory || selectedDate ? filteredNews : allNews.slice(0, 50);

  return (
    <div className="max-w-[1075px] mx-auto py-6">
      
      {/* Page Header & Filter Section */}
      <div className="bg-white p-4 sm:p-5 rounded-lg border border-slate-200 mb-6 shadow-sm">
        <div className="border-b border-slate-100 pb-3 mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Indeks Berita</h1>
          <p className="text-xs text-slate-500 mt-1">
            Arsip berita terbaru berdasarkan tanggal dan kategori
          </p>
        </div>

        {/* Form Filter Interaktif */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="w-full sm:w-auto">
            <label htmlFor="kategori" className="block text-xs font-semibold text-slate-600 mb-1">
              Kategori
            </label>
            <select 
              id="kategori" 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#fe4203]"
            >
              <option value="">Semua Kategori</option>
              <option value="Nasional">Nasional</option>
              <option value="Teknologi">Teknologi</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Olahraga">Olahraga</option>
              <option value="Hiburan">Hiburan</option>
            </select>
          </div>

          <div className="w-full sm:w-auto">
            <label htmlFor="tanggal" className="block text-xs font-semibold text-slate-600 mb-1">
              Tanggal
            </label>
            <input 
              type="date" 
              id="tanggal"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full sm:w-auto bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#fe4203]"
            />
          </div>

          <div className="self-end mt-2 sm:mt-0">
            <button 
              type="button" 
              onClick={() => {
                setSelectedCategory('');
                setSelectedDate('');
              }}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium text-xs px-4 py-2 rounded transition-colors"
            >
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      {/* Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Main Content: List Berita Indeks */}
        <div className="lg:col-span-2 space-y-0">
          {newsList.length > 0 ? (
            newsList.map((news: any, index: number) => {
              const newsImage = news.imageUrl || news.image || news.thumbnail || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&auto=format&fit=crop";

              return (
                <article 
                  key={`indeks-${news.id || index}`} 
                  className="py-4 border-b border-slate-100 flex gap-4 items-start bg-transparent group"
                >
                  {/* Container Gambar Thumbnail (Diatur agar tetap proporsional dan tidak gepeng di mobile & desktop) */}
                  <div className="relative w-32 h-20 sm:w-40 sm:h-24 bg-slate-100 rounded-md overflow-hidden shrink-0">
                    <Image 
                      src={newsImage} 
                      alt={news.title || "Berita"}
                      fill
                      sizes="(max-width: 640px) 128px, 160px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Meta & Judul Berita */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 text-xs mb-1">
                        <span className="font-bold text-[#fe4203] uppercase tracking-wide text-[10px]">
                          {news.category || 'NASIONAL'}
                        </span>
                        {(news.publishedAt || news.time) && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-400 text-[11px]">{news.publishedAt || news.time}</span>
                          </>
                        )}
                      </div>

                      <Link href={`/${news.slug}`}>
                        <h2 className="font-bold text-[13px] sm:text-base text-slate-900 hover:text-[#fe4203] transition-colors line-clamp-2 leading-snug mb-1">
                          {news.title}
                        </h2>
                      </Link>
                    </div>

                    {(news.summary || news.excerpt) && (
                      <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-1 leading-relaxed mt-1">
                        {news.summary || news.excerpt}
                      </p>
                    )}
                  </div>
                </article>
              );
            })
          ) : (
            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center text-slate-500 text-sm">
              Tidak ada berita yang ditemukan untuk filter tanggal atau kategori tersebut.
            </div>
          )}
        </div>

        {/* Right Column: Sidebar Berita Populer (Sticky) */}
        <aside className="w-full lg:w-[300px] shrink-0 sticky top-20 z-10">
          <PopularSidebar />
        </aside>

      </div>
    </div>
  );
}