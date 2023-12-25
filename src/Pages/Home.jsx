import React, { useState, useEffect } from "react";
import useDataFetch from "../Hooks/useDataFetch";
import Slider from "../Components/Slider";
import HomeProductGroup from "../Components/HomeProductGroup";
// import ProductsGroup from "../Components/ProductsGroup";
// import image1 from "../Images/Wordpress_Blue_logo.png";
// import image2 from "../Images/apple-touch-icon.png";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useDataFetch("https://fakestoreapi.com/products", setProducts, setIsLoading);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (products.length !== 0) {
  //       setIsLoading(false);
  //     }
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, [products]);
  return (
    <>
      <div className="p-2">
        <Slider imageList={"aaa"} />
      </div>
      {/* <div>
      <h3>Featured products!</h3>
    </div> */}

      <HomeProductGroup addToCart={addToCart} products={products} />
    </>
  );
};

export default Home;
