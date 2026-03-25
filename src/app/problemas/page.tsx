import { Metadata } from "next";
import Hero from "@/components/Hero";
import ProblemaCard from "@/components/ProblemaCard";
import CTASection from "@/components/CTASection";
import { PROBLEMAS } from "@/data/problemas";

export const metadata: Metadata = {
  title: "Problemas de Fontanería | Soluciones Urgentes 24h",
  description:
    "Guía completa de problemas de fontanería: fugas, atascos, calderas, tuberías rotas y más. Aprende a identificarlos y cuándo llamar a un profesional.",
  alternates: {
    canonical: "https://fontanerobarato.com/problemas/",
  },
};

export default function ProblemasPage() {
  return (
    <>
      <Hero
        titulo="Problemas de Fontanería"
        subtitulo="Identificamos y solucionamos cualquier avería. Conoce los problemas más comunes y cuándo necesitas un fontanero urgente."
        mostrarBeneficios={true}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Problemas que Solucionamos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Haz clic en cada problema para conocer las causas, síntomas y
              soluciones. Si tienes una emergencia, llámanos directamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROBLEMAS.map((problema) => (
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
        </div>
      </section>

      <CTASection
        titulo="¿Tienes una emergencia de fontanería?"
        subtitulo="No esperes a que el problema empeore. Llámanos ahora y un fontanero estará en tu casa en menos de 45 minutos."
      />
    </>
  );
}
