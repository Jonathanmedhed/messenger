import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import FrameMsn from "./FrameMsn";
import Input from "./Input";
import greenIcon from "../images/user-green.webp";

const Chat = ({ me, user, isActive }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(user.msgs || []);

  const isUserMsg = (msg) => {
    return me.name === msg.user.name;
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        user: me,
        msg: message,
        time: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className={`chat ${!isActive ? "--hide" : ""}`}>
      <FrameMsn title={user.name} msg={user.msg} status={user.status}>
        <div className="chat__cont">
          <div className="chat__top">
            <div className="chat__msgs">
              {messages.map((msg, i) => (
                <div
                  className={`chat__msg ${isUserMsg(msg) ? "--me" : ""}`}
                  key={i}
                >
                  <div className="chat__msg-user">
                    {isUserMsg(msg) ? "You" : msg.user.name}:
                    <span className="chat__msg-time">
                      {formatDistanceToNow(msg.time)}
                    </span>
                  </div>
                  <div className="chat__msg-text">{msg.msg}</div>
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
                onEnter={handleSendMessage}
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
