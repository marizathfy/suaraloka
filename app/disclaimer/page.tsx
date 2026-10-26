import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - suaraloka.id",
  description: "Syarat, ketentuan, dan batasan tanggung jawab hukum penggunaan informasi di portal berita suaraloka.id.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen py-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-10">
        
        {/* Breadcrumb / Navigasi Kecil */}
        <div className="text-xs font-bold text-[#fe4203] uppercase tracking-wider mb-2">
          <Link href="/" className="hover:underline">Home</Link> / Disclaimer
        </div>

        {/* Judul Halaman */}
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
          Disclaimer (Penyangkalan)
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          Selamat datang di <span className="font-bold text-slate-900">suaraloka.id</span>. Dengan mengakses dan menggunakan portal berita ini, berarti Anda telah memahami dan menyetujui seluruh ketentuan dalam disclaimer (penyangkalan) di bawah ini.
        </p>

        <hr className="border-slate-200 mb-8" />

        {/* Konten Disclaimer */}
        <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          {/* Poin 1 */}
          <div>
            <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-2 border-l-4 border-[#fe4203] pl-3">
              1. Keakuratan & Kelengkapan Informasi
            </h2>
            <p>
              Semua informasi dan berita yang dimuat di <span className="font-semibold text-slate-900">suaraloka.id</span> disebarkan untuk tujuan informasi umum semata. Kami berupaya semaksimal mungkin untuk menyajikan data dan fakta yang akurat serta up-to-date. Namun, kami tidak memberikan jaminan dalam bentuk apa pun, baik tersurat maupun tersirat, mengenai kelengkapan, keandalan, atau keakuratan informasi tersebut. Segala tindakan yang Anda ambil atas informasi yang Anda baca di situs ini adalah sepenuhnya tanggung jawab Anda sendiri.
            </p>
          </div>

          {/* Poin 2 */}
          <div>
            <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-2 border-l-4 border-[#fe4203] pl-3">
              2. Batasan Tanggung Jawab (Disclaimer of Liability)
            </h2>
            <p>
              <span className="font-semibold text-slate-900">suaraloka.id</span> beserta jajaran redaksi, manajemen, dan kontributor tidak bertanggung jawab atas segala bentuk kerugian, baik langsung maupun tidak langsung, materil maupun immateril, yang timbul akibat penggunaan informasi, artikel, opini, atau tautan yang ada di situs ini. Termasuk di dalamnya kerugian akibat kegagalan sistem, keterlambatan pembaruan, atau kesalahan ketik (typo).
            </p>
          </div>

          {/* Poin 3 */}
          <div>
            <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-2 border-l-4 border-[#fe4203] pl-3">
              3. Tautan Pihak Ketiga (External Links)
            </h2>
            <p>
              Website kami mungkin berisi tautan ke situs web pihak lain atau sumber eksternal. Tautan tersebut disediakan hanya sebagai kemudahan bagi pembaca. <span className="font-semibold text-slate-900">suaraloka.id</span> tidak memiliki kendali atas isi, kebijakan privasi, atau praktik dari situs pihak ketiga tersebut dan tidak bertanggung jawab atas kerugian yang mungkin timbul dari penggunaannya.
            </p>
          </div>

          {/* Poin 4 */}
          <div>
            <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-2 border-l-4 border-[#fe4203] pl-3">
              4. Konten Komersial & Periklanan
            </h2>
            <p>
              Segala bentuk materi iklan, banner sponsor, atau advertorial yang ditampilkan di <span className="font-semibold text-slate-900">suaraloka.id</span> sepenuhnya menjadi tanggung jawab pihak pemasang iklan (advertiser). Redaksi tidak bertanggung jawab atas isi materi iklan maupun transaksi bisnis yang dilakukan pembaca dengan pihak pemasang iklan di luar portal berita ini.
            </p>
          </div>

          {/* Poin 5 */}
          <div>
            <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-2 border-l-4 border-[#fe4203] pl-3">
              5. Hak Cipta & Reproduksi Konten
            </h2>
            <p>
              Seluruh isi berita, artikel, foto, video, dan infografis di <span className="font-semibold text-slate-900">suaraloka.id</span> dilindungi oleh Undang-Undang Hak Cipta. Pengutipan atau penyebaran ulang berita diperbolehkan dengan syarat wajib mencantumkan sumber aktif <span className="font-bold text-[#fe4203]">suaraloka.id</span> secara jelas dan langsung mengarah ke tautan aslinya.
            </p>
          </div>

          {/* Poin 6 */}
          <div>
            <h2 className="text-lg font-black text-[#021B50] uppercase tracking-wide mb-2 border-l-4 border-[#fe4203] pl-3">
              6. Perubahan Ketentuan
            </h2>
            <p>
              <span className="font-semibold text-slate-900">suaraloka.id</span> berhak sewaktu-waktu untuk mengubah, memperbarui, atau menghapus isi dari halaman disclaimer ini tanpa pemberitahuan sebelumnya. Pembaca disarankan untuk memeriksa halaman ini secara berkala guna mengetahui perubahan terbaru.
            </p>
          </div>

        </div>

        {/* Kotak Kontak / Penutup */}
        <div className="bg-[#021B50] text-white p-6 rounded-2xl mt-10">
          <h3 className="text-base font-black uppercase tracking-wider mb-2 text-[#fe4203]">
            Pertanyaan & Sanggahan Lebih Lanjut
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Jika Anda memiliki pertanyaan, keberatan atas pemuatan berita, atau menemukan kesalahan informasi di situs kami, silakan laporkan melalui email resmi kami di: <span className="font-bold text-white underline">redaksi@suaraloka.id</span> atau hubungi layanan aduan pembaca.
          </p>
        </div>

      </div>
    </main>
  );
}