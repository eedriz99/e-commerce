import React from "react";
import { Outlet, Link } from "react-router-dom";
import profilePicture from "../Images/eedriz_1.jpg";

const Profile = () => {
  return (
    <main className="grid grid-cols-12 gap-3 w-screen p-3">
      <aside className="col-span-3 border p-3 rounded">
        <img
          src={profilePicture}
          alt="Profile pictur"
          className="w-[200px] h-[200px] rounded-[50%] mx-auto my-2 mb-5 border-2"
        />

        <ul>
          {[
            ["Personal Information", "user"],
            ["Payment Information", "payment"],
          ].map(([title, url], index) => (
            <li key={index}>
              <Link to={`${url}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <section className="border col-span-9 rounded">
   
        <Outlet />
      </section>
    </main>
  );
};

export default Profile;
