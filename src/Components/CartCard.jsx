import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/cartState";

const CartCard = ({ itemData }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex w-full h-[100px] border p-1 my-2 rounded justify-between items-center">
      <div className="w-[15%] h-20 mr-4 relative">
        <img
          src={itemData.image}
          alt={itemData.description}
          className="w-full h-full"
        />
        <span className="bg-[#1363DF] text-center py-auto h-[20px] w-[20px] text-sm text-[#F3F3F3] cursor-default rounded-[50%] absolute top-0 right-0">
          {itemData.quantity}
        </span>
      </div>
      <div>
        <span className="block cursor-default">{itemData.title}</span>
        {/* <span className="font-light text-sm hidden md:block">{itemData.description}</span> */}
      </div>
      <div className="w-[20%] text-center">
        <span className="text-3xl block cursor-default">${itemData.price}</span>
        <button
          onClick={() => dispatch(removeFromCart(itemData.id))}
          className="bg-red-500 border-2 border-red-600 text-white text-xs py-1 px-2 rounded hover:bg-white hover:text-red-500"
        >
          {" "}
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
