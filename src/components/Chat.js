import React, { useState } from "react";
import FrameMsn from "./FrameMsn";
import Input from "./Input";
import greenIcon from "../images/user-green.webp";

const Chat = ({ me, user, isActive }) => {
  const [message, setMessage] = useState("");
  return (
    <div className={`chat ${!isActive ? "--hide" : ""}`}>
      <FrameMsn title={user.name}>
        <div className="chat__cont">
          <div className="chat__top">
            <div className="chat__msgs">
              {user?.msgs.map((msg, i) => (
                <div className="chat__msg" index={i}>
                  <div className="chat__msg-user">
                    {me.name === msg.user.name ? "Me" : msg.user.name}:
                  </div>
                  <div className="chat__msg-inner">{msg.msg}</div>
                  <div className="chat__msg-inner">{msg.time}</div>
                </div>
              ))}
            </div>
            <img
              alt="contact-img"
              className="chat__img-top"
              src={me.img || greenIcon}
            />
          </div>
          <div className="chat__bottom">
            <div className="chat__form">
              <Input
                value={message}
                onChange={setMessage}
                placeholder={"Enter message..."}
                type={"emoji"}
              />
            </div>
            <img
              alt="contact-img"
              className="chat__img-top"
              src={user.img || greenIcon}
            />
          </div>
        </div>
      </FrameMsn>
    </div>
  );
};

export default Chat;
