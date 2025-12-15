import React from 'react'
import { useVentas } from '../../context/VentasContext'
import { useNavigate } from 'react-router-dom';


const TablaVentas = () => {
  const navigate = useNavigate();
  const {ventas} = useVentas();
  const ultimasVentas = ventas.slice(-3);
  return (

        <section className="lg:col-span-2 bg-white p-4 rounded-2xl shadow">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Últimas ventas</h2>
                <button className='bg-blue-500 text-white border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
                onClick={()=>navigate('/ventas/')}
                >Ver todas
                </button>
              </div>

              {/* Tabla simple de ejemplo */}
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="text-left text-gray-500">
                    <tr>
                      <th className="py-2">Cliente</th>
                      <th className="py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                   
                   {
                      ultimasVentas.map((v)=>(
                    <tr key={ventas._id} className="border-t">
                      <td className="py-2">{v.cliente.nombre}</td>
                      <td className="py-2">{v.total.toFixed(2)}</td>
                    </tr>
                      ))
                    }
                   
                  </tbody>
                </table>
              </div>
            </section>
      
    
  )
}

export default TablaVentas
