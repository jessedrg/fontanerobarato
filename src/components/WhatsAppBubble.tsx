"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/34711267223?text=Hola,%20necesito%20un%20fontanero%20urgente"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="hidden sm:inline font-semibold text-lg">WhatsApp</span>
      
      {/* Pulse animation */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-300"></span>
      </span>
    </a>
  );
}
