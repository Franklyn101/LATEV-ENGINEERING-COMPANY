"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Loader from "@/components/ui/Loader";
import { Toaster } from "sonner";
import { Noto_Sans, Noto_Serif, Inter } from "next/font/google";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSerif.variable} ${inter.variable}`}
    >
      <body className="antialiased font-sans relative">
        <Loader isLoading={loading} />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
