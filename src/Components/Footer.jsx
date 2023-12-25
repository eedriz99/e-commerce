import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1363DF] w-screen pt-2 grid grid-cols-12 text-[#FFFFFF]">
      <div className="grid grid-cols-1 place-items-center col-span-12 m-2 lg:col-span-4">
        <h1 className="col-span-1">Brand Name</h1>
        <p className="col-span-1">tagline</p>
      </div>
      <ul className="col-span-12 m-2 md:col-span-6 lg:col-span-4">
        <h6 className="border-l-[5px] border-[#47B5FF] pl-2 mb-2">Menu:</h6>
        {[
          ["Home", "/"],
          ["Market", "/market"],
          ["Cart", "/cart"],
          ["Settings", "/settings"],
        ].map(([title, url]) => (
          <li key={url} className="mb-1">
            <Link
              to={url}
              className="px-24 inline-block border-l-2 border-l-[#1363DF] w-full hover:border-l-[#47B5FF]"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="col-span-12 m-2 md:col-span-6 lg:col-span-4">
        <h6 className="border-l-[5px] border-[#47B5FF] pl-2 mb-2"> Career:</h6>
        {[
          ["Affiliate", "/affiliate"],
          ["Seller", "/seller"],
          ["Policies", "/policies"],
          ["Sitemap", "/sitemap"],
        ].map(([title, url]) => (
          <li key={url} className="mb-1">
            <Link
              to={url}
              className="px-24 inline-block border-l-2 border-l-[#1363DF] w-full hover:border-l-[#47B5FF]"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <p className="col-span-12 text-center text-[#0B212F] bg-[#47B5FF] p-1">
        &copy; Eedriz_ (2023)
      </p>
    </footer>
  );
};

export default Footer;
