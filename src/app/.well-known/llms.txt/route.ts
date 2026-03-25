import { CITIES } from "@/cities";
import { SERVICIOS } from "@/data/servicios";
import { PROBLEMAS } from "@/data/problemas";

export async function GET() {
  const baseUrl = "https://fontanerobarato.com";
  
  const content = `# FontaneroBarato.com

> Servicio de fontanería profesional en toda España. Urgencias 24 horas, precios económicos y profesionales cualificados.

## Información de Contacto

- **Teléfono:** 900 433 013 (llamada gratuita)
- **WhatsApp:** 711 267 223
- **Email:** info@fontanerobarato.com
- **Web:** ${baseUrl}

## Servicios Principales

${SERVICIOS.map(s => `- [${s.nombre}](${baseUrl}/servicios/${s.slug}/)`).join('\n')}

## Problemas que Solucionamos

${PROBLEMAS.map(p => `- [${p.nombre}](${baseUrl}/problemas/${p.slug}/) - Urgencia ${p.urgencia}`).join('\n')}

## Cobertura Geográfica

Servicio disponible en **toda España** con más de **${CITIES.length.toLocaleString()} localidades**.

### Principales Ciudades

- [Madrid](${baseUrl}/madrid/)
- [Barcelona](${baseUrl}/barcelona/)
- [Valencia](${baseUrl}/valencia/)
- [Sevilla](${baseUrl}/sevilla/)
- [Zaragoza](${baseUrl}/zaragoza/)
- [Málaga](${baseUrl}/malaga/)
- [Murcia](${baseUrl}/murcia/)
- [Bilbao](${baseUrl}/bilbao/)
- [Alicante](${baseUrl}/alicante/)
- [Córdoba](${baseUrl}/cordoba/)

## Características del Servicio

- ✅ Disponibilidad 24/7/365
- ✅ Llegada en menos de 45 minutos
- ✅ Presupuesto gratuito sin compromiso
- ✅ Garantía de 2 años en reparaciones
- ✅ Fontaneros titulados y certificados
- ✅ Precios transparentes

## Estructura del Sitio

- Página principal: ${baseUrl}/
- Servicios: ${baseUrl}/servicios/
- Problemas: ${baseUrl}/problemas/
- Ciudades: ${baseUrl}/ciudades/
- Sitemap: ${baseUrl}/sitemap.xml

## Documentación Completa

Para información detallada con todas las rutas: ${baseUrl}/llms-full.txt
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
