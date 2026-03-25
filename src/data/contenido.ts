/**
 * Generador de contenido único por ciudad para evitar thin content y canibalización.
 * Usa variaciones semánticas y datos específicos para crear contenido diferenciado.
 */

// Frases de apertura variadas
const APERTURAS = [
  "¿Necesitas un fontanero en {ciudad}? Nuestro equipo de profesionales está disponible las 24 horas para atender cualquier emergencia de fontanería.",
  "En {ciudad} contamos con fontaneros profesionales preparados para resolver cualquier avería de fontanería de forma rápida y económica.",
  "Servicio de fontanería urgente en {ciudad}. Llegamos a tu domicilio en menos de 45 minutos para solucionar cualquier problema.",
  "Fontaneros profesionales en {ciudad} a tu disposición. Reparamos fugas, desatascamos tuberías y solucionamos todo tipo de averías.",
  "¿Buscas un fontanero barato en {ciudad}? Ofrecemos precios competitivos sin renunciar a la calidad profesional.",
  "Nuestros fontaneros en {ciudad} están especializados en todo tipo de reparaciones e instalaciones de fontanería.",
  "Servicio de fontanería en {ciudad} con más de 15 años de experiencia. Profesionales cualificados y precios transparentes.",
  "Fontanero urgente en {ciudad} disponible ahora mismo. No esperes más para solucionar tu problema de fontanería."
];

// Descripciones de servicio variadas
const DESCRIPCIONES_SERVICIO = [
  "Ofrecemos un servicio integral de fontanería que incluye reparación de fugas, desatascos, instalación de grifería, reparación de calderas y mucho más. Trabajamos con las mejores marcas y materiales del mercado.",
  "Nuestro equipo está formado por fontaneros titulados con amplia experiencia en todo tipo de instalaciones. Desde pequeñas reparaciones hasta reformas completas de baño y cocina.",
  "Disponemos de la tecnología más avanzada para detectar fugas sin obras, desatascar tuberías con alta presión y diagnosticar problemas en calderas de cualquier marca.",
  "Nos caracterizamos por la puntualidad, la limpieza y el trato profesional. Dejamos tu hogar tal y como lo encontramos, sin rastro de nuestra intervención.",
  "Trabajamos tanto para particulares como para comunidades de vecinos, empresas y locales comerciales. Adaptamos nuestros servicios a las necesidades de cada cliente.",
  "Contamos con un servicio de urgencias 24 horas para atender emergencias como roturas de tuberías, inundaciones o averías en calderas durante los meses de invierno."
];

// Ventajas variadas
const VENTAJAS = [
  ["Presupuesto sin compromiso", "Garantía de 2 años", "Materiales de primera calidad", "Fontaneros titulados"],
  ["Llegada en menos de 45 minutos", "Precios cerrados sin sorpresas", "Limpieza garantizada", "Atención 24 horas"],
  ["Sin recargo por desplazamiento", "Factura detallada", "Pago flexible", "Profesionales de confianza"],
  ["Experiencia de más de 15 años", "Equipos de última generación", "Soluciones duraderas", "Trato personalizado"],
  ["Servicio de urgencias 24/7", "Diagnóstico gratuito", "Reparación el mismo día", "Satisfacción garantizada"],
  ["Técnicos certificados", "Stock de repuestos", "Presupuesto en el momento", "Máxima profesionalidad"]
];

// CTAs variados
const CTAS = [
  "Llámanos ahora y un fontanero profesional estará en tu domicilio en menos de una hora.",
  "No dejes que un pequeño problema se convierta en una avería mayor. Contacta con nosotros hoy mismo.",
  "Solicita tu presupuesto gratuito y sin compromiso. Te atendemos de inmediato.",
  "Nuestros fontaneros están preparados para ayudarte. Llama ahora y olvídate del problema.",
  "Confía en profesionales con experiencia. Estamos a una llamada de distancia.",
  "¿Urgencia de fontanería? No esperes más, contacta con nosotros y lo solucionamos."
];

// FAQs base que se personalizan por ciudad
const FAQS_BASE = [
  {
    pregunta: "¿Cuánto cuesta un fontanero en {ciudad}?",
    respuesta: "El precio de un fontanero en {ciudad} depende del tipo de trabajo. Una reparación sencilla puede costar entre 50€ y 80€, mientras que trabajos más complejos como desatascos o reparación de calderas pueden variar entre 80€ y 200€. Siempre damos presupuesto cerrado antes de empezar."
  },
  {
    pregunta: "¿Tienen servicio de urgencias en {ciudad}?",
    respuesta: "Sí, ofrecemos servicio de fontanería urgente en {ciudad} las 24 horas del día, los 365 días del año. Nuestros fontaneros de guardia pueden llegar a tu domicilio en menos de 45 minutos."
  },
  {
    pregunta: "¿Trabajan los fines de semana en {ciudad}?",
    respuesta: "Por supuesto. Nuestro servicio de fontanería en {ciudad} está disponible todos los días de la semana, incluyendo sábados, domingos y festivos. Las emergencias no entienden de horarios."
  },
  {
    pregunta: "¿Ofrecen garantía en las reparaciones?",
    respuesta: "Todas nuestras reparaciones en {ciudad} incluyen una garantía de 2 años tanto en mano de obra como en materiales. Trabajamos con productos de primeras marcas para asegurar la durabilidad."
  },
  {
    pregunta: "¿Cuánto tardan en llegar a {ciudad}?",
    respuesta: "Nuestro tiempo medio de llegada en {ciudad} es de 30 a 45 minutos, dependiendo de la zona exacta y el tráfico. En casos de urgencia, priorizamos la rapidez."
  }
];

