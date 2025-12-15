import React from 'react'
import { useLoginRegister } from '../../context/LoginRegisterContext'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Header = ({setSidebarOpen, sidebarOpen}) => {

  const {user, logOut}= useLoginRegister();
  const navigate = useNavigate();
  const username = localStorage.getItem('user');

const cerrarSeción = async() => {
           
            const result = await Swal.fire({
          title:'¿Está seguro?',
          text:'Estás por cerrar seción.',
          icon: 'info',
          showCancelButton: true,
          confirmButtonText:'Si, salir!',
          confirmButtonColor:'#22C55E',
          cancelButtonText:'No, cancelar!',
          draggable:true
        })
        if (result.isConfirmed){
           logOut();
           navigate('/login')
        }
  }





  return (
    <header className="bg-linear-to-r from-slate-900 to-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-700 text-white transition-colors duration-200"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
          <h1 className="text-2xl font-bold text-white">Crustify 🥖</h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-300 bg-slate-700 px-4 py-2 rounded-full">
            Bienvenido: <span className="font-semibold">{username}</span>
          </div>

          <button
          onClick={()=>(cerrarSeción())}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header