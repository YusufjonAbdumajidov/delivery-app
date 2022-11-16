import React from 'react';
import { useGlobalContext } from '../Context/Context';
import cartImage from '../assets/images/cart.webp'

const Cart = () => {

    const { itemId } = useGlobalContext();
  
    console.log(itemId)
 
  if(itemId.length === 0){
    return  <div className='cart_page'>
      <img style={{height: "200px"}} src={cartImage} alt="" />
      <h2>Your cart is empty!</h2>
    </div>
  }else 
  return <div className='cart_page'>
    {itemId.map((item, index) => {
      return <div className='cartItem'>
      {typeof item === 'string' ?  <p key={index}>{item}</p> : <span style={{color: "red"}}>{item}</span> }
      </div> 
    })}
    
    
  
  </div>
}

export default Cart