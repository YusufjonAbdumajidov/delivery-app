import React, { useState } from 'react';
import Menu from "../components/Menu";
import { useGlobalContext } from '../Context/Context';

import { RiMenu4Fill } from 'react-icons/ri';
import { BsGlobe } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';

const RestaurantsNav = () => {
 

   const { openMenuBar, setOpenMenuBar, categories, filterItems } = useGlobalContext();
  return <>
    <div className='restaurant_navbar_container' >
        <nav>
        <div className="logo">
            <BsChevronLeft className='exitBtn'/>
            <p> <span>F</span>OOD<span>H</span>UB </p>
        </div>
        <div className="show_location">
            <p> <BiCurrentLocation /> Warsaw</p>
        </div>
        <div className="navigators">
            <button>{<BsGlobe />} English</button>
            < RiMenu4Fill onClick={() => setOpenMenuBar(!openMenuBar)} className='menuIcon' />
        </div>
        </nav>
        <div className="categories_container">
            {categories.map((category, index) => {
                return <button key={index} onClick={() => filterItems(category)}>
                    {category}
                </button>
            })}
        </div>
        {openMenuBar && <Menu />} 
    </div>

    </>
}

export default RestaurantsNav