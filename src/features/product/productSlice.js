import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  products: [
    {
      id: 1,
      images: [
        "image-product-1",
        "image-product-2",
        "image-product-3",
        "image-product-4",
      ],
      company: "sneaker company",
      title: "fall limited edition sneaker",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
      price: "$125.00",
      discount: "50%",
      initPrice: "$250.00",
      count: 0,
    },
  ],
};

const productSlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    addCount(state, action) {
      //get item
      //filter out 
      //return updated cartcount and product count
      const { id } = action.payload;
      const item = state.products.find((item) => item.id === id);
      const products = state.products.filter((item) => item.id !== id);
      return (state = {
        cartCount: state.cartCount + 1,
        products: [...products, { ...item, count: item.count + 1 }],
      });
    },
    subCount(state, action) {
      const { id } = action.payload;
      const item = state.products.find((item) => item.id === id);
      const products = state.products.filter((item) => item.id !== id);
      return (state = {
        cartCount:state.cartCount - 1,
        products: [...products, { ...item, count: item.count - 1 }],
      });
    },
  },
});

export const { addCount, subCount } = productSlice.actions;
export const product = (state) => state.product.products;
export const count = (state) => state.product.cartCount
export default productSlice.reducer;
