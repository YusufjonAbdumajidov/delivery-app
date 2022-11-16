import React, {useState} from 'react';
import { useGlobalContext } from '../Context/Context';

import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineNightlight } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsQuestionLg } from 'react-icons/bs';
import { MdPermContactCalendar } from 'react-icons/md';

const Menu = () => {
  const { openMenuBar, setOpenMenuBar } = useGlobalContext();
  return (
    <div className='menuBar'>
      <div className="menuBar_container">
        <div className="header_icons">
          <MdOutlineNightlight  className='exitIcon'/>
          <AiOutlineClose onClick={() => setOpenMenuBar(!openMenuBar)} className='themeIcon' />
        </div>
        <div className="menuBar_icons">
          <button><AiOutlineUser className='menuBar_icon'/> My account</button>
          <button><BsCart2 className='menuBar_icon'/> My orders</button>
          <button><AiOutlineHeart className='menuBar_icon'/> Favourites</button>
          <button><FiSettings className='menuBar_icon'/> Settings</button>
          <button><BsQuestionLg className='menuBar_icon'/> Need a help?</button>
          <button><MdPermContactCalendar className='menuBar_icon'/> Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Menu;