import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fontanerobarato.com"),
  title: {
    default: "Fontanero Barato | Urgente 24 Horas en Toda España",
    template: "%s | FontaneroBarato.com",
  },
  description:
    "Fontanero urgente 24 horas en toda España. Reparamos fugas, desatascos, calderas y más. Precios económicos y profesionales cualificados. ☎️ Llámanos ahora.",
  keywords: [
    "fontanero barato",
    "fontanero urgente",
    "fontanero ahora",
    "fontanero 24 horas",
    "fontanero económico",
    "reparación fugas",
    "desatascos urgentes",
    "fontanero cerca de mi",
  ],
  authors: [{ name: "FontaneroBarato.com" }],
  creator: "FontaneroBarato.com",
  publisher: "FontaneroBarato.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://fontanerobarato.com",
    siteName: "FontaneroBarato.com",
    title: "Fontanero Barato | Urgente 24 Horas en Toda España",
    description:
      "Fontanero urgente 24 horas en toda España. Reparamos fugas, desatascos, calderas y más. Precios económicos.",
    images: [
      {
        url: "https://fontanerobarato.com/plumber.png",
        width: 800,
        height: 800,
        alt: "Fontanero profesional - FontaneroBarato.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fontanero Barato | Urgente 24 Horas",
    description: "Fontanero urgente 24h en toda España. Precios económicos.",
    images: ["https://fontanerobarato.com/plumber.png"],
  },
  alternates: {
    canonical: "https://fontanerobarato.com",
  },
  verification: {
    google: "tu-codigo-de-verificacion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
