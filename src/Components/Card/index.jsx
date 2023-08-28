import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'


const Card = (data) => {
  const context = useContext(ShoppingCartContext)
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={()=> context.openProductDetail()}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data?.data?.title}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data?.data?.image} alt={data?.data?.title}/>
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" onClick={()=> context.setCount(context.Count + 1)}>
              <PlusIcon className="h-6 w-6 text-black-500"/>
            </div>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-normal">{data?.data?.category.charAt(0).toUpperCase() + data?.data?.category.slice(1).toLowerCase()}</span>
            <span className="font-bold text-lg">${data?.data?.price}</span>
        </p>
    </div>
  )
}

export default Card