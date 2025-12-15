import React from 'react'
import {convertirFecha} from '../../../public/js/convertirFecha.js'
import { useProductos } from '../../context/ProductosContext.jsx';
import { useNavigate } from 'react-router-dom';
import { filtrarProductos } from '../../../public/js/filtrarTabla.js';
import {useLoginRegister} from '../../context/LoginRegisterContext.jsx'
import Swal from 'sweetalert2'
import {toast} from 'react-toastify'
const TablaProductos = () => {
  const {user} = useLoginRegister();
  const {productos, deleteProducto} = useProductos();
  const navigate = useNavigate();
  const rol = localStorage.getItem('rol');
 


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
            await deleteProducto(id);
            toast.success('Producto eliminado correctamente.')
      }catch(error){
        toast.error(error.message)
        
      }
    }
      
    }
  


  return (

   <section className="lg:col-span-2 bg-white p-4 rounded-2xl shadow">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Productos</h2>
              </div>
              <div className='flex justify-between'>
              <div className='font-semibold'>
                  <input type='search' placeholder='🔍buscar...' id ='buscar-input' onInput={filtrarProductos} className='border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition' />
              </div>
              
              <div className='font-semibold'>
                {
                  rol === 'admin' && (

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                          onClick={()=>(navigate('/productos/registrar'))}          >
                    Nuevo producto
                  </button>
                )}
              </div>
                 
              </div>

      
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm" >
                  <thead className="text-left font-medium text-gray-700">
                    <tr>
                      <th className="py-2 text-center">ID</th>
                      <th className="py-2 text-center">Descripcion</th>
                      <th className="py-2 text-center">Precio</th>
                      <th className="py-2 text-center">Ult.Actualizacíon</th>  
                      {user?.role?.name === 'admin' && (<th className="py-2 text-center">Acciones</th>)}  
                    </tr>
                  </thead>
                  <tbody className="text-gray-700" id="tabla-productos-body">
                  {  productos.map((p)=>(
                    <tr key={p._id} className="border-t">
                      <td className="py-2 text-center">{p._id}</td>
                      <td className="py-2 text-center">{p.descripcion}</td>
                      <td className="py-2 text-center">{p.precio.toFixed(2)}</td>
                      <td className="py-2 text-center">{convertirFecha(p.updatedAt)}</td>
                    {rol === 'admin' &&  ( <td className="py-2 text-center"><button className=' bg-amber-300 text-black font-semibold mr-1 px-6 py-2 rounded-lg shadow hover:bg-amber-500 transition' onClick={()=>(navigate(`/productos/editar/${p._id}`))}>Modificar</button> <button className=' bg-red-500 text-black font-semibold  px-6 py-2 rounded-lg shadow hover:bg-red-700 transition' onClick={() =>(handleDelete(p._id))} >Eliminar</button></td>)}
                    </tr>
                   )) }  
                  </tbody>
                </table>
              </div>
            </section>
   
  )
}

export default TablaProductos
