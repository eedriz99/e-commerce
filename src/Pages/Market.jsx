import React, { useEffect, useState } from "react";
import useDataFetch from "../Hooks/useDataFetch";
import Aside from "../Components/Aside";
import MainBody from "../Components/MainBody";
import MarketLoader from "../Loaders/MarketLoader";

const Market = ({ addToCart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useDataFetch("https://fakestoreapi.com/products", setProducts, setIsLoading);
  // useDataFetch("http://127.0.0.1:8000/productsview", setProducts, setIsLoading);

  // console.log(products);

  return isLoading ? (
    <MarketLoader />
  ) : (
    <div className="m-2 h-screen grid grid-cols-12 gap-5">
      <Aside />
      <MainBody addToCart={addToCart} products={products} />
    </div>
  );
};

export default Market;
