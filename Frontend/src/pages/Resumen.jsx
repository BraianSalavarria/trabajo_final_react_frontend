import React from 'react'
import EstadisticaGral from '../components/estadisticas/EstadisticaGral'
import ActividadReciente from '../components/estadisticas/ActividadReciente'
import TablaVentas from '../components/estadisticas/TablaVentas'

const Resumen = () => {
  return (
    <div>
        <EstadisticaGral />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6"> 
            <ActividadReciente />
            <TablaVentas /> 
        </div>
    </div>
  )
}

export default Resumen
