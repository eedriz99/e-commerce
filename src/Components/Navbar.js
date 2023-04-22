import React from "react";
import { FaHome } from "react-icons/fa";
import {
  AiOutlineShoppingCart,
  AiOutlineShop,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
const Navbar = () => {
  const menuList = document.querySelector("#menuList");

  // mozilla snippet
  function menuActive(e) {
    menuList.onpointermove = menuToggle;
    menuList.setPointerCapture(e.pointerId);
  }

  function menuNotActive(e) {
    menuList.onpointermove = null;
    menuList.releasePointerCapture(e.pointerId);
  }

  // my toggler function
  function menuToggle() {
    if (menuList.classList.contains("hidden")) {
      menuList.classList.remove("hidden");
      menuList.classList.add("block");
    } else {
      menuList.classList.remove("block");
      menuList.classList.add("hidden");
    }
  }

  // mozilla snippet
  menuList.onpointerdown = menuActive;
  menuList.onpointerup = menuNotActive;

  return (
    <nav className="flex items-center p-3 border-b">
      <a href="/">
        <h1>Brand Name</h1>
      </a>
      <button
        typeof="submit"
        className="p-2 border ml-auto lg:hidden"
        onClick={() => menuToggle()}
      >
        <AiOutlineMenu />
      </button>
      <div
        id="menuList"
        className="p-2 hidden absolute right-0 top-14 h-screen z-10 lg:flex lg:basis-3/4 lg:items-center lg:justify-between lg:ml-auto lg:pl-24 bg-slate-200 lg:relative lg:max-h-0 lg:top-0 lg:bg-inherit"
      >
        <ul className="block mb-3 lg:flex lg:mb-0">
          {[
            ["Home", "/", FaHome],
            ["Market place", "/market", AiOutlineShop],
            ["Cart", "/cart", AiOutlineShoppingCart],
            ["Profile", "/profile", AiOutlineUser],
          ].map(([title, url, Icon]) => (
            <li className="ml-3">
              <a href={url} className=" border-b">
                <Icon className="inline mr-1" />
                {title}
              </a>
            </li>
          ))}
        </ul>

        <form className="flex border overflow-hidden border-slate-400 rounded-md">
          <input
            typeof="text"
            name="nav-search"
            id="nav-search"
            placeholder="Search"
            className="p-2"
          />
          <button typeof="submit" className="p-2 bg-slate-200">
            GO
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
