import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { PROBLEMAS, getProblemaBySlug } from "@/data/problemas";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PROBLEMAS.map((problema) => ({
    slug: problema.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const problema = getProblemaBySlug(params.slug);

  if (!problema) {
    return {};
  }

  return {
    title: problema.metaTitle,
    description: problema.metaDescription,
    alternates: {
      canonical: `https://fontanerobarato.com/problemas/${problema.slug}/`,
    },
    openGraph: {
      title: problema.metaTitle,
      description: problema.metaDescription,
      url: `https://fontanerobarato.com/problemas/${problema.slug}/`,
      type: "article",
    },
  };
}

export default function ProblemaPage({ params }: Props) {
  const problema = getProblemaBySlug(params.slug);

  if (!problema) {
    notFound();
  }

  const urgenciaConfig = {
    alta: {
      color: "bg-red-100 text-red-700 border-red-200",
      icon: AlertTriangle,
      text: "Urgencia Alta - Actúa de inmediato",
    },
    media: {
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
      icon: Clock,
      text: "Urgencia Media - Solucionar pronto",
    },
    baja: {
      color: "bg-green-100 text-green-700 border-green-200",
      icon: CheckCircle,
      text: "Urgencia Baja - Puede esperar",
    },
  };

  const config = urgenciaConfig[problema.urgencia];
  const UrgenciaIcon = config.icon;

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: problema.nombre,
    description: problema.descripcion,
    author: {
      "@type": "Organization",
      name: "FontaneroBarato.com",
    },
    publisher: {
      "@type": "Organization",
      name: "FontaneroBarato.com",
      url: "https://fontanerobarato.com",
    },
  };

  const schemaHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Cómo solucionar: ${problema.nombre}`,
    description: problema.descripcion,
    step: problema.solucion.map((paso, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: paso,
    })),
  };

  return (
    <>
      <SchemaMarkup schema={[schemaArticle, schemaHowTo]} />

      <Hero
        titulo={problema.nombre}
        subtitulo={problema.descripcion}
        mostrarBeneficios={false}
      />

      {/* Urgencia Badge */}
      <section className="py-6 bg-white -mt-8 relative z-10">
        <div className="container-custom px-4">
          <div
            className={`max-w-2xl mx-auto flex items-center justify-center gap-3 p-4 rounded-xl border ${config.color}`}
          >
            <UrgenciaIcon className="w-6 h-6" />
            <span className="font-semibold">{config.text}</span>
            <span className="text-sm opacity-75">
              · Tiempo de reparación: {problema.tiempoReparacion}
            </span>
          </div>
        </div>
      </section>

      {/* Causas y Síntomas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Causas */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-yellow-500" />
                Causas comunes
              </h2>
              <ul className="space-y-3">
                {problema.causas.map((causa, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{causa}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Síntomas */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <XCircle className="w-7 h-7 text-red-500" />
                Síntomas a detectar
              </h2>
              <ul className="space-y-3">
                {problema.sintomas.map((sintoma, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{sintoma}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solución */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              Cómo solucionamos este problema
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ol className="space-y-6">
                {problema.solucion.map((paso, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <div className="pt-2">
                      <span className="text-gray-800 text-lg">{paso}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Prevención */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-primary-600" />
              Cómo prevenir este problema
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {problema.prevencion.map((consejo, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-primary-50 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{consejo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Otros problemas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Otros problemas relacionados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {PROBLEMAS.filter((p) => p.slug !== problema.slug)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/problemas/${p.slug}`}
                  className="bg-white hover:bg-primary-50 rounded-xl p-4 text-center transition-colors group shadow-sm"
                >
                  <span className="text-gray-800 group-hover:text-primary-600 font-medium">
                    {p.nombre}
                  </span>
                  <ArrowRight className="w-4 h-4 mx-auto mt-2 text-gray-400 group-hover:text-primary-600" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        titulo={`¿Tienes un problema de ${problema.nombre.toLowerCase()}?`}
        subtitulo="Nuestros fontaneros profesionales pueden solucionarlo hoy mismo. Llámanos para un presupuesto sin compromiso."
      />
    </>
  );
}
