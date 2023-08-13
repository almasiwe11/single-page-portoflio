import React from "react";

const Button = ({ text, color, background }) => {
  const btnStyle = {
    color: color,
    backgroundColor: background,
  };
  return (
    <button className="btn" style={btnStyle}>
      {text}
    </button>
  );
};

export default Button;
