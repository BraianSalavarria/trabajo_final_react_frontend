import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoginRegisterProvider } from './context/LoginRegisterContext.jsx'



createRoot(document.getElementById('root')).render(
 
<LoginRegisterProvider>
  
    <BrowserRouter>
        <App />
    </BrowserRouter>
   
</LoginRegisterProvider>    
)

