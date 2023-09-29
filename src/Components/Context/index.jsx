import { useState,createContext, useEffect } from "react";

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

    //Get products
    const [items, setItems] = useState(null)

    const [filtereditems, setFiltereditems] = useState(null)

    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    useEffect (()=> {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect (()=> {
        if(searchByTitle) setFiltereditems(filteredItemsByTitle(items, searchByTitle))
      },[items, searchByTitle])

    
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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filtereditems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 