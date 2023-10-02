import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'


const Card = (data) => {
  const context = useContext(ShoppingCartContext)
  const showProduct = (productDetail)=> {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }
  const addProductsCart = (e, productData)=> {
    e.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }
  
  const renderIcon = (id) => {
    const IsInCart = context.cartProducts.filter(product => product.id === id).length > 0
    if(IsInCart) {
      return(
        <div className="absolute top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2 p-1">
        <CheckIcon className="h-6 w-6 text-black-500"/>
        </div>
      )
    } else {
      return (
      <div className="absolute top-0 right-0 flex justify-center items-center bg-gray-200 w-6 h-6 rounded-full m-2 p-1" onClick={(e)=> addProductsCart(e, data?.data) }>
      <PlusIcon className="h-6 w-6 text-black-500"/>
      </div>
      )
    }

  }

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={()=> showProduct(data.data)}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 font-semibold px-3 py-0.5 line-clamp-2">{data?.data?.title}</span>
            <img className="w-full h-full object-contain rounded-lg" src={data?.data?.image} alt={data?.data?.title}/>
            {renderIcon(data?.data.id)}
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-normal">{data?.data?.category.charAt(0).toUpperCase() + data?.data?.category.slice(1).toLowerCase()}</span>
            <span className="font-bold text-lg">${data?.data?.price}</span>
        </p>
    </div>
  )
}

export default Card