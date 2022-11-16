import React, {useState, useEffect, useRef} from 'react';
import { useGlobalContext } from '../Context/Context';

import foodImage from "../assets/images/background2.jpg";
import phoneImage from "../assets/images/phone.PNG";
import phone2Image from "../assets/images/phone4.PNG";


import { CiLocationOn } from 'react-icons/ci';
import { MdFastfood } from 'react-icons/md';
import { AiFillCreditCard } from 'react-icons/ai';
import { BsApple } from 'react-icons/bs';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineCopyright } from 'react-icons/ai';

import Navbar from '../components/Navbar';




const wordsArray = ["food", "love", "energy"];

const Main = () => {

    const [currentWord, setCurrentWord] = useState(wordsArray[0]);
    const [isActive, setIsActive] = useState(true);
    const { openRestaurants, setOpenRestaurants } = useGlobalContext();

    const index = useRef(0);
    useEffect(()=> {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
                index.current++;
                setCurrentWord(wordsArray[index.current]);
                if(index.current === wordsArray.length -1){
                    setIsActive(false)
                }
            }, 2000);
        }

        return () => clearInterval(interval) ;
    })


  return <>
  <Navbar />
   <div className="intro_showcase">
        <div className="intro">
           <h1>Time to order <span>{currentWord}</span></h1>
           <p>Find restaurants near you</p>
           <form action="#">
              <input type="text" placeholder='006 warsaw Poland' />
              <button onClick={() => setOpenRestaurants(!openRestaurants)}>Search</button>
           </form>
        </div>
        <div className="main_image">
            <img height={"600px"} src={foodImage} alt="" />
        </div>
   </div>
   <div className="order_showcase">

    <section>
        <p>How to order?</p>
        <h1>It is easier than you think</h1>
    </section>
   <div className="orderInfo_boxes">
  
       <div className="orderInfo_box">
          < CiLocationOn className='infoIcon'/>
          <h1>Provide your location</h1>
          <p>Fill out your address, please make sure that you provided your address correctly</p>
       </div>
       <div className="orderInfo_box">
          <MdFastfood className='infoIcon'/>
          <h1>Choose your food</h1>
          <p>Choose your fsvourite food from your favourite restaurant</p>
       </div>
       <div className="orderInfo_box">
          < AiFillCreditCard className='infoIcon'/>
          <h1>Make a payment</h1>
          <p>Make a secure payment with our secure payment system and wait your order</p>
       </div>
   </div>
   </div>

   <div className="download_section">
    <div className="download_info">
        <h1>Download the app</h1>
        <p>Download the app and order your food</p>
        <div className="download_buttons">
            <button> <BsApple className='appleIcon'/> App Store</button>
            <button> <BsFillPlayFill className='playIcon'/> Google Play</button>
        </div>
    </div>
    <div className="phone_images">
        <img src={phoneImage} alt="" />
        <img src={phone2Image} alt="" />
    </div>
   </div>

   <footer>
    <h1>FOODHUB</h1>
    <div className="footer_icons">
        <BsInstagram className="footer_icon"/>
        <AiOutlineYoutube className="footer_icon"/>
        <FaTiktok className="footer_icon"/>
        <FaFacebookF className="footer_icon"/>
    </div>
    <div className="copyright">
        <p><AiOutlineCopyright className='copyIcon'/> 2022</p> 
    </div>
   </footer>

  </>
}

export default Main