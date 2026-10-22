import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/dummyNews";

export default function Footer() {
  return (
    <footer className="bg-[#021B50] text-slate-300 mt-16 border-t border-blue-900">
      {/* Container Utama Footer */}
      <div className="max-w-[1075px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* 1. SEBELAH KIRI: Alamat & Kontak */}
          <div className="flex flex-col space-y-3.5 pb-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-blue-800 pb-2">
              Alamat & Kontak
            </h4>
            <div className="text-[12px] space-y-3 text-slate-200 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#fe4203] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Gedung Suaraloka Media, Jl. Palmerah Selatan No. 12, Jakarta Pusat 10270</span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#fe4203] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>redaksi@suaraloka.id</span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#fe4203] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(021) 555-0192</span>
              </div>
            </div>
          </div>

          {/* 2. BAGIAN TENGAH: Menu Navigasi 2 Kolom Rapi */}
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-blue-800 pb-2">
              Menu & Navigasi
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[12px]">
              <Link href="/" className="hover:text-[#fe4203] transition-colors py-0.5">
                Beranda
              </Link>
              {categories.map((cat) => (
                <Link
                  key={`footer-cat-${cat.slug}`}
                  href={`/${cat.slug}`}
                  className="hover:text-[#fe4203] transition-colors py-0.5"
                >
                  {cat.name}
                </Link>
              ))}
              <Link href="/tentang-kami" className="hover:text-[#fe4203] transition-colors py-0.5">
                Tentang Kami
              </Link>
              <Link href="/disclaimer" className="hover:text-[#fe4203] transition-colors py-0.5">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* 3. SEBELAH KANAN: Logo Rata Kiri dengan Card Putih Rapi & Deskripsi */}
          <div className="flex flex-col space-y-3 items-start text-left">
            {/* Membungkus logo dengan container latar putih agar warna logo asli tampil kontras dan tajam */}
            <Link href="/" className="inline-block shrink-0 bg-white p-4 rounded-md shadow-sm">
              <Image 
                src="/logo.png" 
                alt="Suaraloka.id" 
                width={180} 
                height={60} 
                priority
                className="object-contain w-36 h-auto" 
              />
            </Link>

            <p className="text-[12px] text-slate-200 leading-relaxed max-w-xs">
              <strong className="text-white">Suaraloka.id</strong> adalah portal berita terpercaya yang menyajikan informasi terkini, akurat, dan mendalam seputar peristiwa nasional, teknologi, ekonomi, dan gaya hidup.
            </p>
          </div>

        </div>
      </div>

      {/* Baris Bawah: Copyright */}
      <div className="border-t border-blue-900/60 bg-[#01143d]">
        <div className="max-w-[1075px] mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between text-[12px] text-slate-400 gap-2">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <strong className="text-white">Suaraloka.id</strong>. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-3">
            <Link href="/tentang-kami" className="hover:text-white transition-colors">
              Tentang Kami
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}