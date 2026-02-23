"use client";

import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const values = [
  { title: "Confianza", desc: "Más de 20 años construyendo relaciones de largo plazo con nuestros clientes." },
  { title: "Eficiencia", desc: "Procesos optimizados para reducir tiempos y maximizar resultados." },
  { title: "Celeridad", desc: "Gestión ágil y proactiva en cada etapa del trámite." },
  { title: "Acompañamiento", desc: "Te acompañamos personalmente en cada paso del proceso." },
];

const team = [
  { name: "Laura K. Melluso", role: "Fundadora & Gestora Principal" },
  { name: "Domingo G. Florio", role: "Asistente de Gestión" },
];

const valDelays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export function About() {
  const header = useScrollAnimation();
  const left = useScrollAnimation();
  const right = useScrollAnimation();

  return (
    <section id="nosotros" className="py-24 bg-warm-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 animate-on-scroll ${header.visible ? "is-visible" : ""}`}
        >
          <p className="section-label">Sobre Nosotros</p>
          <div className="gold-divider" />
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mt-4 max-w-3xl mx-auto">
            Más de dos décadas abriendo{" "}
            <span className="italic text-gold">puertas al mundo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div
            ref={left.ref as React.RefObject<HTMLDivElement>}
            className={`animate-on-scroll-left ${left.visible ? "is-visible" : ""}`}
          >
            <p className="section-label mb-3">Nuestra Historia</p>
            <div className="gold-divider-left" />
            <p className="text-charcoal-mid text-base leading-relaxed mb-5">
              Desde 2002, comenzamos realizando gestiones presenciales ante los consulados.
              Lo que nació como una vocación de servicio, se convirtió en una de las gestorías
              más confiables de Argentina en materia de ciudadanía italiana y española.
            </p>
            <p className="text-charcoal-mid text-base leading-relaxed mb-8">
              Hoy, con más de 20 años de trayectoria, nuestro equipo resuelve procesos
              complejos con la misma dedicación y compromiso del primer día. Nuestro
              propósito: servir, ayudar y abrir puertas al mundo para cada familia.
            </p>

            {/* Team */}
            <p className="section-label mb-4">Equipo</p>
            <div className="flex flex-col gap-3 mb-8">
              {team.map((m) => (
                <div key={m.name} className="value-badge">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--gradient-gold)" }}
                  />
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{m.name}</p>
                    <p className="text-muted-foreground text-xs">{m.role}</p>
                  </div>
                </div>
              ))}
              <div className="value-badge">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <div>
                  <p className="font-semibold text-charcoal text-sm">Red de Especialistas</p>
                  <p className="text-muted-foreground text-xs">Abogados y traductores certificados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values grid */}
          <div
            ref={right.ref as React.RefObject<HTMLDivElement>}
            className={`animate-on-scroll-right ${right.visible ? "is-visible" : ""}`}
          >
            <p className="section-label mb-4">Nuestros Valores</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`p-6 bg-white border border-border animate-on-scroll ${valDelays[i]} ${right.visible ? "is-visible" : ""}`}
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <h3 className="font-serif text-xl font-semibold text-charcoal">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
