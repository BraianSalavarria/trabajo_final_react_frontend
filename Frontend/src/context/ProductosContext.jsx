import { Children, createContext, useContext, useEffect, useState } from "react";


const url_api = `${import.meta.env.VITE_URL_API}productos/`


const ProductosContext = createContext();


export const ProductosProvider =({children}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState();
    const recargarProductos = () => getProductos();
    const token = localStorage.getItem('token'); 
    
    useEffect(()=>{
        getProductos();
    }, []);

    const getProductos = async() => {
        
        try{
            
                setLoading(true);
                const resProductos = await fetch(url_api,{
                   headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const dataProductos = await resProductos.json();
                setProductos(dataProductos);
                
            }catch(err){
                console.error(err.message);
            
            }finally{
                setLoading(false);
            }
        }

    const createProducto = async (producto)=>{
        try{
            const response = await fetch(url_api,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(producto)
            });

            const data = await response.json();

            if(!response.ok){
                    throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
            }
            

            setProductos(prevProductos=>[...prevProductos, data])


        }catch(error){
             throw new Error(`Error: ${error.message}`)
        }    
    }
        
    const updateProducto = async (id, producto) => {
        try{
            const response = await fetch(`${url_api}${id}`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(producto)
            });
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
            }

            setProductos(productos.map( (p)=> p._id === id ? data : p ))

        }catch(error){
            throw new Error(`Error: ${error.message}`)
        }
    }

    const deleteProducto = async (id) => {
        try{
            const response = await fetch(`${url_api}${id}`,{
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })

            if(!response.ok){
                throw new Error(data.errors?.[0]?.message || data.message || 'Error desconocido');
            }

            setProductos( productos.filter((p)=>p._id !== id ) )

        }catch(error){
             throw new Error(`Error: ${error.message}`)
        }
    }
       

        return (
            <ProductosContext.Provider value={{productos, loading, recargarProductos, createProducto, updateProducto, deleteProducto}} >
                {children}
            </ProductosContext.Provider>
        );

};

export const useProductos = ()=> useContext(ProductosContext)