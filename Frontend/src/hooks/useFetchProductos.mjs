import { useEffect, useState } from "react"

const getProductos='http://localhost:3000/api/productos/'

const useFetchProductos =  () =>{

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] =useState(true);

    useEffect( ()=> {
        
        const fetchData = async() => {
            try{
            
                setLoading(true);
                const resProductos = await fetch(getProductos);
                const dataProductos = await resProductos.json();
                setProductos(dataProductos);
                
            }catch(err){
                console.error(err.message);
            
            }finally{
                setLoading(false);
            }
        }
    fetchData();
        
    },[])

    return {productos,loading}
}

export default useFetchProductos;