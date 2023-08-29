import { useState,createContext } from "react";

export const ShoppingCartContext = createContext()

export  const ShoppingCartProvider = ({children}) => {

    //ShoppingCart counter
    const [count, setCount] = useState(0)

    //product detail · Open/close
    const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=>setIsProductDetailOpen(false)

    //product detail · Show products
    const [productToShow, setProductToShow]= useState({})

    //ShoppingCart · Adding products

    const [cartProducts, setCartProducts]= useState([])
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            IsProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 