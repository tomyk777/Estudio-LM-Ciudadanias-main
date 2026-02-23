"use client";

import { Instagram, Facebook, Linkedin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

const socials = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/lauramelluso.ciudadanias/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/ciudadaniaitalianaymas/",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
];

export function Footer() {
  const { ref, visible } = useScrollAnimation();

  return (
    <footer className="bg-charcoal pt-16 pb-8" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-charcoal-mid">
          {/* Logo & description */}
          <div className={`flex flex-col gap-5 animate-on-scroll delay-100 ${visible ? "is-visible" : ""}`}>
            <Image src="/assets/logo.png" alt="Estudio Integral LM" width={200} height={112} className="h-28 w-auto object-contain" />
            <p className="text-warm-beige/60 text-sm leading-relaxed max-xs">
              Gestoría especializada en ciudadanía italiana y española. Más de 20 años
              acompañando familias en todo el mundo.
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-charcoal-mid text-warm-beige/60 hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={`animate-on-scroll delay-200 ${visible ? "is-visible" : ""}`}>
            <p className="section-label text-gold mb-5">Servicios</p>
            <ul className="flex flex-col gap-3 text-sm text-warm-beige/60">
              {[
                "Carpetas de ciudadanía italiana",
                "Carpetas de ciudadanía española",
                "Búsqueda y legalización de actas",
                "Apostillas",
                "Traducciones certificadas",
                "Turnos consulares",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`animate-on-scroll delay-300 ${visible ? "is-visible" : ""}`}>
            <p className="section-label text-gold mb-5">Contacto</p>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  href="https://wa.me/5491167061739?text=Hola%20Laura!%20Quiero%20consultar%20sobre%20sus%20servicios%20de%20ciudadan%C3%ADa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-warm-beige/60 hover:text-gold transition-colors"
                >
                  <WhatsAppIcon size={15} />
                  +54 11 6706 1739
                </a>
              </li>
              <li>
                <a
                  href="mailto:Lmelluso@yahoo.it"
                  className="text-warm-beige/60 hover:text-gold transition-colors"
                >
                  Lmelluso@yahoo.it
                </a>
              </li>
              <li className="text-warm-beige/60">Vicente López, Buenos Aires</li>
              <li className="text-warm-beige/60">Lunes a viernes — 9 a 15 hs</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-beige/40">
          <p>
            © {new Date().getFullYear()} Estudio Integral — Laura Karina Melluso.
            Todos los derechos reservados.
          </p>
          <p>Ciudadanía Italiana y Española — Vicente López, Buenos Aires</p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5491167061739?text=Hola%20Laura!%20Tengo%20una%20consulta%20sobre%20ciudadan%C3%ADa.%20%C2%BFEst%C3%A1s%20disponible%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <WhatsAppIcon size={26} className="text-white" />
      </a>
    </footer>
  );
}
