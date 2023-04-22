import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-300 absolute bottom-0 w-screen pt-2 grid grid-cols-12">
      <div className="grid grid-cols-1 place-items-center col-span-12 m-2 lg:col-span-4">
        <h1 className="col-span-1">Brand Name</h1>
        <p className="col-span-1">tagline</p>
      </div>
      <ul className="col-span-12 m-2 md:col-span-6 lg:col-span-4">
        <h6 className="border-l-2 border-amber-500 pl-2 mb-2">Menu:</h6>
        {[
          ["Home", "/"],
          ["Market", "/market"],
          ["Cart", "/cart"],
          ["Settings", "/settings"],
        ].map(([title, url]) => (
          <li className="mb-1">
            <a href={url} className="px-24 inline-block border w-full rounded">{title}</a>
          </li>
        ))}
      </ul>
      <ul className="col-span-12 m-2 md:col-span-6 lg:col-span-4">
        <h6 className="border-l-2 border-amber-500 pl-2 mb-2"> Career:</h6>
        {[
          ["Affiliate", "/affiliate"],
          ["Seller", "/seller"],
          ["Policies", "/policies"],
          ["Sitemap", "/sitemap"],
        ].map(([title, url]) => (
          <li className="mb-1">
            <a href={url} className="px-24 inline-block border w-full rounded">{title}</a>
          </li>
        ))}
      </ul>

      <p className="col-span-12 text-center bg-slate-400 p-1">
        &copy; Eedriz_ (2023)
      </p>
    </footer>
  );
};

export default Footer;
