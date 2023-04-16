import React, { useState } from "react";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import Menu from "../images/icon-menu.svg";
import Close from "../images/icon-close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../features/cartSlice";
import { count } from "../features/product/productSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const cart = useSelector(count);
  const dispatch = useDispatch();
  
  const handleClick = () => {
    setNav((prev) => !prev);
  };

  const handleCart = () => {
    dispatch(setCart());
  };

  return (
    /* On large screens */
    <>
      <div className="sticky top-0 bg-white justify-between items-center hidden py-6 border-b lg:flex">
        <div className="flex items-center justify-between w-[55%] ">
          <div className="">
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <ul className="flex items-center justify-around text-sm">
              <li className="p-2">Collections</li>
              <li className="p-2">Men</li>
              <li className="p-2">Women</li>
              <li className="p-2">About</li>
              <li className="p-2">Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-8 md:gap-4">
          <div className="cursor-pointer" onClick={handleCart}>
            <img src={Cart} alt="cart" />
          </div>
          <div className="fixed top-8 right-[230px] text-xs text-white bg-orange-600 px-[6px] rounded-xl">
            {cart}
          </div>
          <div className="w-12 h-12">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>

      {/* On smaller screens */}

      <div className="sticky top-0 bg-white w-full z-20 flex justify-between py-3 px-4 border-b lg:hidden">
        <div className="flex items-center gap-3">
          <div className="cursor-pointer" onClick={handleClick}>
            <img src={Menu} alt="menu" />
          </div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={handleCart}>
            <img src={Cart} alt="cart" />
          </div>
          <div className="fixed top-2 right-12 text-xs text-white bg-orange-600 px-[4px] rounded-xl">
            {cart}
          </div>
          <div className="w-6 h-6">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>

      <div
        className={
          !nav
            ? "h-[100%] fixed top-0 left-0 w-full flex bg-[rgba(0,0,0,0.71)] ease-out duration-500 z-30 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <div className="px-11 h-[100%] w-[65%] bg-white">
          <div onClick={handleClick} className="py-6 pb-10 cursor-pointer">
            <img src={Close} alt="menu" />
          </div>
          <ul className="flex-col ">
            <li className="p-2">Collections</li>
            <li className="p-2">Men</li>
            <li className="p-2">Women</li>
            <li className="p-2">About</li>
            <li className="p-2">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
