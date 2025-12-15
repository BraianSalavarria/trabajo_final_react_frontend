import React from "react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-10 rounded-2xl bg-slate-900 p-6 shadow-2xl text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Info institucional */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-lg font-semibold text-white">
            Diplomatura en Desarrollo Full Stack
          </h2>
          <p className="text-sm text-slate-400">
            Nodo Tecnológico Catamarca · Trabajo Final
          </p>
          <p className="text-xs text-slate-500">
            Sistema de Punto de Venta —{" "}
            <span className="text-slate-300 font-medium">
              Braian Salavarria
            </span>
          </p>
        </div>

        {/* Divider mobile */}
        <div className="block md:hidden w-full h-px bg-white/10" />

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-xs uppercase tracking-widest text-slate-400">
            Contacto
          </span>

          <a
            href="https://www.linkedin.com/in/braian-salavarria-688aaa251/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              text-blue-400
              hover:text-blue-300
              transition-colors
              text-sm font-medium
            "
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>

      
      <div className="mt-6 border-t border-white/10 pt-3 text-center">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} · Proyecto académico · Argentina
        </p>
      </div>
    </footer>
  );
};

export default Footer;
