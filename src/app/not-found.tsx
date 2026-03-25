import Link from "next/link";
import { Home, Search, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida. 
          Pero no te preocupes, seguimos aquí para ayudarte con cualquier 
          problema de fontanería.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Home className="w-5 h-5" />
            Ir al inicio
          </Link>
          <Link
            href="/ciudades"
            className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Search className="w-5 h-5" />
            Buscar ciudad
          </Link>
        </div>

        <div className="mt-12 p-6 bg-accent-50 rounded-2xl">
          <p className="text-gray-700 mb-3">
            ¿Tienes una urgencia de fontanería?
          </p>
          <a
            href="tel:+34900433013"
            className="inline-flex items-center gap-2 text-accent-600 font-bold text-xl hover:text-accent-700"
          >
            <Phone className="w-6 h-6" />
            900 433 013
          </a>
        </div>
      </div>
    </div>
  );
}
