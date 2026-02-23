import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background image — priority + fill para LCP óptimo */}
      <Image
        src="/assets/hero-rome.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={75}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center">
        <Image
          src="/assets/logo.png"
          alt="Estudio Integral LM"
          width={224}
          height={224}
          priority
          className="h-44 md:h-56 w-auto object-contain mb-8 animate-fade-in drop-shadow-lg"
        />

        <p className="section-label text-gold-light mb-6 animate-fade-in">
          Vicente López — Buenos Aires
        </p>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-warm-white leading-tight mb-6 max-w-5xl animate-fade-up">
          Tu Ciudadanía{" "}
          <span className="text-gold-light font-semibold italic">Italiana</span>{" "}
          y{" "}
          <span className="text-gold-light font-semibold italic">Española</span>
        </h1>

        <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-warm-white mb-6 max-w-3xl animate-fade-up">
          Asesoría Online desde cualquier parte del mundo
        </p>

        <div
          className="w-20 h-px mb-6"
          style={{ background: "var(--gradient-gold)" }}
        />

        <p className="text-warm-beige text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed">
          Gestoría integral especializada en acompañarte en cada paso de tu ciudadanía.
          Más de 20 años de experiencia. Miles de gestiones exitosas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://wa.me/5491167061739?text=Hola%20Laura!%20Estoy%20interesado%2Fa%20en%20iniciar%20mi%20tr%C3%A1mite%20de%20ciudadan%C3%ADa.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Asesoría Online
          </a>
          <a href="#servicios" className="btn-outline-gold border-warm-white/50 text-warm-white hover:border-gold">
            Ver Servicios
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#stats"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-light animate-bounce"
          aria-label="Scroll"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
