import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Seño Cin | Aprende jugando",
    template: "%s | Seño Cin",
  },
  description:
    "Recursos pedagógicos creados desde la experiencia docente: planificaciones, secuencias didácticas, adecuaciones y DEI, informes pedagógicos y juegos para docentes de educación primaria.",
  keywords: [
    "material pedagógico",
    "docentes de primaria",
    "planificaciones",
    "secuencias didácticas",
    "juegos didácticos",
    "DEI",
    "informes pedagógicos",
    "recursos imprimibles",
    "Provincia de Buenos Aires",
  ],
  openGraph: {
    title: "Seño Cin | Aprende jugando",
    description:
      "Recursos pedagógicos creados desde la experiencia docente, para el trabajo cotidiano en el aula.",
    url: site.url,
    siteName: "Seño Cin",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/logo.jpeg", width: 640, height: 640, alt: "Seño Cin — Aprende jugando" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seño Cin | Aprende jugando",
    description: "Recursos pedagógicos creados desde la experiencia docente.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakarta.variable} antialiased`}
    >
      <body
        className="min-h-screen flex flex-col bg-crema text-texto font-sans"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
