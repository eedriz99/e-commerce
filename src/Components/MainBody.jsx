import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import MarketLoader from "../Loaders/MarketLoader";
import useDataFetch from "../Hooks/useDataFetch";
import { useSelector } from "react-redux";

const MainBody = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [products, setProducts] = useState([]);
  const { products } = useSelector((state) => state.product)

  useDataFetch("https://fakestoreapi.com/products", setProducts, setIsLoading);
  return isLoading ? (
    <MarketLoader />
  ) : (
    <main className="overflow-x-hidden overflow-y-scroll rounded p-5 col-span-12 lg:border lg:col-span-9 grid grid-cols-12 gap-5 place-items-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productData={product}
          className="flex-auto relative p-2 w-56 h-80 rounded overflow-hidden bg-slate-50 border-gray-500 col-span-12 lg:col-span-3 hover:border-b-2 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 "
        />
      ))}
    </main>
  );
};

export default MainBody;
