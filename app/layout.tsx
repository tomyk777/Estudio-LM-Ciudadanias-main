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

export const metadata: Metadata = {
  title: "Estudio Integral LM — Ciudadanía Italiana y Española",
  description:
    "Gestoría integral especializada en ciudadanía italiana y española. Más de 20 años de experiencia. Asesoría online desde cualquier parte del mundo.",
  openGraph: {
    title: "Estudio Integral LM — Ciudadanía Italiana y Española",
    description:
      "Gestoría integral especializada en ciudadanía italiana y española. Más de 20 años de experiencia.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
