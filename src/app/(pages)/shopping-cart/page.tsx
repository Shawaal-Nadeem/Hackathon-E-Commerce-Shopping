import React from 'react'
import Style from './cart.module.css'
import { Card } from '@/app/products/[slug]/page'

 const ShoppingCart = () => {
 
  return (
    <div className={Style.main}>
    <div className={Style.subMain}>
    <h2 >Shopping Cart</h2>
    <Card/>
    </div>

      </div>
  )
}
export default ShoppingCart;
