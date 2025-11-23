import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans, Noto_Serif, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Latev Engineering Services Ltd – Coiled Tubing Downhole Tools",
  description:
    "Latev Engineering Services Ltd provides advanced coiled tubing downhole tools engineered for performance, efficiency, and operational safety in complex well intervention environments.",
  keywords: [
    "coiled tubing",
    "downhole tools",
    "oilfield services",
    "well intervention",
    "Marlin Oil Tools",
    "Latev Engineering",
    "offshore",
    "onshore",
    "wellbore operations",
    "modern website"
  ],
  icons: {
    icon: "/images/logo-self.png",
    shortcut: "/images/logo-self.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Latev Engineering Services Ltd – Coiled Tubing Downhole Tools",
    description:
      "Advanced, pressure-controlled well intervention tools engineered for high-performance downhole applications.",
    type: "website",
    // TODO: ADD CORRECT PAGE URL
    url: "https://latevengineering.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Latev Engineering Services",
      },
    ],
  },
};

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
