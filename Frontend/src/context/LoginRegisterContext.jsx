import { createContext, useState, useContext,  } from "react"

const url_api=`${import.meta.env.VITE_URL_API}auth/login`

const url_api_register = 'http://localhost:3000/api/auth/register'

const LoginRegisterContext = createContext();

export const LoginRegisterProvider = ({children}) => {
   const [user, setUser] = useState('');
   


    const login= async(userData)=>{

        try{

             const response = await fetch(url_api,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if(!response.ok){
                    throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
                    
            }

            localStorage.setItem('token',data.token)
            localStorage.setItem('user',data.user.username);
            localStorage.setItem('rol',data.user.role.name);

        }catch(error){
            throw new Error(`Error: ${error.message}`)
        }

    }

    
    const register = async(userData)=>{

        try{

             const response = await fetch(url_api_register,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if(!response.ok){
                    throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
                    
            }

        }catch(error){
            throw new Error(`Error: ${error.message}`)
        }    
    }

    const logOut = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('rol');
        setUser(null)
    }


return (
    <LoginRegisterContext.Provider value={{login, register, user, logOut}} >
        {children}
    </LoginRegisterContext.Provider>
)


};

export const useLoginRegister = ()=> useContext(LoginRegisterContext);