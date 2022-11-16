import React from 'react';
import { useGlobalContext } from '../Context/Context';

const Cart = () => {

    const { itemId } = useGlobalContext();
  
    console.log(itemId)

  return <div className='cart_page'>
    {itemId.map((item, index) => {
      return <div className='cartItem'>
      {typeof item === 'string' ?  <p key={index}>{item}</p> : <span style={{color: "red"}}>{item}</span> }
      </div> 
    })}
    
    
  
  </div>
}

export default Cart