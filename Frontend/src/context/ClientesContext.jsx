import { Children, createContext, useContext, useEffect, useState } from "react"

const url_api='http://localhost:3000/api/clientes/'



const ClientesContext = createContext();


export const ClientesProvider = ({children}) => {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const token = localStorage.getItem('token');
    const recargarClientes = () => getClientes();
  

    useEffect( () => {
        getClientes();
    }, []);

    const getClientes = async()=>{
        try {

            setLoading(true);
            const resClientes = await fetch(url_api,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
            const dataClientes = await resClientes.json();
            setClientes(dataClientes);

        } catch (error) {
            console.error(error.message);
            
        }finally{
            setLoading(false);
        }

    }

    
    const createCliente = async (cliente)=>{
        try{
            const response = await fetch(url_api,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(cliente)
            });

            const data = await response.json();

            if(!response.ok){
                    throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
                    
            }
            
            setClientes(prevClientes=>[...prevClientes, data])


        }catch(error){
            throw new Error(`Error: ${error.message}`)
        }    
    }

    const updateCliente = async (id, cliente) => {
        try{
            const response = await fetch(`${url_api}${id}`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(cliente)
            });
             const data = await response.json();

            if(!response.ok){
                throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
            }
           
            setClientes(clientes.map( (p)=> p._id === id ? data : p ))

        }catch(error){
                throw new Error(`Error: ${error.message}`)
        }
    }

    const deleteCliente = async (id) => {
        try{
            const response = await fetch(`${url_api}${id}`,{
                method:'DELETE',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })

            if(!response.ok){
                 throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
            }

            setClientes( clientes.filter((p)=>p._id !== id ) )

        }catch(error){
            throw new Error(`Error: ${err.message}`)
        }
    }



return (
    <ClientesContext.Provider value={{clientes,loading,recargarClientes, deleteCliente, createCliente, updateCliente}}>
        {children}
    </ClientesContext.Provider>
);

};

export const useClientes = ()=> useContext(ClientesContext);