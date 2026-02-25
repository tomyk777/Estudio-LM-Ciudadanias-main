import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "@/index.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = "https://estudiolmciudadanias.com";
const SITE_NAME = "Estudio Integral LM";
const SITE_DESCRIPTION =
  "Gestoría integral especializada en ciudadanía italiana y española. Más de 20 años de experiencia acompañando familias en todo el mundo. Armado de carpetas, búsqueda de actas, traducciones, turnos consulares y asesoría online desde cualquier lugar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Estudio Integral LM — Ciudadanía Italiana y Española",
    template: "%s | Estudio Integral LM",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "ciudadanía italiana",
    "ciudadanía española",
    "gestoría ciudadanía",
    "tramitar ciudadanía italiana",
    "tramitar ciudadanía española",
    "ciudadanía italiana Argentina",
    "carpeta ciudadanía italiana",
    "carpeta ciudadanía española",
    "búsqueda de actas Italia",
    "apostilla de documentos",
    "traducción pública italiano",
    "turnos consulado italiano Buenos Aires",
    "ciudadanía por matrimonio Italia",
    "ciudadanía italiana por descendencia",
    "AIRE inscripción",
    "pasaporte italiano",
    "legalización de documentos",
    "curso de italiano",
    "Estudio Integral LM",
    "Laura Melluso",
    "gestoría Vicente López",
    "asesoría ciudadanía online",
  ],

  authors: [{ name: "Laura Karina Melluso", url: SITE_URL }],
  creator: "Estudio Integral LM",
  publisher: "Estudio Integral LM",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Estudio Integral LM — Ciudadanía Italiana y Española",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Estudio Integral LM — Ciudadanía Italiana y Española",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Estudio Integral LM — Ciudadanía Italiana y Española",
    description: SITE_DESCRIPTION,
    images: ["/assets/logo.png"],
  },

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

  category: "business",

  other: {
    "geo.region": "AR-B",
    "geo.placename": "Vicente López, Buenos Aires",
    "geo.position": "-34.5228;-58.4714",
    ICBM: "-34.5228, -58.4714",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
