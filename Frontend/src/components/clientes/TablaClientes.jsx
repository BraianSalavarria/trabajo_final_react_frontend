import React from 'react'
import { filtrarClientes } from '../../../public/js/filtrarTabla'
import {useClientes} from '../../context/ClientesContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useLoginRegister } from '../../context/LoginRegisterContext';

const TablaClientes = () => {
  const {user} = useLoginRegister();
  const {clientes, deleteCliente} = useClientes();
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
            await deleteCliente(id);
            toast.success('Cliente eliminado correctamente.')
      }catch(error){
        toast.error(error.message)
        
      }
    }
      
    }
  



  return (
   <section className="lg:col-span-2 bg-white p-4 rounded-2xl shadow">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Clientes</h2>
              </div>
              <div className='flex justify-between'>
              <div className='font-semibold'>
                  <input type='search' placeholder='🔍buscar...' id ='buscar-input' onInput={filtrarClientes} className='border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition' />
              </div>
              <div className='font-semibold'>
                {
                  rol === 'admin' && (
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                          onClick={()=>(navigate('/clientes/registrar'))}          >
                    Nuevo cliente
                  </button>
                  )
                }
              </div>
              </div>

      
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm" >
                  <thead className="text-left font-medium text-gray-700">
                    <tr>
                      <th className="py-2 text-center">ID</th>
                      <th className="py-2 text-center">Nombre</th> 
                     {user?.role?.name === 'admin' && ( <th className="py-2 text-center">Acciones</th>)}    
                    </tr>
                  </thead>
                  <tbody className="text-gray-700" id="tabla-clientes-body">
                  {  clientes.map((p)=>(
                    <tr key={p._id} className="border-t">
                      <td className="py-2 text-center">{p._id}</td>
                      <td className="py-2 text-center">{p.nombre}</td>
                      {rol === 'admin' && (<td className="py-2 text-center"><button className=' bg-amber-300 text-black font-semibold mr-1 px-6 py-2 rounded-lg shadow hover:bg-amber-500 transition' onClick={()=>(navigate(`/clientes/editar/${p._id}`))}>Modificar</button> <button className=' bg-red-500 text-black font-semibold  px-6 py-2 rounded-lg shadow hover:bg-red-700 transition' onClick={() =>(handleDelete(p._id))} >Eliminar</button></td>)}
                    </tr>
                   )) }  
                  </tbody>
                </table>
              </div>
            </section>
   


  )
}

export default TablaClientes
