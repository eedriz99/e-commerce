import React, { useState, useEffect, useRef } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { Link } from "react-router-dom";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    isOpen
      ? btnRef.current.classList.remove("hidden")
      : btnRef.current.classList.add("hidden");
  }, [isOpen]);

  return (
    <aside className="border z-10 bg-blue-100 col-span-12 lg:block lg:col-span-3 p-2">
      <div className="flex justify-end p-1 border-2 lg:hidden">
        <button
          typeof="submit"
          className="p-2 border"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineFilter className="mt-1 mr-1" />
        </button>
      </div>
      <div
        ref={btnRef}
        className="hidden lg:block"
      >
        <div>
          <h3 className="text-blue-700">Cartegory: </h3>

          <ul className="p-3 ml-2">
            {[
              ["Appliances", "/appliances"],
              ["Computer and accessories", "/computer"],
              ["Electronics", "/electronics"],
              ["Fashion", "/fashion"],
              ["Gardening tools", "/gardening"],
              ["Grocery", "/grocery"],
            ].map(([title, url], index) => (
              <li key={index}>
                <Link to={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex text-blue-700">
            <AiOutlineFilter className="mt-1 mr-1" />
            Filter:
          </h3>
          <form action="#" className="ml-2">
            {[
              ["new", "New products"],
              ["used", "Used products"],
            ].map(([idName, title], index) => (
              <label key={index} htmlFor={idName} className="ml-2 block">
                <input
                  type="checkbox"
                  name={idName}
                  id={idName}
                  className="mr-1 accent-blue-400"
                />
                {title}
              </label>
            ))}
          </form>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
