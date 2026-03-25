export interface Servicio {
  slug: string;
  nombre: string;
  descripcion: string;
  icono: string;
  metaTitle: string;
  metaDescription: string;
  contenido: string[];
  beneficios: string[];
  proceso: string[];
}

export const SERVICIOS: Servicio[] = [
  {
    slug: "reparacion-fugas",
    nombre: "Reparación de Fugas",
    descripcion: "Detectamos y reparamos fugas de agua en tuberías, grifos y cisternas con tecnología avanzada.",
    icono: "Droplets",
    metaTitle: "Reparación de Fugas de Agua | Fontanero Urgente 24h",
    metaDescription: "Servicio urgente de reparación de fugas de agua. Detectamos y solucionamos fugas en tuberías, grifos y cisternas. Presupuesto sin compromiso.",
    contenido: [
      "Las fugas de agua pueden causar daños graves en tu hogar si no se detectan a tiempo. Nuestros fontaneros profesionales utilizan equipos de detección de última generación para localizar fugas ocultas sin necesidad de obras innecesarias.",
      "Reparamos todo tipo de fugas: desde pequeños goteos en grifos hasta fugas importantes en tuberías empotradas. Trabajamos con rapidez para minimizar los daños y el desperdicio de agua.",
      "Ofrecemos garantía en todas nuestras reparaciones y utilizamos materiales de primera calidad para asegurar soluciones duraderas."
    ],
    beneficios: [
      "Detección sin obras con cámara termográfica",
      "Reparación inmediata el mismo día",
      "Garantía de 2 años en todas las reparaciones",
      "Presupuesto cerrado sin sorpresas"
    ],
    proceso: [
      "Inspección inicial y diagnóstico",
      "Localización exacta de la fuga",
      "Presupuesto detallado",
      "Reparación profesional",
      "Prueba de estanqueidad"
    ]
  },
  {
    slug: "desatascos",
    nombre: "Desatascos Urgentes",
    descripcion: "Desatascamos tuberías, desagües, fregaderos y WC con equipos profesionales de alta presión.",
    icono: "Wrench",
    metaTitle: "Desatascos Urgentes 24 Horas | Fontanero Profesional",
    metaDescription: "Servicio de desatascos urgentes 24h. Desatascamos tuberías, fregaderos, WC y bajantes con maquinaria profesional. Resultados garantizados.",
    contenido: [
      "Los atascos son uno de los problemas más comunes y molestos en cualquier hogar. Nuestro servicio de desatascos urgentes está disponible las 24 horas para solucionar cualquier obstrucción.",
      "Utilizamos equipos de alta presión y cámaras de inspección para eliminar atascos de forma eficaz sin dañar las tuberías. Tratamos atascos en fregaderos, WC, bañeras, duchas y bajantes.",
      "Además de eliminar el atasco, identificamos la causa para prevenir futuros problemas y te damos consejos de mantenimiento."
    ],
    beneficios: [
      "Servicio de urgencia 24 horas",
      "Maquinaria de alta presión profesional",
      "Inspección con cámara incluida",
      "Sin productos químicos agresivos"
    ],
    proceso: [
      "Evaluación del tipo de atasco",
      "Inspección con cámara si es necesario",
      "Desatasco con equipo apropiado",
      "Limpieza de la zona",
      "Consejos de prevención"
    ]
  },
  {
    slug: "instalacion-griferia",
    nombre: "Instalación de Grifería",
    descripcion: "Instalamos y sustituimos grifos de cocina, baño y ducha de todas las marcas.",
    icono: "Droplet",
    metaTitle: "Instalación de Grifos y Grifería | Fontanero Profesional",
    metaDescription: "Instalación profesional de grifería para cocina, baño y ducha. Trabajamos con todas las marcas. Servicio rápido y garantizado.",
    contenido: [
      "La grifería es un elemento esencial en cualquier hogar. Ofrecemos servicio de instalación y sustitución de grifos para cocina, baño, ducha y bidé de cualquier marca y modelo.",
      "Nuestros fontaneros están especializados en la instalación de grifería termostática, monomando, bimando y sistemas de ducha completos. Garantizamos una instalación perfecta sin fugas.",
      "También asesoramos sobre las mejores opciones de grifería según tus necesidades y presupuesto, priorizando siempre la eficiencia y el ahorro de agua."
    ],
    beneficios: [
      "Instalación de cualquier marca",
      "Asesoramiento personalizado",
      "Garantía de instalación",
      "Recogida del grifo antiguo"
    ],
    proceso: [
      "Evaluación de la instalación actual",
      "Retirada del grifo antiguo",
      "Preparación de conexiones",
      "Instalación del nuevo grifo",
      "Prueba de funcionamiento"
    ]
  },
  {
    slug: "reparacion-calderas",
    nombre: "Reparación de Calderas",
    descripcion: "Reparamos calderas de gas, eléctricas y de gasoil de todas las marcas con servicio urgente.",
    icono: "Flame",
    metaTitle: "Reparación de Calderas Urgente | Técnicos Certificados",
    metaDescription: "Reparación urgente de calderas de gas, eléctricas y gasoil. Técnicos certificados. Servicio 24h todos los días del año.",
    contenido: [
      "Quedarse sin agua caliente o calefacción es una emergencia, especialmente en invierno. Nuestro servicio de reparación de calderas está disponible las 24 horas para solucionar cualquier avería.",
      "Reparamos calderas de todas las marcas: Junkers, Vaillant, Saunier Duval, Baxi, Ferroli, Cointra y muchas más. Nuestros técnicos están certificados y actualizados en las últimas tecnologías.",
      "Disponemos de un amplio stock de repuestos originales para realizar la mayoría de reparaciones en una sola visita, minimizando las molestias."
    ],
    beneficios: [
      "Técnicos certificados por marcas",
      "Stock de repuestos originales",
      "Servicio de urgencia 24h",
      "Diagnóstico preciso"
    ],
    proceso: [
      "Diagnóstico de la avería",
      "Presupuesto detallado",
      "Reparación con repuestos originales",
      "Pruebas de seguridad",
      "Certificado de reparación"
    ]
  },
  {
    slug: "instalacion-termos",
    nombre: "Instalación de Termos",
    descripcion: "Instalamos termos eléctricos y calentadores de agua de todas las capacidades.",
    icono: "Thermometer",
    metaTitle: "Instalación de Termos Eléctricos | Fontanero Profesional",
    metaDescription: "Instalación de termos eléctricos y calentadores. Todas las capacidades y marcas. Instalación rápida y segura con garantía.",
    contenido: [
      "Los termos eléctricos son una solución eficiente para disponer de agua caliente sanitaria. Instalamos termos de todas las capacidades, desde 30 hasta 200 litros.",
      "Realizamos la instalación completa incluyendo conexiones de agua y electricidad, cumpliendo todas las normativas de seguridad. También nos encargamos de la retirada del termo antiguo.",
      "Te asesoramos sobre la capacidad adecuada según el número de personas en tu hogar y tus hábitos de consumo para optimizar el gasto energético."
    ],
    beneficios: [
      "Instalación el mismo día",
      "Asesoramiento sobre capacidad",
      "Cumplimiento de normativas",
      "Retirada del termo antiguo"
    ],
    proceso: [
      "Evaluación del espacio",
      "Retirada del equipo antiguo",
      "Instalación del nuevo termo",
      "Conexiones de agua y luz",
      "Puesta en marcha y pruebas"
    ]
  },
  {
    slug: "instalacion-sanitarios",
    nombre: "Instalación de Sanitarios",
    descripcion: "Instalamos WC, lavabos, bidés, bañeras y platos de ducha con acabado profesional.",
    icono: "Bath",
    metaTitle: "Instalación de Sanitarios | Fontanero Profesional",
    metaDescription: "Instalación profesional de WC, lavabos, bidés, bañeras y platos de ducha. Acabados perfectos y garantía de instalación.",
    contenido: [
      "La instalación de sanitarios requiere precisión y experiencia para garantizar un funcionamiento perfecto y evitar fugas. Nuestros fontaneros están especializados en todo tipo de sanitarios.",
      "Instalamos inodoros de suelo y suspendidos, lavabos de pedestal, sobre encimera o empotrados, bidés, bañeras y platos de ducha. Trabajamos con todas las marcas del mercado.",
      "Garantizamos acabados impecables, conexiones estancas y un funcionamiento óptimo desde el primer momento."
    ],
    beneficios: [
      "Instalación de cualquier tipo",
      "Acabados profesionales",
      "Garantía de estanqueidad",
      "Limpieza post-instalación"
    ],
    proceso: [
      "Preparación del espacio",
      "Instalación de desagües",
      "Colocación del sanitario",
      "Conexiones de agua",
      "Sellado y acabados"
    ]
  },
  {
    slug: "revision-tuberias",
    nombre: "Revisión de Tuberías",
    descripcion: "Inspeccionamos el estado de tus tuberías con cámara para prevenir averías.",
    icono: "Search",
    metaTitle: "Revisión e Inspección de Tuberías | Fontanero Profesional",
    metaDescription: "Inspección de tuberías con cámara profesional. Detectamos problemas antes de que sean averías. Informe detallado incluido.",
    contenido: [
      "La prevención es la mejor forma de evitar averías costosas. Nuestro servicio de revisión de tuberías permite conocer el estado real de tu instalación.",
      "Utilizamos cámaras de inspección de alta definición para revisar el interior de las tuberías sin necesidad de obras. Detectamos corrosión, obstrucciones, raíces y otros problemas.",
      "Tras la inspección, te entregamos un informe detallado con el estado de las tuberías y recomendaciones de mantenimiento o reparación si fueran necesarias."
    ],
    beneficios: [
      "Inspección sin obras",
      "Cámara de alta definición",
      "Informe detallado",
      "Detección temprana de problemas"
    ],
    proceso: [
      "Acceso a puntos de inspección",
      "Introducción de cámara",
      "Grabación del estado",
      "Análisis de imágenes",
      "Entrega de informe"
    ]
  },
  {
    slug: "urgencias-24h",
    nombre: "Urgencias 24 Horas",
    descripcion: "Servicio de fontanería de emergencia disponible las 24 horas, todos los días del año.",
    icono: "Clock",
    metaTitle: "Fontanero de Urgencias 24 Horas | Servicio Inmediato",
    metaDescription: "Fontanero de urgencias 24h disponible todos los días. Llegamos en menos de 45 minutos. Roturas, fugas, atascos y emergencias.",
    contenido: [
      "Las emergencias de fontanería no entienden de horarios. Por eso ofrecemos servicio de urgencias las 24 horas del día, los 365 días del año, incluyendo festivos.",
      "Nuestros fontaneros de guardia están preparados para atender cualquier emergencia: roturas de tuberías, fugas importantes, atascos graves, problemas con calderas y más.",
      "Garantizamos tiempos de respuesta rápidos, llegando a tu domicilio en menos de 45 minutos en la mayoría de casos. Llevamos todo el material necesario para solucionar la emergencia."
    ],
    beneficios: [
      "Disponible 24/7/365",
      "Llegada en menos de 45 min",
      "Furgoneta equipada",
      "Sin recargo nocturno excesivo"
    ],
    proceso: [
      "Llamada de emergencia",
      "Desplazamiento inmediato",
      "Evaluación de la urgencia",
      "Solución de emergencia",
      "Reparación definitiva"
    ]
  }
];

export const getServicioBySlug = (slug: string): Servicio | undefined => {
  return SERVICIOS.find(s => s.slug === slug);
};
