import React, { useRef, useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = (imageList) => {
  const [currentImgIndex, setCurrentImgIndex] = useState([]);
  const ref = useRef(null);

  const previousImage = () => {
    setCurrentImgIndex(
      currentImgIndex === 0 ? imageList.length - 1 : currentImgIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImgIndex(
      currentImgIndex === imageList.length - 1 ? 0 : currentImgIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);

    return () => clearInterval(timer);
  });
  return (
    <div
      ref={ref}
      className="p-1 w-100 border-2 h-52 bg-cover flex items-center justify-between"
      // style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <button onClick={() => previousImage()}>
        <AiOutlineArrowLeft className="bg-slate-300 w-10 h-10 rounded-full p-2" />
      </button>
      <img
        src={imageList[currentImgIndex]}
        alt="Slider"
        className="w-full h-full"
      />

      <button onClick={() => nextImage()}>
        <AiOutlineArrowRight className="bg-slate-300 w-10 h-10 rounded-full p-2" />
      </button>
    </div>
  );
};

export default Slider;
