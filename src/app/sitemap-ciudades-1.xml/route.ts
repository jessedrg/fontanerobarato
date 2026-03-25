import { CITIES } from "@/cities";
import { capitalizarCiudad } from "@/data/contenido";

export async function GET() {
  const baseUrl = "https://fontanerobarato.com";
  const chunkSize = Math.ceil(CITIES.length / 5);
  const ciudades = CITIES.slice(0, chunkSize);
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${ciudades.map(ciudad => `  <url>
    <loc>${baseUrl}/${ciudad}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${baseUrl}/plumber.png</image:loc>
      <image:title>Fontanero en ${capitalizarCiudad(ciudad)}</image:title>
      <image:caption>Servicio de fontanería urgente 24h en ${capitalizarCiudad(ciudad)}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
