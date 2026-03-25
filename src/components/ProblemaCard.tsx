import Link from "next/link";
import { ArrowRight, AlertTriangle, Droplets, XCircle, Droplet, AlertCircle, Flame, TrendingDown, Wind, AlertOctagon } from "lucide-react";

interface ProblemaCardProps {
  slug: string;
  nombre: string;
  descripcion: string;
  icono: string;
  urgencia: "alta" | "media" | "baja";
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  Droplets,
  XCircle,
  Droplet,
  AlertCircle,
  Flame,
  TrendingDown,
  Wind,
  AlertOctagon,
};

const urgenciaColors = {
  alta: "bg-red-100 text-red-700",
  media: "bg-yellow-100 text-yellow-700",
  baja: "bg-green-100 text-green-700",
};

const urgenciaLabels = {
  alta: "Urgencia Alta",
  media: "Urgencia Media",
  baja: "Urgencia Baja",
};

export default function ProblemaCard({ slug, nombre, descripcion, icono, urgencia }: ProblemaCardProps) {
  const IconComponent = iconMap[icono] || AlertTriangle;

  return (
    <Link href={`/problemas/${slug}`} className="group">
      <div className="card h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-red-100 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-200">
            <IconComponent className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-200" />
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${urgenciaColors[urgencia]}`}>
            {urgenciaLabels[urgencia]}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {nombre}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {descripcion}
        </p>
        <div className="flex items-center text-primary-600 font-semibold group-hover:text-accent-500 transition-colors">
          <span>Cómo solucionarlo</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
