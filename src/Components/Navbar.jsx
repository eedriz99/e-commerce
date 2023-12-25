import React, { useState, useEffect, useRef } from "react";
import { FaHome } from "react-icons/fa";
import {
  AiOutlineShoppingCart,
  AiOutlineShop,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    isOpen
      ? menuRef.current.classList.remove("hidden")
      : menuRef.current.classList.add("hidden");
  }, [isOpen]);

  return (
    <nav className="flex items-center p-3 px-10 border-b">
      <h1 className="text-blue-500 text-2xl">
        <Link to="/" className="inline-block">
          Skye-Shop
        </Link>
      </h1>

      <button
        typeof="submit"
        className="p-2 border ml-auto lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu />
      </button>
      <div
        ref={menuRef}
        className="p-2 hidden absolute right-0 top-14 h-screen z-30 lg:flex lg:basis-3/4 lg:items-center lg:justify-between lg:ml-auto lg:pl-24 bg-slate-200 lg:relative lg:max-h-0 lg:top-0 lg:bg-inherit"
      >
        <ul className="block mb-3 lg:flex lg:mb-0">
          {[
            ["Home", "/", FaHome],
            ["Market place", "/market", AiOutlineShop],
            ["Cart", "/cart", AiOutlineShoppingCart],
            ["Profile", "/profile", AiOutlineUser],
          ].map(([title, url, Icon], index) => (
            <li key={index} className="ml-3">
              <Link
                to={url}
                className="pb-2 border-b-2 hover:border-blue-400 hover:text-blue-500"
              >
                <Icon className="inline mr-1" />
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <form className="flex border overflow-hidden rounded-md">
          <input
            typeof="text"
            name="nav-search"
            id="nav-search"
            placeholder="Search"
            className="p-2 box-border outline-none border focus:border-blue-400"
          />
          <button typeof="submit" className="p-2 text-gray-100 bg-blue-400">
            GO
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
