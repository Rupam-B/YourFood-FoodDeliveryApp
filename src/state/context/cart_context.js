import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/cart_reducer'

const CartContext = createContext();

const initialState = {
    cart:[],
    total_item:0,
    total_amount:0,
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
            src
        }
    })
  };
  const removeCartItem = (removeid) => {
    dispatch({
        type: "REMOVE_FROM_CART",
        payload:removeid 
    })
  };

    return <CartContext.Provider value={{...state, addToCart, removeCartItem}}>
        {children}
    </CartContext.Provider>;
};

const useCartContext =()=>{
    return useContext(CartContext)
}
export {CartProvider, useCartContext}