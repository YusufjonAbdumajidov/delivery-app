import React from 'react';

import { useGlobalContext } from '../Context/Context';

import { ImCancelCircle } from 'react-icons/im';


const InfoBox = () => {
  const { openInfoBox, setOpenInfoBox } = useGlobalContext();

  return (
    <div className='infoBox'>
        <div className="infoBox_container">
          <ImCancelCircle onClick={() => setOpenInfoBox(!openInfoBox)} className='infoBox_exit'/>
        </div>
    </div>
  )
}

export default InfoBox