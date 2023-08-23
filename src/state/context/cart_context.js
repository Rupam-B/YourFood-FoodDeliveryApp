import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cart_reducer";
import store_useRreducer from "../reducer/store_useRreducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("localStoredCart");
  if (localCartData == null) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const getLocalAmountData = () => {
  let localAmountData = localStorage.getItem("localStoredAmount");
  if (localAmountData == null) {
    return 0;
  } else {
    return JSON.parse(localAmountData);
  }
};
const getLocalUserDetails = () => {
  let localUserDetails = localStorage.getItem("localStoredUserDetails");
  if (localUserDetails) {
    return JSON.parse(localUserDetails);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: 0,
  total_amount: getLocalAmountData(),
  shipping_fee: 5000,

};


const initialStoreState = {
  sendArr: getLocalUserDetails(),
};

const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [storeState, storeDispatch] = useReducer(store_useRreducer,initialStoreState);

  console.log(storeState)


  const addToCart = (id, FoodName, Cost, src) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        FoodName,
        Cost,
        src,
        quantity: 1,
      },
    });
  };

  const removeCartItem = (removeid) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: removeid,
    });
  };

  const SignUpHere = (sendArr) => {
    storeDispatch({
      type: "SET_SEND_ARR",
      payload: sendArr,
    });
  };

  useEffect(() => {
    localStorage.setItem("localStoredCart", JSON.stringify(state.cart));
    localStorage.setItem("localStoredAmount",JSON.stringify(state.total_amount));
    localStorage.setItem("localStoredUserDetails",JSON.stringify(storeState.sendArr));
  }, [state.cart, state.total_amount,storeState.sendArr]);

  return (
    <CartContext.Provider
      value={{ ...state, ...storeState, addToCart, removeCartItem, SignUpHere }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
