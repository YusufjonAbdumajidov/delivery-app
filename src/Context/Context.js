import React, { useContext, useState, useReducer, useEffect } from "react";

import data  from '../Data/data';
import reducer from "../Reducer/reducer";
const AppContext = React.createContext();
const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
}




const AppProvider = ( { children } ) => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    console.log(state);

    const [ openMenuBar, setOpenMenuBar ] = useState(false);
    const [ openRestaurants, setOpenRestaurants ] = useState(false);
    const [ openInfoBox, setOpenInfoBox ] = useState(false);
    const [ menuItems, setMenuItems ] = useState(data);
    const [ categories,setCategories ] = useState(allCategories);
    


    const filterItems = category =>{
        if(category === 'all'){
          setMenuItems(data);
          return;
        }
        const newItems = data.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    const addItem = (id, title, price, quantity) => {
        dispatch({type: "ADD_ITEM", payload:{ id, title, price, quantity }})
    }
    // const increase = id => {
    //     dispatch({type: "INCREASE", payload: id})
    // }



    return <AppContext.Provider value={{ 
        ...state,
        openMenuBar,setOpenMenuBar,
        openRestaurants,setOpenRestaurants,
        openInfoBox,setOpenInfoBox,
        categories, setCategories,
        menuItems, setMenuItems,
        filterItems,
        addItem,
        // increase,
     }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };