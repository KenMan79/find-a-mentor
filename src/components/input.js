import React from "react";

import "./input.css";

const Input = ({ label, id }) => (
  <div className="input">
    <label for={id}>{label}</label>
    <input type="text" />
  </div>
);

export default Input;
