import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../Components/ProductCard";

const MainBody = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("fetched successfully");
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="overflow-x-hidden overflow-y-scroll p-5 col-span-12 lg:border lg:col-span-9 grid grid-cols-12 gap-5 place-items-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </main>
  );
};

export default MainBody;
