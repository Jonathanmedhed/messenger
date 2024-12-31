import React from "react";
import UserIcon from "./UserIcon";
import Dropdown from "./Dropdown";

const FrameMsn = ({ children, msg, title, status }) => {
  return (
    <div className="main__frame">
      {/** frame header */}
      <div className="main__frame-inner">
        <div className="main__frame-title">
          <UserIcon type={status ? status : "two"} /> <h1>{title}</h1>{" "}
          <p>{msg}</p>
        </div>
        <Dropdown
          options={[{ label: "Logout", action: () => console.log("Logout") }]}
        />
      </div>
      {children}
    </div>
  );
};

export default FrameMsn;
