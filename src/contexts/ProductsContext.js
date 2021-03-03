import React, { createContext, useEffect, useState } from 'react';
import list from '../services/product.service';

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    let [responseData, setResponseData] = useState([])

    const getProducts = async () => {
        const result = await list();
        setResponseData(result.data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return ( 
        <ProductsContext.Provider value={responseData} >
            { children }
        </ProductsContext.Provider>
     );
}

 
export default ProductsContextProvider;