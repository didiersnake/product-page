import React, { useState } from "react";
import Trash from "../images/icon-delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { cartstate } from "./cartSlice";
import { cartItems, removeCartItem, count } from "./product/productSlice";

const CartItems = () => {
  const showCart = useSelector(cartstate);
  const allCartItems = useSelector(cartItems);
  const cardCount = useSelector(count);
  const cartId = allCartItems.map((item) => item.id);
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(...cartId);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCartItem({ id: id }));
  };

  const cart = allCartItems.map((item) => {
    const totalAmount = item.price * item.count;
      return (
        <>
          <div className="flex py-2 gap-3 items-center ">
            <img
              className="w-8 h-8 rounded-md"
              src={require(`../images/${item.images[0]}.jpg`)}
              alt="img"
            />
            <div className="md:text-sm">
              <p>{item.title}</p>
              <p>
                {`${item.price} x ${item.count}`}{" "}
                <strong>{` $${totalAmount}.00`}</strong>
              </p>
            </div>
            <button onClick={handleRemove}>
              <img className="w-3 h-3" src={Trash} alt="trash" />
            </button>
          </div>
          <button className="bg-orange-600 text-white md:text-sm w-full rounded-sm p-2">
            Checkout
          </button>
        </>
      );
  });
  return (
    showCart && (
      <div className="md:p-4 p-5 flex flex-col shadow-2xl fixed md:top-16 md:right-60 top-14 right-2 bg-white rounded ">
        <div className="font-bold border-b border-gray-300 md:text-sm p-2">
          <p>Cart</p>
        </div>
        
          {cardCount === 0 ?
         <>
          <div className="p-12 text-sm text-gray-500">Your cart is empty</div>
          </> : 
        cart }
      </div>
    )
  );
};

export default CartItems;
