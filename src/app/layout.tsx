import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans, Noto_Serif, Inter } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { createMetadata } from "@/lib/metadata";

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

export const metadata = createMetadata({
  title: "Latev Engineering Services Ltd – Coiled Tubing Downhole Tools",
  description:
  "Latev Engineering Services Ltd delivers world-class construction, oilfield, and industrial engineering solutions.",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSerif.variable} ${inter.variable}`}
    >
      <body className="antialiased font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
