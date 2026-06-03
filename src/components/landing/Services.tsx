"use client";

import {
  FolderOpen,
  Search,
  Stamp,
  Languages,
  CalendarClock,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const services = [
  {
    icon: FolderOpen,
    title: "Carpetas de Ciudadanía",
    desc: "Armado y gestión de carpetas completas para ciudadanía italiana y española.",
    flag: "both",
  },
  {
    icon: Search,
    title: "Búsqueda y Legalización de Actas",
    desc: "Búsqueda de actas en el país y en el extranjero, legalización de documentos. Apostillas nacionales y en Italia.",
    flag: "both",
  },
  {
    icon: Stamp,
    title: "Sentencias y Adopciones",
    desc: "Solicitud de Sentencias de Divorcio, Sentencias de Adopción con abogado.",
    flag: "none",
  },
  {
    icon: Languages,
    title: "Traducciones",
    desc: "Traducciones multilingües certificadas por traductores públicos matriculados.",
    flag: "both",
  },
  {
    icon: CalendarClock,
    title: "Turnos Consulares en todo el país",
    desc: "Gestión y coordinación de turnos ante los consulados italianos en distintas jurisdicciones del país.",
    flag: "italy",
  },
  {
    icon: HeartHandshake,
    title: "Ciudadanía por Matrimonio",
    desc: "Presentación de Ciudadanía por Matrimonio ante el Ministero dell'Interno.",
    flag: "italy",
  },
];

const cardDelays = ["delay-100", "delay-200", "delay-300", "delay-100", "delay-200", "delay-300"];

function FlagAccent({ flag }: { flag: string }) {
  if (flag === "none") return null;
  if (flag === "italy") {
    return (
      <div className="flex h-[3px] w-full mb-0 rounded-t-sm overflow-hidden">
        <div className="flex-1" style={{ background: "#009246" }} />
        <div className="flex-1" style={{ background: "#ffffff" }} />
        <div className="flex-1" style={{ background: "#CE2B37" }} />
      </div>
    );
  }
  if (flag === "spain") {
    return (
      <div className="flex h-[3px] w-full mb-0 rounded-t-sm overflow-hidden">
        <div className="flex-1" style={{ background: "#AA151B" }} />
        <div className="flex-[2]" style={{ background: "#F1BF00" }} />
        <div className="flex-1" style={{ background: "#AA151B" }} />
      </div>
    );
  }
  // both: italy left half, spain right half
  return (
    <div className="flex h-[3px] w-full mb-0 rounded-t-sm overflow-hidden">
      <div className="flex-1" style={{ background: "#009246" }} />
      <div className="flex-1" style={{ background: "#ffffff" }} />
      <div className="flex-1" style={{ background: "#CE2B37" }} />
      <div className="w-px bg-border" />
      <div className="flex-1" style={{ background: "#AA151B" }} />
      <div className="flex-[2]" style={{ background: "#F1BF00" }} />
      <div className="flex-1" style={{ background: "#AA151B" }} />
    </div>
  );
}

export function Services() {
  const header = useScrollAnimation();
  const grid = useScrollAnimation();
  const express = useScrollAnimation();
  const highlight = useScrollAnimation();
  const [showMoreExpress, setShowMoreExpress] = useState(false);

  return (
    <section id="servicios" className="py-24 bg-warm-beige">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 animate-on-scroll ${header.visible ? "is-visible" : ""}`}
        >
          <p className="section-label">Nuestros Servicios</p>
          <div className="gold-divider" />
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mt-4">
            Trámites que{" "}
            <span className="italic text-gold">gestionamos por vos</span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl mx-auto">
            Nos encargamos de cada detalle para que vos solo tengas que disfrutar
            del resultado.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={grid.ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map(({ icon: Icon, title, desc, flag }, i) => (
            <div
              key={title}
              className={`service-card group overflow-hidden animate-on-scroll ${cardDelays[i]} ${grid.visible ? "is-visible" : ""}`}
            >
              {/* Flag accent bar */}
              <FlagAccent flag={flag} />
              <div className="pt-6">
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon size={22} className="text-warm-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div
          ref={express.ref as React.RefObject<HTMLDivElement>}
          id="CiudadaniaExpress"
          className={`scroll-mt-28 border-2 bg-white rounded-sm overflow-hidden animate-on-scroll mb-8 ${express.visible ? "is-visible" : ""}`}
          style={{ borderColor: "hsl(var(--gold))", boxShadow: "var(--shadow-gold)" }}
        >
          <div className="flex h-[4px] w-full">
            <div className="flex-[2]" style={{ background: "#009246" }} />
            <div className="flex-[2]" style={{ background: "#f3f4f6" }} />
            <div className="flex-[2]" style={{ background: "#CE2B37" }} />
          </div>
          <div className="px-6 py-6 md:px-10 md:py-8">
            <div className="flex items-center gap-3 mb-3">
              <CalendarClock size={28} className="text-gold flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold mb-1">
                  Nueva oportunidad
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal">
                  CIUDADANÍA EXPRESS
                </h3>
              </div>
            </div>
            <p className="text-charcoal-mid text-sm md:text-base leading-relaxed mb-4">
              <strong>Porque tu historia tiene raíces italianas</strong>. Si sos hijo o nieto, podés realizar tu ciudadanía en <strong>45 días</strong> a tan solo <strong>40 minutos de Roma</strong>. Proceso ágil, acompañamiento personalizado, gestión completa de tu expediente y asesoramiento en cada paso. Atención en español. <strong>Consultame ahora</strong>.
            </p>
            <div className="flex flex-wrap gap-2">
              {["45 días", "40 minutos de Roma", "Atención en español", "Acompañamiento personalizado", "Gestión completa"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center text-xs md:text-sm px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-charcoal font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start md:gap-3">
              <a
                href="https://wa.me/5491167061739?text=Hola%20Laura!%20Quiero%20consultar%20por%20Ciudadan%C3%ADa%20Express.%20Sos%20hijo%20o%20nieto%20y%20quiero%20saber%20c%C3%B3mo%20tramitar%20mi%20ciudadan%C3%ADa%20en%2045%20d%C3%ADas%20a%2040%20minutos%20de%20Roma.%20%C2%BFMe%20pas%C3%A1s%20m%C3%A1s%20informaci%C3%B3n%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-center mt-6 w-11/12 max-w-xs md:w-auto md:mt-6 mx-auto md:mx-0"
              >
                Consultanos
              </a>
              <button
                type="button"
                onClick={() => setShowMoreExpress((s) => !s)}
                aria-expanded={showMoreExpress}
                className="btn-outline-gold text-center mt-4 md:mt-6 w-11/12 max-w-xs md:w-auto mx-auto md:mx-0"
              >
                Más info
              </button>
            </div>
            {showMoreExpress && (
              <p className="mt-4 text-charcoal-mid text-sm md:text-base leading-relaxed">
                Trabajamos con gente especializada con muchos años de experiencia en Ciudadania Italiana, residencia y gestión de distintos tramites. Instalandote por 45 días solamente, podes obtener tu ansiada ciudadania. coordinacion de alojamiento, acompañamiento en todo el proceso hasta completar tu tramite y que te vayas con pasaporte en mano! No te pierdas esta oportunidad. costos accesibles
              </p>
            )}
          </div>
        </div>

        <div
          ref={highlight.ref as React.RefObject<HTMLDivElement>}
          className={`border-2 bg-white rounded-sm overflow-hidden animate-on-scroll ${highlight.visible ? "is-visible" : ""}`}
          style={{ borderColor: "hsl(var(--gold))", boxShadow: "var(--shadow-gold)" }}
        >
          {/* Italian flag accent bar */}
          <div className="flex h-[4px] w-full">
            <div className="flex-1" style={{ background: "#009246" }} />
            <div className="flex-1" style={{ background: "#f3f4f6" }} />
            <div className="flex-1" style={{ background: "#CE2B37" }} />
          </div>
          <div className="px-6 py-6 md:px-10 md:py-8">
            <div className="flex items-center gap-3 mb-3">
              <BadgeCheck size={28} className="text-gold flex-shrink-0" />
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal">
                ¿Ya sos ciudadano italiano?
              </h3>
            </div>
            <p className="text-charcoal-mid text-sm md:text-base leading-relaxed mb-3">
              Hacemos por vos aquellos trámites que exige el Consulado y no podés hacer, o si por alguna razón se te dificulta, o el Consulado rechazó tu solicitud: <strong>ahí estamos nosotros para ayudarte y solucionarlo</strong>. ¡Agilizamos tu vida! De trámites engorrosos y complicados, <strong>lo hacemos por vos</strong>:
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Inscripción A.I.R.E", "Variación de Estado Civil", "Variación de Residencia y Pasaporte", "Carta d'identità elettronica", "Y más"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center text-xs md:text-sm px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-charcoal font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href="https://wa.me/5491167061739?text=Hola%20Laura!%20Ya%20soy%20ciudadano%2Fa%20italiano%2Fa%20y%20necesito%20ayuda%20con%20tr%C3%A1mites%20post-ciudadan%C3%ADa%20(AIRE%2C%20pasaporte%2C%20etc.).%20%C2%BFMe%20pod%C3%A9s%20asesorar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
            >
              Consultanos
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
