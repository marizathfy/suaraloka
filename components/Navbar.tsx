"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { categories } from "@/data/dummyNews";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const pathname = usePathname();

  // Set waktu real-time
  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Kunci scroll background saat menu drawer mobile terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/indeks?q=${encodeURIComponent(searchQuery)}`;
      setIsSearchOpen(false);
    }
  };

  // Format tanggal & waktu Indonesia
  const formatDateString = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('id-ID', options);
  };

  const formatTimeString = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    }) + " WIB";
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 shadow-md">
      
      {/* ================= MAIN HEADER (GRADASI: PUTIH #fff DI KIRI, BERANGSUR KE #021B50) ================= */}
      <div 
        className="border-b border-blue-900/40 shadow-inner"
        style={{
          background: "linear-gradient(to right, #ffffff 0%, #ffffff 22%, #021B50 65%, #021B50 100%)"
        }}
      >
        <div className="max-w-[1075px] mx-auto flex items-center justify-between px-4 py-3">
          
          {/* Logo Kiri: Tampil di atas background #fff murni */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image 
              src="/logo.png" 
              alt="Suaraloka.id" 
              width={220} 
              height={85} 
              priority 
              className="object-contain w-36 sm:w-48 md:w-52 h-auto transition-transform group-hover:scale-102" 
            />
          </Link>
          
          {/* Search Bar & Sosmed Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <form onSubmit={handleSearch} className="relative flex items-center w-56 lg:w-64">
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-black/20 text-white placeholder-white/80 border border-white/20 rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:border-amber-400 focus:bg-black/30 transition-colors shadow-inner font-medium"
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1/2 -translate-y-1/2 text-white/90 hover:text-amber-400 p-1.5 rounded-full transition-colors"
                aria-label="Cari"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Sosmed Desktop */}
            <div className="flex items-center space-x-2 border-l border-white/20 pl-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-[#021B50] transition-colors shadow-xs"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-[#021B50] transition-colors shadow-xs"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.71V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-white bg-white/15 hover:bg-white/25 rounded-full transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-white bg-[#021B50] hover:bg-[#042b7d] rounded-lg transition-colors focus:outline-none flex items-center justify-center shadow-sm"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Input Search Overlay */}
      {isSearchOpen && (
        <div className="md:hidden bg-[#021B50] border-t border-blue-900 p-3">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              placeholder="Cari kata kunci berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-white text-slate-800 border border-slate-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-amber-400"
              autoFocus
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* ================= DESKTOP NAVIGATION BAR (WARNA SOLID #021B50 TANPA GRADASI) ================= */}
      <nav className="bg-[#021B50] text-white hidden md:block py-2.5 border-t border-blue-900/50 shadow-inner">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between px-4 text-xs font-semibold">
          <div className="flex space-x-5 overflow-x-auto scrollbar-none py-1 items-center">
            
            {/* Menu Home */}
            <Link 
              href="/" 
              className={`transition-colors whitespace-nowrap ${
                pathname === "/" ? "text-amber-400 font-bold underline underline-offset-4" : "text-white hover:text-amber-400"
              }`}
            >
              Home
            </Link>

            {/* List Kategori */}
            {categories.map((cat) => {
              const categoryPath = `/kategori/${cat.slug}`;
              const isActive = pathname === categoryPath;
              return (
                <Link
                  key={cat.slug}
                  href={categoryPath}
                  className={`transition-colors whitespace-nowrap ${
                    isActive ? "text-amber-400 font-bold underline underline-offset-4" : "text-white hover:text-amber-400"
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}

            {/* Menu Indeks */}
            <Link 
              href="/indeks" 
              className={`transition-colors whitespace-nowrap ${
                pathname === "/indeks" ? "text-amber-400 font-bold underline underline-offset-4" : "text-white hover:text-amber-400"
              }`}
            >
              Indeks
            </Link>
          </div>

          {currentTime && (
            <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-300 shrink-0 pl-4 border-l border-blue-900">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatDateString(currentTime)}, <strong className="text-white">{formatTimeString(currentTime)}</strong></span>
            </div>
          )}
        </div>
      </nav>

      {/* ================= MOBILE APP DRAWER MENU ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden bg-white text-slate-800 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          
          {/* Header Drawer Sticky */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image 
                src="/logo.png" 
                alt="Suaraloka.id" 
                width={150} 
                height={55} 
                priority
                className="object-contain w-36 h-auto" 
              />
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-all focus:outline-none"
              aria-label="Close Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Isi Konten Menu Mobile */}
          <div className="p-5 flex-1 space-y-6">
            
            {/* Banner Jam & Tanggal */}
            {currentTime && (
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2.5 text-xs text-slate-600">
                <svg className="w-4 h-4 text-[#021B50] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{formatDateString(currentTime)} — <strong className="text-slate-900">{formatTimeString(currentTime)}</strong></span>
              </div>
            )}

            {/* Grid Navigasi Kategori Berita */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Pilih Kategori</span>
                <span className="text-[10px] text-[#021B50] font-semibold bg-blue-500/10 px-2 py-0.5 rounded">Menu Utama</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Menu Utama Home */}
                <Link 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-3.5 rounded-xl font-bold text-xs text-center shadow-xs active:scale-98 transition-transform ${
                    pathname === "/" ? "bg-[#021B50] text-white" : "bg-slate-100 text-slate-800"
                  }`}
                >
                  Home
                </Link>

                {/* Indeks */}
                <Link 
                  href="/indeks" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-3.5 rounded-xl font-bold text-xs text-center active:scale-98 transition-transform ${
                    pathname === "/indeks" ? "bg-[#021B50] text-amber-400" : "bg-slate-100 text-slate-800"
                  }`}
                >
                  Indeks
                </Link>

                {/* List Kategori Berita */}
                {categories.map((cat) => {
                  const categoryPath = `/kategori/${cat.slug}`;
                  const isActive = pathname === categoryPath;
                  return (
                    <Link
                      key={cat.slug}
                      href={categoryPath}
                      onClick={() => setIsMenuOpen(false)}
                      className={`p-3.5 rounded-xl font-semibold text-xs text-center active:scale-98 transition-all ${
                        isActive 
                          ? "bg-[#021B50] text-white font-bold" 
                          : "bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-800"
                      }`}
                    >
                      {cat.name}
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer Mobile Drawer (Ikon IG & FB) */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/50 space-y-4">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Ikuti Media Sosial Suaraloka</span>
              
              <div className="flex items-center justify-center gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:bg-[#021B50] hover:text-white hover:border-[#021B50] transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:bg-[#021B50] hover:text-white hover:border-[#021B50] transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.71V8z"/>
                  </svg>
                </a>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 text-center">
              © {new Date().getFullYear()} Suaraloka.id — Portal Berita Terpercaya
            </p>
          </div>

        </div>
      )}
    </header>
  );
}