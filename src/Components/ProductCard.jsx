import React from "react";

const ProductCard = (props) => {
  return (
    <div className="relative p-2 w-56 h-80 rounded overflow-hidden bg-slate-50 border-gray-500 col-span-12 lg:col-span-3 hover:border-b-2 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1">
      {/* Use product decription as image alt for accessibility */}
      <img src={props.image} alt={props.description} className="w-full h-32" />
      <p className="text-center mb-2">{props.title}</p>

      <div className="flex pr-4 justify-between items-center absolute bottom-2 w-full">
        <span className="">${props.price}</span>
        <button className="py px-2 rounded bg-blue-400 text-gray-100 border border-blue-500 hover:text-blue-400 hover:bg-gray-100">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;