import React from 'react'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../Context'
import './styles.css'


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
  return (
    <aside className= {`${context.IsProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <div onClick={()=>context.closeProductDetail()}>
                <XMarkIcon className="h-6 w-6 text-black-500" />
            </div>

        </div>

    </aside>
  )
}

export default ProductDetail