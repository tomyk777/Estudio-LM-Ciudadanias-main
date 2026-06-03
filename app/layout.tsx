import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "@/index.css";
import { Providers } from "./providers";

const GTM_ID = "GTM-WXCTV7MG";
const GA_ID = "G-STHJSE1ETW";

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
    default: "Ciudadanía Italiana y Española | Estudio Integral LM",
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
    "turnos consulado italiano Buenos Aires",
    "ciudadanía por matrimonio Italia",
    "ciudadanía italiana por descendencia",
    "AIRE inscripción",
    "pasaporte italiano",
    "ciudadanía italiana por descendencia Argentina",
"cómo tramitar ciudadanía italiana Argentina",
"gestoría ciudadanía italiana Buenos Aires",
"armado carpeta ciudadanía italiana",
"búsqueda actas nacimiento Italia",
"traducción certificada italiano",
"turnos consulado italiano Buenos Aires",
"inscripción AIRE Argentina",
"ciudadanía italiana sin turno consular",
"reconocimiento ciudadanía española Argentina",
"asesoría ciudadanía online",
"CIC carta identidad italiana Argentina",
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
    title: "Ciudadanía Italiana y Española | Estudio Integral LM",
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
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
