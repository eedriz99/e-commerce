import React from "react";
import ProductCard from "./ProductCard";

const HomeProductGroup = ({ addToCart, products }) => {
  return (
    <div>
      <h2>Featured products </h2>
      <div className="flex overflow-hidden flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productData={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProductGroup;
