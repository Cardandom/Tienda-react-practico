import { useState,createContext } from "react";

export const ShoppingCartContext = createContext()

export  const ShoppingCartProvider = ({children}) => {

    //ShoppingCart counter
    const [count, setCount] = useState(0)

    //product detail · Open/close
    const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=>setIsProductDetailOpen(false)

    //Checkout Side Menu · Open/close
    const [IsCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = ()=>setIsCheckoutSideMenuOpen(false)

    //product detail · Show products
    const [productToShow, setProductToShow]= useState({})

    //ShoppingCart · Adding products

    const [cartProducts, setCartProducts]= useState([])

    //Shopping Cart · Order
    const [order, setOrder] = useState([])
    
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
            setCartProducts,
            IsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 