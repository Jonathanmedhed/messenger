import React, { useState } from "react";
import menuIcon from "../images/menu.svg";

const Dropdown = ({ options }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="dropdown">
      <img alt="menu" onClick={() => setShow(!show)} src={menuIcon} />
      <div className={`dropdown-list ${show ? "" : "--hide"}`}>
        {options.map((option, i) => (
          <div className="dropdown-list-opt" key={i} onClick={option.action}>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
