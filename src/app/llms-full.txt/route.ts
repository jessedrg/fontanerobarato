import { CITIES } from "@/cities";
import { SERVICIOS } from "@/data/servicios";
import { PROBLEMAS } from "@/data/problemas";
import { capitalizarCiudad } from "@/data/contenido";

export async function GET() {
  const baseUrl = "https://fontanerobarato.com";
  
  // Generar secciones de servicios detalladas
  const serviciosDetalle = SERVICIOS.map(s => `
### ${s.nombre}
**URL:** ${baseUrl}/servicios/${s.slug}/
**Descripción:** ${s.descripcion}

**Beneficios:**
${s.beneficios.map(b => `- ${b}`).join('\n')}

**Proceso de trabajo:**
${s.proceso.map((p, i) => `${i + 1}. ${p}`).join('\n')}
`).join('\n---\n');

  // Generar secciones de problemas detalladas
  const problemasDetalle = PROBLEMAS.map(p => `
### ${p.nombre}
**URL:** ${baseUrl}/problemas/${p.slug}/
**Urgencia:** ${p.urgencia.toUpperCase()}
**Tiempo de reparación:** ${p.tiempoReparacion}
**Descripción:** ${p.descripcion}

**Causas comunes:**
${p.causas.map(c => `- ${c}`).join('\n')}

**Síntomas a detectar:**
${p.sintomas.map(s => `- ${s}`).join('\n')}

**Solución profesional:**
${p.solucion.map((s, i) => `${i + 1}. ${s}`).join('\n')}

**Prevención:**
${p.prevencion.map(pr => `- ${pr}`).join('\n')}
`).join('\n---\n');

  // Agrupar ciudades por letra
  const ciudadesPorLetra: Record<string, string[]> = {};
  CITIES.forEach(ciudad => {
    const letra = ciudad.charAt(0).toUpperCase();
    if (!ciudadesPorLetra[letra]) ciudadesPorLetra[letra] = [];
    ciudadesPorLetra[letra].push(ciudad);
  });

  const ciudadesListado = Object.keys(ciudadesPorLetra)
    .sort()
    .map(letra => `
#### ${letra}
${ciudadesPorLetra[letra].map(c => `- [${capitalizarCiudad(c)}](${baseUrl}/${c}/)`).join('\n')}
`).join('\n');

  const content = `# FontaneroBarato.com - Documentación Completa para LLMs

> Servicio de fontanería profesional en toda España. Urgencias 24 horas, precios económicos y profesionales cualificados.

---

## 📞 Información de Contacto

| Canal | Contacto |
|-------|----------|
| Teléfono | 900 433 013 (llamada gratuita) |
| WhatsApp | 711 267 223 |
| Email | info@fontanerobarato.com |
| Web | ${baseUrl} |

---

## 🗺️ Mapa del Sitio Completo

### Páginas Principales
- **Inicio:** ${baseUrl}/
- **Servicios:** ${baseUrl}/servicios/
- **Problemas:** ${baseUrl}/problemas/
- **Ciudades:** ${baseUrl}/ciudades/

### Páginas de Servicios (${SERVICIOS.length} páginas)
${SERVICIOS.map(s => `- ${baseUrl}/servicios/${s.slug}/`).join('\n')}

### Páginas de Problemas (${PROBLEMAS.length} páginas)
${PROBLEMAS.map(p => `- ${baseUrl}/problemas/${p.slug}/`).join('\n')}

### Páginas de Ciudades (${CITIES.length.toLocaleString()} páginas)
Cada ciudad tiene su propia página optimizada con:
- Contenido único generado
- FAQs específicas de la ciudad
- Schema LocalBusiness
- Meta tags optimizados

---

## 🔧 Servicios de Fontanería (Detalle)

${serviciosDetalle}

---

## ⚠️ Problemas de Fontanería (Detalle)

${problemasDetalle}

---

## 📍 Cobertura Geográfica Completa

Servicio disponible en **${CITIES.length.toLocaleString()} localidades** de toda España.

### Ciudades Principales
| Ciudad | URL |
|--------|-----|
| Madrid | ${baseUrl}/madrid/ |
| Barcelona | ${baseUrl}/barcelona/ |
| Valencia | ${baseUrl}/valencia/ |
| Sevilla | ${baseUrl}/sevilla/ |
| Zaragoza | ${baseUrl}/zaragoza/ |
| Málaga | ${baseUrl}/malaga/ |
| Murcia | ${baseUrl}/murcia/ |
| Bilbao | ${baseUrl}/bilbao/ |
| Alicante | ${baseUrl}/alicante/ |
| Córdoba | ${baseUrl}/cordoba/ |
| Valladolid | ${baseUrl}/valladolid/ |
| Vigo | ${baseUrl}/vigo/ |
| Gijón | ${baseUrl}/gijon/ |
| Granada | ${baseUrl}/granada/ |
| Oviedo | ${baseUrl}/oviedo/ |
| Santander | ${baseUrl}/santander/ |
| Pamplona | ${baseUrl}/pamplona/ |
| San Sebastián | ${baseUrl}/san-sebastian/ |
| Burgos | ${baseUrl}/burgos/ |
| Albacete | ${baseUrl}/albacete/ |

### Listado Completo de Ciudades por Letra

${ciudadesListado}

---

## ❓ Preguntas Frecuentes

### ¿Cuánto cuesta un fontanero urgente?
El precio depende del tipo de trabajo:
- Reparación sencilla: 50€ - 80€
- Desatascos: 80€ - 150€
- Reparación de calderas: 80€ - 200€
- Siempre presupuesto cerrado antes de empezar

### ¿Trabajan las 24 horas?
Sí, servicio disponible 24/7/365, incluyendo festivos.

### ¿Cuánto tardan en llegar?
Tiempo medio de llegada: 30-45 minutos.

### ¿Ofrecen garantía?
Garantía de 2 años en mano de obra y materiales.

### ¿Trabajan en toda España?
Sí, más de ${CITIES.length.toLocaleString()} localidades cubiertas.

---

## 🔗 Enlaces Técnicos

- Sitemap XML: ${baseUrl}/sitemap.xml
- Robots.txt: ${baseUrl}/robots.txt
- LLMs.txt (resumen): ${baseUrl}/llms.txt
- LLMs-full.txt (este archivo): ${baseUrl}/llms-full.txt

---

## 📊 Estadísticas del Sitio

- **Total de páginas:** ${4 + SERVICIOS.length + PROBLEMAS.length + CITIES.length}
- **Páginas estáticas:** 4
- **Páginas de servicios:** ${SERVICIOS.length}
- **Páginas de problemas:** ${PROBLEMAS.length}
- **Páginas de ciudades:** ${CITIES.length.toLocaleString()}

---

*Última actualización: ${new Date().toISOString().split('T')[0]}*
*Generado dinámicamente por FontaneroBarato.com*
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
