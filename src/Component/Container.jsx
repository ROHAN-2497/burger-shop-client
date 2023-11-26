import React from "react";

const Container = ({ children }) => {
  return React.createElement(
    "div",
    { className: " max-w-screen-xl mx-auto" },
    children
  );
};

export default Container;
