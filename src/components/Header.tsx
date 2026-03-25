"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, Wrench } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-primary-700">Fontanero</span>
              <span className="text-xl font-bold text-accent-500">Barato</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Servicios
            </Link>
            <Link href="/problemas" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Problemas
            </Link>
            <Link href="/ciudades" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Ciudades
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+34900433013"
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>900 433 013</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/problemas"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Problemas
              </Link>
              <Link
                href="/ciudades"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ciudades
              </Link>
              <a
                href="tel:+34900433013"
                className="btn-primary flex items-center justify-center gap-2 mt-2"
              >
                <Phone className="w-5 h-5" />
                <span>900 433 013</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
