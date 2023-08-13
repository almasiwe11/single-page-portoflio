import React from "react";
import Button from "../../elements/Button";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#030303" d="M0 0h64v64H0z" />
            <circle stroke="#FFF7F0" strokeWidth="4" cx="50%" cy="50%" r="10" />
          </g>
        </svg>
      </div>

      <Button
        background={"#030303"}
        color={"#fff7f0"}
        text={"Free Consultation"}
      />
    </div>
  );
};

export default Header;
