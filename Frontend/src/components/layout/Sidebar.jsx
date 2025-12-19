import React from 'react'
import { Link } from 'react-router-dom'
import { useLoginRegister } from '../../context/LoginRegisterContext'

const Sidebar = ({sidebarOpen}) => {
  const {user} = useLoginRegister();
  const rol = localStorage.getItem('rol');

  return (
    <aside
          className={`bg-slate-900 rounded-2xl p-6 shadow-2xl w-50 shrink-0 
   md:col-span-1  overflow-y-auto h-96
  ${sidebarOpen ? "block" : "hidden md:block"}`}
        >
          <div className="mb-6">
            <h2 className="text-white text-xl font-bold">Crustify Panel</h2>
            <div className="h-1 w-12 bg-blue-500 rounded-full mt-2"></div>
          </div>
          
          <nav className="space-y-2 text-sm">
            <Link to='/' className="block p-3 rounded-xl text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-200 font-medium">Resumen </Link>
            <Link to='/ventas' className="block p-3 rounded-xl text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-200 font-medium">Ventas</Link>
            <Link to='/productos' className="block p-3 rounded-xl text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-200 font-medium">Productos</Link>
            <Link to='/clientes' className="block p-3 rounded-xl text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-200 font-medium">Clientes</Link>
            {
              rol === 'admin' && (
              <Link to='/configuracion' className="block p-3 rounded-xl text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-200 font-medium">Configuración</Link>
              )
          }
            </nav>
    </aside>
  )
}

export default Sidebar