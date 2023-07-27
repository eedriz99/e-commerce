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

function App() {
  let myRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, //this is the home page of our app
          element: <Home />,
        },
        {
          path: "market", // this is the market page, where all products can be browsed through
          element: <Market />,
        },
        {
          path: "cart",
          element: <Cart />,
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
