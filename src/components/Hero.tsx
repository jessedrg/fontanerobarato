import { Phone, Clock, Shield, CheckCircle, MessageCircle } from "lucide-react";

interface HeroProps {
  titulo: string;
  subtitulo?: string;
  mostrarBeneficios?: boolean;
  ciudad?: string;
}

export default function Hero({ titulo, subtitulo, mostrarBeneficios = true, ciudad }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            <span>Disponible 24 horas - Llegamos en 45 min</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {titulo}
          </h1>

          {/* Subtítulo */}
          {subtitulo && (
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              {subtitulo}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+34900433013"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Phone className="w-6 h-6" />
              <span>Llamar: 900 433 013</span>
            </a>
            <a
              href="https://wa.me/34711267223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Beneficios */}
          {mostrarBeneficios && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <CheckCircle className="w-6 h-6 text-accent-400" />
                <span className="font-semibold">Presupuesto Gratis</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <Shield className="w-6 h-6 text-accent-400" />
                <span className="font-semibold">Garantía 2 Años</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <Clock className="w-6 h-6 text-accent-400" />
                <span className="font-semibold">Urgencias 24h</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
