import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useVentas } from '../../context/VentasContext';
import Error from '../../pages/Error';
import BtnAtras from '../layout/BtnAtras';

const DetallesVenta = () => {
const {ventas} = useVentas();  
const {id} = useParams();
const venta = ventas.find((v)=> String(v._id) === String(id) )

if(!venta){
  return <> <Error error={'Venta no encontrada.'} /> </>
}


  return (
    <section className="lg:col-span-2 bg-white p-4 rounded-2xl shadow">
                     <div className="flex items-center justify-between">
                       <h2 className="font-semibold mb-4">Detalles de Venta</h2>
                     </div>

                     <div className='font-semibold'>
                         <label htmlFor="cliente" className='mr-4'>Cliente:</label>
                         <select id='cliente' className='border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-semibold mb-4'>
                          {
                              
                                <option  key={venta._id} value={venta.cliente._id}>{venta.cliente.nombre}</option>
                            
                                
                          }
                         </select>
                     </div>       
             
                     <div className="mt-4 overflow-x-auto">
                       <table className="min-w-full text-sm" >
                         <thead className="text-left font-medium text-gray-700">
                           <tr>
                             <th className="py-2 text-center">Descripcion</th>
                             <th className="py-2 text-center">Cantidad</th>
                              <th className="py-2 text-center">Precio</th>
                             <th className="py-2 text-center">Subtotal</th> 
                           </tr>
                         </thead>
                         <tbody className="text-gray-700" id="tabla-productos-body">
                          { venta.items.map((i)=>(
                            <tr key={i._id} className="border-t border-b">
                              <td className="py-2 text-center">{i.producto.descripcion}</td>
                              <td className="py-2 text-center">{i.cantidad}</td>
                              <td className="py-2 text-center">{i.precioUnitario.toFixed(2)}</td>
                              <td className="py-2 text-center">{i.subTotal.toFixed(2)}</td>
                            </tr>
                          ))
                          }
                         </tbody>
                       </table>
                     </div>

                       <div className='flex justify-end mt-4'>
                          <label htmlFor="total" className='font-semibold mr-2'>total:</label>
                         <label className='font-semibold mr-16' id='total'>{venta.total.toFixed(2)} $</label>
                      </div>

                      <div className='flex justify-start mt-4'>
                          <BtnAtras />
                      </div>

                   </section>
  )
}

export default DetallesVenta
