import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { SERVICIOS } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Servicios de Fontanería | Reparaciones, Instalaciones y Urgencias",
  description:
    "Todos nuestros servicios de fontanería: reparación de fugas, desatascos, instalación de grifería, calderas, termos y más. Profesionales 24h en toda España.",
  alternates: {
    canonical: "https://fontanerobarato.com/servicios/",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Hero
        titulo="Servicios de Fontanería Profesional"
        subtitulo="Soluciones completas para cualquier problema de fontanería. Desde pequeñas reparaciones hasta instalaciones completas."
        mostrarBeneficios={true}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Todos Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos con fontaneros especializados en cada área. Sea cual sea
              tu problema, tenemos la solución.
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

      <CTASection />
    </>
  );
}
