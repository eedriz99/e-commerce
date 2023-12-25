import React from "react";
import "../Styles/loader.css";

const productSkeletonLoader = () => {
  return (
    <div className="w-screen h-[80vh] p-5 grid grid-cols-12 gap-5 overflow-hidden">
      <div className="col-span-12 lg:col-span-5">
        <div className="rounded w-full h-full animated"></div>
      </div>
      <div className="p-5 rounded relative col-span-12 lg:col-span-7">
        <div className="rounded animated h-[60px] w-[100%]"></div>
        <div className="rounded animated h-[20px] w-[100%] mt-5"></div>
        <div className="rounded animated h-[20px] w-[100%] mt-2"></div>
        <div className="rounded animated h-[20px] w-[100%] mt-2"></div>
        <div className="rounded animated h-[20px] w-[100%] mt-2"></div>
        <div className="bg-gray-100 h-[20px] w-[60%] mt-2"></div>
        <div className="mt-5 flex justify-between">
          <span className="rounded animated h-[30px] w-[30%] mt-5"></span>
          <span className="rounded animated h-[30px] w-[30%] mt-5"></span>
        </div>
        <div className="rounded animated h-[40px] w-[80%] absolute bottom-5 ml-10"></div>
      </div>
    </div>
  );
};

export default productSkeletonLoader;
