import React, { useState } from 'react'
import BtnAtras from '../layout/BtnAtras'
import { useNavigate } from 'react-router-dom'
import {useClientes} from '../../context/ClientesContext'
import Swal from 'sweetalert2'
import Error from '../../pages/Error'
import { toast } from 'react-toastify'

const AddFormCliente = () => {

 const {createCliente} = useClientes();
 const navigate = useNavigate();
 const [nombre, setNombre] = useState('');
 const [error, setError] = useState('');

      const handleSubmit = async(e) => {
            e.preventDefault();
            if(nombre.trim() === ''){
                setError('El campo nombre es obligatorio.')
                return
            }
            const result = await Swal.fire({
          title:'¿Está seguro?',
          text:'Estás a punto de registar un cliente nuevo.',
          icon: 'info',
          showCancelButton: true,
          confirmButtonText:'Si, registrar!',
          confirmButtonColor:'#22C55E',
          cancelButtonText:'No, cancelar!',
          draggable:true
        })
            if(result.isConfirmed){
                try{
                await createCliente({nombre})
                navigate('/clientes')
                toast.success('Cliente registrado correctamente.')
            }catch(error){
                setError(`${error.message}`)
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
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Agregar cliente</h2>

    <form onSubmit={handleSubmit}   className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Nombre */}
        <div className="flex flex-col">
        <label htmlFor="nombre" className="font-medium text-gray-700 mb-1">
            Nombre:
        </label>
        <input
            id="nombre"
            type="text"
            placeholder="Ingrese el nombre del producto"
            onChange={(e)=>(setNombre(e.target.value))}
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

export default AddFormCliente
