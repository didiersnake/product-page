import React from "react";
import Trash from "../images/icon-delete.svg";
import { useSelector } from "react-redux";
import { cartstate } from "./cartSlice";

const CartItems = (image, name, count, price) => {
  const showCart = useSelector(cartstate);

  const totalAmount = price * count;
  return (
    <div className="flex flex-col shadow-xl fixed top-12 right-60">
      <div>
        <p className="semibold border-b border-gray-400 text-sm">Cart</p>
      </div>
      <div className="p-2 flex gap-2">
        <img className="w-8 h-8 rounded-md" src={image} alt="img" />
        <div className="text-sm">
          <p>{name}</p>
          <p>
            {`${price} x ${count}`} <strong>{` $${totalAmount}.00`}</strong>
          </p>
        </div>
        <img src={Trash} alt="trash" />
      </div>
      <button className="bg-orange-600 text-white text-sm w-full">
        Checkout
      </button>
    </div>
  );
};

export default CartItems;
