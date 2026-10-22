import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Menggunakan font Inter (font modern standar web masa kini)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Suaraloka.com - Portal Berita Terpercaya",
  description: "Portal berita terkini dan teraktual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="bg-white min-h-screen text-slate-900 antialiased font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Container Utama dengan Lebar 1075px */}
        <div className="max-w-[1075px] mx-auto px-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}