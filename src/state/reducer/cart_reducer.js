
const cart_reducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, FoodName, Cost, src } = action.payload;

        const existingProduct = state.cart.find(item => item.id === id);
         if (existingProduct) {
            // If the product exists, update its quantity (for example)
            const updatedCart = state.cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        Cost: parseInt(parseInt(Cost)+parseInt(Cost)) // You can adjust the logic as needed
                    };
                }
                return item;
            });

            return {
                ...state,
                cart: updatedCart,
                total_amount: state.total_amount + parseInt(Cost),
            };
        }

            else{
        let cartProduct = {
            id: id,
            FoodName,
            Cost,
            src
        };
      
    
        const total_amount= state.total_amount+ parseInt(Cost);
        return {
            ...state,
            total_amount,
            cart: [...state.cart, cartProduct],
            
        };
    }
    }
    if (action.type === "REMOVE_FROM_CART") {
        // let { removeid } = action.payload;

        const removeArr = [...state.cart]
        const newArr = removeArr.filter((remvitem) => remvitem.id !== action.payload)

        const removedProduct = state.cart.find((item) => item.id === action.payload);
        const total_amount= state.total_amount - parseInt(removedProduct.Cost);
        //    console.log(total_amount)
        return {
            ...state,
            total_amount,
            cart: newArr,
        }
    }
    return state;
}

export default cart_reducer