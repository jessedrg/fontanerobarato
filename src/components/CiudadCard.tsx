import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { capitalizarCiudad } from "@/data/contenido";

interface CiudadCardProps {
  ciudadSlug: string;
}

export default function CiudadCard({ ciudadSlug }: CiudadCardProps) {
  const ciudad = capitalizarCiudad(ciudadSlug);

  return (
    <Link href={`/${ciudadSlug}`} className="group">
      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary-100 p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
            <MapPin className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
          </div>
          <span className="font-medium text-gray-800 group-hover:text-primary-600 transition-colors">
            Fontanero en {ciudad}
          </span>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}
