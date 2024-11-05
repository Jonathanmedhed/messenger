import React from "react";
import InputEmoji from "react-input-emoji";
import { validateEmail } from "../utils/regex";

const Input = ({
  className,
  type,
  placeholder,
  value,
  onChange,
  onEnter,
  cleanOnEnter,
}) => {
  return (
    <span className={`input ${className || ""}`}>
      {type === "emoji" ? (
        <InputEmoji
          value={value}
          onChange={onChange}
          cleanOnEnter={cleanOnEnter}
          onEnter={onEnter}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={`${className || ""}`}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}
      {type === "email" && value && !validateEmail(value) && (
        <div className="input__error">invalid email</div>
      )}
    </span>
  );
};

export default Input;
