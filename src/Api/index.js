import axios from 'axios';
import { useState } from 'react';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';


  

export const getPlacesData = async ( lat, lng ) => {
    try{
        const { data: { data }} = await axios.get(URL, {
          params: {
            latitude: lat,
            longitude: lng,
          },
          headers: {
            'X-RapidAPI-Key': '1fa98113a0msh0ef248cab4ae8c4p110426jsnddad360c3745',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
      });
        console.log(lat, lng)
        console.log(data)
      return data;
    } catch(error){
      console.log(error);
    }
}

