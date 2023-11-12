import React, { useEffect, useState } from "react";
import Aside from "../Components/Aside";
import MainBody from "../Components/MainBody";

const Market = ({addToCart}) => {
  const isLoading = useState(true);

  

  useEffect(()=>{
    
  }, [])
  return (
    <div className="m-2 h-screen grid grid-cols-12 gap-5">
      <Aside />
      <MainBody addToCart={addToCart}/>
    </div>
  );
};

export default Market;
