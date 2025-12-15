import { createContext, useContext, useEffect, useState } from "react"


const url_api = 'http://localhost:3000/api/ventas/'

const VentasContext = createContext();

export const VentasProvider =({children}) => {
    const [ventas, setVentas] = useState([]);
    const [loading, setLoading] = useState();
    const recargarVentas = ()=> getVentas();
    const token = localStorage.getItem('token');

    useEffect(()=>{getVentas()},[]);

    
    const getVentas = async()=>{
        try {
                setLoading(true);
                const resVentas = await fetch(url_api,{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                });
                const dataVentas = await resVentas.json();
                setVentas(dataVentas);
            

        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false);
        }
    }



    const createVenta = async(venta) =>{
        try {
            const response = await fetch(url_api,{
                method:'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(venta)
            })

            const data = await response.json();

            if(!response.ok){
                throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
            }

            setVentas(prevVentas => [...prevVentas, data])

        } catch (error) {
            throw new Error(`Error: ${error.message}`)
        }

    }

    const updateVenta = async (id, venta) => {
        try{
            const response = await fetch(`${url_api}${id}`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(venta)
            });
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
            }

            setVentas(ventas.map( (v)=> String(v._id) === String(id) ? data : v ))

        }catch(error){
            throw new Error(`Error: ${error.message}`)
        }
    }

    const deleteVenta = async (id) => {
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

            setVentas( ventas.filter((v)=>String(v._id) !== String(id) ) )

        }catch(error){
             throw new Error(`Error: ${error.message}`)
        }
    }




return (
    <VentasContext.Provider value={{recargarVentas, ventas, loading, deleteVenta, updateVenta, createVenta}}>
        {children}
    </VentasContext.Provider>
)

};

export const useVentas = ()=>useContext(VentasContext);