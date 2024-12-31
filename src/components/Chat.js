import React, { useState } from "react";
import FrameMsn from "./FrameMsn";
import Input from "./Input";
import greenIcon from "../images/user-green.webp";

const Chat = ({ me, user, isActive }) => {
  const [message, setMessage] = useState("");
  return (
    <div className={`chat ${!isActive ? "--hide" : ""}`}>
      <FrameMsn title={user.name} msg={user.msg} status={user.status}>
        <div className="chat__cont">
          <div className="chat__top">
            <div className="chat__msgs">
              {user?.msgs.map((msg, i) => (
                <div className="chat__msg" index={i}>
                  <div className="chat__msg-user">
                    {me.name === msg.user.name ? "Me" : msg.user.name}:
                  </div>
                  <div className="chat__msg-text">{msg.msg}</div>
                  <div className="chat__msg-time">{msg.time} ago</div>
                </div>
              ))}
            </div>
            <div className="chat__img">
              <img alt="contact-img" src={me.img || greenIcon} />
            </div>
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
            <div className="chat__img">
              <img alt="contact-img" src={user.img || greenIcon} />
            </div>
          </div>
        </div>
      </FrameMsn>
    </div>
  );
};

export default Chat;
