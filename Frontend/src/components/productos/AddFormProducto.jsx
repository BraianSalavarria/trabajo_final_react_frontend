import React, { useState } from 'react'
import BtnAtras from '../layout/BtnAtras'
import { useNavigate } from 'react-router-dom'
import {useProductos} from '../../context/ProductosContext'
import Error from '../../pages/Error'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const AddFormProducto = () => {
    const {createProducto} = useProductos();
    const navigate = useNavigate();
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio]= useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(descripcion.trim() === '' || precio.trim() === ''){
            setError('Todos los campos son requiridos.')
            return
        }
        const result = await Swal.fire({
      title:'¿Está seguro?',
      text:'Estás a punto de registar un producto nuevo.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText:'Si, registrar!',
      confirmButtonColor:'#22C55E',
      cancelButtonText:'No, cancelar!',
      draggable:true
    })
        if(result.isConfirmed){
            try{
            await createProducto({descripcion,precio})
            navigate('/productos')
            toast.success('Producto registrado correctamente.')
        }catch(error){
            setError(error.message)
            
        }
        }
    }



  return (
    <>

    {error ? (
        <Error error={error} />
    )
    :

<section className="lg:col-span-2 bg-white p-6 rounded-2xl shadow mt-4 mb-4">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Agregar producto</h2>

    <form onSubmit={handleSubmit}   className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Descripción */}
        <div className="flex flex-col">
        <label htmlFor="descripcion" className="font-medium text-gray-700 mb-1">
            Descripción
        </label>
        <input
            id="descripcion"
            type="text"
            placeholder="Ingrese el nombre del producto"
            onChange={(e)=>(setDescripcion(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
        </div>

        {/* Precio */}
        <div className="flex flex-col">
        <label htmlFor="precio" className="font-medium text-gray-700 mb-1">
            Precio
        </label>
        <input
            id="precio"
            type="number"
            min="0"
            placeholder="0.00"
            onChange={(e)=>(setPrecio(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
        </div>

        {/* Botón */}
        <div className="md:col-span-2 flex justify-end">
        <button
            type="submit"
            className="bg-[#22C55E] text-white px-6 py-2 rounded-lg shadow hover:bg-[#16A34A] transition"
        >
            guardar
        </button>
        </div>
        <div className='md: col-span-2 flex justify-start'>
            <BtnAtras/>
        </div>

    </form>
</section>
    }
</>
  )
}

export default AddFormProducto
