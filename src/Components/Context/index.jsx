import { useState,createContext } from "react";

export const ShoppingCartContext = createContext()

export  const ShoppingCartProvider = ({children}) => {
    const [Count, setCount] = useState(0)
    const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=>setIsProductDetailOpen(false)
    
    return (
        <ShoppingCartContext.Provider value={{
            Count,
            setCount,
            openProductDetail,
            closeProductDetail,
            IsProductDetailOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 