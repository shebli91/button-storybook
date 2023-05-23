import React from "react";
import "./button.css";

const Button = ({ variant, size, color, children }) => {
  let className = "button";

  if (variant === "primary") {
    className += " primary";
  } else if (variant === "secondary") {
    className += " secondary";
  } else if (variant === "text") {
    className += " text";
  }

  if (size === "small") {
    className += " small";
  } else if (size === "medium") {
    className += " medium";
  } else if (size === "large") {
    className += " large";
  }

  return (
    <button className={className} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};

export { Button };
