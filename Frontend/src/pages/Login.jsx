import { useState } from 'react'
import { useLoginRegister } from '../context/LoginRegisterContext'
import { useNavigate } from 'react-router-dom'
import bgvideo from '../../public/background/background.mp4'

function Login() {
  const { login } = useLoginRegister()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Completa todos los campos')
      return
    }

    try {
      await login({ email, password })
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* 🌑 Overlay oscuro */}
      <div className="absolute inset-0 bg-black/35" />

      {/* 📦 Contenido */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-6 md:px-20">

   <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          p-8
          shadow-2xl
        "
>
  <fieldset>
  {/* Header */}
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-bold text-white">
      Bienvenido
    </h2>
    <p className="text-white/70 mt-2 text-sm">
      Iniciá sesión para continuar
    </p>
  </div>

  {/* Error */}
  {error && (
    <div className="mb-4 rounded-lg bg-red-500/20 border border-red-500/30 px-4 py-2">
      <p className="text-red-200 text-sm text-center">
        {error}
      </p>
    </div>
  )}

  {/* Email */}
  <div className="relative mb-6">
    <legend className='text-sm text-white/60 mb-2'>Email</legend>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="
        peer-
        w-full
        rounded-xl
        bg-white/10
        border border-white/20
        px-4 py-3
        text-white
        placeholder-transparent
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />
    
    
  </div>

  {/* Password */}
  <div className="relative mb-8">
    <legend className='text-sm text-white/60 mb-2'>Contraseña</legend>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder=" "
      className="
        peer
        w-full
        rounded-xl
        bg-white/10
        border border-white/20
        px-4 py-3
        text-white
        placeholder-transparent
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    /> 

    
  
  </div>

  {/* Button */}
  <button
    type="submit"
    className="
      w-full
      rounded-xl
      bg-gradient-to-r from-blue-500 to-indigo-600
      py-3
      font-semibold
      text-white
      shadow-lg
      transition-all
      hover:scale-[1.02]
      hover:shadow-blue-500/30
      active:scale-95
    "
  >
    Entrar
  </button>

  {/* Footer */}
  <p className="mt-6 text-center text-sm text-white/60">
    © 2025 · Todos lo derechos reservados · Crustify

  </p>
  </fieldset>
</form>


      </div>
    </div>
  )
}

export default Login
