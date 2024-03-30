import React, { useState, useEffect } from "react";
import CartCard from "../Components/CartCard";
import illustration from "../Images/Illustration/Ecommerce checkout laptop-rafiki.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  let [emptyCart, setEmptyCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.products);

  useEffect(() => {
    if (cartItems.length === 0) {
      setEmptyCart(true);
    }
  }, [cartItems]);

  const VAT = 0.025;
  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let sumTotal = 0;
    function calcSubTotal() {
      for (let i = 0; i < cartItems.length; i++) {
        sumTotal += cartItems[i].price * cartItems[i].quantity;
      }
      return sumTotal;
    }
    function calcVat() {
      return parseFloat(subTotal) * VAT;
    }
    function calcTotalCost() {
      return parseFloat(subTotal) + parseFloat(calcVat());
    }

    setSubTotal(calcSubTotal().toFixed(2));
    setVat(calcVat().toFixed(2));
    setTotalCost(calcTotalCost().toFixed(2));
  }, [cartItems, subTotal]);

  return (
    <div className="grid grid-cols-12 max-h-full 554 p-2 gap-2 gap-y-5 scroll-smooth lg:gap-y-0">
      {/* cart items section */}
      <div className="col-span-12 lg:col-span-6 max-h-screen border-2 rounded shadow-lg shadow-gray-500 scroll-smooth">
        <div className="p-3 border-b-2 scroll-smooth lg:border-0 overflow-y-scroll max-h-full">
          <h1 className="m-1">Your cart:</h1>
          <hr />
          {emptyCart ? (
            <p>
              There are no items in your cart yet. What to add some things at{" "}
              <Link to="/market" className="text-[#1363DF] underline">
                market
              </Link>
              ?
            </p>
          ) : (
            cartItems.map((item) => <CartCard key={item.id} itemData={item} />)
          )}
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
              <span className="text-xl">$ {subTotal}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-base">Shipping fee:</span>
              <span className="text-base">$</span>
            </p>
            <p className="flex justify-between">
              <span className="text-sm">VAT({VAT * 100}%):</span>
              <span className="text-sm">$ {vat}</span>
            </p>
          </div>
          <hr />

          <p className="flex justify-between p-2">
            <span className="text-2xl font-semibold">Total:</span>
            <span className="text-2xl font-semibold">$ {totalCost}</span>
          </p>
          <button
            className=" px-2 py-1 w-full bg-green-500 text-white border-2 border-green-600 rounded"
            onClick={() => console.log({ cartItems, totalCost })}
          >
            {" "}
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
