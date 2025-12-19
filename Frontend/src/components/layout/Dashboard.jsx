import { useState, useEffect } from "react";
import ActividadReciente from "../estadisticas/ActividadReciente"
import TablaVentas from "../estadisticas/TablaVentas";
import Header from "./Header";
import EstadisticaGral from "../estadisticas/EstadisticaGral";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  


  
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      <div className=" w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 ">
        <div className="flex gap-6">
        
        
          <Sidebar sidebarOpen={sidebarOpen} />

          
          <main className="flex-1 min-w-0 ">
           
            <EstadisticaGral />
            
           
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6"> 
              
              <TablaVentas />
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}