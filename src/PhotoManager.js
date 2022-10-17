import React, {useRef, useState} from "react";
import "./main.css";
import "./fa/css/font-awesome.min.css";
import Images from "./Images";
import {fileToDataUrl} from "./LoadFile";

export default function PhotoManager() {
  const [images, setImages] = useState([]);

  const inputFileRef = useRef();

  const handleUploadClick = (e) => {
    inputFileRef.current.click();
  };
  
  const onFileChange = async (e) => {
      const files = [...e.target.files];
      const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
      setImages([...images, ...urls]);
  }

  const handleDelete = (index) => {
    setImages([...images].filter((_, i) => i !== index));
  };

  return (
    <form>
      <div className="photomanager">
        <div className="selector" onClick={handleUploadClick}>
            <span>Click to select</span>
            <input
                type="file"
                className="upload"
                ref={inputFileRef}
                onChange={onFileChange}
                accept="image/*"
                multiple
                />
        </div>
        <div className="list">
          <Images images={images} onDelete={handleDelete} />
        </div>
      </div>
    </form>
  );
};