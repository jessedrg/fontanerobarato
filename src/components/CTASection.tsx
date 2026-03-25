import { Phone, MessageCircle, Clock } from "lucide-react";

interface CTASectionProps {
  titulo?: string;
  subtitulo?: string;
  ciudad?: string;
}

export default function CTASection({ 
  titulo = "¿Necesitas un fontanero urgente?",
  subtitulo = "Llámanos ahora y un profesional estará en tu domicilio en menos de 45 minutos",
  ciudad
}: CTASectionProps) {
  const tituloFinal = ciudad ? `¿Necesitas un fontanero en ${ciudad}?` : titulo;
  
  return (
    <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            <span>Servicio de Urgencias 24/7</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {tituloFinal}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitulo}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+34900433013"
              className="inline-flex items-center justify-center gap-3 bg-white text-accent-600 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200"
            >
              <Phone className="w-6 h-6" />
              <span>900 433 013</span>
            </a>
            <a
              href="https://wa.me/34711267223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="mt-6 text-white/80 text-sm">
            Sin compromiso · Presupuesto gratuito · Profesionales cualificados
          </p>
        </div>
      </div>
    </section>
  );
}
