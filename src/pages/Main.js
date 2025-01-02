import React, { useEffect, useRef, useState } from "react";
// Components
import Chat from "../components/Chat";
import Contact from "../components/Contact";
import Input from "../components/Input";
import Overlay from "../components/Overlay";
import UserIcon from "../components/UserIcon";
// Functions
import { createUsers } from "../utils/functions";
import { validateEmail } from "../utils/regex";
import { scrollToRef, useOnScreen } from "../utils/scrolling";
// Icons
import arrowDownIcon from "../images/arrow-down-circle.svg";
import arrowUpIcon from "../images/arrow-up-circle.svg";
import dogImg from "../images/dog.jpg";
import downIcon from "../images/down.svg";
import editIcon from "../images/edit.svg";
import upIcon from "../images/up.svg";
import FrameMsn from "../components/FrameMsn";
// Imgs For Contacts
import personImg1 from "../images/person1.jpg";
import personImg2 from "../images/person2.jpg";
import personImg3 from "../images/person3.jpg";
import personImg4 from "../images/person4.jpg";
import personImg5 from "../images/person5.jpg";
import landscapeImg1 from "../images/landscape1.jpg";
import landscapeImg2 from "../images/landscape2.jpg";
import landscapeImg3 from "../images/landscape3.jpg";
import landscapeImg4 from "../images/landscape4.jpg";
import landscapeImg5 from "../images/landscape5.jpg";
import partyImg1 from "../images/party1.jpg";
import partyImg2 from "../images/party2.jpg";
import partyImg3 from "../images/party3.jpg";
import partyImg4 from "../images/party4.jpg";
import partyImg5 from "../images/party5.jpg";
import UploadImg from "../components/UploadImg";

const pics = [
  personImg1,
  personImg2,
  personImg3,
  personImg4,
  personImg5,
  landscapeImg1,
  landscapeImg2,
  landscapeImg3,
  landscapeImg4,
  landscapeImg5,
  partyImg1,
  partyImg2,
  partyImg3,
  partyImg4,
  partyImg5,
];

const user = {
  email: `MarkJones@gmail.com`,
  img: personImg2,
  msg: "Having a nice day!",
  name: "Mark Jones",
  status: "online",
};

const Main = () => {
  const createdUsers = createUsers(pics);

  //const [isHeadSm, setIsHeadSm] = useState(false);
  const [chats, setChats] = useState([
    {
      contact: createdUsers[1],
      chat: [
        {
          text: "Hello, how you been? :)",
          contact: createdUsers[1].name,
        },
      ],
    },
  ]);
  createdUsers[0].msg =
    "Hello! :)   kkkkkkkkkkiolhiugh          iogniungoiuoig          iogniygyugougugfnui6fyirndiyntf6ngghiung   nuyfui6figuigf lihiuhiygiyngyunguyngnyugmuykagkuygymagmuuioigogoighhhasdkjlghaklju hasidhfalkuhsiluhydfsduhfsuihfsuidhfuisdhfiusdhfuishfspfdh sdihfiusdhgfisuhgsughsdghsdguhsdguhsda;ughsdguhsdlikgjbhdaslguhsdlgubhadsklgbasdkljadsnh uhsdihgfsdiughsduh sduhg dsuhgls dahgl shdliguhsusdhgsduhglsduh iusdfdfghsduhg iusdhgopsduhgi";
  createdUsers[0].msgs = [
    {
      user: createdUsers[0],
      msg: "Hello! :)",
      time: new Date(),
    },
    {
      user: user,
      msg: "Hey! How are you? :)  Hey! How are you? :) Hey! How are you? :) Hey! How are you? :) Hey! How are you? :)",
      time: new Date(),
    },
  ];
  //const [activeChat, setActiveChat] = useState([]);
  const [contacts, setContacts] = useState(createdUsers);
  const [displayMsg, setDisplayMsg] = useState(user.msg);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState(user.name);
  const [profileImg, setProfileImg] = useState(user.img || dogImg);
  const [showInvite, setShowInvite] = useState(false);
  const [showEditMsg, setShowEditMsg] = useState(false);
  const [showEditName, setShowEditName] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showStatOptions, setShowStatOptions] = useState(false);
  const [status, setStatus] = useState(user.status);
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
    console.log("msg: " + displayMsg);
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
  }, [refContacts, refContactFirst, contacts]);

  return (
    <div className="main">
      {/** Invite user overlay */}
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
      {/** Chat overlay */}
      <Overlay
        hide={() => {
          setShowInvite(false);
        }}
        show={true}
      >
        <Chat me={user} user={contacts?.[0]} isActive={true} />
      </Overlay>
      <FrameMsn
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        title="MSN Messenger"
      >
        {/** content inside frame */}
        <div className="main__content">
          <div className="main__head">
            <div className="main__head-body">
              <div className="prof-img">
                <UploadImg setImg={setProfileImg}>
                  <img alt="icon" className="" src={profileImg} />
                </UploadImg>
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
                        onClick={() => {
                          setShowEditMsg(!showEditMsg);
                          console.log(displayMsg);
                        }}
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
                  <Contact contact={contact} />
                </span>
              ) : i === contacts.length - 1 ? (
                <span ref={refContactLast} key={i}>
                  <Contact contact={contact} />
                </span>
              ) : (
                <span key={i}>
                  <Contact contact={contact} contactKey={i} />
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
            {isScrollable && !isLastVisible && (
              <span
                className="btn --circle --white --down"
                onClick={() => scrollToRef(refContactLast)}
              >
                <img alt="down" src={arrowDownIcon} />
              </span>
            )}
          </span>
          <div className="main__ads">
            <span className="main__ad-text">ad</span>
          </div>
        </div>
      </FrameMsn>
    </div>
  );
};

export default Main;
