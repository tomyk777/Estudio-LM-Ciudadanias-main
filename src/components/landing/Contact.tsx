"use client";

import { Mail, Clock, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const header = useScrollAnimation();
  const left = useScrollAnimation();
  const right = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Laura! Me contacto desde tu sitio web.\n\nNombre: ${form.name}\nEmail: ${form.email}\n\nConsulta:\n${form.message}`
    );
    window.open(`https://wa.me/5491167061739?text=${text}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-warm-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 animate-on-scroll ${header.visible ? "is-visible" : ""}`}
        >
          <p className="section-label">Contacto</p>
          <div className="gold-divider" />
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mt-4">
            Hablemos de tu{" "}
            <span className="italic text-gold">ciudadanía</span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl mx-auto">
            Respondemos todas las consultas con la mayor celeridad. Estamos listos
            para acompañarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Left column: info cards + form */}
          <div
            ref={left.ref as React.RefObject<HTMLDivElement>}
            className={`flex flex-col gap-6 animate-on-scroll-left ${left.visible ? "is-visible" : ""}`}
          >
            {/* Info cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://wa.me/5491167061739?text=Hola%20Laura!%20Vi%20tu%20sitio%20web%20y%20quiero%20consultar%20sobre%20el%20tr%C3%A1mite%20de%20ciudadan%C3%ADa."
                target="_blank"
                rel="noopener noreferrer"
                className="value-badge hover:border-l-gold transition-colors group"
              >
                <WhatsAppIcon size={20} className="text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-charcoal font-semibold text-sm group-hover:text-gold transition-colors">
                    11 6706 1739
                  </p>
                </div>
              </a>

              <a
                href="mailto:Lmelluso@yahoo.it"
                className="value-badge hover:border-l-gold transition-colors group"
              >
                <Mail size={20} className="text-gold flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-0.5">
                    Email
                  </p>
                  <p className="text-charcoal font-semibold text-sm group-hover:text-gold transition-colors break-all">
                    Lmelluso@yahoo.it
                  </p>
                </div>
              </a>

              <div className="value-badge">
                <Clock size={20} className="text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-0.5">
                    Horarios
                  </p>
                  <p className="text-charcoal font-semibold text-sm">
                    Lunes a viernes de 9 a 15 hs
                  </p>
                </div>
              </div>

              <div className="value-badge">
                <MapPin size={20} className="text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-0.5">
                    Ubicación
                  </p>
                  <p className="text-charcoal font-semibold text-sm">
                    Vicente López, Buenos Aires
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full border border-border bg-white px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Tu email"
                className="w-full border border-border bg-white px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tu mensaje"
                className="w-full border border-border bg-white px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-gold transition-colors resize-none"
              />
              <button type="submit" className="btn-gold flex items-center justify-center gap-3">
                <WhatsAppIcon size={18} />
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          {/* Right column: image */}
          <div
            ref={right.ref as React.RefObject<HTMLDivElement>}
            className={`flex items-center justify-center lg:justify-end animate-on-scroll-right ${right.visible ? "is-visible" : ""}`}
          >
            <Image
              src="/assets/mundo.png"
              alt="Ciudadanía europea - conectando el mundo"
              width={448}
              height={448}
              sizes="(max-width: 1024px) 90vw, 448px"
              quality={65}
              className="w-full max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
