import React from 'react';
import { Link, NavLink } from 'react-router-dom';





import Restaurant from './Restaurant';
import RestaurantsNav from '../components/RestaurantsNav';

import { AiFillStar } from 'react-icons/ai';


const Restaurants = (restaurants) => {
 
  
   
    
  if(restaurants.length < 0 || restaurants === undefined){
    return <p>Loading</p>
  }else
  return <>
  <RestaurantsNav />
  <div className="search_bar">
    <p>{restaurants.places.length} Restaurants found</p>
    <input type="seach" placeholder="restaurant or food" />
    <section>
      <p>Sort by: </p>
      <input type="search" placeholder='review' />
    </section>
  </div>
  




  
    <div className="restaurants_container">
      {restaurants.places.map((place, index) => {
        return( 
         <NavLink  key={index}  to={ `/restaurant/${place.name}`} state={place}  >
          <div className="restaurant_box">
            <div className="restaurant_image"> 
              <img  src={place.photo ? place.photo.images.large.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUFrBKvYcpGmz1-NLjYzJHibom4ws8otcbg&usqp=CAU"} alt="" />
            </div>
            <div className="restaurant_info">
              <section>
              <h3>{place.name ? place.name : "Restaurant Name"}</h3>
              <p> <span> Ranking:</span>  {place.ranking ? place.ranking : "not available"}</p>
              <p> <span>Delivery Time:</span>  10-20 mins</p>
              </section>
              <section><p><AiFillStar className='starIcon'/>4.5 (344)</p>
              <button className='writeReview'>write a review</button>
              </section>
            </div>
          </div>
        </NavLink>
        )
      })}  
    </div>
 
 

 
  
     
       

    </>


}

export default Restaurants