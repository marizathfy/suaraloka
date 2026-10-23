"use client";

import Image from "next/image";

// Data dummy postingan IG Suaraloka
const igPosts = [
  {
    id: "post-1",
    title: "GIVEAWAY SUARALOKA.ID",
    subtitle: "Jawab Pertanyaan Ini Dengan Nyeleneh...",
    imageUrl: "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?q=80&w=500&auto=format&fit=crop",
    link: "https://www.instagram.com/suaraloka.id",
    isVideo: false,
  },
  {
    id: "post-2",
    title: "BREAKING NEWS!",
    subtitle: "Momen Curanmor Terjebak di Pos Apartemen di Cikarang",
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=500&auto=format&fit=crop",
    link: "https://www.instagram.com/suaraloka.id",
    isVideo: true,
  },
  {
    id: "post-3",
    title: "BREAKING NEWS!",
    subtitle: "Momen Persib tersungkur di Menit 89 Saat Hadapi Madura United",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500&auto=format&fit=crop",
    link: "https://www.instagram.com/suaraloka.id",
    isVideo: true,
  },
  {
    id: "post-4",
    title: "UPDATE TERKINI",
    subtitle: "Simak Rangkuman Informasi Pilihan Hari Ini di Suaraloka",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=500&auto=format&fit=crop",
    link: "https://www.instagram.com/suaraloka.id",
    isVideo: false,
  },
];

export default function InstagramEmbed() {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl border-slate-200/90 shadow-xs">
      
      {/* 1. Header Profile Instagram */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar Logo Suaraloka dengan Ring Gradient IG */}
          <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shrink-0">
            <div className="w-full h-full bg-white rounded-full p-0.5 overflow-hidden relative">
              <Image 
                src="/logo.png" 
                alt="suaraloka.id" 
                fill 
                className="object-contain p-1"
              />
            </div>
          </div>

          {/* User Info */}
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                suaraloka.id
              </h3>
              {/* Verified Badge */}
              <svg className="w-4 h-4 text-sky-500 fill-current" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium mt-0.5">
              <span>88 postingan</span>
              <span>•</span>
              <span>52 pengikut</span>
            </div>
          </div>
        </div>

        {/* Tombol Follow IG dengan Ikon SVG Resmi */}
        <a 
          href="https://www.instagram.com/suaraloka.id" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-[#0095f6] hover:bg-[#1877f2] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
        >
          <span>Follow</span>
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>

      {/* 2. Grid Postingan Instagram */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {igPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-3/4 rounded-xl overflow-hidden bg-slate-900 border border-slate-100 shadow-xs block"
          >
            <Image
              src={post.imageUrl}
              alt={post.subtitle}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-between p-2.5">
              <div className="self-end">
                {post.isVideo && (
                  <div className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white">
                    <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>

              <div>
                <span className="inline-block bg-[#fe4203] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider mb-1">
                  {post.title}
                </span>
                <p className="text-white text-[11px] font-bold leading-tight line-clamp-2 drop-shadow-xs">
                  {post.subtitle}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}