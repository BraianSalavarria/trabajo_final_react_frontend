import React from "react";
import BtnAtras from "../components/layout/BtnAtras";

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">Error 404 — Página no encontrada ❌</p>
      <BtnAtras />
    </div>
  );
}
