import React, { useState } from 'react';
import Menu from "../components/Menu";
import { useGlobalContext } from '../Context/Context';

import { RiMenu4Fill } from 'react-icons/ri';

const Navbar = () => {
 

  const { openMenuBar, setOpenMenuBar } = useGlobalContext();
  return (
    <div className='navbar_container'>
        <nav>
        <div className="logo">
            <p> <span>F</span>OOD<span>H</span>UB </p>
        </div>
        <div className="navigators">
            <button>Login</button>
            <button>Create account</button>
            < RiMenu4Fill onClick={() => setOpenMenuBar(!openMenuBar)} className='menuIcon' />
        </div>
        </nav>
        {openMenuBar && <Menu />} 
    </div>
  )
}

export default Navbar