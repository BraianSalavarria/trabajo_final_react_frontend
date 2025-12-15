import React from 'react'
import { useNavigate} from 'react-router-dom'

const BtnAtras = () => {

    const navigate = useNavigate()

  return (
    
    <button
            type='button'
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={()=>(navigate(-1))}
            >
            ⬅️ volver
    </button>
  )
}

export default BtnAtras
