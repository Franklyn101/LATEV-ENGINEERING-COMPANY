import type { Metadata } from "next";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const SITE_NAME = "Latev Engineering Services Ltd";
const SITE_URL = "https://latevengineering.com";
const DEFAULT_OG_IMAGE = "/images/logo.jpeg";

export function createMetadata({
  title,
  description,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  url = SITE_URL,
}: MetaProps): Metadata {

  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return {
    metadataBase: new URL(SITE_URL),

    title: fullTitle,

    description:
      description ||
      "Latev Engineering Services Ltd delivers world-class engineering, oilfield tools, and construction solutions across Nigeria.",

    icons: {
  icon: [
    { url: "/favicon (1).ico" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" }
  ],
  shortcut: "/favicon.ico",
  apple: "/favicon-180x180.png",
},


    keywords: [
      "Latev Engineering",
      "engineering services",
      "Nigerian engineering",
      "oilfield tools",
      "construction company",
      "industrial solutions",
      ...keywords,
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: fullTitle,
      description:
        description ||
        "High-quality engineering services, construction solutions, and oilfield technologies.",
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description:
        description ||
        "Advanced engineering and oilfield service solutions built for reliability.",
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
