import React from "react";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 rounded-2xl p-6 shadow-2xl mt-6 text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Marca */}
        <div>
          <h2 className="text-white text-xl font-bold">Crustify</h2>
          <div className="h-1 w-10 bg-blue-500 rounded-full my-2"></div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Plataforma integral de gestión para panaderías.
            Centralizá ventas, productos y clientes en una solución simple y eficiente.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contacto</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
            <Mail size={16} />
            <span>contacto@crustify.app</span>
          </div>
        </div>

        {/* Redes */}
        <div>
          <h3 className="text-white font-semibold mb-3">Redes</h3>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-slate-700 mt-6 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Crustify · Solución digital para la gestión comercial
      </div>
    </footer>
  );
};

export default Footer;