// Función hash simple para generar índices consistentes
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Capitaliza la primera letra de cada palabra
export function capitalizarCiudad(ciudad: string): string {
  return ciudad
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Genera slug a partir del nombre
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Genera contenido único para una ciudad
export function generarContenidoCiudad(ciudadSlug: string) {
  const ciudad = capitalizarCiudad(ciudadSlug);
  const hash = hashString(ciudadSlug);
  
  const aperturaIndex = hash % APERTURAS.length;
  const descripcionIndex = (hash + 1) % DESCRIPCIONES_SERVICIO.length;
  const ventajasIndex = (hash + 2) % VENTAJAS.length;
  const ctaIndex = (hash + 3) % CTAS.length;
  
  const apertura = APERTURAS[aperturaIndex].replace(/{ciudad}/g, ciudad);
  const descripcion = DESCRIPCIONES_SERVICIO[descripcionIndex];
  const ventajas = VENTAJAS[ventajasIndex];
  const cta = CTAS[ctaIndex];
  
  const faqs = FAQS_BASE.map(faq => ({
    pregunta: faq.pregunta.replace(/{ciudad}/g, ciudad),
    respuesta: faq.respuesta.replace(/{ciudad}/g, ciudad)
  }));
  
  // Meta tags únicos
  const metaTitles = [
    `Fontanero en ${ciudad} | Urgente 24h | Precios Baratos`,
    `Fontanero Barato en ${ciudad} | Servicio Urgente 24 Horas`,
    `Fontanero Urgente ${ciudad} | Reparaciones 24h | Económico`,
    `Fontanero ${ciudad} 24 Horas | Barato y Profesional`,
  ];
  
  const metaDescriptions = [
    `Fontanero en ${ciudad} disponible 24h. Reparamos fugas, desatascos, calderas y más. Presupuesto gratis. Llegamos en 45 min. ☎️ Llama ahora.`,
    `¿Necesitas un fontanero urgente en ${ciudad}? Servicio 24 horas, precios económicos y profesionales cualificados. Presupuesto sin compromiso.`,
    `Fontaneros profesionales en ${ciudad}. Servicio de urgencias 24h. Fugas, atascos, calderas. Precios baratos y garantía de 2 años.`,
    `Servicio de fontanería en ${ciudad} las 24 horas. Fontaneros baratos y profesionales. Reparaciones urgentes. Llámanos ahora.`,
  ];
  
  const metaTitleIndex = hash % metaTitles.length;
  const metaDescIndex = (hash + 1) % metaDescriptions.length;
  
  return {
    ciudad,
    ciudadSlug,
    apertura,
    descripcion,
    ventajas,
    cta,
    faqs,
    metaTitle: metaTitles[metaTitleIndex],
    metaDescription: metaDescriptions[metaDescIndex],
    h1: `Fontanero en ${ciudad}`,
    h2s: [
      `Servicios de fontanería en ${ciudad}`,
      `¿Por qué elegirnos en ${ciudad}?`,
      `Preguntas frecuentes sobre fontaneros en ${ciudad}`,
      `Contacta con tu fontanero en ${ciudad}`
    ]
  };
}

// Genera datos estructurados Schema.org para una ciudad
export function generarSchemaLocalBusiness(ciudadSlug: string) {
  const ciudad = capitalizarCiudad(ciudadSlug);
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://fontanerobarato.com/${ciudadSlug}/`,
    "name": `Fontanero Barato ${ciudad}`,
    "description": `Servicio de fontanería profesional en ${ciudad}. Reparaciones urgentes 24 horas, desatascos, fugas y calderas.`,
    "url": `https://fontanerobarato.com/${ciudadSlug}/`,
    "telephone": "+34900433013",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": ciudad,
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "ES"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [],
    "areaServed": {
      "@type": "City",
      "name": ciudad
    },
    "serviceType": ["Fontanería", "Reparación de fugas", "Desatascos", "Reparación de calderas"]
  };
}

// Genera Schema FAQ para una ciudad
export function generarSchemaFAQ(ciudadSlug: string) {
  const contenido = generarContenidoCiudad(ciudadSlug);
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contenido.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.pregunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.respuesta
      }
    }))
  };
}
