import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Ventas from '../pages/Ventas'
import Configuracion from '../pages/Configuracion'
import Clientes from '../pages/Clientes'
import Productos from '../pages/Productos'
import Error404 from '../pages/Error404'
import EditFormProducto from '../components/productos/EditFormProducto'
import AddFormProducto from '../components/productos/AddFormProducto'
import AddFormCliente from '../components/clientes/AddFormCliente'
import EditFormCliente from '../components/clientes/EditFormCliente'
import AddFormVenta from '../components/ventas/AddFormVenta'
import DetallesVenta from '../components/ventas/DetallesVenta'
import Login from '../pages/Login'
import PrivateLayout from '../components/layout/PrivateLayout'

const AppRouter = () => {
  return (
    <div>
        <Routes>
                  {/* layout publico */}
              <Route path="/login" element={<Login />} />
              
                  {/* layout privado */}
              <Route element={<PrivateLayout/> } >
                  <Route path='/' element={<Home />}>
                    <Route path='productos' element={<Productos />} />
                    <Route path='productos/registrar' element={<AddFormProducto/>} />
                    <Route path='productos/editar/:id' element={<EditFormProducto/>} />

                    <Route path='clientes' element={ <Clientes /> } />
                    <Route path='clientes/registrar' element={<AddFormCliente />}/>
                    <Route path='clientes/editar/:id' element={<EditFormCliente />}/>

                    <Route path='ventas' element={ <Ventas /> } />
                    <Route path='ventas/registrar' element={<AddFormVenta />}/>
                    <Route path='ventas/detalles/:id' element={<DetallesVenta />}/>
                    <Route path='configuracion' element={ <Configuracion /> }/>
                   
                  </Route>
              </Route>
               <Route path='*' element={ <Error404 /> } />
         </Routes>
    </div>
  )
}

export default AppRouter
