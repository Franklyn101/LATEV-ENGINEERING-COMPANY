import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ClientLayout from "../components/containers/ClientLayout"; 
import "./globals.css";
import CookieConsent from "@/components/cookieConsent";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Latev Engineering Services Ltd delivers world-class construction, oilfield, and industrial engineering solutions.",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}
  <CookieConsent />
  </ClientLayout>;
}
