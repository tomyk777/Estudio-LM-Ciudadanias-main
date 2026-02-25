export function JsonLd() {
  const SITE_URL = "https://estudiointegrallm.com.ar";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Estudio Integral LM",
    alternateName: "Estudio Integral Laura Melluso",
    description:
      "Gestoría integral especializada en ciudadanía italiana y española. Más de 20 años de experiencia acompañando familias en todo el mundo.",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo.png`,
    image: `${SITE_URL}/assets/logo.png`,
    telephone: "+5491167061739",
    email: "Lmelluso@yahoo.it",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vicente López",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.5228,
      longitude: -58.4714,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "15:00",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Italia" },
      { "@type": "Country", name: "España" },
    ],
    knowsLanguage: ["es", "it"],
    sameAs: [
      "https://www.instagram.com/lauramelluso.ciudadanias/",
      "https://www.facebook.com/ciudadaniaitalianaymas/",
    ],
    founder: {
      "@type": "Person",
      name: "Laura Karina Melluso",
      jobTitle: "Gestora de Ciudadanía Italiana y Española",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Ciudadanía",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carpetas de Ciudadanía Italiana",
            description:
              "Armado y gestión de carpetas completas para ciudadanía italiana.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carpetas de Ciudadanía Española",
            description:
              "Armado y gestión de carpetas completas para ciudadanía española.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Búsqueda y Legalización de Actas",
            description:
              "Búsqueda de actas en el país y en el extranjero, legalización de documentos y apostillas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Traducciones Certificadas",
            description:
              "Traducciones multilingües certificadas por traductores públicos matriculados.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Turnos Consulares",
            description:
              "Gestión y coordinación de turnos ante el Consulado Italiano de Buenos Aires.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ciudadanía por Matrimonio",
            description:
              "Presentación de Ciudadanía por Matrimonio ante el Ministero dell'Interno.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Curso de Italiano",
            description:
              "Cursos de italiano nivel inicial, intermedio y avanzado.",
          },
        },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Estudio Integral LM",
    description:
      "Gestoría integral especializada en ciudadanía italiana y española.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "es",
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Estudio Integral LM — Ciudadanía Italiana y Española",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    description:
      "Gestoría integral especializada en ciudadanía italiana y española. Más de 20 años de experiencia acompañando familias en todo el mundo.",
    inLanguage: "es",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué necesito para tramitar la ciudadanía italiana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Necesitás reunir las actas de nacimiento, matrimonio y defunción de la línea de descendencia italiana, legalizarlas, apostillarlas y traducirlas. En Estudio Integral LM nos encargamos de todo el proceso por vos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Pueden gestionar la ciudadanía española también?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, gestionamos carpetas completas tanto para ciudadanía italiana como española, incluyendo búsqueda de actas, traducciones y legalización de documentos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen asesoría online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos asesoría online desde cualquier parte del mundo. Podés contactarnos por WhatsApp o email para coordinar una consulta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda el trámite de ciudadanía italiana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo varía según cada caso particular, la complejidad de la documentación y la vía elegida (consular o judicial). Contactanos para una evaluación personalizada de tu caso.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
