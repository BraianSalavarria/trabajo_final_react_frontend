import React from 'react'
import {useNavigate} from 'react-router-dom'
import { convertirFecha } from '../../../public/js/convertirFecha';
import { useVentas } from '../../context/VentasContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import {filtrarVentas} from '../../../public/js/filtrarTabla'
import { useLoginRegister } from '../../context/LoginRegisterContext';



const VentasRealizadas = () => {

const navigate = useNavigate()
const {user} = useLoginRegister();
const {ventas, deleteVenta} = useVentas();
const rol = localStorage.getItem('rol')


  const handleDelete = async(id) =>{
    const result = await Swal.fire({
      title:'¿Está seguro?',
      text:'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText:'Si, eliminar!',
      confirmButtonColor:'#EF4444',
      cancelButtonText:'No, cancelar!',
      draggable:true
    })
    
    if(result.isConfirmed){
      try{
            await deleteVenta(id);
            toast.success('Venta eliminado correctamente.')
      }catch(error){
        toast.error(error.message)
        
      }
    }
      
    }
  return (
   <section className="lg:col-span-2 bg-white p-4 rounded-2xl shadow">
                 <div className="flex items-center justify-between">
                   <h2 className="font-semibold">Ventas Realizadas</h2>
                 </div>
                 <div className='flex justify-between'>
                 <div className='font-semibold'>
                     <input type='search' placeholder='🔍buscar...' id ='buscar-input' onInput={filtrarVentas} className='border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition' />
                 </div>
                 <div className='font-semibold'>
                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                             onClick={()=>(navigate('/ventas/registrar'))}>
                       Nueva Venta
                     </button>
                 </div>
                 </div>
   
         
                 <div className="mt-4 overflow-x-auto">
                   <table className="min-w-full text-sm" >
                     <thead className="text-left font-medium text-gray-700">
                       <tr>
                         <th className="py-2 text-center">Cliente</th>
                         <th className="py-2 text-center">Fecha</th>
                         <th className="py-2 text-center">Total</th>
                         {rol === 'admin' && (<th className="py-2 text-center">Acciones</th>)}    
                       </tr>
                     </thead>
                     <tbody className="text-gray-700" id="tabla-ventas-body">
                     {  ventas.map((v)=>(
                       <tr key={v._id} className="border-t">
                         <td className="py-2 text-center">{v.cliente.nombre}</td>
                         <td className="py-2 text-center">{convertirFecha(v.fecha)}</td>
                         <td className="py-2 text-center">{v.total.toFixed(2)}</td>
                         {rol === 'admin' && (<td className="py-2 text-center"><button className=' bg-amber-300 text-black font-semibold mr-1 px-6 py-2 rounded-lg shadow hover:bg-amber-500 transition' onClick={()=>(navigate(`/ventas/detalles/${v._id}`))}>Detalles</button> <button className=' bg-red-500 text-black font-semibold  px-6 py-2 rounded-lg shadow hover:bg-red-700 transition'  onClick={() =>(handleDelete(v._id))}  >Eliminar</button></td>)}
                       </tr>
                      )) }  
                     </tbody>
                   </table>
                 </div>
               </section>
  )
}

export default VentasRealizadas
