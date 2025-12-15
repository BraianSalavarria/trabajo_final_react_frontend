import React, { useEffect, useState } from 'react'
import {useClientes} from '../../context/ClientesContext'
import {useProductos} from '../../context/ProductosContext'
import { useVentas } from '../../context/VentasContext';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import BtnAtras from '../layout/BtnAtras';


const AddFormVenta = () => {
const {clientes} = useClientes();
const {productos} = useProductos();
const {createVenta} = useVentas();
const [items, setItems] = useState([]);
const [cliente, setCliente] = useState('');
const [producto, setProducto] = useState('');
const [cantidad, setCantidad] = useState(0);
const [total, setTotal]=useState(0);

useEffect(()=>{
    if(clientes.length >0){
      setCliente(clientes[0]._id);
    }
},[clientes])

useEffect(()=>{
  if(productos.length >0){
    setProducto(productos[0]._id)
  }
},[productos])

useEffect(() => {
  const nuevoTotal = items.reduce((sum, item) => sum + item.subTotal, 0);
  setTotal(nuevoTotal);
}, [items]);

const crearItem = ()=>{
  
  const productoSeleccionado = productos.find((p)=>String(p._id) === String(producto))
  if(!productoSeleccionado){
    return console.log('no se encuentra producto.')
  }
  if (cantidad <= 0){
    return toast.error('Debe ingregar una cantidad valida.')
  }
  const nuevoItem ={
    id:productoSeleccionado._id,
    descripcion:productoSeleccionado.descripcion,
    precioUnitario:productoSeleccionado.precio,
    cantidad:cantidad,
    subTotal:(productoSeleccionado.precio * cantidad),
  }
   

  setItems(prev => {
    //buscamos si existe un item con esas descripciones
    const existe = prev.find((i) => i.descripcion === nuevoItem.descripcion)

    if(existe){
      return prev.map((i) => i.descripcion === nuevoItem.descripcion ?
        //si existe ese item, lo actualizamos
       {...i, cantidad: nuevoItem.cantidad, subTotal:(nuevoItem.cantidad * nuevoItem.precioUnitario)}
       : i )
    }else{
        //si no existe, lo agregamos
        return [...prev, nuevoItem];
    }
  });
 }
    //funcion para eliminar item
    const removeItem = async(descripcion) => {
      const result = await Swal.fire({
            title:'¿Está seguro?',
            text:'Esta a punto de eliminar un item de la factura.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText:'Si, eliminar!',
            confirmButtonColor:'#22C55E',
            cancelButtonText:'No, cancelar!',
            draggable:true
          })
          if(result.isConfirmed){
            setItems(prev => prev.filter(i => i.descripcion !== descripcion));
            toast.success('Se ha eliminado un item de la venta.')
          }
      
    } 
      //realizamos el envio de formulario
      const handleSubmit = async(e) => {
              e.preventDefault();
              if(items.length <=0){
                  toast.error('Debe agregar al menos un item.')
                  return
              }
              const result = await Swal.fire({
            title:'¿Está seguro?',
            text:'Estás a punto de registar una nueva venta.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText:'Si, registrar!',
            confirmButtonColor:'#22C55E',
            cancelButtonText:'No, cancelar!',
            draggable:true
          })
              if(result.isConfirmed){
                  try{

                      const ventaData ={
                        cliente:{
                          id:cliente
                        },
                        items: items.map(item =>({
                          id:item.id,
                          cantidad: item.cantidad
                        }))
                      };

                  await createVenta(ventaData)
                  toast.success('Venta registrada correctamente.')
                  setItems([]);
                  setTotal(0);
                  setCantidad(0)
                  setCliente
              }catch(error){
                  toast.error(`error: ${error.message}`)
                  
              }
              }
          }
          
          


  return (
    <section className="lg:col-span-2 bg-white p-4 rounded-2xl shadow">
      <form onSubmit={handleSubmit}>
                     <div className="flex items-center justify-between">
                       <h2 className="font-semibold mb-4">Registrar Venta</h2>
                     </div>

                     <div className='font-semibold'>
                         <label htmlFor="cliente" className='mr-4'>Cliente:</label>
                         <select id='cliente' className='border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-semibold mb-4'
                           value={cliente}
                           onChange={(e)=>(setCliente(e.target.value))}
                         >
                         
                          {
                              clientes.map( (cliente)=>(
                                <option  key={cliente._id} value={cliente._id}>{cliente.nombre}</option>
                              ) )
                          }
                         </select>
                     </div>

                     <div className='flex justify-start items-center mb-5'>
                  
                      <div>
                        <label htmlFor="productos" className='font-semibold mr-4'>Productos:</label>
                            <select className='border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-semibold mr-4'
                              value={producto}
                              onChange={(e)=>setProducto(e.target.value)}
                            >
                              {
                                productos.map( (producto)=>(
                                    <option key={producto._id} value={producto._id}>{producto.descripcion}</option>
                                ) )
                              }
                            </select>
                        </div>
                        <div>
                          <label htmlFor="cantidad" className='font-semibold mr-4'>Cantidad:</label>
                          <input type='number' id='cantidad' placeholder='0' min={0} className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-semibold mr-4 "
                          value={cantidad}
                          onChange={(e)=>setCantidad(e.target.value)} />
                      </div>
                      <div>
                          <button type='button' className="bg-[#22C55E] text-white px-4 py-2 rounded-lg shadow hover:bg-[#16A34A] transition font-semibold ml-4" onClick={crearItem}>
                              
                              agregar
                          </button>
                      </div>
                      
                     </div> 
       
             
                     <div className="mt-4 overflow-x-auto">
                       <table className="min-w-full text-sm" >
                         <thead className="text-left font-medium text-gray-700">
                           <tr>
                             <th className="py-2 text-center">Descripcion</th>
                             <th className="py-2 text-center">Precio</th>
                             <th className="py-2 text-center">Cantidad</th>
                             <th className="py-2 text-center">Subtotal</th>
                             <th className="py-2 text-center">Acciones</th>    
                           </tr>
                         </thead>
                         <tbody className="text-gray-700" id="tabla-productos-body">
                              {
                                items.map((i, intex) => (
                                  <tr key={intex}className='border-t border-b'>
                                      <td className='py-2 text-center'> {i.descripcion} </td>
                                      <td className='py-2 text-center'> {i.precioUnitario.toFixed(2)} </td>
                                      <td className='py-2 text-center'>{i.cantidad}</td>
                                      <td className='py-2 text-center'>{i.subTotal.toFixed(2)}</td>
                                      <td className='py-2 text-center'><button type='button' className=' bg-red-500 text-black font-semibold  px-6 py-2 rounded-lg shadow hover:bg-red-700 transition' onClick={() =>(removeItem(i.descripcion))} >Eliminar</button></td>
                                  </tr>
                                ))
                              }
                         </tbody>
                       </table>
                     </div>

                       <div className='flex justify-end mt-4'>
                          <label htmlFor="total" className='font-semibold mr-2'>total:</label>
                         <label className='font-semibold mr-16' id='total'>{total.toFixed(2)}</label>
                      </div>
                      
                      <div className='flex justify-end mt-4'>
                          <button className="bg-[#22C55E] text-white px-4 py-2 rounded-lg shadow hover:bg-[#16A34A] transition font-semibold mr-10 "
                          type='submit'
                          >
                              registrar
                          </button>
                      </div>
      </form>
      <BtnAtras />
                   </section>
  )
}

export default AddFormVenta
