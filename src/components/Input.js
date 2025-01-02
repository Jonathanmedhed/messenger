import React, { useState, Suspense, useEffect } from "react";
import { validateEmail } from "../utils/regex";
import { allEmojis } from "../utils/emojis";
const EmojiPicker = React.lazy(() => import("./EmojiPicker"));

const Input = ({ className, type, placeholder, value, onChange, onEnter }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [emojiData, setEmojiData] = useState([]);

  useEffect(() => {
    // Preload emoji data
    setEmojiData(allEmojis);
  }, []);

  const handleEmojiSelect = (emoji) => {
    onChange(value + emoji);
    setShowEmojiPicker(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <div className={`input ${className || ""}`}>
      <input
        className={`${className || ""}`}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
        onKeyDown={handleKeyPress}
      />
      {type === "emoji" && (
        <div className="input__emoji-picker">
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😊
          </button>
          <div className={`input__emojies ${showEmojiPicker ? "--show" : ""}`}>
            <Suspense fallback={<div>Loading...</div>}>
              <EmojiPicker onSelect={handleEmojiSelect} emojiData={emojiData} />
            </Suspense>
          </div>
        </div>
      )}
      {type === "email" && value && !validateEmail(value) && (
        <div className="input__error">invalid email</div>
      )}
    </div>
  );
};

export default Input;
