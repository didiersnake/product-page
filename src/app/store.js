import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "../features/cartSlice"
import productSlice from "../features/product/productSlice"

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice
    }
})