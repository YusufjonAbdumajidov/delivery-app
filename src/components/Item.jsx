import React from 'react';
import { useGlobalContext } from '../Context/Context';


import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';



const Item = ({ items }) => {

  const {  addItem } = useGlobalContext();



  return <div className='section-menu'>
   {items.map((menuItem) => {
      const {id, title, img, desc, price, quantity} = menuItem;
      return <article key={id} className='menu-item'>
        <img src={img} alt={title} className='photo' />
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>${price} </h4>
          </header>
          <p className='item-text'>{desc}</p>
        </div>
        <button onClick={()=> addItem(id, title, price, quantity)}>add</button>
      </article>
    })}

   
  </div>
}

export default Item