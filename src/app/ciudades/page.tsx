import { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { CITIES } from "@/cities";
import { capitalizarCiudad } from "@/data/contenido";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Fontaneros en Toda España | Encuentra tu Ciudad",
  description:
    "Encuentra un fontanero profesional en tu ciudad. Servicio de fontanería urgente 24h en todas las provincias de España. Más de 8.000 localidades.",
  alternates: {
    canonical: "https://fontanerobarato.com/ciudades/",
  },
};

// Agrupar ciudades por letra inicial
function agruparPorLetra(ciudades: readonly string[]) {
  const grupos: Record<string, string[]> = {};

  ciudades.forEach((ciudad) => {
    const letra = ciudad.charAt(0).toUpperCase();
    if (!grupos[letra]) {
      grupos[letra] = [];
    }
    grupos[letra].push(ciudad);
  });

  return grupos;
}

// Ciudades principales destacadas
const CIUDADES_PRINCIPALES = [
  "madrid",
  "barcelona",
  "valencia",
  "sevilla",
  "zaragoza",
  "malaga",
  "murcia",
  "palma-de-mallorca",
  "las-palmas-de-gran-canaria",
  "bilbao",
  "alicante",
  "cordoba",
  "valladolid",
  "vigo",
  "gijon",
  "hospitalet-de-llobregat",
  "vitoria-gasteiz",
  "la-coruna",
  "granada",
  "elche",
  "oviedo",
  "santa-cruz-de-tenerife",
  "badalona",
  "cartagena",
  "terrassa",
  "jerez-de-la-frontera",
  "sabadell",
  "mostoles",
  "alcala-de-henares",
  "pamplona",
  "fuenlabrada",
  "almeria",
  "san-sebastian",
  "leganes",
  "santander",
  "burgos",
  "albacete",
  "castellon-de-la-plana",
  "getafe",
  "alcorcon",
];

export default function CiudadesPage() {
  const ciudadesAgrupadas = agruparPorLetra(CITIES);
  const letras = Object.keys(ciudadesAgrupadas).sort();

  return (
    <>
      <Hero
        titulo="Fontaneros en Toda España"
        subtitulo="Encuentra un fontanero profesional en tu ciudad. Más de 8.000 localidades con servicio urgente 24 horas."
        mostrarBeneficios={true}
      />

      {/* Ciudades principales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Principales Ciudades
            </h2>
            <p className="text-lg text-gray-600">
              Acceso rápido a las ciudades con mayor demanda de fontaneros
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CIUDADES_PRINCIPALES.filter((c) => CITIES.includes(c)).map(
              (ciudad) => (
                <Link
                  key={ciudad}
                  href={`/${ciudad}`}
                  className="flex items-center gap-2 bg-gray-50 hover:bg-primary-50 rounded-xl p-4 transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-800 group-hover:text-primary-600 font-medium truncate">
                    {capitalizarCiudad(ciudad)}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Índice alfabético */}
      <section className="py-6 bg-gray-50 sticky top-16 z-40 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {letras.map((letra) => (
              <a
                key={letra}
                href={`#letra-${letra}`}
                className="w-10 h-10 flex items-center justify-center bg-white hover:bg-primary-600 hover:text-white rounded-lg font-bold text-gray-700 transition-colors shadow-sm"
              >
                {letra}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Todas las ciudades */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Todas las Ciudades
          </h2>

          <div className="space-y-12">
            {letras.map((letra) => (
              <div key={letra} id={`letra-${letra}`} className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-200">
                  {letra}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {ciudadesAgrupadas[letra].map((ciudad) => (
                    <Link
                      key={ciudad}
                      href={`/${ciudad}`}
                      className="text-gray-700 hover:text-primary-600 hover:underline py-1 truncate"
                      title={`Fontanero en ${capitalizarCiudad(ciudad)}`}
                    >
                      {capitalizarCiudad(ciudad)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
