import React from 'react'
import Style from './cart.module.css'
import {FiShoppingBag} from 'react-icons/fi'
 const ShoppingCart = () => {
  return (
    <div className={Style.main}>
    <div className={Style.subMain}>
    <h2 >Shopping Cart</h2>
    <div>
      <FiShoppingBag size={150}/>
      <p>Your shopping bag is empty</p>
    </div>
    </div>  
      </div>
  )
}
export default ShoppingCart;
