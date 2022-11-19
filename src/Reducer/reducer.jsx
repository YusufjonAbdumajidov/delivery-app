const reducer = ( state, action ) => {
    if(action.type === "ADD_ITEM"){
        return { ...state, cart: [...state.cart, [
            action.payload.id,
            action.payload.title,
            action.payload.price,
            action.payload.quality]] }
    }else if(action.type === "INCREASE"){
        // let tempCart = state.cart.map((cartItem) => {
        //     if(cartItem.id === action.payload){
        //         return {...cartItem, quantity: cartItem.quantity + 1}
        //     }
        //     return cartItem;
        // });
        // return {...state, cart: tempCart}
    }
    return state;
}

export default reducer;