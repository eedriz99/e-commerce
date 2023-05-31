import React from "react";

const ProductCard = (props) => {
  const [id, title, image, price, desc] = props;
  return (
    <div
      key={id}
      className="relative p-2 w-56 h-80 border rounded overflow-hidden bg-slate-50 border-gray-500 col-span-12 lg:col-span-9"
    >
      <img
        src={image}
        alt={description}
        className="w-full h-3/5"
      />
      <p className="text-center mb-2">{title}</p>
      {/* <p>{product.description}</p> */}

      <div className="flex pr-4 justify-between items-center absolute bottom-2 w-full">
        <span className="">${price}</span>
        <button className="py px-2 rounded bg-blue-400 text-gray-100 border border-blur-500 hover:text-gray-400 hover:bg-gray-100">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
