export interface Problema {
  slug: string;
  nombre: string;
  descripcion: string;
  icono: string;
  metaTitle: string;
  metaDescription: string;
  causas: string[];
  sintomas: string[];
  solucion: string[];
  prevencion: string[];
  urgencia: "alta" | "media" | "baja";
  tiempoReparacion: string;
}

export const PROBLEMAS: Problema[] = [
  {
    slug: "tuberia-rota",
    nombre: "Tubería Rota",
    descripcion: "Una tubería rota puede causar inundaciones y daños graves. Actuamos de inmediato para minimizar los daños.",
    icono: "AlertTriangle",
    metaTitle: "Tubería Rota - Reparación Urgente | Fontanero 24h",
    metaDescription: "¿Tubería rota en casa? Servicio de emergencia 24h. Cortamos el agua, reparamos la tubería y evitamos daños mayores. Llámanos ahora.",
    causas: [
      "Congelación del agua en invierno que expande y rompe la tubería",
      "Corrosión por antigüedad del material (especialmente en tuberías de hierro)",
      "Exceso de presión en la red de agua",
      "Golpes o impactos durante obras o reformas",
      "Movimientos del terreno o asentamientos del edificio",
      "Defectos de fabricación o instalación incorrecta"
    ],
    sintomas: [
      "Manchas de humedad en paredes, techos o suelos",
      "Goteo o chorro de agua visible",
      "Bajada repentina de la presión del agua",
      "Ruidos extraños en las tuberías",
      "Aumento inexplicable en la factura del agua",
      "Olor a humedad o moho"
    ],
    solucion: [
      "Cerrar inmediatamente la llave de paso general",
      "Localizar el punto exacto de la rotura",
      "Cortar la sección dañada de la tubería",
      "Instalar un tramo nuevo con materiales de calidad",
      "Realizar prueba de presión para verificar la reparación",
      "Reparar los daños causados por el agua si los hubiera"
    ],
    prevencion: [
      "Proteger las tuberías expuestas del frío en invierno",
      "Realizar revisiones periódicas de la instalación",
      "Instalar un reductor de presión si es necesario",
      "Sustituir tuberías antiguas de hierro por materiales modernos",
      "Mantener una temperatura mínima en casa en invierno"
    ],
    urgencia: "alta",
    tiempoReparacion: "1-3 horas"
  },
  {
    slug: "fuga-de-agua",
    nombre: "Fuga de Agua",
    descripcion: "Las fugas de agua desperdician recursos y pueden causar daños estructurales. Detectamos y reparamos cualquier fuga.",
    icono: "Droplets",
    metaTitle: "Fuga de Agua - Detección y Reparación | Fontanero Urgente",
    metaDescription: "Detectamos y reparamos fugas de agua con tecnología avanzada. Sin obras innecesarias. Servicio urgente disponible 24h.",
    causas: [
      "Juntas deterioradas por el paso del tiempo",
      "Conexiones mal apretadas o defectuosas",
      "Corrosión en tuberías metálicas",
      "Presión excesiva del agua",
      "Cambios bruscos de temperatura",
      "Desgaste de grifos y válvulas"
    ],
    sintomas: [
      "Goteo constante aunque sea pequeño",
      "Manchas de humedad que aparecen y desaparecen",
      "Contador de agua que gira sin consumo",
      "Presión del agua inferior a lo normal",
      "Facturas de agua más altas de lo habitual",
      "Sonido de agua corriendo cuando todo está cerrado"
    ],
    solucion: [
      "Detección con equipos especializados (cámara termográfica, geófono)",
      "Localización exacta sin romper paredes innecesariamente",
      "Reparación del punto de fuga",
      "Sustitución de juntas o tramos afectados",
      "Prueba de estanqueidad",
      "Verificación de que no hay más fugas"
    ],
    prevencion: [
      "Revisar periódicamente grifos y conexiones",
      "No apretar excesivamente los grifos al cerrarlos",
      "Cambiar juntas y arandelas cuando empiecen a gotear",
      "Instalar un detector de fugas",
      "Realizar mantenimiento preventivo anual"
    ],
    urgencia: "media",
    tiempoReparacion: "1-2 horas"
  },
  {
    slug: "atasco-tuberia",
    nombre: "Atasco en Tubería",
    descripcion: "Los atascos impiden el correcto drenaje del agua. Eliminamos obstrucciones de forma rápida y eficaz.",
    icono: "XCircle",
    metaTitle: "Atasco en Tubería - Desatasco Urgente | Fontanero 24h",
    metaDescription: "Desatascamos tuberías de forma urgente. Fregaderos, WC, duchas y bajantes. Maquinaria profesional y resultados garantizados.",
    causas: [
      "Acumulación de grasa y restos de comida",
      "Cabellos y jabón en desagües de baño",
      "Objetos caídos accidentalmente",
      "Papel higiénico en exceso o toallitas",
      "Raíces de árboles en tuberías exteriores",
      "Cal y sedimentos acumulados"
    ],
    sintomas: [
      "El agua tarda en irse o no drena",
      "Malos olores procedentes del desagüe",
      "Gorgoteos en las tuberías",
      "Agua que sube por otros desagües",
      "Inodoro que no evacúa correctamente",
      "Charcos de agua estancada"
    ],
    solucion: [
      "Evaluación del tipo y ubicación del atasco",
      "Uso de desatascador manual para atascos leves",
      "Máquina de alta presión para atascos severos",
      "Inspección con cámara si es necesario",
      "Limpieza completa de la tubería",
      "Tratamiento preventivo"
    ],
    prevencion: [
      "No tirar grasa por el fregadero",
      "Usar rejillas en los desagües",
      "No tirar toallitas por el WC",
      "Limpiar periódicamente los sifones",
      "Echar agua caliente regularmente por los desagües",
      "Realizar limpiezas preventivas anuales"
    ],
    urgencia: "media",
    tiempoReparacion: "30 min - 2 horas"
  },
  {
    slug: "grifo-gotea",
    nombre: "Grifo que Gotea",
    descripcion: "Un grifo que gotea desperdicia agua y dinero. Reparamos o sustituimos grifos de cualquier tipo.",
    icono: "Droplet",
    metaTitle: "Grifo que Gotea - Reparación Rápida | Fontanero Profesional",
    metaDescription: "Reparamos grifos que gotean de forma rápida y económica. Ahorra agua y dinero. Servicio el mismo día.",
    causas: [
      "Junta o arandela desgastada",
      "Cartucho cerámico deteriorado",
      "Asiento de la válvula dañado",
      "Cal acumulada en el mecanismo",
      "Grifo de mala calidad",
      "Presión excesiva del agua"
    ],
    sintomas: [
      "Goteo constante con el grifo cerrado",
      "Dificultad para cerrar completamente",
      "Ruido al abrir o cerrar el grifo",
      "Mango del grifo flojo o duro",
      "Fugas por la base del grifo",
      "Caudal irregular"
    ],
    solucion: [
      "Diagnóstico del tipo de grifo y avería",
      "Desmontaje del grifo",
      "Sustitución de juntas o cartucho",
      "Limpieza de cal si es necesario",
      "Montaje y ajuste",
      "Prueba de funcionamiento"
    ],
    prevencion: [
      "No cerrar los grifos con fuerza excesiva",
      "Limpiar periódicamente los aireadores",
      "Descalcificar si el agua es muy dura",
      "Elegir grifería de calidad",
      "Cambiar juntas ante los primeros síntomas"
    ],
    urgencia: "baja",
    tiempoReparacion: "30 min - 1 hora"
  },
  {
    slug: "cisterna-no-funciona",
    nombre: "Cisterna que No Funciona",
    descripcion: "Problemas con la cisterna del WC: no llena, no para, pierde agua. Reparamos todo tipo de cisternas.",
    icono: "AlertCircle",
    metaTitle: "Cisterna No Funciona - Reparación Urgente | Fontanero",
    metaDescription: "Reparamos cisternas que no funcionan: no llenan, pierden agua o no descargan. Servicio rápido y económico.",
    causas: [
      "Flotador descalibrado o roto",
      "Válvula de llenado defectuosa",
      "Válvula de descarga deteriorada",
      "Junta de la base agrietada",
      "Mecanismo interno desgastado",
      "Cal acumulada en los componentes"
    ],
    sintomas: [
      "La cisterna no llena o tarda mucho",
      "El agua no para de correr",
      "No descarga correctamente",
      "Ruidos constantes de agua",
      "Pérdida de agua por la base",
      "Botón de descarga que no funciona"
    ],
    solucion: [
      "Diagnóstico del problema específico",
      "Ajuste o sustitución del flotador",
      "Cambio de válvulas si es necesario",
      "Sustitución del mecanismo completo si procede",
      "Sellado de juntas",
      "Prueba de funcionamiento"
    ],
    prevencion: [
      "No usar pastillas de limpieza agresivas",
      "Revisar periódicamente el mecanismo",
      "Descalcificar si el agua es dura",
      "Sustituir componentes ante los primeros fallos",
      "Elegir mecanismos de calidad en reformas"
    ],
    urgencia: "media",
    tiempoReparacion: "30 min - 1.5 horas"
  },
  {
    slug: "caldera-no-enciende",
    nombre: "Caldera que No Enciende",
    descripcion: "Sin agua caliente ni calefacción por avería en la caldera. Reparamos calderas de todas las marcas.",
    icono: "Flame",
    metaTitle: "Caldera No Enciende - Reparación Urgente | Técnico 24h",
    metaDescription: "¿Tu caldera no enciende? Técnicos certificados disponibles 24h. Reparamos calderas de gas de todas las marcas.",
    causas: [
      "Falta de presión en el circuito",
      "Termostato averiado o mal configurado",
      "Electrodo de encendido sucio o dañado",
      "Válvula de gas defectuosa",
      "Placa electrónica averiada",
      "Falta de mantenimiento"
    ],
    sintomas: [
      "La caldera no arranca",
      "Se enciende y se apaga sola",
      "Muestra código de error",
      "No hay agua caliente",
      "Los radiadores no calientan",
      "Hace ruidos extraños"
    ],
    solucion: [
      "Diagnóstico del código de error",
      "Comprobación de presión y llenado si es necesario",
      "Limpieza o sustitución de electrodo",
      "Reparación o cambio de componentes averiados",
      "Reset y puesta en marcha",
      "Pruebas de seguridad"
    ],
    prevencion: [
      "Realizar mantenimiento anual obligatorio",
      "Purgar radiadores antes del invierno",
      "Mantener la presión entre 1 y 1.5 bar",
      "No tapar ni obstruir la caldera",
      "Llamar al técnico ante los primeros síntomas"
    ],
    urgencia: "alta",
    tiempoReparacion: "1-3 horas"
  },
  {
    slug: "baja-presion-agua",
    nombre: "Baja Presión de Agua",
    descripcion: "Poca presión en grifos y ducha. Diagnosticamos la causa y restauramos el caudal normal.",
    icono: "TrendingDown",
    metaTitle: "Baja Presión de Agua - Solución Profesional | Fontanero",
    metaDescription: "¿Poca presión de agua en casa? Diagnosticamos y solucionamos problemas de presión. Mejora el caudal de grifos y ducha.",
    causas: [
      "Llave de paso parcialmente cerrada",
      "Tuberías obstruidas por cal o sedimentos",
      "Fuga oculta en la instalación",
      "Reductor de presión mal ajustado",
      "Problema en la acometida general",
      "Tuberías de diámetro insuficiente"
    ],
    sintomas: [
      "Chorro débil en grifos y ducha",
      "Tarda mucho en llenar la bañera",
      "La caldera no arranca por falta de caudal",
      "Presión diferente en distintas zonas",
      "Electrodomésticos que no funcionan bien",
      "Presión que varía a lo largo del día"
    ],
    solucion: [
      "Revisión de llaves de paso",
      "Comprobación de presión en acometida",
      "Detección de posibles fugas",
      "Limpieza o sustitución de tuberías obstruidas",
      "Ajuste o instalación de grupo de presión",
      "Descalcificación si es necesario"
    ],
    prevencion: [
      "Instalar filtros en la entrada de agua",
      "Limpiar aireadores de grifos regularmente",
      "Revisar la instalación periódicamente",
      "Considerar un descalcificador si el agua es muy dura",
      "Mantener las llaves de paso en buen estado"
    ],
    urgencia: "baja",
    tiempoReparacion: "1-4 horas"
  },
  {
    slug: "mal-olor-desagues",
    nombre: "Mal Olor en Desagües",
    descripcion: "Olores desagradables procedentes de desagües y tuberías. Eliminamos la causa de raíz.",
    icono: "Wind",
    metaTitle: "Mal Olor en Desagües - Solución Definitiva | Fontanero",
    metaDescription: "Eliminamos malos olores en desagües de forma definitiva. Identificamos la causa y aplicamos la solución correcta.",
    causas: [
      "Sifón seco por falta de uso",
      "Acumulación de residuos orgánicos",
      "Ventilación deficiente de bajantes",
      "Atasco parcial en la tubería",
      "Junta de WC deteriorada",
      "Problemas en la fosa séptica"
    ],
    sintomas: [
      "Olor a alcantarilla en baño o cocina",
      "Olor que aparece y desaparece",
      "Olor más intenso con tiempo seco",
      "Gorgoteos en los desagües",
      "Olor que empeora al usar otros desagües",
      "Olor persistente pese a la limpieza"
    ],
    solucion: [
      "Identificación del origen del olor",
      "Rellenado de sifones secos",
      "Limpieza de tuberías con productos específicos",
      "Reparación de juntas defectuosas",
      "Instalación o reparación de ventilación",
      "Desatasco si es necesario"
    ],
    prevencion: [
      "Usar todos los desagües regularmente",
      "Echar agua por desagües poco usados",
      "Limpiar sifones periódicamente",
      "No tirar restos de comida por el fregadero",
      "Mantener la ventilación de bajantes despejada"
    ],
    urgencia: "baja",
    tiempoReparacion: "1-2 horas"
  },
  {
    slug: "inundacion",
    nombre: "Inundación en Casa",
    descripcion: "Emergencia por inundación. Actuamos de inmediato para cortar el agua y minimizar daños.",
    icono: "AlertOctagon",
    metaTitle: "Inundación en Casa - Emergencia 24h | Fontanero Urgente",
    metaDescription: "Emergencia por inundación. Servicio urgente 24h. Cortamos el agua, achicamos y reparamos. Llegamos en menos de 45 minutos.",
    causas: [
      "Rotura de tubería principal",
      "Electrodoméstico averiado (lavadora, lavavajillas)",
      "Desbordamiento de bañera o fregadero",
      "Atasco grave en bajantes",
      "Rotura de flexo o conexión",
      "Fallo en válvula de seguridad"
    ],
    sintomas: [
      "Agua acumulada en el suelo",
      "Agua cayendo del techo",
      "Paredes mojadas",
      "Ruido de agua corriendo",
      "Olor a humedad intenso",
      "Daños visibles en muebles y enseres"
    ],
    solucion: [
      "Corte inmediato del suministro de agua",
      "Corte de electricidad si hay riesgo",
      "Achique del agua acumulada",
      "Localización del origen",
      "Reparación de emergencia",
      "Secado y prevención de daños mayores"
    ],
    prevencion: [
      "Conocer la ubicación de la llave de paso",
      "Revisar conexiones de electrodomésticos",
      "No dejar grifos abiertos sin supervisión",
      "Instalar detectores de fugas",
      "Realizar mantenimiento preventivo"
    ],
    urgencia: "alta",
    tiempoReparacion: "2-4 horas"
  },
  {
    slug: "agua-marron",
    nombre: "Agua Marrón o Sucia",
    descripcion: "El agua sale turbia, marrón o con partículas. Identificamos la causa y restauramos la calidad.",
    icono: "Droplets",
    metaTitle: "Agua Marrón o Sucia - Diagnóstico y Solución | Fontanero",
    metaDescription: "¿El agua sale marrón o turbia? Diagnosticamos la causa y solucionamos el problema. Tuberías, depósitos y filtros.",
    causas: [
      "Corrosión en tuberías de hierro antiguas",
      "Sedimentos en el depósito o termo",
      "Obras en la red general de suministro",
      "Rotura en tubería exterior",
      "Entrada de tierra en la instalación",
      "Falta de uso prolongado"
    ],
    sintomas: [
      "Agua de color marrón, naranja o amarillo",
      "Partículas visibles en el agua",
      "Olor metálico o a tierra",
      "Manchas en la ropa al lavar",
      "Sabor extraño del agua",
      "Problema que aparece y desaparece"
    ],
    solucion: [
      "Identificación del origen del problema",
      "Purgado de la instalación",
      "Limpieza de depósitos y termos",
      "Sustitución de tuberías corroídas",
      "Instalación de filtros",
      "Contacto con compañía si es problema externo"
    ],
    prevencion: [
      "Sustituir tuberías de hierro antiguas",
      "Realizar mantenimiento de termos y calderas",
      "Instalar filtros en la entrada",
      "Purgar la instalación tras ausencias largas",
      "Revisar periódicamente el estado de las tuberías"
    ],
    urgencia: "media",
    tiempoReparacion: "1-4 horas"
  }
];

export const getProblemaBySlug = (slug: string): Problema | undefined => {
  return PROBLEMAS.find(p => p.slug === slug);
};
