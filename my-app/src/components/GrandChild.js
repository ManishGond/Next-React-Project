import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const GrandChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
    </div>
  );
};

export default GrandChild;
