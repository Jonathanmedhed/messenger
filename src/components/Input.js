import React from "react";
import InputEmoji from "react-input-emoji";

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
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </span>
  );
};

export default Input;
