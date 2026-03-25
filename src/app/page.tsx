import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProblemaCard from "@/components/ProblemaCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SERVICIOS } from "@/data/servicios";
import { PROBLEMAS } from "@/data/problemas";
import { CheckCircle, Users, Clock, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const faqsHome = [
  {
    pregunta: "¿Cuánto cuesta un fontanero urgente?",
    respuesta:
      "El precio de un fontanero urgente varía según el tipo de trabajo. Una reparación sencilla puede costar entre 50€ y 80€, mientras que trabajos más complejos como desatascos o reparación de calderas pueden variar entre 80€ y 200€. Siempre damos presupuesto cerrado antes de empezar, sin sorpresas.",
  },
  {
    pregunta: "¿Trabajan las 24 horas del día?",
    respuesta:
      "Sí, nuestro servicio de fontanería urgente está disponible las 24 horas del día, los 365 días del año, incluyendo fines de semana y festivos. Las emergencias de fontanería no entienden de horarios y nosotros tampoco.",
  },
  {
    pregunta: "¿Cuánto tardan en llegar?",
    respuesta:
      "Nuestro tiempo medio de llegada es de 30 a 45 minutos, dependiendo de la zona y el tráfico. En casos de urgencia extrema como inundaciones, priorizamos la rapidez para minimizar los daños.",
  },
  {
    pregunta: "¿Ofrecen garantía en las reparaciones?",
    respuesta:
      "Todas nuestras reparaciones incluyen una garantía de 2 años tanto en mano de obra como en materiales. Trabajamos con productos de primeras marcas para asegurar la durabilidad de cada trabajo.",
  },
  {
    pregunta: "¿Trabajan en toda España?",
    respuesta:
      "Sí, contamos con una red de fontaneros profesionales en todas las provincias de España. Desde grandes ciudades como Madrid, Barcelona o Valencia hasta pueblos pequeños, siempre hay un fontanero cerca de ti.",
  },
];

const stats = [
  { icon: Users, value: "+15.000", label: "Clientes satisfechos" },
  { icon: Clock, value: "45 min", label: "Tiempo medio llegada" },
  { icon: Award, value: "2 años", label: "Garantía en reparaciones" },
  { icon: CheckCircle, value: "24/7", label: "Disponibilidad total" },
];

const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FontaneroBarato.com",
  url: "https://fontanerobarato.com",
  logo: "https://fontanerobarato.com/logo.png",
  description:
    "Servicio de fontanería profesional en toda España. Urgencias 24 horas, precios económicos y profesionales cualificados.",
  telephone: "+34900433013",
  email: "info@fontanerobarato.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  sameAs: [],
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FontaneroBarato.com",
  url: "https://fontanerobarato.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://fontanerobarato.com/buscar?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsHome.map((faq) => ({
    "@type": "Question",
    name: faq.pregunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.respuesta,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={[schemaOrganization, schemaWebSite, schemaFAQ]} />

      <Hero
        titulo="Fontanero Barato y Urgente en Toda España"
        subtitulo="Servicio de fontanería profesional 24 horas. Llegamos en menos de 45 minutos. Presupuesto sin compromiso."
      />

      {/* Stats Section */}
      <section className="py-12 bg-white -mt-8 relative z-10">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50"
              >
                <stat.icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios de Fontanería
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas para cualquier problema de
              fontanería. Desde pequeñas reparaciones hasta instalaciones
              completas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICIOS.map((servicio) => (
              <ServiceCard
                key={servicio.slug}
                slug={servicio.slug}
                nombre={servicio.nombre}
                descripcion={servicio.descripcion}
                icono={servicio.icono}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/servicios" className="btn-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir FontaneroBarato.com?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Somos la red de fontaneros profesionales más grande de España.
                Combinamos la cercanía de un fontanero local con la garantía de
                una empresa consolidada.
              </p>

              <ul className="space-y-4">
                {[
                  "Fontaneros titulados y con experiencia verificada",
                  "Precios transparentes sin sorpresas en la factura",
                  "Garantía de 2 años en todas las reparaciones",
                  "Servicio de urgencias 24 horas, 365 días",
                  "Materiales de primeras marcas",
                  "Limpieza garantizada tras cada trabajo",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-primary-600 rounded-3xl p-8 text-white">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/plumber.png"
                    alt="Fontanero profesional"
                    width={200}
                    height={200}
                    className="rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Solicita tu presupuesto gratis
                </h3>
                <p className="text-primary-100 mb-6 text-center">
                  Cuéntanos tu problema y te daremos un presupuesto sin
                  compromiso en menos de 5 minutos.
                </p>
                <a
                  href="tel:+34900433013"
                  className="inline-flex items-center justify-center w-full gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
                >
                  Llamar ahora: 900 433 013
                </a>
                <p className="text-center text-primary-200 text-sm mt-4">
                  Llamada gratuita · Sin compromiso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas Comunes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problemas de Fontanería que Solucionamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Tienes una emergencia? Identificamos y solucionamos cualquier
              avería de fontanería de forma rápida y profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROBLEMAS.slice(0, 6).map((problema) => (
              <ProblemaCard
                key={problema.slug}
                slug={problema.slug}
                nombre={problema.nombre}
                descripcion={problema.descripcion}
                icono={problema.icono}
                urgencia={problema.urgencia}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/problemas" className="btn-secondary">
              Ver todos los problemas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* FAQ */}
      <FAQ titulo="Preguntas Frecuentes sobre Fontaneros" faqs={faqsHome} />

      {/* Ciudades destacadas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fontaneros en las Principales Ciudades
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con fontaneros profesionales en toda España. Encuentra el
              más cercano a ti.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
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
            ].map((ciudad) => (
              <Link
                key={ciudad}
                href={`/${ciudad}`}
                className="bg-gray-50 hover:bg-primary-50 rounded-xl p-4 text-center transition-colors group"
              >
                <span className="text-gray-800 group-hover:text-primary-600 font-medium capitalize">
                  {ciudad.replace(/-/g, " ")}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/ciudades" className="btn-secondary">
              Ver todas las ciudades
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
