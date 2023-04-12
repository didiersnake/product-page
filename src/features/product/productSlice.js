import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    images:[ "image-product-1","image-product-2","image-product-3","image-product-4"],
    company: "sneaker company",
    title: "fall limited company edition",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
    price: "$125",
    discount: "50%",
    initPrice: "$250",
    
  },
];

const productSlice = createSlice({
    initialState,
    name: "product",
    reducers: {
        
    }
})

export const product = (state)=> state.product
export default productSlice.reducer