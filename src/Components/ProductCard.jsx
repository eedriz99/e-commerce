import React from "react";
import "../Styles/ProductCard.css";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";


const ProductCard = ({ productData, ...props }) => {
  return (
    // "flex-auto relative p-2 w-56 h-80 rounded overflow-hidden bg-slate-50 border-gray-500 col-span-12 lg:col-span-3 hover:border-b-2 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 "
    
    <div className={props.className ? props.className : ""}>
      {/* Use product decription as image alt for accessibility */}

      <Link
        to={`/product/${productData.id}`}
        className="w-full h-[85%] block z-1 absolute"
      ></Link>
      <img
        src={productData.image}
        alt={productData.description}
        className="w-full h-1/2"
      />
      <p className="text-center mb-2  desc">{productData.title}</p>
      <div className="flex pr-4 justify-between items-center absolute bottom-[36px] w-full">
        <span>Price:</span>{" "}
        <span className="font-bold">${productData.price}</span>
      </div>
      {/* <div className="flex pr-4 justify-between items-center absolute bottom-2 w-full"> */}
      {/* <span className="">${productData.price}</span> */}
      <AddToCartButton productData={productData} />
      {/* </div> */}
    </div>
  );
};

export default ProductCard;
