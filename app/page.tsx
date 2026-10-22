import HeroHeadline from "@/components/Headline";
import CategoryNewsList from "@/components/CategoryNewsList";
import PopularSidebar from "@/components/PopularSidebar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1075px] mx-auto py-6">
        
        {/* 1. SEKSYEN HEADLINE ATAS */}
        <section>
          <HeroHeadline />
        </section>

        {/* Garis Pemisah */}
        <hr className="border-slate-100 my-6" />

        {/* 2. SEKSYEN UTAMA BAWAH */}
        <section>
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
            
            {/* KONTENA KIRI (Category Index) */}
            <div className="flex-1 min-w-0 w-full">
              <CategoryNewsList />
            </div>

            {/* KONTENA KANAN (Popular Sidebar 300px) */}
            <div className="w-full lg:w-[300px] shrink-0 mx-auto lg:mx-0 sticky top-16 z-10">
              <PopularSidebar />
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}