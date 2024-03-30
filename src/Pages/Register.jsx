import React from "react";

function Register() {
  return (
    <div>
      <form action="#" method="post">
      {[
        { name: "firstName", type: "text", label: "First Name" },
        { name: "lastName", type: "text", label: "Last Name" },
        { name: "email", type: "email", label: "Email" },
        { name: "phone", type: "tel", label: "Phone Number" },
      ].map((input) => (
        <Input key={input.name} {...input} />
      ))}
      <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
