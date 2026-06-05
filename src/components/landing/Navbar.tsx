"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al hacer click fuera (excluyendo el botón toggle)
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current && !menuRef.current.contains(target) &&
        toggleRef.current && !toggleRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 isolation-isolate transition-all duration-500 ${
        scrolled ? "bg-charcoal shadow-lg py-2" : "bg-transparent py-4"
      }`}
      style={{ isolation: "isolate" }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Estudio Integral LM"
            width={80}
            height={80}
            sizes="(max-width: 768px) 56px, 80px"
            quality={65}
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? "h-10 md:h-14" : "h-14 md:h-20"
            }`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 text-warm-white hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#CiudadaniaExpress"
            className="btn-gold text-xs px-6 py-2.5"
          >
            Ciudadanía Express
          </a>
          <a
            href="https://wa.me/5491167061739?text=Hola%20Laura!%20Me%20gustar%C3%ADa%20solicitar%20una%20asesor%C3%ADa%20online%20sobre%20ciudadan%C3%ADa.%20%C2%BFPodr%C3%ADamos%20coordinar%20una%20consulta%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold border-warm-white/50 text-warm-white hover:border-gold text-xs px-6 py-2.5 "
          >
            Asesoría Online
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-warm-white"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span
            className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
              open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
              open ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-charcoal/95 backdrop-blur-sm border-t border-charcoal-mid px-6 py-8 flex flex-col items-center gap-6">
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-warm-white hover:text-gold transition-all duration-300"
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-8px)",
              }}
            >
              {l.label}
            </a>
          ))}
          <div className="w-12 h-px bg-gold/30 my-1" />
          <a
            href="#CiudadaniaExpress"
            onClick={() => setOpen(false)}
            className="btn-gold text-center text-xs px-8 py-3 transition-all duration-300"
            style={{
              transitionDelay: open ? `${navLinks.length * 60}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            Ciudadanía Express
          </a>
          <a
            href="https://wa.me/5491167061739?text=Hola%20Laura!%20Me%20gustar%C3%ADa%20solicitar%20una%20asesor%C3%ADa%20online%20sobre%20ciudadan%C3%ADa.%20%C2%BFPodr%C3%ADamos%20coordinar%20una%20consulta%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold border-warm-white/50 text-warm-white hover:border-gold text-center text-xs px-8 py-3 transition-all duration-300"
            onClick={() => setOpen(false)}
            style={{
              transitionDelay: open ? `${(navLinks.length + 1) * 60}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            Asesoría Online
          </a>
        </div>
      </div>
    </header>
  );
}
