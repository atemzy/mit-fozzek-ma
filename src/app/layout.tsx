import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mitfozzekmost.hu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mit főzzek ma? – Magyar menü sorsoló",
    template: "%s | Mit főzzek ma?",
  },
  description:
    "Nincs ötleted, mit főzz ma? Sorsolj egy magyaros háromfogásos menüt: leves, főétel és desszert egyetlen kattintással.",
  applicationName: "Mit főzzek ma?",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "mit főzzek ma",
    "mit főzzek",
    "ebéd ötletek",
    "vacsora ötletek",
    "magyar ételek",
    "magyar receptek",
    "menü ötletek",
    "leves főétel desszert",
    "random étel",
    "menü sorsoló",
  ],
  authors: [{ name: "MTD", url: "https://mezeitamasdev.hu" }],
  creator: "MTD",
  publisher: "MTD",
  category: "food",
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "/",
    siteName: "Mit főzzek ma?",
    title: "Mit főzzek ma? – Magyar menü sorsoló",
    description:
      "Sorsolj egy magyaros háromfogásos menüt: levest, főételt és desszertet egyetlen kattintással.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mit főzzek ma? – Magyar menü sorsoló",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mit főzzek ma? – Magyar menü sorsoló",
    description:
      "Egy kattintás, és máris kapsz egy magyaros levest, főételt és desszertet.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="hu">
      <head>
        {process.env.NEXT_PUBLIC_CMP_SCRIPT_URL?.startsWith("https://") ? <script async src={process.env.NEXT_PUBLIC_CMP_SCRIPT_URL} /> : null}
        {adsenseClient && /^ca-pub-\d{16}$/.test(adsenseClient) ? <meta name="google-adsense-account" content={adsenseClient} /> : null}
      </head>
      <body>{children}</body>
    </html>
  );
}
