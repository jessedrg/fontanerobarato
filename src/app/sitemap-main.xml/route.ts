export async function GET() {
  const baseUrl = "https://fontanerobarato.com";
  
  const urls = [
    { loc: `${baseUrl}/`, priority: "1.0", changefreq: "daily" },
    { loc: `${baseUrl}/servicios/`, priority: "0.9", changefreq: "weekly" },
    { loc: `${baseUrl}/problemas/`, priority: "0.9", changefreq: "weekly" },
    { loc: `${baseUrl}/ciudades/`, priority: "0.9", changefreq: "weekly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <image:image>
      <image:loc>${baseUrl}/plumber.png</image:loc>
      <image:title>Fontanero profesional - FontaneroBarato.com</image:title>
      <image:caption>Servicio de fontanería urgente 24 horas en toda España</image:caption>
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
