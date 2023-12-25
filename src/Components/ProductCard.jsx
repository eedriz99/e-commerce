import React, { useState, useRef, useEffect } from "react";
import "../Styles/ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ productData, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  let inputRef = useRef();

  // useEffect(()=>{
  //   if inputRef && inputRef.in
  // })

  const incrementQty = () => setQuantity((prevQty) => prevQty + 1);
  const decrementQty = () => setQuantity((prevQty) => Math.max(prevQty - 1, 1));

  const handleClick = () => {
    addToCart({ ...productData, quantity });
  };

  return (
    <div className="relative p-2 w-56 h-80 rounded overflow-hidden bg-slate-50 border-gray-500 col-span-12 lg:col-span-3 hover:border-b-2 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 ">
      {/* Use product decription as image alt for accessibility */}

      <Link
        to={`/product/${productData.id}`}
        className="w-full h-[85%] block z-1 absolute"
      ></Link>
      <img
        src={productData.image}
        alt={productData.description}
        className="w-full h-1/2"
      />
      <p className="text-center mb-2  desc">{productData.title}</p>
      <div className="flex pr-4 justify-between items-center absolute bottom-[36px] w-full">
        <span>Price:</span>{" "}
        <span className="font-bold">${productData.price}</span>
      </div>
      <div className="flex pr-4 justify-between items-center absolute bottom-2 w-full">
        {/* <span className="">${productData.price}</span> */}
        <div className="border-2 border-gray-200 rounded overflow-hidden">
          <button
            onClick={decrementQty}
            className="px-2 text-[#ffffff] bg-blue-400"
          >
            -
          </button>
          <input
            type="number"
            name="productQty"
            value={quantity}
            id="productQty"
            className="w-8"
            ref={inputRef}
          />
          <button
            onClick={incrementQty}
            className="px-2 text-[#ffffff] bg-blue-400"
          >
            +
          </button>
        </div>
        <button
          onClick={() => handleClick()}
          className="py px-2 rounded bg-blue-400 text-gray-100 border border-blue-500 hover:text-blue-400 hover:bg-gray-100"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
