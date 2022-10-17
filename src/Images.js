import React from "react";
import Image from "./Image";

export default function Images({images, onDelete}) {
  return (images.map((image, i) => <Image image={image} key={i} index={i} onDelete={onDelete} />
  ))
};