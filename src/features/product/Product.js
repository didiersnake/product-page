import React, { useState } from "react";
import { product } from "./productSlice";
import { useSelector, useDispatch } from "react-redux";
import { addCount, subCount,addToCart } from "./productSlice";
import Plus from "../../images/icon-plus.svg";
import Minus from "../../images/icon-minus.svg";
import Cart from "../../images/icon-cart.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"

const Product = () => {
  const [tab, setTab] = useState(1);
  const allProduct = useSelector(product);
  const productId = allProduct.map((item) => item.id);
  const [id, setId] = useState(...productId);

  const dispatch = useDispatch();

  const imgTabsSwitch = (index) => {
    return setTab(index + 1);
  };

  const addProductCount = () => {
    dispatch(addCount({ id: id }));
  };
  const subProductCount = () => {
    dispatch(subCount({ id: id }));
  };
  
  const addCart = () => {
    dispatch(addToCart({id : id})) 
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //Disply product images on smaller screens
  const slickImagesProduct = allProduct.map((item) => {
    const img = item.images.map((i) => {
      return (
        <div className="md:hidden z-0">
          <img src={require(`../../images/${i}.jpg`)} alt="pic" />
        </div>
      );
    });
    return img;
  });
    
  //Display product images on larger screens
  const productImage = allProduct.map((item) => {
    return (
      <>
        <div className="w-[320px] h-[320px] rounded-lg shadow-sm hidden md:block">
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
      </>
    );
  });
    
//images tabs on larger screens
  const imageTabs = allProduct.map((item) => {
    return (
      <div className="w-[320px] h-auto flex justify-between">
        {item.images.map((i, index) => {
          return index + 1 === tab ? (
            <div
              key={i}
              onClick={() => imgTabsSwitch(index)}
              className={
                "w-14 h-14 border-2 rounded-md border-orange-400 hover:cursor-pointer"
              }
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
              onClick={() => imgTabsSwitch(index)}
              className={"w-14 h-14 rounded-md hover:cursor-pointer"}
            >
              <img
                src={require(`../../images/${i}.jpg`)}
                alt="img"
                className={"rounded-md hover:opacity-50"}
              />
            </div>
          );
        })}
      </div>
    );
  });

  const productDescription = allProduct.map((item) => {
    return (
      <div className="flex flex-col md:pb-8 pb-4">
        <div className="uppercase text-orange-600 md:text-xs text-base font-semibold py-2">
          {item.company}
        </div>
        <div className="capitalize md:text-3xl text-2xl pb-5 font-semibold">
          {item.title}
        </div>
        <div className="md:text-sm md:pb-3 pb-5">{item.description}</div>
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div className="font-semibold text-2xl md:text-xl">
              {item.price}
            </div>
            <div className="text-orange-400 rounded-md font-bold text-xs bg-orange-100 p-[4px]">
              {item.discount}
            </div>
          </div>
          <div className="text-[rgba(0,0,0,0.36)] font-bold line-through">
            {item.initPrice}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="md:hidden">
        <Slider {...settings}>{slickImagesProduct}</Slider>
        <div className="max-w-sm p-4">
          {productDescription}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between w-full bg-slate-100 rounded-md py-2 px-4">
              <button onClick={subProductCount}>
                <img src={Minus} alt="minus" />
              </button>
              <div>
                {allProduct.map((item) => {
                  return item.count;
                })}
              </div>
              <button onClick={addProductCount}>
                <img src={Plus} alt="plus" />
              </button>
            </div>
            <div
              className="flex p-2 justify-center gap-2 text-white w-full bg-orange-500 rounded-md cursor-pointer"
              onClick={addCart}
            >
              <img className="w-4 h-4" src={Cart} alt="cart" />
              <div className="text-sm">Add to cart</div>
            </div>
          </div>
        </div>
      </div>

      {/* On larger screens */}
      <div className="w-full h-full hidden md:flex gap-16 justify-center items-center px-[80px] py-[60px]">
        <div className="flex flex-col gap-4">
          <div>{productImage}</div>
          {imageTabs}
        </div>
        <div className="max-w-sm">
          {productDescription}
          <div className="flex gap-4">
            <div className="flex justify-between w-[35%] bg-slate-100 rounded-md py-2 px-4">
              <button onClick={subProductCount}>
                <img src={Minus} alt="minus" />
              </button>
              <div>
                {allProduct.map((item) => {
                  return item.count;
                })}
              </div>
              <button onClick={addProductCount}>
                <img src={Plus} alt="plus" />
              </button>
            </div>
            <div
              className="flex p-2 justify-center gap-2 text-white w-[65%] bg-orange-500 rounded-md cursor-pointer"
              onClick={addCart}
            >
              <img className="w-4 h-4" src={Cart} alt="cart" />
              <div className="text-sm">Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
