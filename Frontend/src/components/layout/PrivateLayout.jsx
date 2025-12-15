import { Outlet, Navigate } from 'react-router-dom'
import { ProductosProvider } from '../../context/ProductosContext'
import { ClientesProvider } from '../../context/ClientesContext'
import { VentasProvider } from '../../context/VentasContext'

const PrivateLayout = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return (
    <VentasProvider>
      <ClientesProvider>
        <ProductosProvider>
          <Outlet />
        </ProductosProvider>
      </ClientesProvider>
    </VentasProvider>
  )
}

export default PrivateLayout
