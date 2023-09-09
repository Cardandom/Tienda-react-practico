import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Components/Context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order, index) =>{
          <Link key={index} to={`/my-orders/${order.id}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
          </Link>
          
        })
      }
    </Layout>
  )
}

export default MyOrders