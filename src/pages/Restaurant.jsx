import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../Context/Context';

import Cart from '../components/Cart';
import data from '../Data/data' ;
import Item from '../components/Item';

import { AiFillStar } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { IoInformationOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';






const Restaurant = () => {
 const location = useLocation();
 const restaurant = location.state;
 
 const { menuItems, categories, filterItems } = useGlobalContext();

  return <>
<div className='navbar_container'>
        <nav>
        <div className="logo">
          <p> Restaurant Menu </p>
        </div>
        </nav>
         <div className="categories_container">
            {categories.map((category, index) => {
                return <button key={index} onClick={() => filterItems(category)}>
                    {category}
                </button>
            })}
        </div>
</div>





    <div className="menu_container">
      <div className="menu_banner">
        



        <div className="place_information">
        <section className="place_information_up">
          <section>
            <h2>{restaurant.name}</h2>
            <p>Restaurant with amazing food</p>
          </section>
          <section>
            <p><AiFillStar className='starIcon'/>4.5 (344)</p>    
          </section>
        </section>
        <section className='place_information_bottom'>
          <section className='place_information_time'>
            <BiTimeFive /> <p>10-20 mins</p>
          </section>
          <section>
            <IoInformationOutline className='place_information_btn' />
            <AiOutlineHeart className='place_information_btn' />
          </section>
        </section>
      </div>
      </div>

      <div className="menu_items">
         <Item items={menuItems}/>
      </div>  
    </div>
 

    <Cart />
  </>
}

export default Restaurant