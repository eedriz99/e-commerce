import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Market from "./Pages/Market";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Layout from "./Pages/Layout";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="market" element={<Market />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
