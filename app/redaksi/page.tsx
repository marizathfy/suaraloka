import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Susunan Redaksi - suaraloka.id",
  description: "Daftar susunan dewan redaksi, pimpinan, dan jurnalis portal berita suaraloka.id.",
};

export default function RedaksiPage() {
  // Data Struktur Redaksi
  const editorialTeam = [
    {
      role: "Pimpinan Umum / Penanggung Jawab",
      name: "Ahmad Suara, S.I.Kom.",
    },
    {
      role: "Pemimpin Redaksi",
      name: "Rina Kartika, M.I.Com.",
    },
    {
      role: "Redaktur Pelaksana",
      name: "Budi Santoso, S.Sos.",
    },
    {
      role: "Koordinator Liputan",
      name: "Dimas Pratama",
    },
  ];

  const editors = [
    { desk: "Politik & Hukum", name: "Fajar Nugraha, S.H." },
    { desk: "Ekonomi & Bisnis", name: "Siti Rahmawati, S.E." },
    { desk: "Megapolitan & Daerah", name: "Eko Prasetyo" },
    { desk: "Teknologi & Sains", name: "Kevin Aditya, S.T." },
    { desk: "Gaya Hidup & Olahraga", name: "Dewi Lestari" },
  ];

  const journalists = [
    "Reza Pahlevi",
    "Anisa Fitri",
    "Hendra Gunawan",
    "Mega Utami",
    "Zainal Arifin",
  ];

  const businessTeam = [
    { role: "Manajer Marketing & Iklan", name: "Agus Setiawan" },
    { role: "Keuangan / Finance", name: "Lestari Widowati, Ak." },
    { role: "IT & Web Developer", name: "Tim Suaraloka Dev" },
  ];

  return (
    <main className="min-h-screen py-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-10">
        
        {/* Breadcrumb / Navigasi Kecil */}
        <div className="text-xs font-bold text-[#fe4203] uppercase tracking-wider mb-2">
          <Link href="/" className="hover:underline">Home</Link> / Redaksi
        </div>

        {/* Judul Halaman */}
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
          Susunan Redaksi suaraloka.id
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
          Berikut adalah daftar jajaran pimpinan, dewan redaksi, editor, serta jurnalis yang bertugas di portal berita <span className="font-bold text-slate-900">suaraloka.id</span> dalam menyajikan informasi yang akurat, berimbang, dan terpercaya.
        </p>

        <hr className="border-slate-200 mb-8" />

        {/* 1. Pimpinan Redaksi */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-4 border-l-4 border-[#fe4203] pl-3">
            Pimpinan Redaksi & Manajemen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {editorialTeam.map((item, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <span className="block text-xs font-bold text-[#fe4203] uppercase tracking-wider mb-1">
                  {item.role}
                </span>
                <span className="text-slate-900 font-bold text-base">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Redaktur / Editor Per Desk */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-4 border-l-4 border-[#fe4203] pl-3">
            Redaktur & Editor
          </h2>
          <div className="space-y-3">
            {editors.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 sm:mb-0">
                  Desk {item.desk}
                </span>
                <span className="text-slate-900 font-bold text-sm sm:text-base">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Reporter / Jurnalis */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-4 border-l-4 border-[#fe4203] pl-3">
            Reporter & Jurnalis
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {journalists.map((name, index) => (
              <div key={index} className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-center">
                <span className="text-slate-800 font-semibold text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Tim Bisnis & Operasional */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-4 border-l-4 border-[#fe4203] pl-3">
            Bisnis, Marketing & IT
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {businessTeam.map((item, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  {item.role}
                </span>
                <span className="text-slate-900 font-bold text-sm">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Informasi Kantor / Kontak */}
        <div className="bg-[#021B50] text-white p-6 rounded-2xl mt-10">
          <h3 className="text-base font-black uppercase tracking-wider mb-2 text-[#fe4203]">
            Kantor Redaksi suaraloka.id
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
            Gedung Pers Suaraloka, Jl. Jendral Sudirman No. 45, Jakarta Selatan, DKI Jakarta 12190.<br />
            Email: redaksi@suaraloka.id / info@suaraloka.id | Telp: (021) 555-8989
          </p>
          <div className="text-[11px] text-slate-400 italic border-t border-slate-800 pt-3">
            * Seluruh wartawan suaraloka.id dibekali kartu pers (ID Card) resmi dan namanya tercantum di box redaksi di atas. Mereka dilarang keras meminta atau menerima imbalan dalam bentuk apa pun dari narasumber.
          </div>
        </div>

      </div>
    </main>
  );
}