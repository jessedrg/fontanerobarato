import { SERVICIOS } from "@/data/servicios";

export async function GET() {
  const baseUrl = "https://fontanerobarato.com";
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${SERVICIOS.map(servicio => `  <url>
    <loc>${baseUrl}/servicios/${servicio.slug}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/plumber.png</image:loc>
      <image:title>${servicio.nombre} - Fontanero Profesional</image:title>
      <image:caption>${servicio.descripcion}</image:caption>
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
