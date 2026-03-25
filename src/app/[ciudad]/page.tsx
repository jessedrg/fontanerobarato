import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import SchemaMarkup from "@/components/SchemaMarkup";
import { CITIES } from "@/cities";
import { SERVICIOS } from "@/data/servicios";
import {
  generarContenidoCiudad,
  generarSchemaLocalBusiness,
  generarSchemaFAQ,
} from "@/data/contenido";
import { CheckCircle, MapPin, Clock, Shield, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { ciudad: string };
}

export async function generateStaticParams() {
  return CITIES.map((ciudad) => ({
    ciudad: ciudad,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ciudad } = params;

  if (!CITIES.includes(ciudad)) {
    return {};
  }

  const contenido = generarContenidoCiudad(ciudad);

  return {
    title: contenido.metaTitle,
    description: contenido.metaDescription,
    alternates: {
      canonical: `https://fontanerobarato.com/${ciudad}/`,
    },
    openGraph: {
      title: contenido.metaTitle,
      description: contenido.metaDescription,
      url: `https://fontanerobarato.com/${ciudad}/`,
      type: "website",
      locale: "es_ES",
    },
  };
}

export default function CiudadPage({ params }: Props) {
  const { ciudad } = params;

  if (!CITIES.includes(ciudad)) {
    notFound();
  }

  const contenido = generarContenidoCiudad(ciudad);
  const schemaLocalBusiness = generarSchemaLocalBusiness(ciudad);
  const schemaFAQ = generarSchemaFAQ(ciudad);

  return (
    <>
      <SchemaMarkup schema={[schemaLocalBusiness, schemaFAQ]} />

      <Hero
        titulo={contenido.h1}
        subtitulo={contenido.apertura}
        ciudad={contenido.ciudad}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-primary-600 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">
                Servicio local en {contenido.ciudad}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {contenido.h2s[0]}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                {contenido.descripcion}
              </p>
            </div>

            {/* Ventajas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {contenido.ventajas.map((ventaja, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">
                    {ventaja}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios en esta ciudad */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Servicios de Fontanería en {contenido.ciudad}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos todos los servicios de fontanería que necesitas en{" "}
              {contenido.ciudad}. Profesionales locales con experiencia.
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
        </div>
      </section>

      {/* Por qué elegirnos en esta ciudad */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {contenido.h2s[1]}
              </h2>

              <ul className="space-y-4">
                {[
                  `Fontaneros locales que conocen ${contenido.ciudad}`,
                  "Llegamos en menos de 45 minutos a tu domicilio",
                  "Precios competitivos sin sorpresas",
                  "Garantía de 2 años en todas las reparaciones",
                  "Servicio de urgencias 24 horas disponible",
                  "Materiales de primera calidad",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white">
              <div className="flex justify-center mb-6">
                <Image
                  src="/plumber.png"
                  alt={`Fontanero profesional en ${contenido.ciudad}`}
                  width={150}
                  height={150}
                  className="rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-8 h-8" />
                <span className="text-xl font-bold">Urgencias 24h</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                ¿Necesitas un fontanero urgente en {contenido.ciudad}?
              </h3>
              <p className="text-primary-100 mb-6 text-center">{contenido.cta}</p>
              <a
                href="tel:+34900433013"
                className="inline-flex items-center justify-center w-full gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora: 900 433 013
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Zonas cercanas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Fontaneros en zonas cercanas a {contenido.ciudad}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CITIES.slice(0, 12).map((c) => (
              <Link
                key={c}
                href={`/${c}`}
                className="bg-white hover:bg-primary-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 hover:text-primary-600 transition-colors capitalize"
              >
                {c.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection ciudad={contenido.ciudad} />

      {/* FAQ */}
      <FAQ titulo={contenido.h2s[2]} faqs={contenido.faqs} />
    </>
  );
}
