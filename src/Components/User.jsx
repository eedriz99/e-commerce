import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "./Input";

const User = () => {
  // {https://restcountries.com/v3.1/all}
  const [countries, setCountries] = useState("Select Country");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log("country fetched");
        // setCountries(res.data);
        console.log(res.data.id.altspellings);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>My Profile</h1>
      <div>
        {[
          { name: "firstName", type: "text", label: "First Name" },
          { name: "lastName", type: "text", label: "Last Name" },
          { name: "email", type: "email", label: "Email" },
          { name: "phone", type: "tel", label: "Phone Number" },

          // {}
        ].map((input) => (
          <Input key={input.name} {...input} />
        ))}
      </div>
    </div>
  );
};

export default User;
