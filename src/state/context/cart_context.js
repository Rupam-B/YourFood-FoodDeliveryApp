import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cart_reducer'

const CartContext = createContext();

const getLocalCartData=()=>{
    let localCartData = localStorage.getItem("localStoredCart")
    if(localCartData==null){
        return [];
    }
    else{
        return JSON.parse(localCartData)
    }
}
const getLocalAmountData=()=>{
    let localAmountData = localStorage.getItem("localStoredAmount")
    if(localAmountData==null){
        return 0;
    }
    else{
        return JSON.parse(localAmountData)
    }
}


const initialState = {
    cart: getLocalCartData(),
    // cart: [],
    total_item:0,
    total_amount:getLocalAmountData(),
    // total_amount:0,
    shipping_fee: 5000,
};

const CartProvider =({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, FoodName ,Cost ,src) => {
    dispatch({
        type: "ADD_TO_CART",
        payload:{
            id, 
            FoodName,
            Cost,
            src,
            quantity:1
        }
    })
  };
  const removeCartItem = (removeid) => {
    dispatch({
        type: "REMOVE_FROM_CART",
        payload:removeid 
    })
  };

  useEffect(()=>{
    localStorage.setItem("localStoredCart", JSON.stringify(state.cart))
    localStorage.setItem("localStoredAmount", JSON.stringify(state.total_amount))
  },[state.cart,state.total_amount])


    return (<CartContext.Provider value={{...state, addToCart, removeCartItem}}>
        {children}
    </CartContext.Provider>);
};

const useCartContext =()=>{
    return useContext(CartContext)
}
export {CartProvider, useCartContext}