import React from 'react'
import { useState, useEffect } from "react";
//import ActividadReciente from '../components/estadisticas/ActividadReciente';
//import TablaVentas from "../components/estadisticas/TablaVentas";
import Header from "../components/layout/Header";
//import EstadisticaGral from "../components/EstadisticaGral";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import { Outlet, useLocation } from 'react-router-dom';
import Resumen from './Resumen';

const App = () => {
 
  //const [stats, setStats] = useState({ ventas: 0, productos: 0, clientes: 0 });
  //const [recent, setRecent] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation()
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-100">
    
      <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-6 gap-6">
        
       <Sidebar sidebarOpen={sidebarOpen} />

        {/* Main */}
      
        <main className="ml-12 md:col-span-5">
          <Outlet/>
          
          { isHome && (
            <Resumen />
          )}
          
          
          <Footer />
        </main>
      </div>
    </div>
  );
}
export default App
