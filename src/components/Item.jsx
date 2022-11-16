import React from 'react';
import { useGlobalContext } from '../Context/Context';


import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';



const Item = ({ items }) => {

  const { itemId, setItemId } = useGlobalContext();

  const addItem = ( id, title, price ) => {
    if(itemId.includes(id)) return;
    setItemId((itemId) => ([
      ...itemId,
      id,
      title,
      price,
    ]))
  }

  return <div className='section-menu'>
   {items.map((menuItem) => {
      const {id, title, img, desc, price} = menuItem;
      return <article key={id} className='menu-item'>
        <img src={img} alt={title} className='photo' />
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>${price} </h4>
          </header>
          <p className='item-text'>{desc}</p>
        </div>
        <section className='counter_section'>
            <p><AiOutlineMinus className='minusBtn'/></p> 
            <p>0</p>
            <p><AiOutlinePlus onClick={()=> addItem( id,title, price)} className='plusBtn' /></p> 
        </section>
      </article>
    })}
  </div>
}

export default Item