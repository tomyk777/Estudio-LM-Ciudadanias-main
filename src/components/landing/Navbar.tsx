"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const logoImg = "/assets/logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-charcoal shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoImg} alt="Estudio Integral LM" className="h-20 w-auto object-contain" />
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
            href="https://wa.me/5491167061739?text=Hola%20Laura!%20Me%20gustar%C3%ADa%20solicitar%20una%20asesor%C3%ADa%20online%20sobre%20ciudadan%C3%ADa.%20%C2%BFPodr%C3%ADamos%20coordinar%20una%20consulta%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs px-6 py-2.5"
          >
            Asesoría Online
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-warm-white"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-charcoal-mid px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-warm-white hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5491167061739?text=Hola%20Laura!%20Me%20gustar%C3%ADa%20solicitar%20una%20asesor%C3%ADa%20online%20sobre%20ciudadan%C3%ADa.%20%C2%BFPodr%C3%ADamos%20coordinar%20una%20consulta%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-center"
            onClick={() => setOpen(false)}
          >
            Asesoría Online
          </a>
        </div>
      )}
    </header>
  );
}
