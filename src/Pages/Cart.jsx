import React from "react";
import CartCard from "../Components/CartCard";
import illustration from "../Images/Illustration/Ecommerce checkout laptop-rafiki.png";

const Cart = () => {
  return (
    <div className="grid grid-cols-12 max-h-full 554 p-2 gap-2 gap-y-5 lg:gap-y-0">
      {/* cart items section */}
      <div className="col-span-12 lg:col-span-6 max-h-screen border-2 rounded shadow-lg shadow-gray-500">
        <div className="p-3 border-b-2 lg:border-0 overflow-y-scroll max-h-full">
          <h1 className="m-1 mb-0 mr-0">Your cart:</h1>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </div>
      {/* payment summary section */}
      <div className="p-1 col-span-12 lg:col-span-6 max-h-screen border-2 rounded shadow-lg shadow-gray-500">
        <img
          src={illustration}
          alt="Online illustrations by Storyset @ https://storyset.com/online"
          className="h-3/5 m-auto hidden lg:block"
        />
        <h1>payment summary:</h1>
        <div className="p-2">
          <div className="p-2">
            <p className="flex justify-between">
              <span className="text-xl">Subtotal:</span>
              <span className="text-xl">$200</span>
            </p>
            <p className="flex justify-between">
              <span className="text-base">Shipping fee:</span>
              <span className="text-base">$200</span>
            </p>
            <p className="flex justify-between">
              <span className="text-sm">VAT:</span>
              <span className="text-sm">$200</span>
            </p>
          </div>
          <hr />

          <p className="flex justify-between p-2">
            <span className="text-2xl font-semibold">Total:</span>
            <span className="text-2xl font-semibold">$600</span>
          </p>
          <button className=" px-2 py-1 w-full bg-green-500 text-white border-2 border-green-600 rounded">
            {" "}
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
