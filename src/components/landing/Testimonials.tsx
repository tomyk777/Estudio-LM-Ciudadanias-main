"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Martín Rossi",
    city: "Buenos Aires, Argentina",
    text: "Laura nos acompañó en todo el proceso de ciudadanía italiana. Fue clarísima, súper organizada y nos mantuvo al tanto de cada paso. ¡Hoy somos ciudadanos italianos!",
  },
  {
    name: "Camila Ferretti",
    city: "Rosario, Argentina",
    text: "Increíble la dedicación y el profesionalismo. Me gestionó la búsqueda de actas en Italia que yo no podía conseguir. Totalmente recomendable.",
  },
  {
    name: "Santiago López",
    city: "Montevideo, Uruguay",
    text: "Hice todo el trámite a distancia y fue impecable. Laura se encargó de cada detalle, desde las traducciones hasta el turno consular. Excelente servicio.",
  },
  {
    name: "Florencia Gómez",
    city: "Madrid, España",
    text: "Gracias a Laura pude obtener mi ciudadanía italiana por matrimonio. Un proceso que parecía imposible se hizo simple con su asesoramiento.",
  },
  {
    name: "Diego Colombo",
    city: "Córdoba, Argentina",
    text: "La inscripción en el AIRE y el pasaporte los tramitó rapidísimo. Muy profesional y siempre disponible para resolver dudas.",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="relative bg-white border border-border p-6 md:p-8 h-full flex flex-col" style={{ boxShadow: "var(--shadow-elegant)" }}>
      <Quote size={28} className="text-gold/20 absolute top-4 left-4" />
      <div className="relative z-10 text-center flex flex-col flex-1">
        <p className="text-charcoal text-sm md:text-base leading-relaxed italic font-serif mb-6 flex-1">
          "{t.text}"
        </p>
        <div>
          <div className="gold-divider" />
          <p className="font-semibold text-charcoal mt-3 text-xs tracking-wide uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t.name}
          </p>
          <p className="text-muted-foreground text-xs mt-1">{t.city}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const header = useScrollAnimation();
  const card = useScrollAnimation();

  // Desktop: 3 per page, Mobile: 1 per page
  const desktopPerPage = 3;
  const totalDesktopPages = Math.ceil(testimonials.length / desktopPerPage);

  const prevDesktop = () => setPage((p) => (p === 0 ? totalDesktopPages - 1 : p - 1));
  const nextDesktop = () => setPage((p) => (p === totalDesktopPages - 1 ? 0 : p + 1));

  const [mobileIdx, setMobileIdx] = useState(0);
  const prevMobile = () => setMobileIdx((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const nextMobile = () => setMobileIdx((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const desktopSlice = testimonials.slice(page * desktopPerPage, page * desktopPerPage + desktopPerPage);

  return (
    <section id="testimonios" className="py-24 bg-warm-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 animate-on-scroll ${header.visible ? "is-visible" : ""}`}
        >
          <p className="section-label">Testimonios</p>
          <div className="gold-divider" />
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mt-4">
            Lo que dicen{" "}
            <span className="italic text-gold">nuestros clientes</span>
          </h2>
        </div>

        {/* Desktop: 3-column grid */}
        <div
          ref={card.ref as React.RefObject<HTMLDivElement>}
          className={`animate-on-scroll ${card.visible ? "is-visible" : ""}`}
        >
          {/* Desktop view */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="grid grid-cols-3 gap-6">
                {desktopSlice.map((t) => (
                  <TestimonialCard key={t.name} t={t} />
                ))}
              </div>

              {/* Nav arrows */}
              {totalDesktopPages > 1 && (
                <>
                  <button
                    onClick={prevDesktop}
                    aria-label="Testimonios anteriores"
                    className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-border bg-white hover:border-gold transition-colors"
                  >
                    <ChevronLeft size={18} className="text-charcoal" />
                  </button>
                  <button
                    onClick={nextDesktop}
                    aria-label="Testimonios siguientes"
                    className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-border bg-white hover:border-gold transition-colors"
                  >
                    <ChevronRight size={18} className="text-charcoal" />
                  </button>
                </>
              )}
            </div>

            {/* Desktop dots */}
            {totalDesktopPages > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalDesktopPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Ir a página ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === page ? "w-6" : "w-2 bg-border hover:bg-gold/50"
                    }`}
                    style={i === page ? { background: "hsl(var(--gold))" } : undefined}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Mobile view: single card */}
          <div className="md:hidden">
            <div className="relative px-8">
              <TestimonialCard t={testimonials[mobileIdx]} />

              <button
                onClick={prevMobile}
                aria-label="Testimonio anterior"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center border border-border bg-white hover:border-gold transition-colors"
              >
                <ChevronLeft size={16} className="text-charcoal" />
              </button>
              <button
                onClick={nextMobile}
                aria-label="Testimonio siguiente"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center border border-border bg-white hover:border-gold transition-colors"
              >
                <ChevronRight size={16} className="text-charcoal" />
              </button>
            </div>

            {/* Mobile dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIdx(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === mobileIdx ? "w-6" : "w-2 bg-border hover:bg-gold/50"
                  }`}
                  style={i === mobileIdx ? { background: "hsl(var(--gold))" } : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
