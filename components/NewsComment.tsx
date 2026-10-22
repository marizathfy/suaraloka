"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  time: string;
}

interface NewsCommentProps {
  slug: string;
}

export default function NewsComment({ slug }: NewsCommentProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentsList, setCommentsList] = useState<Comment[]>([]);

  // Muat data login & komentar dari localStorage berdasarkan slug artikel
  useEffect(() => {
    const savedUser = localStorage.getItem("suaraloka_fb_user");
    if (savedUser) {
      setIsLoggedIn(true);
      setUserName(savedUser);
    }

    const storageKey = `suaraloka_comments_${slug}`;
    const savedComments = localStorage.getItem(storageKey);

    if (savedComments) {
      try {
        setCommentsList(JSON.parse(savedComments));
      } catch (e) {
        console.error("Gagal memuat data komentar", e);
      }
    } else {
      // Komentar awal default jika belum ada data sama sekali di artikel ini
      const defaultComments: Comment[] = [
        {
          id: 101,
          name: "Ahmad Fauzi",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
          comment: "Informasi yang sangat akurat dan mendalam. Terima kasih Suaraloka!",
          time: "15 menit lalu"
        }
      ];
      setCommentsList(defaultComments);
      localStorage.setItem(storageKey, JSON.stringify(defaultComments));
    }
  }, [slug]);

  // Simulasi Login Facebook
  const handleFacebookLogin = () => {
    const fakeName = "Mariz Athfy"; // Nama akun yang disimulasikan login
    setIsLoggedIn(true);
    setUserName(fakeName);
    localStorage.setItem("suaraloka_fb_user", fakeName);
  };

  // Keluar Akun
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("suaraloka_fb_user");
  };

  // Kirim & Simpan Komentar ke localStorage
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      name: userName || "Pembaca Setia",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
      comment: commentText,
      time: "Baru saja"
    };

    const updatedComments = [newComment, ...commentsList];
    setCommentsList(updatedComments);
    
    // Simpan ke localStorage agar real & tidak hilang saat refresh
    localStorage.setItem(`suaraloka_comments_${slug}`, JSON.stringify(updatedComments));
    setCommentText("");
  };

  return (
    <div className="mt-10 pt-6 border-t-2 border-slate-900">
      <h3 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-4">
        Komentar Pembaca ({commentsList.length})
      </h3>

      {/* Kotak Form Komentar */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
        {!isLoggedIn ? (
          <div className="text-center py-4">
            <p className="text-xs text-slate-600 mb-3">
              Masuk menggunakan akun Facebook Anda untuk menulis tanggapan pada berita ini.
            </p>
            <button
              onClick={handleFacebookLogin}
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#165ecd] transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.71V8z"/>
              </svg>
              Masuk dengan Facebook
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitComment}>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                Masuk sebagai <span className="text-[#1877F2]">{userName}</span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="text-[11px] text-red-500 hover:underline font-medium"
              >
                Keluar
              </button>
            </div>

            <textarea
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Tulis pendapat atau tanggapan Anda..."
              className="w-full text-xs bg-white text-slate-800 border border-slate-300 rounded-lg p-3 focus:outline-none focus:border-slate-500 resize-none mb-3"
              required
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#021B50] hover:bg-[#042b7d] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Kirim Komentar
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Daftar Komentar Real-time */}
      <div className="space-y-4">
        {commentsList.map((item) => (
          <div key={item.id} className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-xs">
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-slate-200">
              <img src={item.avatar} alt={item.name} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                <span className="text-[10px] text-slate-400">{item.time}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}