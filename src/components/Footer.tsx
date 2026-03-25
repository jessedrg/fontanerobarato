import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Wrench } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Fontanero</span>
                <span className="text-xl font-bold text-accent-400">Barato</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Servicio de fontanería profesional en toda España. Disponibles 24 horas, 
              los 365 días del año para atender cualquier emergencia.
            </p>
            <div className="flex items-center gap-2 text-accent-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">24/7 Urgencias</span>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/reparacion-fugas" className="hover:text-accent-400 transition-colors">
                  Reparación de Fugas
                </Link>
              </li>
              <li>
                <Link href="/servicios/desatascos" className="hover:text-accent-400 transition-colors">
                  Desatascos Urgentes
                </Link>
              </li>
              <li>
                <Link href="/servicios/instalacion-griferia" className="hover:text-accent-400 transition-colors">
                  Instalación de Grifería
                </Link>
              </li>
              <li>
                <Link href="/servicios/reparacion-calderas" className="hover:text-accent-400 transition-colors">
                  Reparación de Calderas
                </Link>
              </li>
              <li>
                <Link href="/servicios/urgencias-24h" className="hover:text-accent-400 transition-colors">
                  Urgencias 24 Horas
                </Link>
              </li>
            </ul>
          </div>

          {/* Problemas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Problemas Comunes</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/problemas/tuberia-rota" className="hover:text-accent-400 transition-colors">
                  Tubería Rota
                </Link>
              </li>
              <li>
                <Link href="/problemas/fuga-de-agua" className="hover:text-accent-400 transition-colors">
                  Fuga de Agua
                </Link>
              </li>
              <li>
                <Link href="/problemas/atasco-tuberia" className="hover:text-accent-400 transition-colors">
                  Atasco en Tubería
                </Link>
              </li>
              <li>
                <Link href="/problemas/caldera-no-enciende" className="hover:text-accent-400 transition-colors">
                  Caldera No Enciende
                </Link>
              </li>
              <li>
                <Link href="/problemas/inundacion" className="hover:text-accent-400 transition-colors">
                  Inundación
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-400" />
                <a href="tel:+34900433013" className="hover:text-accent-400 transition-colors">
                  900 433 013
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-400" />
                <a href="mailto:info@fontanerobarato.com" className="hover:text-accent-400 transition-colors">
                  info@fontanerobarato.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 mt-1" />
                <span>Servicio en toda España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} FontaneroBarato.com - Todos los derechos reservados
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/aviso-legal" className="text-gray-500 hover:text-gray-300 transition-colors">
                Aviso Legal
              </Link>
              <Link href="/privacidad" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacidad
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-gray-300 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
