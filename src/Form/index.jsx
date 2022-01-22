import React from "react";
import "./index.css";

const Form = () => {
  return (
    <div>
      <div className="row">
        <input type="text" placeholder="First Name*" />
        <input type="text" placeholder="Last Name" />
      </div>

      <div className="row">
        <input type="email" placeholder="Email" />
      </div>

      <button type="submit">Submit</button>
    </div>
  );
};

export default Form;
