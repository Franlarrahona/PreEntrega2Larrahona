
import { useEffect, useState } from "react"
import { getProducts } from "../../ProductsList"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {

    const[products,setProducts] = useState([]);
    const[isLoading,setIsLoading]  = useState(true)

    const { category} = useParams();

    useEffect( () =>{
        setIsLoading(true);
        getProducts()

                .then(resp => {
                    if(category) {
                    const productsFilter = resp.filter(product => product.category === category);
                    setProducts(productsFilter);
                    setIsLoading(false);
                    }else{
                        setProducts(resp);
                        setIsLoading(false);
                    }
                })
                .catch(error => console.log(error))    
    },[category])

    return(
        <div>
        {isLoading ? <h3>Cargando productos...</h3> : <ItemList products={products} /> }
        
        
        </div>
    )
}



