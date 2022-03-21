import React from "react";

export const GifGridItem = ({ id, title, img }) => {
  console.log();
  return (
    <div className="card animate__animated animate__slideInLeft">
      <img className="card-img" src={img} alt={title} />
      <p className="card-title">{title}</p>
    </div>
  );
};
