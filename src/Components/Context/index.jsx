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

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)
    

    useEffect (()=> {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        console.log('items:', items)
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filteredBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }

    useEffect (()=> {
        if(searchByTitle && searchByCategory) setFiltereditems(filteredBy('BY_TITLE_AND_CATEGORY',items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFiltereditems(filteredBy('BY_TITLE',items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory) setFiltereditems(filteredBy('BY_CATEGORY',items, searchByTitle, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFiltereditems(filteredBy(null,items, searchByTitle, searchByCategory))
      },[items, searchByTitle, searchByCategory])

      console.log('filtereditems:', filtereditems)

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
            filtereditems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 