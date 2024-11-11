import React, { useEffect, useRef, useState } from "react";
import Overlay from "../components/Overlay";
import UserIcon from "../components/UserIcon";
import Input from "../components/Input";
import { validateEmail } from "../utils/regex";
import { scrollDown, scrollToRef, useOnScreen } from "../utils/scrolling";
import arrowDownIcon from "../images/arrow-down-circle.svg";
import arrowUpIcon from "../images/arrow-up-circle.svg";
import menuIcon from "../images/menu.svg";
import dogImg from "../images/dog.jpg";
import downIcon from "../images/down.svg";
import editIcon from "../images/edit.svg";
import upIcon from "../images/up.svg";

const contactList = [
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There",
    status: "online",
  },
  {
    email: "email@mail.com",
    name: "User 45g43g45g45g45g45g45g45",
    msg: "Hello There Hello There",
    status: "away",
  },
  {
    email: "email@mail.com",
    name: "User Blg4g45g54g45g45gah",
    msg: "Hello There Hello There Hello There Hello There Hello There",
    status: "blocked",
  },
  {
    email: "email@mail.com",
    name: "User B54g245glah",
    msg: "Hello There",
    status: "online",
  },
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There Hello There Hello There Hello There Hello There Hello There",
    status: "busy",
  },
  {
    email: "email@mail.com",
    name: "User Bl54g45gah",
    msg: "Hello There Hello There Hello There Hello There",
    status: "offline",
  },
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There Hello There",
    status: "inactive",
  },
  {
    email: "email@mail.com",
    name: "User B54g45gah",
    msg: "Hello There",
    status: "online",
  },
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There",
    status: "online",
  },
  {
    email: "email@mail.com",
    name: "User 45g43g45g45g45g45g45g45",
    msg: "Hello There Hello There",
    status: "away",
  },
  {
    email: "email@mail.com",
    name: "User Blg4g45g54g45g45gah",
    msg: "Hello There Hello There Hello There Hello There Hello There",
    status: "blocked",
  },
  { name: "User B54g245glah", msg: "Hello There", status: "online" },
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There Hello There Hello There Hello There Hello There Hello There",
    status: "busy",
  },
  {
    email: "email@mail.com",
    name: "User Bl54g45gah",
    msg: "Hello There Hello There Hello There Hello There",
    status: "offline",
  },
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There Hello There",
    status: "inactive",
  },
  {
    email: "email@mail.com",
    name: "User B54g45gah",
    msg: "Hello There",
    status: "online",
  },
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There Hello There",
    status: "inactive",
  },
  {
    email: "email@mail.com",
    name: "User B54g45gah",
    msg: "Hello There",
    status: "online",
  },
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There",
    status: "online",
  },
  {
    email: "email@mail.com",
    name: "User 45g43g45g45g45g45g45g45",
    msg: "Hello There Hello There",
    status: "away",
  },
  {
    email: "email@mail.com",
    name: "User Blg4g45g54g45g45gah",
    msg: "Hello There Hello There Hello There Hello There Hello There",
    status: "blocked",
  },
  {
    email: "email@mail.com",
    name: "User B54g245glah",
    msg: "Hello There",
    status: "online",
  },
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There Hello There Hello There Hello There Hello There Hello There",
    status: "busy",
  },
  {
    email: "email@mail.com",
    name: "User Bl54g45gah",
    msg: "Hello There Hello There Hello There Hello There",
    status: "offline",
  },
  {
    email: "email@mail.com",
    name: "User Blah",
    msg: "Hello There Hello There",
    status: "inactive",
  },
  {
    email: "email@mail.com",
    name: "User B54g45gah",
    msg: "Hello There",
    status: "online",
  },
];

/**
 
 */

