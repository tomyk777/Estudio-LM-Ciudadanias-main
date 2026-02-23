import type { Metadata } from "next";
import "@/index.css";
import { Providers } from "./providers";

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
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
