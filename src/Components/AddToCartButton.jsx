import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartState";

function AddToCartButton({ productData }) {
  const [quantity, setQuantity] = useState(1);
  const [btnActive, setBtnActive] = useState(true);
  const dcrmntBtnEl = useRef();

  let inputRef = useRef();
  const incrementQty = () => setQuantity((prevQty) => prevQty + 1);
  const decrementQty = () => setQuantity((prevQty) => Math.max(prevQty - 1, 1));

  const dispatch = useDispatch()
  return (
    <div className="flex pr-4 justify-between items-center absolute bottom-2 w-full">
      <div className="border-2 border-gray-200 rounded overflow-hidden w-[80px] flex">
        <button
          onClick={decrementQty}
          className="px-2 text-[#ffffff] bg-blue-400"
          ref={dcrmntBtnEl}
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
          readOnly
        />
        <button
          onClick={incrementQty}
          className="px-2 text-[#ffffff] bg-blue-400"
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch(addToCart({...productData, quantity}))}
        className="ml-2 flex-auto py px-2 rounded bg-blue-400 text-gray-100 border border-blue-500 hover:text-blue-400 hover:bg-gray-100"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCartButton;
