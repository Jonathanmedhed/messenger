import React from "react";
import addIcon from "../images/add.svg";
import greenIcon from "../images/user-green.webp";
import yellowIcon from "../images/user-yellow.webp";
import blueIcon from "../images/user-blue.webp";
import redIcon from "../images/user-red.webp";
import twoIcon from "../images/user-two.webp";
import awayIcon from "../images/user-away.webp";
import blockedIcon from "../images/user-blocked.webp";
import notIcon from "../images/user-not.webp";

const UserIcon = ({ type, className }) => {
  let icon;

  switch (type) {
    case "online":
      icon = greenIcon;
      break;
    case "inactive":
      icon = yellowIcon;
      break;
    case "blue":
      icon = blueIcon;
      break;
    case "offline":
      icon = redIcon;
      break;
    case "two":
      icon = twoIcon;
      break;
    case "away":
      icon = awayIcon;
      break;
    case "blocked":
      icon = blockedIcon;
      break;
    case "busy":
      icon = notIcon;
      break;

    default:
      break;
  }
  return (
    <div className={`user-icon ${className || "--default"} `}>
      {type === "add" ? (
        <div className="user-icon__add">
          <img
            alt="user-icon"
            className={`user-icon__default'}`}
            src={blueIcon}
          />
          <img alt="add-icon" className="user-icon__plus" src={addIcon} />
        </div>
      ) : (
        <img
          alt="user-icon"
          className={`user-icon__default --${type}`}
          src={icon}
        />
      )}
    </div>
  );
};

export default UserIcon;
