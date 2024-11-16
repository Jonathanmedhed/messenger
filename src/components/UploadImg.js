import React from "react";

const UploadImg = ({ setImg, children }) => {
  const handleChange = (e) => {
    console.log(e.target.files);
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="upload">
      <div className="upload__input">
        <input type="file" onChange={handleChange} />
      </div>
      <div className="upload__content">{children}</div>
    </div>
  );
};

export default UploadImg;
