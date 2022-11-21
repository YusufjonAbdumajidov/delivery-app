import React from 'react';
import { useGlobalContext } from '../Context/Context';
import cartImage from '../assets/images/cart.webp'


const Cart = () => {

    const { cart, 
      increase, 
      clearCart, 
      remove, 
      decrease, 
      total } = useGlobalContext();
  
    // console.log(cart);
 
  if(cart.length === 0){
    return  <div className='cart_page'>
      <img style={{height: "200px"}} src={cartImage} alt="" />
      <h2>Your cart is empty!</h2>
    </div>
  }else 
  return <div className='cart_page'>

   
    {cart.map((items, index) => {
      // console.log(items);
      // console.log(items[0]);
      return <div className='cartItem' key={index} >
        <div className="cartItem_info">
          <p>{items[1]}</p>
          <p>${items[2]}</p>
          <button onClick={() => remove(items[0])}>remove</button>
        </div>
        <div className="items_counter">
          <button onClick={() => decrease(items[0])}>-</button>
          <p>{items[3]}</p>
          <button 
          onClick={() => increase(items[0])}
          >+</button>
        </div>
      </div>
    })}
    
    <p>{total}</p>
    <button onClick={() => clearCart()}>Clear Cart</button>
    
  
  </div>
}

export default Cart