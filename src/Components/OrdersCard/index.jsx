import React from 'react'
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props

  return (
    <div className="flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80">
        <div className="flex justify-between w-full">
          <p className="flex flex-col">
            <span className="font-normal">01.02.2023</span>
            <span>{totalProducts} Articles</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-bold text-lg">${totalPrice}</span>
            <ChevronRightIcon className="h-6 w-6 text-black-500" />
          </p>
        </div>
    </div>
  )
}

export default OrdersCard