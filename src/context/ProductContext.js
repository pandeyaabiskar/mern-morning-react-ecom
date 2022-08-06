import { createContext } from "react";
import  useFetch  from '../hooks/index'

export const ProductContext = createContext([]);

export default function ProductProvider ({children}) {
    const {data:productData, isPending, error} = useFetch('http://localhost:4000/api/products');

    return (
        <ProductContext.Provider value={{productData, isPending, error}}>
            {children}
        </ProductContext.Provider>
    )
}