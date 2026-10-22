"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/dummyNews";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  // Set waktu real-time setiap saat (mencegah hydration mismatch)
  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Pantau aktivitas scroll halaman
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true); // Header mengecil + aktifkan shadow saat discroll
      } else {
        setIsScrolled(false); // Default: bersih tanpa border & tanpa shadow
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mencari:", searchQuery);
    setIsSearchOpen(false);
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
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 border-none ${
      isScrolled ? "shadow-md py-1" : "shadow-none py-2"
    }`}>
      {/* Main Header (Logo & Search) */}
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-4">
        {/* Logo Kiri */}
        <Link href="/" className="flex items-center shrink-0">
          <Image 
            src="/logo.png" 
            alt="Suaraloka.com" 
            width={220} 
            height={85} 
            priority 
            className={`object-contain transition-all duration-300 ${
              isScrolled ? "w-28 sm:w-36 md:w-40" : "w-36 sm:w-48 md:w-56"
            } h-auto`} 
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
              className="w-full text-xs bg-slate-100 text-slate-700 placeholder-slate-400 border border-slate-200 rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:border-slate-400 transition-colors"
            />
            <button 
              type="submit" 
              className="absolute right-1 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#fe4203] p-1.5 rounded-full transition-colors"
              aria-label="Cari"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Ikon Sosmed Desktop */}
          <div className="flex items-center space-x-2 border-l border-slate-200 pl-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#fe4203] hover:text-white transition-colors"
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
              className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#fe4203] hover:text-white transition-colors"
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
            className="p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white bg-[#021B50] hover:bg-[#042b7d] rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Input Search Overlay */}
      {isSearchOpen && (
        <div className="md:hidden bg-slate-100 border-t border-b border-slate-200 p-2.5">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-white border border-slate-300 rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:border-[#021B50]"
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

      {/* Desktop Navigation Bar - Sembunyi halus saat discroll */}
      <nav 
        className={`bg-[#021B50] text-white hidden md:block transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-20 opacity-100 py-2 mt-2"
        }`}
      >
        <div className="max-w-[1080px] mx-auto flex items-center justify-between px-4 text-xs font-semibold">
          {/* Menu Navigasi Kiri */}
          <div className="flex space-x-5 overflow-x-auto scrollbar-none py-1">
            <Link 
              href="/" 
              className="hover:text-[#fe4203] transition-colors whitespace-nowrap text-[#fe4203]"
            >
              Beranda
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="hover:text-[#fe4203] transition-colors whitespace-nowrap"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Jam & Tanggal Realtime di Sebelah Kanan Menu (Desktop) */}
          {currentTime && (
            <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-300 shrink-0 pl-4 border-l border-blue-900">
              <svg className="w-3.5 h-3.5 text-[#fe4203]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatDateString(currentTime)}, <strong className="text-white">{formatTimeString(currentTime)}</strong></span>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Hamburger Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#021B50] text-white border-t border-blue-900 px-4 py-4 shadow-xl">
          {/* Tanggal & Waktu Realtime untuk Mobile di bagian atas drawer */}
          {currentTime && (
            <div className="mb-3 pb-3 border-b border-blue-900 flex items-center gap-2 text-[11px] text-slate-300">
              <svg className="w-3.5 h-3.5 text-[#fe4203]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formatDateString(currentTime)} - <strong className="text-white">{formatTimeString(currentTime)}</strong></span>
            </div>
          )}

          <div className="flex flex-col space-y-2 font-medium text-xs">
            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider mb-1">Kategori Berita</span>
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="text-[#fe4203] hover:underline"
            >
              Beranda
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#fe4203] transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}