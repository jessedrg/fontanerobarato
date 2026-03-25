import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SERVICIOS, getServicioBySlug } from "@/data/servicios";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICIOS.map((servicio) => ({
    slug: servicio.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const servicio = getServicioBySlug(params.slug);

  if (!servicio) {
    return {};
  }

  return {
    title: servicio.metaTitle,
    description: servicio.metaDescription,
    alternates: {
      canonical: `https://fontanerobarato.com/servicios/${servicio.slug}/`,
    },
    openGraph: {
      title: servicio.metaTitle,
      description: servicio.metaDescription,
      url: `https://fontanerobarato.com/servicios/${servicio.slug}/`,
      type: "website",
    },
  };
}

export default function ServicioPage({ params }: Props) {
  const servicio = getServicioBySlug(params.slug);

  if (!servicio) {
    notFound();
  }

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servicio.nombre,
    description: servicio.descripcion,
    provider: {
      "@type": "Organization",
      name: "FontaneroBarato.com",
      url: "https://fontanerobarato.com",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    serviceType: "Fontanería",
  };

  const faqsServicio = [
    {
      pregunta: `¿Cuánto cuesta el servicio de ${servicio.nombre.toLowerCase()}?`,
      respuesta: `El precio del servicio de ${servicio.nombre.toLowerCase()} depende de la complejidad del trabajo. Ofrecemos presupuesto gratuito y sin compromiso antes de comenzar cualquier trabajo.`,
    },
    {
      pregunta: `¿Ofrecen garantía en ${servicio.nombre.toLowerCase()}?`,
      respuesta: `Sí, todas nuestras intervenciones de ${servicio.nombre.toLowerCase()} incluyen una garantía de 2 años tanto en mano de obra como en materiales utilizados.`,
    },
    {
      pregunta: `¿Cuánto tardan en realizar el servicio?`,
      respuesta: `El tiempo de ${servicio.nombre.toLowerCase()} varía según la complejidad. Nuestros fontaneros le informarán del tiempo estimado antes de comenzar.`,
    },
  ];

  return (
    <>
      <SchemaMarkup schema={schemaService} />

      <Hero
        titulo={servicio.nombre}
        subtitulo={servicio.descripcion}
        mostrarBeneficios={true}
      />

      {/* Contenido principal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿En qué consiste nuestro servicio de {servicio.nombre}?
            </h2>

            <div className="prose prose-lg max-w-none">
              {servicio.contenido.map((parrafo, index) => (
                <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios y Proceso */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Beneficios */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Beneficios de nuestro servicio
              </h3>
              <ul className="space-y-4">
                {servicio.beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proceso */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nuestro proceso de trabajo
              </h3>
              <ol className="space-y-4">
                {servicio.proceso.map((paso, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-1">{paso}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Otros servicios que te pueden interesar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICIOS.filter((s) => s.slug !== servicio.slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="bg-gray-50 hover:bg-primary-50 rounded-xl p-4 text-center transition-colors group"
                >
                  <span className="text-gray-800 group-hover:text-primary-600 font-medium">
                    {s.nombre}
                  </span>
                  <ArrowRight className="w-4 h-4 mx-auto mt-2 text-gray-400 group-hover:text-primary-600" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />

      <FAQ
        titulo={`Preguntas frecuentes sobre ${servicio.nombre}`}
        faqs={faqsServicio}
      />
    </>
  );
}
