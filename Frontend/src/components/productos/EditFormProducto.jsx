import React, { useEffect, useState } from 'react'
import BtnAtras from '../layout/BtnAtras'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductos } from '../../context/ProductosContext'
import Error from '../../pages/Error'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const EditFormProducto = () => {
const {id}=useParams();
const navigate = useNavigate();
const{productos, updateProducto}=useProductos();
const [descripcion, setDescripcion] = useState('');
const [precio, setPrecio] = useState('')
const [error, setError] = useState('')

const producto = productos.find((p)=>p._id === id)

const handleSubmit = async(e) =>{
    e.preventDefault();
    if(descripcion.trim() === '' || precio === '' || precio <=0){
        setError('Todos los campos son necesarios.')
        return
    }
    const result = await Swal.fire({
      title:'¿Está seguro?',
      text:'Estás a punto de guardar cambios de un producto nuevo.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText:'Si, guardar cambios!',
      confirmButtonColor:'#22C55E',
      cancelButtonText:'No, cancelar!',
      draggable:true
    })
    if(result.isConfirmed){
        try{
        await updateProducto(id,{descripcion,precio})
        navigate('/productos')
        toast.success('Cambios del producto registrados correctamente.')
    }catch(error){
        setError(error.message)
    }
    }
    
}
    useEffect(()=>{
        if(producto){
            setDescripcion(producto.descripcion)
            setPrecio(producto.precio)
        }
    },[producto])

    if(!producto) {
    
    return <> <Error error={'Producto no encontrado.'} /> </>
}


  return (
    <>
        
    { error ? (<Error error={error} /> )
    :       

    <section className="lg:col-span-2 bg-white p-6 rounded-2xl shadow mt-4 mb-4">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Editar producto</h2>

    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Descripción */}
        <div className="flex flex-col">
        <label htmlFor="descripcion" className="font-medium text-gray-700 mb-1" >
            Descripción
        </label>
        <input
            id="descripcion"
            type="text"
            placeholder="Ingrese el nombre del producto"
            value={descripcion}
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
            value={precio}
            onChange={(e)=>{setPrecio(e.target.value)}}
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
            <BtnAtras />
        </div>

    </form>
    
</section>
    }
     </>
  
  )
}

export default EditFormProducto
