import React from "react";
import ProductCard from "./ProductCard";

const HomeProductGroup = ({ addToCart, products }) => {
  return (
    <div className="w-full">
      <h2>Featured products </h2>
      <div className="w-full p-5 flex flex-row gap-5 overflow-x-scroll">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productData={product}
            addToCart={addToCart}
            className="w-56 inline-block relative flex-none p-2 h-80 rounded overflow-hidden bg-slate-50 border-gray-500hover:border-b-2 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1"
          />
        ))}
      </div>
    </div>
  ); // col-span-12 lg:col-span-3 relative  justify-evenly
};

export default HomeProductGroup;
