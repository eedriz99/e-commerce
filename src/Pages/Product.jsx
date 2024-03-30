import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useDataFetch from "../Hooks/useDataFetch";
import ProductSkeletonLoader from "../Loaders/ProductSkeletonLoader";
import AddToCartButton from "../Components/AddToCartButton";

function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { productId } = useParams();

  useDataFetch(`https://fakestoreapi.com/products/${productId}`, setProduct);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (product.length !== 0) {
        setIsLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [product]);

  console.log(product);
  return isLoading ? (
    <ProductSkeletonLoader />
  ) : (
    <main className="w-screen max-h-fit p-8 grid grid-cols-12 gap-5">
      <div className="h-fit lg:h-[70vh] rounded border border-blue-400 p-16 col-span-12 lg:col-span-5">
        <img
          src={product.image}
          alt={product.description}
          className="max-h-full max-w-full m-auto"
        />
      </div>
      <div className="h-fit lg:h-[70vh] border border-blue-400 p-8 rounded relative col-span-12 lg:col-span-7">
        <div className="mb-8">
          <h1 className="w-[100%] text-2xl font-bold">{product.title}</h1>
          <p className="w-[100%] mt-5">{product.description}</p>

          <div className="mt-5 flex justify-between">
            <span className="text-2xl font-semibold">
              {product.rating.rate}
            </span>
            <span className="text-2xl font-semibold">$ {product.price}</span>
          </div>
        </div>
        <div className="w-[80%] absolute bottom-5 left-[10%]">
          <AddToCartButton productData={product} />
        </div>
      </div>
    </main>
  );
}

export default Product;
