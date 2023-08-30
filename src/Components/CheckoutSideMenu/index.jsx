import React from "react";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";
import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={`${context.IsCheckoutSideMenuOpen ? "flex" : "hidden"}
    checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">My Order</h2>
        <div className="cursor-pointer" onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black-500" />
        </div>
      </div>
      <div className="px-6">
      {
        context.cartProducts.map(product => (
            <OrderCard
            key = {product.id}
            title = {product.title}
            imageUrl = {product.image}
            price = {product.price}
            />
        ))
      }
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;