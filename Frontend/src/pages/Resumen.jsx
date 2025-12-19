import React from 'react'
import EstadisticaGral from '../components/estadisticas/EstadisticaGral'
import ActividadReciente from '../components/estadisticas/ActividadReciente'
import TablaVentas from '../components/estadisticas/TablaVentas'

const Resumen = () => {
  return (
    <div>
        <EstadisticaGral />
        <div className="mt-4"> 
            
            <TablaVentas /> 
        </div>
    </div>
  )
}

export default Resumen
