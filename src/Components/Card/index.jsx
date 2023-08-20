import React from 'react'

const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xm m-2 px-3 py-0.5">Categorie</span>
            <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product"/>
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light">Product</span>
            <span className="font-bold text-lg">$79,99</span>
        </p>
    </div>
  )
}

export default Card