import React, { useState, useEffect } from "react";
import axios from "axios";

// import ProductCard from "../Components/ProductCard";

const MainBody = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("fetched successfully");
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="overflow-x-hidden overflow-y-scroll p-5 col-span-12 lg:border lg:col-span-9 grid grid-cols-12 gap-5 place-items-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative p-2 w-56 h-80 border rounded overflow-hidden bg-slate-50 border-gray-500 col-span-12 lg:col-span-3"
        >
          <img
            src={product.image}
            alt={product.description}
            className="w-full h-3/5"
          />
          <p className="text-center mb-2">{product.title}</p>
          {/* <p>{product.description}</p> */}

          <div className="flex pr-4 justify-between items-center absolute bottom-2 w-full">
            <span className="">${product.price}</span>
            <button className="py px-2 rounded bg-blue-400 text-gray-100 border border-blue-500 hover:text-blue-400 hover:bg-gray-100">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainBody;
