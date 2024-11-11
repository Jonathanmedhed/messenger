import React from "react";
import UserIcon from "./UserIcon";

const Contact = ({ contact, contactKey }) => {
  return (
    <div className="main__contact" key={contactKey}>
      <div className="main__contact-stat">
        <UserIcon type={contact.status} />
        {contact.status !== "online" && <span>({contact.status})</span>}
      </div>
      <div className="main__contact-info">
        <div className="main__contact-name">
          {contact.name || contact.email}
        </div>
        <div className="main__contact-msg">
          {contact.msg && <span className="--mr-half">-</span>}
          {contact.msg}
        </div>
      </div>
    </div>
  );
};

export default Contact;
