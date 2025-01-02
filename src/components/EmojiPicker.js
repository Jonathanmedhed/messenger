import React, { useEffect, useRef, useState } from "react";

const EmojiPicker = ({ onSelect, emojiData }) => {
  const [visibleCategories, setVisibleCategories] = useState([]);
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCategories((prev) => [
            ...new Set([...prev, entry.target.dataset.category]),
          ]);
        }
      });
    });
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".emoji-picker__list");
    elements.forEach((element) => observer.current.observe(element));
    return () => {
      elements.forEach((element) => observer.current.unobserve(element));
    };
  }, []);

  return (
    <div className="emoji-picker">
      {emojiData.map((category, i) => (
        <div
          key={i}
          className="emoji-picker__list"
          data-category={category.label}
        >
          {/**<h3>{category.label}</h3> */}
          <div className="emoji-picker__category">
            {visibleCategories.includes(category.label) &&
              category.list.map((emoji, j) => (
                <div
                  key={j}
                  onClick={() => onSelect(emoji)}
                  className="emoji-picker__emoji"
                >
                  {emoji}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default EmojiPicker;
