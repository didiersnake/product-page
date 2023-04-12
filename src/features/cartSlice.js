import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart(state, action) {
            console.log(state.cart);
            return state = {
                ...state,
                cart:!state.cart
            }
        }
    }
})


export const {setCart} = cartSlice.actions
export default cartSlice.reducer