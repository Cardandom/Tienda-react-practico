import { useState,createContext } from "react";

export const ShoppingCartContext = createContext()

export  const ShoppingCartProvider = ({children}) => {
    const [Count, setCount] = useState(0)
    return (
        <ShoppingCartContext.Provider value={{
            Count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 