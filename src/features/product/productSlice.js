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
      price: 125.00,
      discount: "50%",
      initPrice: "$250.00",
      count: 0,
    },
  ],
  cartItems: []
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
        ...state,
        products: [...products, { ...item, count: item.count + 1 }],
      });
    },
    subCount(state, action) {
      const { id } = action.payload;
      const item = state.products.find((item) => item.id === id);
      const products = state.products.filter((item) => item.id !== id);
      return (state = {
        ...state,
        products: [
          ...products,
          { ...item, count: item.count > 0 ? item.count - 1 : item.count },
        ],
      });
    },
    addToCart(state, action) {
      //add item count to cart 
      //reset product count 
      const { id } = action.payload;
      const item = state.products.find((item) => item.id === id);
      const products = state.products.filter((item) => item.id !== id);
      return state = {
        ...state,
        cartCount: state.cartCount + item.count,
        products: [
          ...products,
          {...item, count: 0}
        ]
      }
    },
    addCartItem(state, action) {
      const { id } = action.payload;
      const item = state.products.find((item) => item.id === id);
      state.cartItems.push(item);
    },
    removeCartItem(state, action) {
      const { id } = action.payload;
      const products = state.cartItems.filter((item) => item.id !== id);
      return state = {
        ...state,
        cartCount: 0,
        cartItems: products
      };
    }
    
  }
});

export const { addCount, subCount, addToCart, addCartItem, removeCartItem } = productSlice.actions;
export const product = (state) => state.product.products;
export const count = (state) => state.product.cartCount;
export const cartItems = (state) => state.product.cartItems;

export default productSlice.reducer;
