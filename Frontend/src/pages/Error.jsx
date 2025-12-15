import React from 'react'
import BtnAtras from '../components/layout/BtnAtras' 

const Error = ({error}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold">ERROR ❌</h1>
      <p className="mt-4 text-lg font-semibold mb-2"> {error}</p>
      <BtnAtras />
    </div>
  )
}

export default Error
