import React from "react";

export default function Image({image, index, onDelete}) {
  return (
    <div className="image-container">
      <img src={image} alt="preview" className="image" />
      <i className="fa fa-times-circle close" onClick={() => onDelete(index)} />
    </div>
  );
}