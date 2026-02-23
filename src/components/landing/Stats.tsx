"use client";

import { Award, Users, Globe, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const stats = [
  { icon: Award, value: "+20 años", label: "de experiencia" },
  { icon: Users, value: "+1000", label: "inscripciones en el AIRE" },
  { icon: Globe, value: "Mundial", label: "Atención desde cualquier país" },
  { icon: Clock, value: "Desde 2002", label: "acompañando familias" },
];

const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export function Stats() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="stats" className="bg-charcoal py-16" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={value}
              className={`flex flex-col items-center text-center gap-3 animate-on-scroll ${delays[i]} ${visible ? "is-visible" : ""}`}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Icon size={22} className="text-warm-white" />
              </div>
              <p className="font-serif text-3xl font-semibold text-gold-light">
                {value}
              </p>
              <p className="text-xs tracking-wide uppercase text-warm-beige/70 font-light">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
