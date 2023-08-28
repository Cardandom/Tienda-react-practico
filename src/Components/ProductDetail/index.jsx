import React from "react";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  console.log("PRODUCT TO SHOW", context.productToShow);
  return (
    <aside className={`${context.IsProductDetailOpen ? "flex" : "hidden"}
        product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <div className="cursor-pointer" onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black-500" />
        </div>
      </div>
      <figure className="px-6 w-full h-3/5">
          <img className="w-full h-full rounded-lg object-contain"
            src={context.productToShow.image}
            alt={context.productToShow.title}/>
        </figure>
        <p className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
            <span className="font-medium text-md">{context.productToShow.title}</span>
            <span className="font-light text-sm">{context.productToShow.description}</span>
        </p>
    </aside>
  );
};

export default ProductDetail;
