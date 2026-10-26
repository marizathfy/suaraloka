import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "suaraloka.id - Portal Berita Terpercaya",
  description: "Portal berita terkini dan teraktual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} light`} style={{ colorScheme: 'light' }}>
      <head>
        {/* Meta tag untuk mengunci mode terang di level browser mobile */}
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body className="bg-white min-h-screen text-slate-900 antialiased font-sans">
        <Navbar />
        <main className="max-w-[1075px] mx-auto px-4 bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}