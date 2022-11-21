const reducer = ( state, action ) => {
    if(action.type === "ADD_ITEM"){
        return { ...state, cart: [...state.cart, [
            action.payload.id,
            action.payload.title,
            action.payload.price,
            action.payload.quantity]] }
    }
    if(action.type === "INCREASE"){
        console.log(action.payload)
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return {...cartItem, quantity: cartItem.quantity + 1}
            }
            return cartItem;
        });
        return {...state, cart: tempCart}
    }
    if(action.type === "DECREASE"){
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return {...cartItem, quantity: cartItem.quantity + 1}
            }
            return cartItem;
        });
        return { ...state, cart: tempCart}
    }
    if(action.type === "CLEAR"){
        return {...state, cart: []}
    }
    if(action.type === "REMOVE"){
        return {
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
        }
    }
    if(action.type === "GET_TOTALS"){
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const {price, amount} = cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        }, {
            total: 0,
            amount: 0,
        })

        total = parseFloat(total.toFixed(2))

        return {...state, total, amount}
    }
    return state;
}

export default reducer;