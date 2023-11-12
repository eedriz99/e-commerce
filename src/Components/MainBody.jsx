import React, { useState } from "react";
import useDataFetch from "../Hooks/useDataFetch";

import ProductCard from "../Components/ProductCard";

const MainBody = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useDataFetch("https://fakestoreapi.com/products", setProducts);

  return (
    <main className="overflow-x-hidden overflow-y-scroll rounded p-5 col-span-12 lg:border lg:col-span-9 grid grid-cols-12 gap-5 place-items-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productData={product}
          addToCart={addToCart}
        />
      ))}
    </main>
  );
};

export default MainBody;
