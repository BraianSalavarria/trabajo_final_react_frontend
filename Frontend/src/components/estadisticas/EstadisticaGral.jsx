import React from 'react'
import {useProductos} from '../../context/ProductosContext'
import { useClientes } from '../../context/ClientesContext';
import Ventas from '../../pages/Ventas';
import { useVentas } from '../../context/VentasContext';

const EstadisticaGral = () => {
  const {productos} = useProductos();
  const {clientes} = useClientes();
  const {ventas} = useVentas();

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-2xl shadow flex flex-col">
              <div className="text-sm font-medium text-gray-500">Ventas</div>
              <div className="mt-2 text-2xl font-bold">{ventas.length}</div>
              <div className="mt-1 text-xs text-gray-500">Hoy</div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow flex flex-col">
              <div className="text-sm font-medium text-gray-500">Productos</div>
              <div className="mt-2 text-2xl font-bold">{productos.length}</div>
              <div className="mt-1 text-xs text-gray-500">Activos</div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow flex flex-col">
              <div className="text-sm font-medium text-gray-500">Clientes</div>
              <div className="mt-2 text-2xl font-bold">{clientes.length}</div>
              <div className="mt-1 text-xs text-gray-500">Registrados</div>
            </div>
    </div>


  )
}

export default EstadisticaGral
