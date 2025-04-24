import React from "react";
import hoc from "./hoc";

const hw = ({ name }) => {
  return <h1> Hello, {name}</h1>;
};

const EnhancedGreet = hoc(hw);

export default EnhancedGreet;
