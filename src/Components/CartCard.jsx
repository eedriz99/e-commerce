import React from "react";

const CartCard = () => {
  return (
    <div className="flex w-full border p-1 my-2 rounded justify-between items-center">
      <img src="#" alt="" className="w-20 h-20" />
      <div>
        <span className="block  text-lg font-semibold">Product title</span>
        <span className="font-light text-sm hidden md:block">Product attribute</span>
      </div>
      <div>
        <span className="text-3xl block">$200</span>
        <button className="bg-red-500 border-2 border-red-600 text-white text-xs py-1 px-2 rounded">
          {" "}
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
