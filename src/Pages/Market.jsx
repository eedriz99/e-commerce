import React from "react";
import Aside from "../Components/Aside";
import MainBody from "../Components/MainBody";

const Market = () => {
  return (
    <div className="m-2 h-screen grid grid-cols-12 gap-5">
      <Aside />
      <MainBody />
    </div>
  );
};

export default Market;
