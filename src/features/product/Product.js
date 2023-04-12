import React, { useState } from "react";
import { product } from "./productSlice";
import { useSelector } from "react-redux";
import Plus from "../../images/icon-plus.svg";
import Minus from "../../images/icon-minus.svg";
import Cart from "../../images/icon-cart.svg";

const Product = () => {
  const [tab, setTab] = useState(1);
  const allProduct = useSelector(product);

  const imgSwitch = (index) => {
    return setTab(index + 1);
  };

  const productImage = allProduct.map((item) => {
    return (
      <div className="w-[320px] h-[320px] rounded-lg shadow-sm">
        {item.images.map((i, index) => {
          return (
            index + 1 === tab && (
              <img
                className="rounded-lg"
                src={require(`../../images/${i}.jpg`)}
                alt="pic"
              />
            )
          );
        })}
      </div>
    );
  });

  const productDescription = allProduct.map((item) => {
    return (
      <div className="flex flex-col">
        <div>{item.company}</div>
        <div>{item.title}</div>
        <div>{item.description}</div>
        <div className="flex">
          <div>{item.price}</div>
          {item.discount}
        </div>
        <div>{item.initPrice}</div>
      </div>
    );
  });

  const imageTabs = allProduct.map((item) => {
    return (
      <div className="w-[320px] h-auto flex justify-between">
        {item.images.map((i, index) => {
          return index + 1 === tab ? (
            <div
              key={i}
              onClick={() => imgSwitch(index)}
              className={"w-14 h-14 border-2 rounded-md border-orange-400"}
            >
              <img
                src={require(`../../images/${i}.jpg`)}
                alt="img"
                className={"opacity-30 rounded-md "}
              />
            </div>
          ) : (
            <div
              key={i}
              onClick={() => imgSwitch(index)}
              className={"w-14 h-14 rounded-md"}
            >
              <img
                src={require(`../../images/${i}.jpg`)}
                alt="img"
                className={"rounded-md"}
              />
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="w-full h-full flex gap-16 justify-center items-center px-[80px] py-[60px]">
      <div className="flex flex-col gap-4">
        <div>{productImage}</div>
        {imageTabs}
      </div>
      <div className="max-w-xs">
        {productDescription}
        <div className="flex gap-4">
          <div className="flex justify-between w-[35%] bg-slate-50 rounded-md py-2 px-4">
            <button>
              <img src={Minus} alt="minus" />
            </button>
            <div>0</div>
            <button>
              <img src={Plus} alt="plus" />
            </button>
          </div>
          <div className="flex p-2 justify-center gap-2 text-white w-[65%] bg-orange-500 rounded-md cursor-pointer">
            <img src={Cart} alt="cart" />
            <div>Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
