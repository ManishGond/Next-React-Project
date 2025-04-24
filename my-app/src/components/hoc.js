import React from "react";

const hoc = (WrappedComponent) => {
  return function EnhancedComponet(props) {
    console.log("Rendering");

    return <WrappedComponent {...props} />;
  };
};

export default hoc;
