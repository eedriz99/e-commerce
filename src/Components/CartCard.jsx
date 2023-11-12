import React from "react";

const CartCard = ({ itemData, removeFromCart }) => {
  return (
    <div className="flex w-full h-[100px] border p-1 my-2 rounded justify-between items-center">
      <div className="w-[15%] h-20 mr-4">
        <img
          src={itemData.image}
          alt={itemData.description}
          className="w-full h-full"
        />
      </div>
      <div>
        <span className="block">{itemData.title}</span>
        {/* <span className="font-light text-sm hidden md:block">{itemData.description}</span> */}
      </div>
      <div className="w-[20%] text-center">
        <span className="text-3xl block">${itemData.price}</span>
        <button
          onClick={() => removeFromCart(itemData.id)}
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
