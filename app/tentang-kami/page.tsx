import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - suaraloka.id",
  description: "Profil, visi, misi, dan komitmen portal berita suaraloka.id dalam menyajikan informasi teraktual dan terpercaya.",
};

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen py-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-10">
        
        {/* Breadcrumb / Navigasi Kecil */}
        <div className="text-xs font-bold text-[#fe4203] uppercase tracking-wider mb-2">
          <Link href="/" className="hover:underline">Home</Link> / Tentang Kami
        </div>

        {/* Judul Halaman */}
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
          Tentang suaraloka.id
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          <span className="font-bold text-slate-900">suaraloka.id</span> adalah portal berita media siber yang menyajikan ragam informasi terkini, aktual, tajam, dan terpercaya. Kami hadir untuk memenuhi kebutuhan pembaca akan informasi yang mendidik, menginspirasi, serta berimbang dari berbagai sektor kehidupan.
        </p>

        <hr className="border-slate-200 mb-8" />

        {/* Konten Utama */}
        <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          {/* Visi */}
          <div>
            <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-2 border-l-4 border-[#fe4203] pl-3">
              Visi Kami
            </h2>
            <p>
              Menjadi media siber yang terdepan, tepercaya, dan independen dalam mencerdaskan kehidupan bangsa melalui penyajian informasi yang berkualitas dan berintegritas tinggi.
            </p>
          </div>

          {/* Misi */}
          <div>
            <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-3 border-l-4 border-[#fe4203] pl-3">
              Misi Kami
            </h2>
            <ul className="space-y-2 list-disc list-inside text-slate-700">
              <li>Menyajikan berita dan informasi secara cepat, akurat, mendalam, dan berimbang.</li>
              <li>Menerapkan standar jurnalisme profesional serta kode etik pers yang ketat dalam setiap peliputan.</li>
              <li>Menjadi jembatan aspirasi publik yang konstruktif bagi kemajuan masyarakat dan daerah.</li>
              <li>Mengembangkan inovasi digital dalam penyampaian konten berita yang ramah pembaca di berbagai perangkat.</li>
            </ul>
          </div>

          {/* Nilai-Nilai Perusahaan */}
          <div>
            <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-3 border-l-4 border-[#fe4203] pl-3">
              Nilai & Prinsip Jurnalistik
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <span className="block font-bold text-[#fe4203] mb-1">Independen</span>
                <p className="text-xs text-slate-600">Bebas dari tekanan atau intervensi pihak mana pun dalam menyajikan fakta.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <span className="block font-bold text-[#fe4203] mb-1">Akurat</span>
                <p className="text-xs text-slate-600">Melalui proses verifikasi ketat sebelum informasi dipublikasikan kepada publik.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <span className="block font-bold text-[#fe4203] mb-1">Berimbang</span>
                <p className="text-xs text-slate-600">Memberikan ruang proporsional bagi pihak-pihak terkait dalam suatu isu.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Kotak Kontak / Penutup */}
        <div className="bg-[#021B50] text-white p-6 rounded-2xl mt-10">
          <h3 className="text-base font-black uppercase tracking-wider mb-2 text-[#fe4203]">
            Terhubung dengan Kami
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
            Ingin berkolaborasi, memasang iklan, atau memberikan masukan? Anda dapat menghubungi tim kami melalui:
          </p>
          <ul className="text-xs sm:text-sm space-y-1 text-slate-300">
            <li>Email Redaksi: <span className="font-bold text-white">redaksi@suaraloka.id</span></li>
            <li>Email Iklan / Kerjasama: <span className="font-bold text-white">ads@suaraloka.id</span></li>
            <li>Telepon: <span className="font-bold text-white">(021) 555-8989</span></li>
          </ul>
        </div>

      </div>
    </main>
  );
}