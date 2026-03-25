import Link from "next/link";
import { ArrowRight, Droplets, Wrench, Droplet, Flame, Thermometer, Bath, Search, Clock } from "lucide-react";

interface ServiceCardProps {
  slug: string;
  nombre: string;
  descripcion: string;
  icono: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  Wrench,
  Droplet,
  Flame,
  Thermometer,
  Bath,
  Search,
  Clock,
};

export default function ServiceCard({ slug, nombre, descripcion, icono }: ServiceCardProps) {
  const IconComponent = iconMap[icono] || Wrench;

  return (
    <Link href={`/servicios/${slug}`} className="group">
      <div className="card h-full flex flex-col">
        <div className="bg-primary-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-200">
          <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-200" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {nombre}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {descripcion}
        </p>
        <div className="flex items-center text-primary-600 font-semibold group-hover:text-accent-500 transition-colors">
          <span>Ver más</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