const ContactTemplate = ({ contact, contactKey }) => {
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

const Main = () => {
  //const [isHeadSm, setIsHeadSm] = useState(false);
  const [contacts, setContacts] = useState(contactList);
  const [displayMsg, setDisplayMsg] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("Display Name");
  const [showInvite, setShowInvite] = useState(false);
  const [showEditMsg, setShowEditMsg] = useState(false);
  const [showEditName, setShowEditName] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showStatOptions, setShowStatOptions] = useState(false);
  const [status, setStatus] = useState("Offline");
  const [isScrollable, setIsScrollable] = useState(false);

  // to show scrollable
  const refContactFirst = useRef(null);
  const refContactLast = useRef(null);
  const refContacts = useRef(null);

  const isLastVisible = useOnScreen(refContactLast);

  //setHeight(ref.current.clientHeight)

  const stats = ["offline", "online", "away", "busy"];

  const handleEditName = () => {
    setShowEditName(false);
  };

  const handleEditMsg = () => {
    setShowEditMsg(false);
  };

  const sendInvite = () => {
    let newContacts = contacts;
    newContacts.unshift({
      email: email,
      name: "",
      msg: "",
      status: "invited",
    });
    setContacts(newContacts);
    setShowInvite(false);
  };

  useEffect(() => {
    // Check if there is overflow
    const contactsContHeight = parseInt(refContacts?.current?.clientHeight);

    const contactsRefHeight = parseInt(
      refContactFirst?.current?.clientHeight * contacts.length * contacts.length
    );
    if (contactsRefHeight > contactsContHeight) {
      setIsScrollable(true);
    }
    console.log(
      "contactsRefHeight: " +
        contactsRefHeight +
        " contactsContHeight: " +
        contactsContHeight
    );
  }, [refContacts, refContactFirst, contacts]);

  return (
    <div className="main">
      <Overlay
        hide={() => {
          setShowInvite(false);
        }}
        show={showInvite}
      >
        <div className="main__overlay">
          <h3 className="main__overlay-title">Send Request</h3>
          <Input
            value={email}
            onChange={setEmail}
            placeholder={"Enter contact email"}
            type={"email"}
          />
          <button
            className="btn --frame --mt-1"
            disabled={!validateEmail(email)}
            onClick={() => sendInvite()}
          >
            Invite
          </button>
        </div>
      </Overlay>
      <div className="main__frame">
        {/** frame header */}
        <div className="main__frame-inner">
          <div className="main__frame-title">
            <UserIcon type="two" /> <h1>MSN Messenger</h1>
          </div>
          <div className="main__frame-options">
            <img
              alt="menu"
              onClick={() => setShowMenu(!showMenu)}
              src={menuIcon}
            />
            {showMenu && (
              <div className="main__frame-menu">
                <div className="main__frame-menu-opt">Logout</div>
              </div>
            )}
          </div>
        </div>
        {/** content inside frame */}
        <div className="main__content">
          <div className="main__head">
            <div className="main__head-body">
              <div className="prof-img">
                <img alt="icon" className="" src={dogImg} />
              </div>
              <div className="main__head-info">
                <div className="main__head-name">
                  {showEditName ? (
                    <Input
                      className="main__input"
                      type="emoji"
                      value={displayName}
                      onChange={setDisplayName}
                      onEnter={handleEditName}
                    />
                  ) : (
                    <>
                      <span>{displayName || "No name"}</span>
                      <span onClick={() => setShowEditName(!showEditName)}>
                        <img alt="edit" className="main__edit" src={editIcon} />
                      </span>
                    </>
                  )}
                  <div className="main__head-status">
                    <span onClick={() => setShowStatOptions(!showStatOptions)}>
                      <span className="--mx-half --capitalize">({status})</span>
                      {showStatOptions ? (
                        <img alt="min" className="main__arrow" src={upIcon} />
                      ) : (
                        <img alt="min" className="main__arrow" src={downIcon} />
                      )}
                    </span>
                    {showStatOptions && (
                      <div className="main__head-stats">
                        {stats.map((stat, i) => (
                          <span
                            key={i}
                            onClick={() => {
                              setStatus(stat);
                              setShowStatOptions(false);
                            }}
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="main__head-msg">
                  {showEditMsg ? (
                    <Input
                      className="main__input"
                      type="emoji"
                      value={displayMsg}
                      onChange={setDisplayMsg}
                      onEnter={handleEditMsg}
                    />
                  ) : (
                    <>
                      <span
                        className="main__msg"
                        onClick={() => setShowEditMsg(!showEditMsg)}
                      >
                        {displayMsg || "<Enter a personal message>"}
                      </span>
                      {displayMsg && (
                        <span onClick={() => setShowEditMsg(!showEditMsg)}>
                          <img
                            alt="edit"
                            className="main__edit"
                            src={editIcon}
                          />
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="main__add" onClick={() => setShowInvite(true)}>
            <UserIcon type="add" />
            <div className="main__add-msg">Add a Contact</div>
          </div>

          <div className="main__contacts" ref={refContacts}>
            {contacts.map((contact, i) => {
              return i === 0 ? (
                <span ref={refContactFirst} key={i}>
                  <ContactTemplate contact={contact} />
                </span>
              ) : i === contacts.length - 1 ? (
                <span ref={refContactLast} key={i}>
                  <ContactTemplate contact={contact} />
                </span>
              ) : (
                <span key={i}>
                  <ContactTemplate contact={contact} contactKey={i} />
                </span>
              );
            })}
          </div>
          <span className="main__scroll">
            {isScrollable && isLastVisible && (
              <span
                className="btn --circle --white --up"
                onClick={() => scrollToRef(refContactFirst)}
              >
                <img alt="up" src={arrowUpIcon} />
              </span>
            )}
          </span>
          <div className="main__ads">
            <span className="main__ad-text">ad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
