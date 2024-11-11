import React from "react";
import menuIcon from "../images/menu.svg";

const Dropdown = ({ options, show, setShow }) => {
  return (
    <div className="dropdown">
      <img alt="menu" onClick={() => setShow(!show)} src={menuIcon} />
      {show && (
        <div className="dropdown-list">
          {options.map((option) => (
            <div className="dropdown-list-opt" onClick={option.action}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
