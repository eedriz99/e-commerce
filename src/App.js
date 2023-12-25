import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Market from "./Pages/Market";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Layout from "./Pages/Layout";
import User from "./Components/User";
import Payment from "./Components/Payment";
import ErrorPage from "./Pages/ErrorPage";
import { useState } from "react";
import Product from "./Pages/Product";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(productId) {
    let updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  }

  let myRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, //this is the home page of our app
          element: <Home addToCart={addToCart}/>,
        },
        {
          path: "market", // this is the market page, where all products can be browsed through
          element: <Market addToCart={addToCart} />,
        },
        {
          path: "product/:productId", // this is the market page, where all products can be browsed through
          element: <Product addToCart={addToCart} />,
        },
        {
          path: "cart",
          element: <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>,
        },
        {
          path: "profile/",
          element: <Profile />,
          children: [
            {
              index: true,
              element: <User />,
            },
            {
              path: "user",
              element: <User />,
            },
            {
              path: "payment",
              element: <Payment />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={myRoutes} />
    </div>
  );
}

export default App;
