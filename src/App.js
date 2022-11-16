import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Switch } from 'react-router-dom';



import { getPlacesData } from './Api/index'
import  Navbar  from "./components/Navbar";
import Main from "./pages/Main";
import Restaurants from "./pages/Restaurants";
import RestaurantsNav from "./components/RestaurantsNav";
import Restaurant from "./pages/Restaurant";





const  App = () => {
  const [ places, setPlaces ] = useState([]);
  const [ coordinates, setCoordinates ] = useState({ });



  useEffect(() => {
    navigator.geolocation.getCurrentPosition(( { coords: { latitude, longitude } } ) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  }, []);


  useEffect(() => {
    getPlacesData(coordinates.lat, coordinates.lng)
        .then((data) => {
          setPlaces(data);
        })
  },[coordinates] );


  return (
    <div className="App">
      {/* { places ?  <RestaurantsNav />  : <Navbar /> } */}
      {/* { places ? <Restaurants places={places}/> : <Main /> } */}
      <Routes>
      
        <Route exact path="/" element={places ? <Restaurants places={places}/> :  <Main /> } />
        <Route path="/restaurant/:id"  element={<Restaurant />}/>   
      </Routes>
    </div>



  );

 

}

export default App;
