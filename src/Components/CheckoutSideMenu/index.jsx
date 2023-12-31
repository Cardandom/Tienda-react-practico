import React from "react";
import { useContext } from "react";
import {Link} from "react-router-dom"
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../Utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }
  const handleCheckout = () => {
    const orderToAdd = {
        date: '01.02.23',
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }

  return (
    <aside className={`${context.IsCheckoutSideMenuOpen ? "flex" : "hidden"}
    checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">My Order</h2>
        <div className="cursor-pointer" onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black-500" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
      {
        context.cartProducts.map(product => (
            <OrderCard
            key = {product.id}
            id = {product.id}
            title = {product.title}
            imageUrl = {product.image}
            price = {product.price}
            handleDelete = {handleDelete}
            />
        ))
      }
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center p-3">
            <span className="font-normal">Total:</span>
            <span className="font-bold text-lg">${totalPrice(context.cartProducts).toFixed(2)}</span>
        </p>
        <Link to="/my-orders/last">
            <button className="bg-black py-3 text-white w-full font-medium rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
        
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;