import React, { useContext, useState } from "react";

import data  from '../Data/data';

const AppContext = React.createContext();

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const AppProvider = ( { children } ) => {

    const [ openMenuBar, setOpenMenuBar ] = useState(false);
    const [ openRestaurants, setOpenRestaurants ] = useState(false);
    const [ openInfoBox, setOpenInfoBox ] = useState(false);
    const [ menuItems, setMenuItems ] = useState(data);
    const [ categories,setCategories ] = useState(allCategories);
    const [ itemId, setItemId ] = useState([]);


    const filterItems = category =>{
        if(category === 'all'){
          setMenuItems(data);
          return;
        }
        const newItems = data.filter((item) => item.category === category);
        setMenuItems(newItems);
       }



    return <AppContext.Provider value={{ 
        openMenuBar,
        setOpenMenuBar,
        openRestaurants,
        setOpenRestaurants,
        openInfoBox,
        setOpenInfoBox,
        categories, 
        setCategories,
        menuItems, 
        setMenuItems,
        filterItems,
        itemId, 
        setItemId,
        data
     }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };