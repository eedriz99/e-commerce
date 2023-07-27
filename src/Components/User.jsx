import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  // {https://restcountries.com/v3.1/all}
  const [countries, setCountries] = useState([]);

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
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name"
        />
        <input type="tel" name="phone" id="phone" placeholder="Phone number" />
        <input type="text" name="address" id="address" placeholder="Address" />
        <input type="text" name="town" id="town" placeholder="Town/City" />
        <input type="text" name="state" id="state" placeholder="State/County" />
        <select name="country" id="country">
          {countries.map((country) => (
            <option value={country}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default User;
