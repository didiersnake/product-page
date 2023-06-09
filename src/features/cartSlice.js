import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart(state, action) {
            return state = {
                ...state,
                cart:!state.cart
            }
        }
    }
})

export const cartstate = state => state.cart.cart 
export const {setCart} = cartSlice.actions
export default cartSlice.reducer